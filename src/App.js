import { useEffect, useState } from 'react';
import './App.css';
import SearchCoin from './SearchCoin';
import TopCoins from './TopCoins';


const App = () => {

const [TopCoinsList , setTopCoinsList] = useState([]);
const [CoinsList , setCoinsList] = useState([]);
const [loading, setLoading] = useState(true);
const [rank, setRank] = useState('')
const [symbol, setSymbol] = useState('')
const [name, setName] = useState('')
const [priceUsd, setPriceUsd] = useState('')
const [marketCapUsd, setMarketCapUsd] = useState('')
const [supply, setSupply] = useState('')
const [maxSupply, setMaxSupply] = useState('')
const [changePercent, setChangePercent] = useState('')



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
    setCoinsList(coinsMap);
  };
  fetchCoinsData();
}, []);




const onSelect = async () => {
  const request = await fetch(
    'https://api.coincap.io/v2/assets/' + name
  );
  const data = await request.json();
  setRank(data.data.rank)
  setSymbol(data.data.symbol)
  setName(data.data.name)
  setSupply(data.data.supply)
  setMaxSupply(data.data.maxSupply)
  setMarketCapUsd(data.data.marketCapUsd)
  setPriceUsd(data.data.priceUsd)
  setChangePercent(data.data.changePercent24Hr)
  console.log(data.data)
};

  return (
    <>
    <div className="row">
      <div className="col-6">
         <TopCoins TopCoinsList = {TopCoinsList}/>
      </div>
      <div className="col-6">
      <h3 className='text-center m-5 shadow p-2 mb-2 bg-body rounded' >Search about a specific coin</h3>

<div className="card text-center p-2 m-5" weight="50px" height="50px">
<div className="input-group p-2 ">
  <input type="search"  value={name.toLowerCase()} onChange={(name) => setName(name.target.value)} className="form-control rounded" placeholder="Enter the coin name" aria-label="Search" aria-describedby="search-addon" />
  <button onClick={onSelect} className="btn btn-primary">search</button>
</div>
<SearchCoin name={name} price={priceUsd}
          symbol={symbol} rank={rank} changePercent={changePercent} marketCapUsd={marketCapUsd} maxSupply={maxSupply} />
</div>
           </div>
</div>
    </>
  );
}

export default App;
