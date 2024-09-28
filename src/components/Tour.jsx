import React from 'react'
import Card from './Card'
const Tour = ({state, remove}) => {
console.log(remove)
  return (
    <div>
      <h1 className='heading'>💗 Plan With Avishkar 💗</h1>
      <div className='main'>
      {
        state.map((items)=>{
            return(
                <Card key={items.id} {...items } remove={remove}/>
            )
        })
      }
    
    </div>
    </div>
  )
}

export default Tour;
