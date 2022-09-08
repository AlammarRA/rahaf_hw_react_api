
import { useEffect, useState } from 'react';


const SearchCoin = ({name, maxSupply, price, symbol, rank, changePercent ,marketCapUsd }) => {
  


  const [coin, setCoin] = useState('');

  const handleChange = input => {
    setCoin(input.target.value);
  };

const handleClick = () =>{
  console.log("clicked")

}





return (
    <>
    
    <div className="card-body" weight="50px">
    <h5 className="card-title"> rank : {rank}</h5>
    <p className="card-text">price : {price}</p>
    <p className="card-text">symbol : {symbol}</p>
    <p className="card-text">changePercent : {changePercent}</p>
    <p className="card-text">marketCapUsd : {marketCapUsd}</p>
    <p className="card-text">maxSupply : {maxSupply}</p>
    <p className="card-text">name : {name}</p>
  </div>
    
    
    </>
)
}


export default SearchCoin;