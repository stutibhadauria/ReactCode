import React,{useState} from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './component/Home'
import Footer from './component/layouts/Footer'
import Header from './component/layouts/Header'
import About from './component/About'
import Brands from './component/Brands'
import Ourteam from './component/Ourteam'
import Contact from './component/Contact'
import UseState from './component/UseState'
import UseState1 from './component/UseState1'
import VariableUpdate from './component/VariableUpdate'
import Props from './component/Props'
import HiddenShowToken from './component/HiddenShowToken'
import UsestateHook from './component/Hooks/UsestateHook'
import UsestateHook1 from './component/Hooks/UsestateHook1'
import UseEffect  from './component/Hooks/UseEffect'
import UseEffect1 from './component/Hooks/UseEffect1'
import UseEffect2 from './component/Hooks/UseEffect2'
import Click from './component/Click'
import Condition from './component/Condition'
import Form from './component/Form'
import User from './component/User'
import Cstate from './component/Cstate'
import Constructor from './component/LifeCycleMethod/Constructor'
import Render1 from './component/LifeCycleMethod/Render1'
import ComponentDidAmount from './component/LifeCycleMethod/ComponentDidAmount'
import NestedList from './component/Hooks/NestedList'
import CertificateDisplay from './component/Hooks/CertificateDisplay'
import Bootstrap from './component/Hooks/Bootstrap'
import ReuseComponentInuse from './component/Hooks/ReuseComponentInuse'
import SendDataChild from './component/Hooks/SendDataChild'
import UseMemo from './component/Hooks/UseMemo'
import UseRef from './component/Hooks/UseRef'
import ForwardRef from './component/Hooks/ForwardRef'

function App() {
  const[data,setData]=useState('dishu')
  let name="stuti";

  // const user=[
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   },
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   },
  //   {
  //     name:"anil",email:"ram@gmail.com",phone:34455
  //   }
  //  ]

  function parent(data){
    alert(data.name)
  }
  return (
    <>
    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/brand' element={<Brands/>}/>
       <Route path='/ourteam' element={<Ourteam/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/usestate' element={<UseState/>}/>
       <Route path='/usestate1' element={<UseState1/>}/>
       <Route path='/variable' element={<VariableUpdate/>}/>
       {/* <Route path='/props' element={<Props data={data}/>}/> */}
       <Route path='/hidden' element={<HiddenShowToken/>}/>
       <Route path='/usestatehooks' element={<UsestateHook/>}/>
       <Route path='/usestatehooks1' element={<UsestateHook1/>}/>
       <Route path='/useeffect' element={<UseEffect/>}/>
       <Route path='/useeffect1' element={<UseEffect1/>}/>
       <Route path='/useeffect2' element={<UseEffect2/>}/>
       <Route path='/click' element={<Click/>}/>
       <Route path='/condition' element={<Condition/>}/>
       <Route path='/form' element={<Form/>}/>
       {/* <Route path='/user' element={<User n={name}/>}/> */}
       <Route path='/cstate' element={<Cstate/>}/>
       <Route path='/constructor' element={<Constructor/>}/>
       <Route path='/render1' element={<Render1/>}/>
       <Route path='/compdid' element={<ComponentDidAmount/>}/>
       <Route path='/nested' element={<NestedList/>}/>
       <Route path='/certi'element={<CertificateDisplay/>}/>
       <Route path='/bootstrap' element={<Bootstrap/>}/>
       <Route path='/reuse' element={<ReuseComponentInuse/>}/>
       {/* <Route path='/send' element={<SendDataChild name={name}/>}/> */}
       <Route path='/parent' element={<SendDataChild alert={parent}/>}/>
       <Route path='/memo' element={<UseMemo/>}/>
       <Route path='/ref' element={<UseRef/>}/>
       <Route path='/forward' element={<ForwardRef/>}/>
    </Routes>
    <Footer/>
    {/* {
      user.map((item,i)=>
    //  <h1>{item.name}</h1>
    <ReuseComponentInuse data={item}/>
     )
    } */}
    
    {/* <button onClick={()=>setData('ram')}>Click me</button> */}
    </>
  )
}

export default App
