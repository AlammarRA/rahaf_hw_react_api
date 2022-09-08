const TopCoins = ({TopCoinsList}) => {


    return (
        <>
        
  <h3 className='text-center m-5 shadow p-2 mb-2 bg-body rounded' >Top 10 of Coins</h3>


  <ul className="list-group ">
  <div  className="row col-cols-1 row-cols-md-5 g-4 mt-4 p-3 text-center">

    {   TopCoinsList.map((coins,index) => {
    return(
        <div key={index} className="col">
        <div key={index} className="card h-100">
        <img  src={coins.symbol} className="card-img-top mt-4" height="50px" weight="50px" alt="Coins Img" />
        <div className="card-body">
        <h5  className="card-title">{coins.rank}</h5>
        <h6  className="card-title">{coins.nameCoin}</h6>
        <p  className="card-text">
         Price : {coins.price}
        </p>
        </div>
        </div>
        </div>
    )
   }
)}
</div>
</ul>
        
        
      
        
        
        
        </>
    )

}





export default TopCoins;