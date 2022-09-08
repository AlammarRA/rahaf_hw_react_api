const SearchCoin = () => {
return (
    <>
    
      <h3 className='text-center m-5 shadow p-2 mb-2 bg-body rounded' >Search about a specific coin</h3>

    <div className="input-group p-5">
  <input type="search" className="form-control rounded" placeholder="Enter the coin name" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-primary">search</button>
</div>



<div className="card text-center p-5">
  <div className="bg-image hover-overlay ripple p-3" data-mdb-ripple-color="light">
    <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp" className="img-fluid"/>
    <a href="#!">
      <div className="mask" background-color="rgba(251, 251, 251, 0.15)"></div>
    </a>
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    
    
    </>
)
}


export default SearchCoin;