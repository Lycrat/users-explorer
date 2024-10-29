import React, { useState, useEffect } from 'react'
import { User } from "./"

const UserList = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5001/users')
        if (!response.ok) {
          throw new Error('Network reponse was not ok')
        }
        const data = await response.json();
        setUsers(data);
      }
      catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])
  if (loading) return <h1>loading...</h1>
  if (error) {
    return <h1>Error: {error}</h1>
  }
  return (
    < div >
      <h2>
        User List</h2>

      <div>
        <User user={users} />
      </div></div >
  )
}

export default UserList
