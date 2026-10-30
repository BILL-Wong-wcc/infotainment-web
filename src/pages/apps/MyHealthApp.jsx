export default function MyHealthApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Health</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Records</h4>
          <p>Latest lab result available.</p>
        </div>
        <div className="app-content-card">
          <h4>Medication</h4>
          <p>Morning dose schedule updated.</p>
        </div>
      </div>
    </div>
  );
}
