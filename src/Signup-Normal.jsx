import React, { useState } from "react";
import "./signup.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");

  console.log(name);
  return (
    <form>
      <div className="input-container">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
