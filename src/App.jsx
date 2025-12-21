// App.jsx
import LightRays from './components/LightRays';
import CountUp from './components/CountUp';
import Spinner from './components/Spinner';
import './components/Spinner.css';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',        // exakt wie das 600px-Beispiel, nur fullscreen
        position: 'relative',
        backgroundColor: '#020817',
        overflow: 'hidden',
      }}
    >
      {/* LightRays füllt diesen Wrapper vollständig */}
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

      {/* Inhalt zentriert innerhalb des gleichen Wrappers */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
            <span
              style={{
                color: '#00D9FF',
                fontSize: 'clamp(3rem, 10vw, 6rem)',
                fontWeight: 900,
              }}
            >
              <CountUp
                from={0}
                to={99}
                separator=""
                direction="up"
                duration={1.5}
              />
            </span>
            <span
              style={{
                color: '#00D9FF',
                fontSize: '2rem',
                fontWeight: 500,
              }}
            >
              %
            </span>
          </div>

          <Spinner />
        </div>
      </div>
    </div>
  );
}

export default App;
