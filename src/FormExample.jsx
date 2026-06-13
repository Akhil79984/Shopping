
import React,{useState} from 'react'

const FormExample = () => {
    const [userdetails, setUserDetails] = useState("")
    const [userinformation, setUserInformation] = useState()

    const getuserdetails = (e) => {
        //console.log(e.target.value);
        setUserDetails(e.target.value);
    }

        const getuserinformation = (e) => {
            e.preventDefault()
            setUserInformation(userdetails);
        }
    
    return (
        <section>
            <h2>Hello,{userinformation}</h2>
            <div>
                <form onSubmit={getuserinformation}>
                <input type='text' placeholder='Enter your name' onChange={getuserdetails} />
                <button className='Submitbtn' type='Submit'>Submit</button>
                </form>
            </div>
        </section>

    )
}
export default FormExample;