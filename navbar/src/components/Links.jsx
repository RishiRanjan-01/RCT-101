import React from 'react'

function Links() {
  let link = [
      {category:'Services'},
      {category: 'Projects'},
      {category: 'About'}
  ]
  return (
    <div style={{display:'flex', justifyContent:'space-between', gap:'20px'}}>
        {link.map((el)=>{
            return <div >{el.category}</div>
        })}
    </div>
  );
}

export default Links