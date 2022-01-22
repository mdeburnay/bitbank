import styles from "./Coin.module.css";

const Coin = ({ coin }: any) => {
  return (
    <div className={styles.coin_page}>
      <div className={styles.coin_container}>
        <img
          src={coin.image.large}
          alt={coin.name}
          className={styles.coin_image}
        />
        <h1 className={styles.coin_name}>{coin.name}</h1>
        <p className={styles.coin_ticker}>{coin.symbol}</p>
        <p className={styles.coin_current}>
          {coin.market_data.current_price.usd}
        </p>
      </div>
    </div>
  );
};

export default Coin;

export async function getServerSideProps({ query }: any) {
  const { id } = query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
  `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
