import "isomorphic-unfetch";
import React, { useState } from "react";
import { withRouter } from "next/router";
import { SearchBar } from "../components/SearchBar/SearchBar";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button/Button";
import CoinList from "../components/CoinList/CoinList";

const Home = (props: any) => {
  const [search, setSearch] = useState<string>("");

  const allCoins = props.crypto.filter((coin: any) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e: any) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <div className={styles.main}>
      <div className={styles.buttonContainer}>
        <Button page={props.page} type="prev" />
        <div className={styles.pageNum}>{props.page}</div>
        <Button page={props.page} type="next" />
      </div>
      <div className={styles.searchBarContainer}>
        <SearchBar onChange={handleChange} />
      </div>
      <div className={styles.cryptoTable}>
        <CoinList filteredCoins={allCoins} />
      </div>
      <div className={styles.buttonContainer}>
        <Button page={props.page} type="prev" />
        <div className={styles.pageNum}>{props.page}</div>
        <Button page={props.page} type="next" />
      </div>
    </div>
  );
};

//Fetching posts in get Intial Props to make the app seo friendly
Home.getInitialProps = async ({
  query: { page = 1, currency = "gbp" },
}: any) => {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
    );
    const data = await res.json();

    return {
      crypto: data,
      page: parseInt(page),
      currency: currency,
    };
  } catch (e) {
    console.log(e);
  }
};

export default withRouter(Home);
