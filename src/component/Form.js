import React, { useState } from 'react'

function Form() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[confirmPassword,SetConfirmPassword]=useState()

    function getData(e){
        e.preventDefault()//dont refresh page
        console.log(name,email,password,confirmPassword);
    }
  return (
    <>
    <br/><br/><br/><br/><br/>
    <div className='container'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 text-center'>
                <form onSubmit={getData}>
                <div className='mb-3'>
                    <label>Name:</label>
                    <input type='text' placeholder='Enter your name'className='form-group'onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label>password:</label>
                    <input type='password' placeholder='Enter your password'className='form-group'onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label>Confirm password:</label>
                    <input type='password' placeholder='please enter password again!!'className='form-group'onChange={(e)=>SetConfirmPassword(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label>Email:</label>
                    <input type='email' placeholder='Enter your email'className='form-group'onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className='btn btn-warning'type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Form