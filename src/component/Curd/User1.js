import React from 'react'

function User() {
  return (
    <>
    <div className='container mt-4'>
        <div className='row'>
            <div className='col-md-4'></div>
            <div className='col-md-4'>
                <h1 className='text-center bg-info mb-2'>User register</h1>
                <form>
                    <div className='mb-3'>
                        <label>name</label>
                        <input type='text' className='form-control' placeholder='Enter ur name'/>
                    </div>
                    <div className='mb-3'>
                        <label>Email</label>
                        <input type='email' className='form-control' placeholder='Enter ur email'/>
                    </div>
                    <div className='mb-3'>
                        <label>password</label>
                        <input type='password' className='form-control' placeholder='Enter ur password'/>
                    </div>
                    <button type='submit' className='btn btn-info'>Submit</button>
                </form>
            </div>
            <div className='col-md-4'></div>
        </div>
    </div>
    </>
  )
}

export default User