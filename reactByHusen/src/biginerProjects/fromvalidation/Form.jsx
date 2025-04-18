import { useState } from "react";
import "./form.css";
function Form() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorUsername, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [userColor, setUserColor] = useState("");
  const [emaiClolor, setEmaiClolor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirpasswordColor, setConfirmPasswordColor] = useState("");
  const validate = (e) => {
    e.preventDefault();
    if (username.length > 8) {
      setErrorUserName("");
      setUserColor("green");
    } else {
      setErrorUserName("Username must be 8 letter long.");
      setUserColor("red");
    }
    if (email.includes("@gmail")) {
      setErrorEmail("");
      setEmaiClolor("green");
    } else {
      setErrorEmail("Email should have @gmail");
      setEmaiClolor("red");
    }

    if (password.length > 8) {
      setErrorPassword("");
      setPasswordColor("green");
    } else {
      setErrorPassword("Password should be 8 letter long");
      setPasswordColor("red");
    }
    if (password !== "" && password === confirmPassword) {
      setErrorConfirmPassword("");
      setConfirmPasswordColor("green");
    } else {
      setErrorConfirmPassword("password didn't match");
      setConfirmPasswordColor("red");
    }
  };
  return (
    <div className="card">
      <div className="card-image"></div>
      <form>
        <input
          type="text"
          placeholder="Name"
          style={{ borderColor: userColor }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p className="error">{errorUsername}</p>
        <input
          type="email"
          placeholder="email"
          style={{ borderColor: emaiClolor }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>
        <input
          type="password"
          placeholder="password"
          style={{ borderColor: passwordColor }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>
        <input
          type="password"
          placeholder="Confirm password"
          style={{ borderColor: confirpasswordColor }}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p className="error">{errorConfirmPassword}</p>
        <button className="submit-btn" onClick={validate}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
