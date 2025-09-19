
import './App.css'
import Counter from './Counter'
import Batsman from './Batsman'
import Boller from './Boller'
import Users from './Users'
import Friends from './Friends'
import Post from './Posts'
import Players from './Players'
import { Suspense } from 'react'

// const fetchUsers = fetch(`https://jsonplaceholder.typicode.com/users`)
// .then((res)=>res.json())

// const fetchFriends = async() =>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   return res.json();

// }

// const fetchPosts = async()=>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   return res.json();
// }

function App() {

  // const friendsPromise = fetchFriends();

  // const postPromise = fetchPosts();

  const handleClick1=()=>{
    alert("hi iam shehab")
  }
  // const handleClick2=()=>{
  //   alert("click btn 2")
  // }

  const handleClick3=(num)=>{
    const newnum = num + 3;
    alert(newnum)
  }
  return (
    <>
      <h1>Vite + React</h1>

      <Players></Players>

        {/* <Suspense fallback={<h3>Loading....</h3>}>
          <Users fetchUsers={fetchUsers}></Users>
        </Suspense> */}

        {/* <Suspense fallback={<h3>Friends are coming for treat....</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense> */}

        {/* <Suspense fallback={<h3>ALL post Loading here.....</h3>}>
            <Post postPromise={postPromise}></Post>
        </Suspense> */}

        {/* <Batsman></Batsman> */}

        <Boller></Boller>

        <Counter></Counter>


      <button onClick={handleClick1}>Click Me 1</button>
      <button onClick={() => alert("click btn 2")}>Click Me 2</button>
      <button onClick={() => handleClick3(13)}>Click Me 3</button>
      <button>Click Me 4</button>
      <button>Click Me 5</button>
    </>
  )
}

export default App
