import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase.config'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : ''
  })

  const {name , email,password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value,
    }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName : name
      })

      const formDataCopy = { ...formData }
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()
      console.log(formDataCopy)
      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <div className="container pt-5">
        <header>
          <p className="pageHeader mt-5">Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            className="nameInput"
            placeholder='Name' 
            id="name"
            value={name}
            onChange={onChange}/>

          <input 
            type="email" 
            className="emailInput"
            placeholder='Email' 
            id="email"
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
              <button className="btn btn-primary rounded-pill px-3 py-2 mx-auto">Sing Up</button>
            </div>

            <div className="row w-50 mx-auto py-0">
              <div className="col-lg-6 col-md-12 py-1">
                <Link to='/sign-up' className='registerLink'>Sign In Instead</Link>
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

export default SignUp
