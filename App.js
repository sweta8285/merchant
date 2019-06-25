import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette',status:'completed' },
    { id: 2, name: 'Craig', username: 'siliconeidolon',status:'incompleted' },
    { id: 3, name: 'Ben', username: 'benisphere',status:"completed" },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  return (
    <div className="container">
      <h1>Application of Merchant</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
          
          
        </div>
      </div>
    </div>
    
  )
}

export default App