// import './App.css';
// import { useEffect, useState } from 'react';

// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(1)
//   const [state, setState] = useState(1)

// function getData(){
//   fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((itme)=>{return itme.json()})
//   .then((res)=>{console.log(res)})
// }
// getData()
//   return (
//     <div className="App">
//       <h1>{count}</h1>
//       <h1>{state}</h1>
//       <button onClick={()=>{setCount(count * 2)}}>Multiplication</button>

//       <button onClick={()=>{setState(count + 2)}}>Addition</button>
//     </div>
//   );
// }

// export default App;







// import { useEffect, useState } from "react"
// import Card from "./components/Card"
// import React from 'react'

// const App = () => {
//   const [data, setData] = useState()
//   useEffect(()=>{
//     const getData = async()=>{
//       const a = await fetch('https://jsonplaceholder.typicode.com/posts')
//       const b = await a.json()
//       setData(b)
//     }
//     getData()
//   },[])
// //   console.log(data)
// // console.log(data[0].title)
// console.log(data)
// console.log(data[0].title)
//   return (
//     <div>
//       <Card id={data[0].id} title={data[0].title} body={data[0].body} />
//       <Card id={data[1].id} title={data[1].title} body={data[1].body} />
//       <Card id={data[2].id} title={data[2].title} body={data[2].body} />
//       <Card id={data[3].id} title={data[3].title} body={data[3].body} />
//       <Card id={data[4].id} title={data[4].title} body={data[4].body} />
//       <Card id={data[5].id} title={data[5].title} body={data[5].body} />
//       <Card id={data[6].id} title={data[6].title} body={data[6].body} />
//     </div>
//   )
// }

// export default App









// import students from './components/Data'
// const App = () => {
//   return (
//     <div>{
//       students.map((items)=>{
//         return(
//           <h1>{items.name}</h1>
//         )
//       })
//     }
//     </div>
//   )
// }

// export default App








// import students from './components/Data'
// import Card from './components/Card'
// const App = () => {
//   return (
//     <div>{
//       students.map((items)=>{
//         return(
//           <Card id= {items.id} name= {items.name} />
//           // <h1>{items.name}</h1>
//         )
//       })
//     }
//     </div>
//   )
// }

// export default App











// import students from "./components/Data";
// import Card from "./components/Card";
// import { useState } from "react";

// function App() {
//   const [dusra, setDusra] = useState(students);

//   const remove = (id) => {
//     const filtered = dusra.filter((items) => {
//       return items.id !== id;
//     });
//     setDusra(filtered);
//   };
//   console.log(dusra);

//   return (
//     <div>
//       {
//       dusra.map(function (it) {
//         return (
//           <div key={it.id}>
//             <Card name={it.name} />
//             <button style={{marginLeft:'45%'}}
//               onClick={() => {
//                 remove(it.id);
//               }}
//             >
//               Remove
//             </button>
//           </div>
//         );
//         })      
//       }
//     </div>
//   );
// }

// export default App;


 

// import { useEffect, useState } from "react";
// import "./App.css"; 

// const App = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const result = await res.json();
//       setData(result);
//     };
//     getData();
//   }, []);

//   const remove = (id) => {
//     const filtered = data.filter((items) => {
//       return items.id !== id;
//     });
//     setData(filtered);
//   };

//   return (
//     <div className="product-grid">
//       {data.map(function (items){
//         return (
//           <div key={items.id} className="product-card">
//             <h1>{items.id}</h1>
//             <img src={items.image} alt={items.title} className="product-img" />
//             <h1 className="product-category"> {items.category} </h1>
//             <h1 className="product-price"> ${items.price} </h1>
//             <button onClick={() => remove(items.id)} className="delete-btn">
//               DELETE
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;




import data from './Data'


import React, { useState } from 'react'
import Tour from './components/Tour'

const App = () => {
    const [state, setState] = useState(data)
   
    if(state.length === 0){
        return <h1>Loading....</h1>
    }

    const remove = (id)=>{
        const filtered = state.filter((items)=>{return items.id !== id})
        setState(filtered)
    }

  return (
    <div>
      <Tour state= {state} remove={remove}/>
    </div>
  )
}

export default App;













































































