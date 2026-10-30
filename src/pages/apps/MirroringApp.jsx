export default function MirroringApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Display</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid app-content-grid-single">
        <div className="app-content-card app-content-card-spotlight">
          <h4>Screen sharing</h4>
          <p>Mirror or cast available devices.</p>
        </div>
      </div>
    </div>
  );
}
