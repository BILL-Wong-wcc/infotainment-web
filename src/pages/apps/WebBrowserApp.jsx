export default function WebBrowserApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Internet</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Search</h4>
          <p>Browse the web in a dedicated in-app panel.</p>
        </div>
        <div className="app-content-card">
          <h4>Favorites</h4>
          <p>Bookmark hospital and patient information pages.</p>
        </div>
      </div>
    </div>
  );
}
