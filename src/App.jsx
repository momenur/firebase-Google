import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.config';
const auth = getAuth(app)
const googoleProvider = new GoogleAuthProvider();


function App() {
  const [user, setUser] = useState(null)
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, googoleProvider)
    .then(result =>{
      const loggedUser =result.user
      console.log(loggedUser);
      setUser(loggedUser)
    })
    .catch(error => {
      console.log(error)
    })
  }
  const handleGoogleSignOut = () =>{
    setUser(null)
  }

  return (
    <div className="App">
        <h1>Loogin page from App js</h1>
        {
          user?<button onClick={handleGoogleSignOut}>Log Out</button>:<button onClick={handleGoogleSignIn}>Google Login</button>
        }
        {/* <button onClick={handleGoogleSignIn}>Google Login</button>
        <button onClick={handleGoogleSignOut}>Log Out</button> */}
        {
          user &&
          <div>
            <h3>Name: {user.displayName}</h3>
            <h3>Name: {user.email}</h3>
            <img src={user.photoURL}></img>
          </div>
        }
    </div>
  )
}

export default App
