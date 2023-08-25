import React from 'react'

function Contact() {
  return (
    <>
    <div className="container-fluid banner2">
  <div className="container">
    <h1>CONTACT US</h1>
    <div className="row">
    </div>
  </div>
</div>

<div className="container-fluid">
<div className="container">
  <div className="row">
    <div className="col-md-6">
      <br/><br/>
      <h2>SEND US MESSAGE</h2>
      <form>
        <br/><br/>
      <div className="mb-3">
        <input type="Name" name="" className="form-control " placeholder="Name"/>
      </div>
      <br/>
      <div className="mb-3">
        <input type="Email" name="" className="form-control "placeholder="Email"/>
      </div>
      <br/>
      <div className="mb-3">
        <input type="Password" name="" className="form-control " placeholder="password"/>
      </div>
      <br/>
      <div className="mb-3">
        <input type="Message" name="" className="form-control " placeholder="Message"/>
      </div>
      <br/><br/>
      <button className="btn btn-warning shadow-lg">Submit</button>
      </form>
    </div>
    <div className="col-md-6">
      <br/><br/>
      <h2>CONTACT INFO</h2>
      <br/>
      <h6 className='text-warning'>Address</h6>
      <h6>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</h6>
      <br/>
      <h6>For Franchise Enquiry</h6>
      <h6>Mobile:<b className='text-warning'> +91 9313663486</b></h6>
      <h6>Email:<b className='text-warning'> franchise@firstfiddle.in</b></h6>
      <br/>
      <h6>For HR Enquiry</h6>
      <h6>Mobile:<b className='text-warning'> +91 9999304427</b></h6>
      <h6>Email:<b className='text-warning'> careers@firstfiddle.in</b></h6>
      <br/>
      <h6>For Other Enquiry</h6>
      <h6>Phone: <b className='text-warning'>7676380000</b></h6>
      <h6>Email:<b className='text-warning'> customercare@firstfiddle.in</b></h6>
      <h6>Open: Monday – Saturday 10:30 – 19:30</h6>
    </div>
  </div>
</div>
</div>
<br/>
    </>
  )
}

export default Contact