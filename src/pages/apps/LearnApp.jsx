export default function LearnApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Education</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Topics</h4>
          <p>Healthy habits and recovery learning.</p>
        </div>
        <div className="app-content-card">
          <h4>Reading list</h4>
          <p>Short and convenient care guides.</p>
        </div>
      </div>
    </div>
  );
}
