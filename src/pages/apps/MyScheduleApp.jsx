export default function MyScheduleApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Schedule</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Today</h4>
          <p>Consultation at 10:30 AM</p>
        </div>
        <div className="app-content-card">
          <h4>Reminder</h4>
          <p>2 activities scheduled for today.</p>
        </div>
      </div>
    </div>
  );
}
