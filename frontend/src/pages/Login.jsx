import {
  useState
} from "react";

import {
  useNavigate
} from "react-router-dom";

import {
  loginUser
} from "../services/authService";

function Login() {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin =
    async (e) => {

      e.preventDefault();

      try {

        const response =
          await loginUser({

            email,

            password,

          });

        localStorage.setItem(

          "token",

          response.data.token

        );

        navigate("/dashboard");

      } catch (error) {

        alert(
          "Invalid Credentials"
        );

      }

    };

  return (

    <div style={{

      display: "flex",

      justifyContent: "center",

      alignItems: "center",

      height: "100vh",

      background: "#f3f4f6",

    }}>

      <form

        onSubmit={handleLogin}

        style={{

          background: "white",

          padding: "40px",

          borderRadius: "15px",

          width: "350px",

          boxShadow:
            "0 0 15px rgba(0,0,0,0.1)",

        }}
      >

        <h2 style={{

          textAlign: "center",

          marginBottom: "30px",

        }}>

          Login

        </h2>

        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e) =>
            setEmail(e.target.value)
          }

          required

          style={{

            width: "100%",

            padding: "12px",

            marginBottom: "20px",

            borderRadius: "8px",

            border:
              "1px solid #ccc",

          }}
        />

        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }

          required

          style={{

            width: "100%",

            padding: "12px",

            marginBottom: "20px",

            borderRadius: "8px",

            border:
              "1px solid #ccc",

          }}
        />

        <button

          type="submit"

          style={{

            width: "100%",

            padding: "12px",

            background: "#16a34a",

            color: "white",

            border: "none",

            borderRadius: "8px",

            cursor: "pointer",

            fontWeight: "bold",

          }}
        >

          Login

        </button>

        <p style={{

          marginTop: "15px",

          textAlign: "center",

          color: "gray",
        }}>

          Don't have an account?

          {" "}

          <a

            href="/register"

            style={{

              color: "#2563eb",

              fontWeight: "bold",

              textDecoration:
                "none",
            }}
          >

            Register

          </a>

        </p>

      </form>

    </div>

  );

}

export default Login;