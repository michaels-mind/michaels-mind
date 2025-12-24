// App.jsx
import { useEffect } from "react";
import LightRays from "./components/LightRays";
import ClickSpark from "./components/ClickSpark";
import logoBg from "./assets/logo-bg.svg"; // Dein cooles SVG
// Spinner & CountUp nicht mehr nötig

function App() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh", // Safari Mobile Fix
        position: "relative",
        backgroundColor: "#020817",
        overflow: "hidden",
      }}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#00D9FF"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
        }}
      >
        <ClickSpark
          sparkColor="#00D9FF"
          sparkSize={10}
          sparkRadius={25}
          sparkCount={10}
          duration={500}
          extraScale={1.2}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Hero Logo */}
            <div style={{ position: "relative", marginBottom: "1.5rem" }}>
              <img
                src={logoBg}
                alt="Michaels Mind"
                style={{
                  width: "70vw", // Groß, aber nicht zu wuchtig
                  maxWidth: "450px",
                  height: "auto",
                  filter: "drop-shadow(0 0 15px rgba(0, 217, 255, 0.15))", // Subtiler Glow
                  opacity: 0.95,
                  display: "block",
                }}
              />
            </div>

            {/* Minimalistischer Text */}
            <p
              style={{
                color: "#00D9FF",
                fontFamily: "'Courier New', Courier, monospace", // Tech/Code Font
                fontSize: "0.9rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                opacity: 0.6,
                margin: 0,
                textShadow: "0 0 5px rgba(0, 217, 255, 0.3)",
              }}
            >
              Loading Future
            </p>
          </div>
        </ClickSpark>
      </div>
    </div>
  );
}

export default App;
