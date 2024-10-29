import React from 'react'

const User = ({ user }) => {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center rounded-lg bg-gray-500">
      <div className="grid grid-cols-2">
        <img src={user.avatar} alt="user avatar" className="rounded-full w-50 h-50 object-cover mb-2 bg-blue-200" />
        <div>
          <h1>{user.first_name} {user.last_name}</h1>
          <div className="flex flex-row">
            <p>Gender: {user.gender}</p>
          </div>
          <div>
            <div className="font-bold text-lg">Subscriptions</div>
          </div></div>
      </div>
    </div>
  )
}

export default User
