
import React, {useState} from 'react'

const userDetails ="https://jsonplaceholder.typicode.com/posts"

console.log(userDetails)

const Userlist = () => {
    const [user, setUser] = useState([])
     const Userhandler = async()=>{
         const Response =  await fetch(userDetails)
         const newData = await Response.json()
         setUser(newData)
     }
     console.log(Userhandler)

  return (
    <div>Userlist</div>
  )
}

export default Userlist