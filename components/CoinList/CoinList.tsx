import Coin from "../Coin/Coin";

export default function CoinList({ filteredCoins }: any) {
  return (
    <>
      {filteredCoins.map((coin: any) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            id={coin.id}
            price_change_24h={coin.price_change_percentage_24h}
            market_cap_change_24h={coin.total_volume}
            image={coin.image}
            current_price={coin.current_price}
          />
        );
      })}
    </>
  );
}
