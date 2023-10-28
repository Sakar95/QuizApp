import { useQuizContext } from '../Context/useContext'
import {React,useState,useEffect} from 'react'
import Input from '../Components/Input'
import { Link,useNavigate} from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

    const { name,setName,email,setEmail,password,setPassword} = useQuizContext()
    const [chkFields,setChkFields] = useState(true)
    
    const handleSubmit = async (e)=>{
      e.preventDefault()
      if(name !=="" && email!==""&& password!==""){
        navigate('/home')
      }
      else{
        setChkFields(false)
      }
      console.log(name)
    }

   
  
    return (
        <>
        
        <div className="flex items-center justify-center bg-gray-900 text-white pt-24 h-screen ">
        
          <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {!chkFields && <div className='border-2 border-red-500 py-2 px-1 my-2 rounded-md'>*Fill all the required fields</div>}
              <div className="text-center">
               <button type='submit' onClick={()=>console.log(name)} className=' px-2 pb-1  rounded-md bg-blue-600 text-white shadow-xl hover:bg-blue-700 transition ease-in-out'>Login</button>
              </div>
            </form>
           
          </div>
        </div>
        </>
      
  )
}
