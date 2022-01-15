import { useState } from "react";
import About from "./components/About";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";
import UserState from "./Contexts/UserState"
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase-config";
import NotFound from "./components/NotFound";

function App() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (<>
  <UserState user={user}>
    <Router>
      <Navbar />
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<Login setLoginEmail={setLoginEmail} setLoginPassword={setLoginPassword} login={login}/>}/>
      <Route path="/register" element={<Register setRegisterEmail={setRegisterEmail} setRegisterPassword={setRegisterPassword} register={register}/>}/>
      <Route path="/profile" element={<Profile logout={logout}/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
    </UserState>
    </>
  );
}

export default App;



