import './App.css'
import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from './firebase/firebase'

const App = () => {
  const [registerEmail, setRegisterEmail] = useState('')
  const [registerPassword, setRegisterPassword] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState({})

  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser)
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      )
      console.log(user)
    } catch (error) {
      console.log(error.message)
    }
  }

  const logout = async () => {
    await signOut(auth)
  }

  return (
    <div className='App'>
      <div className='field'>
        <h1>Log user</h1>
        <input
          type='email'
          placeholder='Email'
          onChange={e => {
            setRegisterEmail(e.target.value)
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={e => {
            setRegisterPassword(e.target.value)
          }}
        />

        <button onClick={register}>Create user</button>
      </div>
      <div className='field'>
        <h1>Login</h1>
        <input
          type='email'
          placeholder='Email'
          onChange={e => {
            setLoginEmail(e.target.value)
          }}
        />
        <input
          type='password'
          placeholder='Password'
          onChange={e => {
            setLoginPassword(e.target.value)
          }}
        />

        <button onClick={login}>Login</button>
      </div>

      <div>
        <h2>User logged in: {user?.email}</h2>
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  )
}

export default App
