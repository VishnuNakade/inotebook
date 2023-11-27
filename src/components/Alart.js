import React from 'react'

export default function Alart(props) {
  return (
    <>
      <div className="alert alert-primary" role="alert">
            {props.message}
      </div>
    </>
  )
}
