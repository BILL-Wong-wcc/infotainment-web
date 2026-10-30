export default function VideoCallApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Communication</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid app-content-grid-single">
        <div className="app-content-card app-content-card-spotlight">
          <h4>Connected</h4>
          <p>Family call session ready.</p>
        </div>
      </div>
    </div>
  );
}
