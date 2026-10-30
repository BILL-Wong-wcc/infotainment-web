export default function HospitalInfoApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Hospital</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Services</h4>
          <p>Departments and visiting information.</p>
        </div>
        <div className="app-content-card">
          <h4>Directions</h4>
          <p>Maps and navigation assistance.</p>
        </div>
      </div>
    </div>
  );
}
