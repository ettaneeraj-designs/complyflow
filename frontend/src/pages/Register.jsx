import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

function Register() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async () => {

      try {

        await registerUser({
          email,
          password,
        });

        alert(
          "Registration Successful"
        );

        navigate("/login");

      } catch (error) {

        console.log(error);

        alert("Registration Failed");

      }

    };

  return (

    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f5f7f6"
    }}>

      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "20px",
        width: "350px"
      }}>

        <h1 style={{
          marginBottom: "30px",
          textAlign: "center"
        }}>
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            boxSizing: "border-box"
          }}
        />

        <input
          type="password"
          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(e.target.value)
          }

          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            boxSizing: "border-box"
          }}
        />

        <button
          onClick={handleRegister}

          style={{
            width: "100%",
            padding: "12px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Register
        </button>

      </div>

    </div>

  );

}

export default Register;