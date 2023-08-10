import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

// inline css
const styles = {

  body: {
    minHeight: "100vh",
    width: "100%",
    background: "#009579",
    margin: "0",
    padding: "0",
    boxSizing: "border-box",
    fontFamily: "'Poppins', sans-serif"
  },
  ".container": {
    position: "absolute",
    padding: "2rem",
    margin:"10px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    maxWidth: "430px",
    width: "100%",
    background: "#fff",
    borderRadius: "7px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.3)",
    height:"430px"
  },
  ".form input": {
    height: "60px",
    width: "100%",
    fontSize: "17px",
    marginBottom: "1.5rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
    outline: "none"
  },
  ".form input:focus": { boxShadow: "0 1px 0 rgba(0,0,0,0.2)" },
  ".form a": { fontSize: "16px", color: "#009579", textDecoration: "none" },
  ".form a:hover": { textDecoration: "underline" },
  ".form input button": {
    color: "#fff",
    background: "#009579",
    fontSize: "1.2rem",
    fontWeight: "900",
    letterSpacing: "1px",
    marginTop: "2rem",
    cursor: "pointer",
    transition: "0.4s",
    padding:"15px",
    width:"100%",
    borderRadius:"5px"
  },
  ".form input.button:hover": { background: "#006653" },
  ".form header": {
    fontSize: "2rem",
    fontWeight: "900",
    textAlign: "center",
    marginBottom: "1.5rem"
  }

}

// --------------------------

export default function Login() {
  let [userDetail, setUserDetail] = useState("");
  let [passWord, setPassWord] = useState("");

  let validUser = "rahul";
  let validPassword = 54321;

  const navigate = useNavigate();

  function validation() {
    if (userDetail == validUser && passWord == validPassword) {
      navigate("/ShopPage");
    } else {
      navigate("/Invalid")
    }
  }

  return (
    <div style={styles.body}>

    <div style={styles[".container"]}>

      <div>
        <header style={styles[".form header"]}>LogIn</header>
        <form style={styles[".form"]} name action="" onSubmit={()=>validation()}>
        <input style={styles[".form input"]} onChange={(e)=>setUserDetail(e.target.value)} type="text" name="fname" placeholder="Enter Your Email" required/>
        <input style={styles[".form input"]} onChange={(e)=>setPassWord(e.target.value)} type="password" name="pass" placeholder="Enter Your Password" required />
        <a style={styles[".form a"]} href="#">Forgot Password?</a><br />
        <input style={styles[".form input button"]} type="submit"  value="Login"/>
        </form>

      </div>

    </div>
    </div>

  
      
  );
}
