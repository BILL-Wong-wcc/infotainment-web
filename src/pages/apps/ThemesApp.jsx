const themeDescriptions = {
  themeClassic: 'Traditional app grid with balanced spacing and familiar navigation.',
  themeHorizontal: 'Page-by-page horizontal flow optimized for touch swipe navigation.',
};

export default function ThemesApp({ app, parent }) {
  const description = themeDescriptions[app.contentKey] || 'Theme preview is ready.';

  return (
    <div className="app-content-panel themes-panel">
      <div className="themes-preview-card">
        <div className="app-content-header themes-preview-header">
          <div>
            <p className="app-content-kicker">{parent?.name || 'Themes'}</p>
            <h3>{app.name}</h3>
          </div>
        </div>

        <div className="app-content-grid app-content-grid-single">
          <article className="app-content-card app-content-card-spotlight">
            <h4>Preview</h4>
            <p>{description}</p>
          </article>
          <article className="app-content-card">
            <h4>Status</h4>
            <p>This theme option is available for the infotainment layout flow.</p>
          </article>
        </div>
      </div>
    </div>
  );
}
