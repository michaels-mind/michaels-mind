import LightRays from "./components/LightRays";
import ClickSpark from "./components/ClickSpark";
import logoBg from "./assets/logo-bg.svg";

// Kein ElectricBorder, keine CSS-Animationen mehr importiert oder genutzt.

function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        position: "relative",
        backgroundColor: "#020817",
        overflow: "hidden",
      }}
    >
      {/* 1. Hintergrund-Effekt: Strahlen */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#00D9FF"
        raysSpeed={1.5}
        lightSpread={1.0}
        rayLength={1.4}
        followMouse={true}
        mouseInfluence={0.2}
        noiseAmount={0.08}
        distortion={0.05}
      />

      {/* Wrapper für Klick-Effekt */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
        }}
      >
        {/* 2. Interaktions-Effekt: Funken bei Klick */}
        <ClickSpark
          sparkColor="#00D9FF"
          sparkSize={10}
          sparkRadius={25}
          sparkCount={10}
          duration={500}
          extraScale={1.2}
        >
          {/* Zentrierter Inhalt */}
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
            {/* Logo Bereich - CLEAN, ohne Animationen */}
            <div style={{ marginBottom: "2rem" }}>
              <img
                src={logoBg}
                alt="Michaels Mind"
                style={{
                  width: "70vw",
                  maxWidth: "450px",
                  height: "auto",
                  display: "block",
                  // Nur minimaler statischer Schatten für Abhebung vom dunklen Hintergrund
                  filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))", 
                }}
              />
            </div>

            {/* Text Bereich */}
            <p
              style={{
                color: "#00D9FF",
                fontFamily: "'Courier New', Courier, monospace",
                fontSize: "0.9rem",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                opacity: 0.6,
                margin: 0,
                pointerEvents: "none",
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
