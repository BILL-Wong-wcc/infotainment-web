export default function TvMoviesApp({ app, parent }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">{parent ? parent.name : 'Entertainment'}</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        {['TVB', 'Hoy TV', 'ViuTV', 'Netflix', 'Disney+', 'HBO'].map((item) => (
          <div key={item} className="app-content-card app-content-card-spotlight">
            <h4>{item}</h4>
            <p>Streaming app content</p>
          </div>
        ))}
      </div>
    </div>
  );
}
