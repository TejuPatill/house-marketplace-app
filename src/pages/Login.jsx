import React , {useState} from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })

  const navigate = useNavigate()

  const {email,password} = formData

  //const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }

  const onsubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth , email , password)
      console.log(userCredential)
      if(userCredential.user) {
        navigate('/profile')
      }
    } catch (error) {
      toast.error('Unable to Login')
      console.log(error)
    }

  }

  return (
    <>
      <div className="container pt-5">
        <header>
          <p className="pageHeader mt-5">Welcome Back!</p>
        </header>

        <form onSubmit={onsubmit}>
          <input 
            type="email" 
            className="emailInput"
            placeholder='Email' 
            id="email"
            value={email}
            onChange={onChange}/>

            <div className="passwordInputDiv">
              <input 
                type={showPassword ? 'text' : 'password'} 
                placeholder="Password" 
                className="passwordInput" 
                id="password"
                value={password}
                onChange={onChange}/>

                <img src={visibilityIcon} 
                  alt="show password"
                  className='showPassword'
                  onClick={() => setShowPassword(!showPassword)} />
            </div>

            <div className='w-25 d-flex align-items-center mx-auto'>
              <button className="btn btn-primary rounded-pill px-3 py-2 mx-auto">Sing In</button>
            </div>

            <div className="row w-50 mx-auto py-0">
              <div className="col-lg-6 col-md-12 py-1">
                <Link to='/sign-up' className='registerLink text-md-center text-sm-center'>Sign Up Instead</Link>
              </div>
              <div className="col-lg-6 col-md-12 py-1">
                <Link to='/forgot-password' className='forgotPasswordLink text-md-center text-sm-center'>Forgot Password</Link>
              </div>
            </div>

        </form>
      </div>
    </>
  )
}

export default Login
