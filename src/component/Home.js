import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="carousel slide" data-bs-ride="carousel" id="a">
 
 <div className="carousel-indicators">
  <button type="button" data-bs-target="#a" data-bs-slide-to="0" className="active"></button>
  <button type="button" data-bs-target="#a" data-bs-slide-to="1" ></button>
  <button type="button" data-bs-target="#a" data-bs-slide-to="2" ></button>
  <button type="button" data-bs-target="#a" data-bs-slide-to="3" ></button>
 </div>


 <div className="carousel-inner">
 <div className="carousel-item active" data-bs-interval="4000">

   <img src="https://app.firstfiddle.in/images/brand-banner/lotd.jpeg" className="w-100" alt="..."/>
   <div className="carousel-caption">
     <b>First slide label</b>
     <p>Some representative placeholder content for the first slide.</p>
   </div>
 </div>

 <div className="carousel-item" data-bs-interval="4000">

   <img src="https://app.firstfiddle.in/images/brand-banner/dragonflybanner.jpeg" className="w-100" alt="..."/>
 </div>

 <div className="carousel-item" data-bs-interval="4000">

   <img src="https://app.firstfiddle.in/images/brand-banner/plum.jpeg" className="w-100" alt="..."/>
 </div>2
 <div className="carousel-item" data-bs-interval="4000">

   <img src="https://app.firstfiddle.in/images/brand-banner/plum.jpeg" className="w-100" alt="..."/>
 </div>
 </div>

<button className="carousel-control-prev" type="button" data-bs-target="#a" data-bs-slide="prev">
<span className="carousel-control-prev-icon" aria-hidden="true"></span>

</button>
<button className="carousel-control-next" type="button" data-bs-target="#a" data-bs-slide="next">
<span className="carousel-control-next-icon" aria-hidden="true"></span>
 
</button>
</div>

<div className="container-fluid">
	<div className="container">
		<h2 className="text-center c">WELCOME TO<b className='text-warning'> FIRST FIDDLE</b></h2>
			<br/>
		<div className="row">
			<div className="col-md-7">
				<p className="a">
					First Fiddle Restaurants, one of India’s most prominent F&B companies in the casual dining sector, is headed by Priyank Sukhija. From Lazeez Affair, the first brand conceived in 1999 to Lord of The Drinks, Dragonfly Experience, Diablo and Plum By Bent Chair, our latest ventures, we have brought a wave of innovation in the hospitality industry throughout. Being one of the India’s largest restaurant chain with over 30+ restaurants, now we are open to franchising routes for expansion and soon hitting the international grounds too.
				</p>
				<Link to="" className="btn btn-outline-warning mtop shadow-lg">Read More...</Link>
			</div>
			<div className="col-md-5 text-center">
				<img src="https://www.firstfiddle.in/assets/images/ffbanner.png" className="img"/>
			</div>
		</div>
	</div>
</div>

<div className="container-fluid why">
	<div className="container">
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8 text-center">
				<h1 className="media">MEDIA MENTIONS</h1>
				<p className="p">We are making headlines since 1999 for having upmarket conceptualized places, experimental gastronomic affairs, and exotic mixology. From the heart of the country, we are now in the hearts of people in our country!</p>
				<center>
				<Link to="" className="btn btn-outline-warning mtop1 shadow-lg">Know More...</Link>
			</center>
			</div>
		</div>
	</div>
</div>

<div className="container-fluid">
	<div className="container mt-5">
		<h1 className="text-center">EXPLORE<d className='text-warning'> OUR BRANDS</d></h1>
		<div className="row">
			<div className="col-md-3 mt-5">
				<img src="https://www.firstfiddle.in/assets/images/imagehome/daddy.jpeg"/>
			</div>
			<div className="col-md-3 mt-5">
				<img src="https://www.firstfiddle.in/assets/images/imagehome/dragonfly.jpeg"/>
			</div>
			<div className="col-md-3 mt-5">
				<img src="https://www.firstfiddle.in/assets/images/imagehome/openhouse.jpeg"/>
			</div>
			<div className="col-md-3 mt-5">
				<img src="https://www.firstfiddle.in/assets/images/imagehome/plum.jpeg"/>
			</div>
		</div>
	</div>
</div>

<div className="container-fluid why1">
	<div className="container">
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8">
				<h1 className="visit">VISIT OUR OUTLETS</h1>
				<p className="p1">From Indian food to International food and scrumptious fusion eateries, we bring to you the best of both worlds with magical events happening every other night! We're here with the perfect concept resto-bars, which will lift your mundane lives. Have a glance right away!</p>
				<Link to="" className="btn btn-outline-warning mtop2 shadow-lg">KNOW MORE..</Link>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default Home