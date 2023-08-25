import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
<div className="container-fluid back">
  <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-5 mj">
          <Link href="">
            <img src="https://www.firstfiddle.in/assets/images/ff-logo-02.png" className="image"/>
          </Link>
        </div>
        <div className="col-md-7 col-sm-7 mj">
          <h2 className="topic1"><span className="topic2">CONTACT</span> US</h2>
          <p className="para">We're a team focusing on redefining the way the hospitality industry works by
            bringing in concept based restaurants across India. We are truly committed to catering to the
            ever-changing cosmopolitan taste of the customer and revolutioning the F &amp; B industry!</p>
          <div className="row top">
            <div className="col-md-6">
              <h6 className="h6">Address</h6>
              <h6> 6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021 </h6>
            </div>
            <div className="col-md-6 dist">
              <h6 className="h6">Franchise Enquiry</h6>
              <h6>Mobile: <span className="h6">+91 9313663486</span></h6>
              <h6>Email: <span className="h6">franchise@firstfiddle.in</span></h6>
            </div>
          </div>
          <div className="row top">
            <div className="col-md-6">
              <h6 className="h6">HR Enquiry</h6>
              <h6> 6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021 </h6>
            </div>
            <div className="col-md-6 dist">
              <h6 className="h6">Other Enquiry</h6>
              <h6>Email: <span className="h6"> customercare@firstfiddle.in</span></h6>
            </div>
          </div>
          <div className="row top">
            <div className="col-md-6 h6">
              <h1><i className="fa fa-instagram" aria-hidden="true"></i></h1>&nbsp;&nbsp;
              <h1><i className="fa fa-facebook-official" aria-hidden="true"></i></h1>&nbsp;&nbsp;
              <h1><i className="fa fa-twitter-square" aria-hidden="true"></i></h1>&nbsp;&nbsp;
              <h1><i className="fa fa-youtube-play" aria-hidden="true"></i></h1>&nbsp;&nbsp;
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

<div className="container-fluid footer1">
	<div className="container">
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8">
				<p className='text-white text-center'>PRIVACY POLICY | TERMS AND CONDITIONS | BLOG
                <br/>COPYRIGHT © 2021 FIRST FIDDLE F&B PRIVATE LIMITED<br/></p>
			</div>
		</div>
	</div>
</div>
    </>
  )
}

export default Footer