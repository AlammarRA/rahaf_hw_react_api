import { useEffect, useState } from 'react';
import './App.css';
import SearchCoin from './SearchCoin';
import TopCoins from './TopCoins';


const App = () => {

const [TopCoinsList , setTopCoinsList] = useState([]);



useEffect(() => {
  const fetchCoinsData = async () => {
    const request = await fetch('https://api.coincap.io/v2/assets');
    const data = await request.json();
    
    const coinsMap = data.data.map((coins) => {
      return {
        id: coins.id,
        rank: coins.rank,
        nameCoin: coins.name,
        price: coins.priceUsd,
        symbol: "https://cryptoflash-icons-api.herokuapp.com/svg/color/" + (coins.symbol).toLowerCase(),
      };
    });
    const coinsTop = coinsMap.slice(0,10)
    setTopCoinsList(coinsTop);
  };
  fetchCoinsData();
}, []);



  return (
    <>
    <div className="row">
      <div className="col-6">
         <TopCoins TopCoinsList = {TopCoinsList}/>
      </div>
      <div className="col-6">
           <SearchCoin/>
           </div>
</div>
    </>
  );
}

export default App;
