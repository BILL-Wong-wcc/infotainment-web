export default function WifiInfoApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Network</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Current Wi-Fi</h4>
          <p>Connected to HospitalGuest on 5 GHz.</p>
        </div>
        <div className="app-content-card">
          <h4>Signal & Speed</h4>
          <p>Strong signal, estimated speed 120 Mbps.</p>
        </div>
      </div>
    </div>
  );
}
