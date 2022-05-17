import React from 'react'

var styles={
    backgroundColor:"teal",
    color:'white',
    borderRadius:'20px',
    padding:'5px 20px 5px 20px',
    width:'100px'
}

function Button() {
  return (
    <div>
        <button style={styles}>contact</button>
    </div>
  )
}

export default Button