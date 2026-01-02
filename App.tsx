
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light"
      style={{ gap: "15px" }}
    >
      <h1 className="display-4 fw-bold" style={{ color: "#2C3E50" }}>
        Welcome to My App
      </h1>

      <Button
        variant="dark"
        size="lg"
        style={{
          background: "linear-gradient(135deg, #6C63FF, #3F3D56)",
          border: "none",
          borderRadius: "50px",
          padding: "12px 40px",
          fontSize: "1.2rem",
          fontWeight: "600",
          boxShadow: "0 8px 15px rgba(0,0,0,0.2)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 12px 20px rgba(0,0,0,0.3)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 15px rgba(0,0,0,0.2)";
        }}
      >
        Click Me
      </Button>
    </div>
  );
};

export default App;





// app.tsx is where we define our main application component and app is called in main.tsx to be rendered to the DOM
// app is called by main which is in turn is called by index.html where the app is injected into the root div