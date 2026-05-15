import { Link } from "react-router-dom";

function LandingPage() {

  return (

    <div style={{
      minHeight: "100vh",
      background: "#f5f7f6",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        fontSize: "60px",
        color: "green",
        marginBottom: "20px"
      }}>
        ComplyFlow
      </h1>

      <p style={{
        fontSize: "22px",
        color: "#555",
        marginBottom: "30px"
      }}>
        Smart Compliance Management Platform
      </p>

      <Link
        to="/login"
        style={{
          marginTop: "30px",
          background: "green",
          color: "white",
          padding: "15px 30px",
          borderRadius: "10px",
          fontSize: "18px",
          textDecoration: "none",
          display: "inline-block"
        }}
      >
        Start Free
      </Link>

    </div>

  );

}

export default LandingPage;