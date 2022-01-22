import "isomorphic-unfetch";
import React, { useState } from "react";
import Router, { withRouter } from "next/router";
import { SearchBar } from "../components/SearchBar/SearchBar";
import styles from "../styles/Home.module.css";
import Coins from "../components/Coin/Coin";
import { Button } from "../components/Button/Button";
import { TableHeader } from "../components/TableHeader/TableHeader";

const Home = (props: any) => {
  const [search, setSearch] = useState("");

  const allCoins = props.crypto.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: any) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.main}>
      <div className={styles.searchBarContainer}>
        <SearchBar />
      </div>
      <div className={styles.cryptoTable}>
        {props.crypto.map((coin: any, id: number) => {
          return <Coins key={id} {...coin} />;
        })}
      </div>
      <div className={styles.buttonContainer}>
        <Button page={props.page} type="prev" />
        <Button page={props.page} type="next" />
      </div>
    </div>
  );
};

//Fetching posts in get Intial Props to make the app seo friendly
Home.getInitialProps = async ({
  query: { page = 1, perPage = 50, currency = "gbp" },
}: any) => {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false`
  );
  const data = await res.json();
  console.log(data);

  return {
    crypto: data,
    page: parseInt(page),
    currency: currency,
  };
};

export default withRouter(Home);
