import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

function App() {
  const [originalList,setOriginalList]=useState([]);
  const [sortList,setSortList]=useState([]);
  const [sortLevel,setSortLevel]=useState('');

  const getName=()=>{
    const data=[];
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (response)=>{
        for(let i=0;i<response.data.length;i++){
          data.push(response.data[i].name);
        }
        setOriginalList(data);
        setSortList(data);
        setSortLevel('1');
      }
    )
  }
 
const sortName=()=>{
  let sortedList=[...sortList]
     if(sortLevel==='1'){
       sortedList.sort((a,b)=>a.length-b.length)
       
       
       setSortLevel('2')
       console.log(sortList);
     }
     else if(sortLevel==='2'){
      sortedList.sort((a,b)=>b.length-a.length)
      
       setSortLevel('3')
       
       console.log(sortList);
     }
     else if(sortLevel==='3'){
       sortedList=[...originalList]
        setSortLevel('1')
        console.log(sortList);
     }

     setSortList(sortedList)
  }


  return (
    <div>
      <button onClick={getName}>GetName</button>
      <button onClick={sortName}>Sort</button>
      <ul>
       {sortList.map((name)=>(
        <li>
          {name}
        </li>
       ))}
      </ul>
    </div>
  );
}

export default App;



// function App() {
//   const [originalList, setOriginalList] = useState([]);
//   const [sortList, setSortList] = useState([]);
//   const [sortLevel, setSortLevel] = useState('');

//   useEffect(() => {
   
//   }, []);

//   const handleClickGetUsers = () => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//       const data = response.data.map(user => user.name);
//       setOriginalList(data);
//       setSortList(data);
//     })
//     .catch(error => {
//       console.log("Error fetching user data:", error);
//     });
//     setSortLevel('1');
//   };

//   const handleClickSort = () => {
//     let sortedList = [...sortList];

//     if (sortLevel === '1') {
//       sortedList.sort((a, b) => a.length - b.length);
//       setSortLevel('2');
//     } else if (sortLevel === '2') {
//       sortedList.sort((a, b) => b.length - a.length);
//       setSortLevel('3');
//     } else if (sortLevel === '3') {
//       sortedList = [...originalList];
//       setSortLevel('1');
//     }

//     setSortList(sortedList);
//   };

//   return (
//     <div>
//       <button onClick={handleClickGetUsers}>Get Users</button>
//       <button onClick={handleClickSort}>Sort</button>
//       <ul>
//         {sortList.map(name => (
//           <li key={name}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
