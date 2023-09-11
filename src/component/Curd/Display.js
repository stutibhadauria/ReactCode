import React from 'react'
import { Link } from 'react-router-dom'

function Display() {
  return (
    <>
    <div className='container-fluid'>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>action</th>
                </tr>
            </thead>
             <tbody>
                <tr>
                    <td>1</td>
                    <td>Stuti</td>
                    <td>stuti@gmail.com</td>
                    <td>stuti123</td>
                    <td>
                        <Link className='btn btn-waring'>View</Link>
                        <Link className='btn btn-info'>Edit</Link>
                        <Link className='btn btn-danger'>Delete</Link>
                    </td>
                </tr>
             </tbody>
        </table>
    </div>
    </>
  )
}

export default Display