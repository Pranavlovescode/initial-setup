import React from 'react'

export default function PropsGetting({prop}) {
  return (
    <>
        {prop.map((items,index)=>(
            <h4 key={index}>{items.id}.{items.name}</h4>
        ))}
    </>
  )
}
