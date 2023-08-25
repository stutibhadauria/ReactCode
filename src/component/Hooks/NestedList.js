import React from 'react'

function NestedList() {
    const user = [
        { name: "anil", email: "ram@gmail.com", phone: 111 },
        { name: "ram", email: "ram@gmail.com", phone: 111 },
        { name: "raj", email: "ram@gmail.com", phone: 7478784 },
        { name: "anil", email: "ram@gmail.com", phone: 7478784 },
      ]

  return (
    <div>
        <br/><br/><br/><br/>
        <table className='text-center'>
        <thead>
            <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
            </tr>
            
        </thead>
        <tbody>
            {user.map((item,i)=>
            <tr key={i}>
                <td>{i+1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>action</td>
            </tr>
            
            )
                
            }
        </tbody>
    </table>

    </div>
  )
}

export default NestedList