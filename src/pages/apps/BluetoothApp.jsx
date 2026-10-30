export default function BluetoothApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Devices</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Available</h4>
          <p>Headphones, speakers and other devices.</p>
        </div>
        <div className="app-content-card">
          <h4>Paired</h4>
          <p>Device list and connection status.</p>
        </div>
      </div>
    </div>
  );
}
