import React, {useState} from 'react'
import axios from 'axios'
function Login() {
 
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const [status,setstatus]=useState(false)

const handlesubmit = async (event)=>{ event.preventDefault()
    setstatus(true)
    console.log('submitted..');
    let response =await axios.post ("http://localhost:4000/admin/login",{email,password})
    console.log(response.data);
}


const handleemail =(event)=>  setemail(event.target.value)
const handlepassword =(event)=> setpassword(event.target.value)
    return(
        <div className='log' style={{background:'dark',marginLeft:'400px',marginTop:'200px'}}>
         
          <div className='hi'>
               <form style={{display:'table-caption',}} onSubmit={handlesubmit} >
      <h4 style={{marginleft:'600px'}}>Login</h4>
      
      <div className="txt_field">
      <label>Email</label>
      <input style={{width:'330px',height:'50px',margin:'10px'}} type="text" placeholder='Email' onChange={handleemail} value={email}/>
      </div>

      <div className="txt_field">
      <label>Password</label>
        <input style={{width:'330px',height:'50px',margin:'10px'}} type="text " placeholder='Password'onChange={handlepassword} value={password}/>
      </div>
      <button  className='but' type='submit' >Submit</button>
   
    </form>
    </div>
    {status&&
  <div>

<p>Email:{email}</p>
  </div>
}
            
        </div>
    )
    
}
export default Login



