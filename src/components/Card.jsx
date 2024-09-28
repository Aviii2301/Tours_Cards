// import React from 'react'

// const Card = ({name,id,body}) => {
//   return (
//     <div style={{display:'flex', flexDirection:'row', flex:'wrap', justifyContent:'space-evenly' }}>
//         <div style={{border:'2px solid black',height:'max-content', width:'700px'}}>
//         <h1>ID : {id}</h1>
//       <h1>name : {name}</h1>
//       <h1>Body : {body} </h1>
//         </div>
//     </div>
//   )
// }

// export default Card


// import React from 'react'

// const Card = ({id,name}) => {
//   return (
//     <div style={{display:'flex', flexDirection:'row', flex:'wrap', justifyContent:'space-evenly' }}>
//         <div style={{border:'2px solid black',height:'max-content', width:'700px', background:'orange'}}>
//         <h1>ID : {id} </h1>
//         <h1>Name : {name} </h1>
//         </div>
//     </div>
//   )
// }

// export default Card






// import React, { useState } from 'react'


// const Card = ({id,name,info,image,price,remove}) => {
// const [read, setRead] = useState(false)
//   const description = read ? info : info.substring(0, 100) + "..."

//   return (
//     <section className="card">
//     <img src={image} alt="Image." />
//     <div>
//     <h4 >{name}</h4>
//     <p >₹ {price}</p>
//     <div>{description} {read ? <span style={{color:'red', cursor:'pointer'}} onClick={()=>{setRead(false)}}>Read Less</span> : <span style={{color:'green', cursor:'pointer'}} onClick={()=>{setRead(true)}}>Read More</span>} </div>
    
//     </div>
//     <button onClick={()=>{remove(id)}}>Delete</button>
// </section>
//   )
// }

// export default Card;


import React, { useState } from 'react';


const Card = ({ id, name, info, image, price, remove }) => {
  const [read, setRead] = useState(false);
  const description = read ? info : info.substring(0, 100) + "...";

  return (
    <section className="card">
      <img src={image} alt="CardImage" className="card-image" />
      <div className="card-content">
        <h4 className="card-title">{name}</h4>
        <p className="card-price">₹ {price}</p>
        <p className="card-description">
          {description}
          {read ? (
            <span className="toggle-text" onClick={() => setRead(false)}> Read Less</span>
          ) : (
            <span className="toggle-text" onClick={() => setRead(true)}> Read More</span>
          )}
        </p>
      </div>
      <button className="delete-button" onClick={() => remove(id)}>Delete</button>
    </section>
  );
};

export default Card;


