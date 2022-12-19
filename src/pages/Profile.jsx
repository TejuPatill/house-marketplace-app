import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth , updateProfile} from 'firebase/auth'
import { updateDoc } from 'firebase/firestore'
import { db } from '../firebase.config'

function Profile() {
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name : auth.currentUser.displayName,
    email : auth.currentUser.email
  })

  const { name , email } = formData

  const navigate = useNavigate()
  const onlogout = () => {
    auth.signOut()
    navigate('/login')
  }
  return ( 
    <>
      <div className="container pt-5">
        <header className='d-flex flex-row justify-content-between py-3'>
          <p className="pageHeader mt-5">My Profile</p>
          <button type='button' className='logOut mt-5 rounded-pill' onClick={onlogout}>Logout</button>
        </header>
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <div className="rounded profile-img">
              <img src="../assets/jpg/rentCategoryImage.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">

          </div>
        </div>
      </div> 
    </>
  )
}

export default Profile
