/**
 * 
 * Components
 * JSX 
 * Props 
 * state
 * Events
 * [conditional Rendaring]
 * 
 * 
 *  */

/**
 * 1.API : url : https://jsonplaceholder.typicode.com/users
 * 
 * 
 */

fetch ("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => console.log(data))

// const loadData = async()=>{
//   const res = await (`https://jsonplaceholder.typicode.com/users`)
//   const data = res.json();
//   return data;
// }