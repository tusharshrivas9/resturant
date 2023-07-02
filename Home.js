import React from 'react'
import "../App.css"

const Home = () => {  
  return (
    <>
    <header>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://bhagwaticookingclasses.com/wp-content/uploads/2021/08/south-indian-Cuisine.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Paper Plain Dosa</h5>
        <p>With Some Mint Chutney and Sambhar .</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breakfast_Tiffins/South_Indian_Medu_Vada_Sambar_with_Medu_Vada_Maker-8.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Medu Vada Special</h5>
        <p>Medu Vada is a popular South Indian breakfast snack of donut shaped lentil fritters that are fluffy, crispy, soft and delicious</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/free-photo/selection-indian-food-including-chicken-curry-other-spices_1340-23307.jpg?w=996&t=st=1680333227~exp=1680333827~hmac=fc7c33180f1fc1faf7649e383679d31bb22f11f9bb7b270be6dc73b2e622cb76" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Soups & Dal</h5>
        <p>Dal or Lentil is one of an integral part of indian cuisine</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</header>
<section className='about my-5'>
<div className="cointainer">
    <h1 className='name text-center'>About</h1>
<div className="row py-5">
  <div className="col-sm-12 col-md-6 col-lg-6 col-12 my-auto">
    <h4 className='name'>Here is the Paneer Naan ,Somasa Chech pea & Mix veg</h4>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 col-12">
  <img src="https://img.freepik.com/free-photo/delicious-indian-food-tray_23-2148723505.jpg?w=826&t=st=1680359738~exp=1680360338~hmac=b380b9c4c89a7cdb8ff00a2369b02f75f2fdd42e347acfee6b2197089b4ec998" alt="" className='img-fluid img-thumbnail' />
  </div>
</div>
</div>

</section>
<section className='service  bg-light'>
 <div className="cointainer">
 <h1 className='name text-center my-5'>Services</h1>
 <div className="row text-center">
  <div className="col-sm-12 col-md-4 col-lg-4 col-12">
  <div className="card">
  <div className="card-body">
  <img src="https://img.freepik.com/premium-photo/dhokla-is-veg-food-snack-breakfast-item-from-indian-state-gujarat_466689-68643.jpg?w=996" alt="" className='img-fluid' />
    <h5 className="card-title">Special Item</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Order Now</a>
  </div>
</div>
  </div>
  <div className="col-sm-12 col-md-4 col-lg-4 col-12">
  <div className="card">
  <div className="card-body">
  <img src="https://img.freepik.com/premium-photo/aloo-tokri-chaat-potato-basket-stuffed-chat-katori-chat_466689-79787.jpg?w=996" alt="" className='img-fluid' />
    <h5 className="card-title">Special Item</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Order Now</a>
  </div>
</div>
  </div>
  <div className="col-sm-12 col-md-4 col-lg-4 col-12">
  <div className="card">
  <div className="card-body">
  <img src="https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35689.jpg?w=996" alt="" className='img-fluid' />
    <h5 className="card-title">Special Item</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Order Now</a>
  </div>
</div>
  </div>
 </div>
 </div>
</section>
    </>
  )
}

export default Home
