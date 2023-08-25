import React from 'react'

function ReuseComponentInuse(props) {

  return (
    <>
    <h1>Hello</h1>
    <span>{props.data.name}</span>
    <span>{props.data.email}</span>
    <span>{props.data.phone}</span>
    </>
  )
}

export default ReuseComponentInuse