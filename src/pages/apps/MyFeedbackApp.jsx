export default function MyFeedbackApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Feedback</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Share</h4>
          <p>Tell us about your experience and suggestions.</p>
        </div>
        <div className="app-content-card">
          <h4>Rate</h4>
          <p>Leave a quick rating about the care journey.</p>
        </div>
      </div>
    </div>
  );
}
