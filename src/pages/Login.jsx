import React , {useState} from 'react'
import { Link } from 'react-router-dom'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })

  const {email,password} = formData

  //const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }

  return (
    <>
      <div className="container pt-5">
        <header>
          <p className="pageHeader mt-5">Welcome Back!</p>
        </header>

        <form>
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
                <Link to='/sign-up' className='registerLink'>Sign Up Instead</Link>
              </div>
              <div className="col-lg-6 col-md-12 py-1">
                <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>
              </div>
            </div>

        </form>
      </div>
    </>
  )
}

export default Login
