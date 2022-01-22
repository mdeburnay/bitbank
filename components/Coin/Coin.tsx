import Link from "next/link";
import styles from "./Coin.module.css";

interface ICoinProps {
  name: string;
  current_price: number;
  market_cap_change_24h: number;
  image: string;
  price_change_24h: number;
  id: number;
}

const Coins = ({
  name,
  current_price,
  market_cap_change_24h,
  image,
  price_change_24h,
  id,
}: ICoinProps) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>£{current_price}</p>

              {price_change_24h < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {price_change_24h.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {price_change_24h.toFixed(2)}%
                </p>
              )}

              <p className={styles.coin_marketcap}>£{market_cap_change_24h}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
