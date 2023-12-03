import React from 'react'

export default function Input(props) {
  return (
    <>
      <input type={props.Types} value={props.value}
        id={props.id} placeholder={props.placeholder} onChange={props.handleChange} />
    </>
  )
}
