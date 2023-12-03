import React from 'react'

export default function Button(props) {
  return (
    <>
      <button onClick={props.Click} style={{background:`${props.backgroundColor}`,color:`${props.color}`,fontSize:`${props.fontSize}`,padding:`${props.padding}`,borderRadius:`${props.borderRadius}`,border:"none"}}>{props.Text}</button>
    </>
  )
}
