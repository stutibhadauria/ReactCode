import React, { useEffect, useState } from 'react'

function CertificateDisplay() {
  const [user,setUser] = useState([])

  const fetchData = () => {
    fetch("https://ecommerceapi-d3ul.onrender.com/api/getalluser")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        //console.log(users);
        let data1 = users.data;
        console.log(data1);
        setUser(data1);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
     <br/><br/><br/><br/>
      <table>
        <thead>
           <tr>
            <th>S.no</th>
            <th>Student name</th>
            <th>email</th>
           </tr>
        </thead>
        <tbody>
          {user.map((item,i)=>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CertificateDisplay