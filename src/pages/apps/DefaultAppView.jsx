export default function DefaultAppView({ app, parent }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">{parent ? parent.name : 'Application'}</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Overview</h4>
          <p>This is a placeholder for {app.name}. You can customize this file individually.</p>
        </div>
        <div className="app-content-card">
          <h4>Details</h4>
          <p>Keep each screen in its own JSX file so it is easier to edit one by one.</p>
        </div>
      </div>
    </div>
  );
}
