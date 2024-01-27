import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='container shadow mt-3'>
        <div className='row'>
            <div className='col-md-6 d-flex flex-column'>
            <img className='p-2 profile-pic' alt="profile pic" src="https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className='col-md-6'>Right</div>

        </div>
    </div>
  )
}

export default Profile