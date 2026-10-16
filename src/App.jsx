import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import BlankPage from './pages/BlankPage';

const apps = [
  {
    name: 'TV & Movies',
    subtitle: 'Watch shows',
    path: '/tv-movies',
    colorClass: 'tile-blue',
  },
  {
    name: 'Order Food',
    subtitle: 'Lunch at 12:30 PM',
    path: '/order-food',
    colorClass: 'tile-orange',
  },
  {
    name: 'Video Call',
    subtitle: 'Call family',
    path: '/video-call',
    colorClass: 'tile-purple',
  },
  {
    name: 'My Health',
    subtitle: 'Records & Meds',
    path: '/my-health',
    colorClass: 'tile-green',
  },
  {
    name: 'Room Controls',
    subtitle: 'Lights, Temp, Blinds',
    path: '/room-controls',
    colorClass: 'tile-indigo',
  },
  {
    name: 'My Schedule',
    subtitle: '2 activities today',
    path: '/my-schedule',
    colorClass: 'tile-teal',
  },
  {
    name: 'Learn',
    subtitle: 'Health information',
    path: '/learn',
    colorClass: 'tile-pink',
  },
  {
    name: 'Hospital Info',
    subtitle: 'Services & Billing',
    path: '/hospital-info',
    colorClass: 'tile-slate',
  },
  {
    name: 'Billing Enquiry',
    subtitle: 'View charges & pay',
    path: '/billing-enquiry',
    colorClass: 'tile-amber',
  },
  {
    name: 'Web Browser',
    subtitle: 'Search the internet',
    path: '/web-browser',
    colorClass: 'tile-cyan',
  },
  {
    name: 'My Feedback',
    subtitle: 'Share your thoughts',
    path: '/my-feedback',
    colorClass: 'tile-magenta',
  },
];

function Dashboard() {
  const currentTime = '5:36 PM';
  const currentDate = 'Oct 24, 2023';

  return (
    <div className="page-wrap">
      <header className="topbar" role="banner">
        <div className="topbar-group topbar-left">
          <article className="info-card hospital-card">
            <div className="avatar avatar-mint" aria-hidden="true" />
            <div>
              <p className="info-title">City General</p>
              <p className="info-subtitle">Room 402</p>
            </div>
          </article>

          <article className="info-card patient-card">
            <div className="avatar avatar-patient" aria-hidden="true">👨🏽</div>
            <div>
              <p className="info-title">John Doe</p>
              <p className="info-subtitle">ID: #98245</p>
            </div>
          </article>
        </div>

        <div className="topbar-group care-team" aria-label="Care team members">
          <div className="staff-chip">
            <div className="avatar avatar-staff avatar-doctor" aria-hidden="true" />
            <div>
              <p className="staff-role">DOCTOR</p>
              <p className="staff-name">Dr. Smith</p>
            </div>
          </div>

          <div className="staff-chip">
            <div className="avatar avatar-staff avatar-nurse" aria-hidden="true" />
            <div>
              <p className="staff-role">NURSE</p>
              <p className="staff-name">Sarah</p>
            </div>
          </div>
        </div>

        <div className="topbar-group topbar-right">
          <span className="status-pill" aria-hidden="true">
            <span className="status-dot" />
          </span>
          <div className="clock-card" aria-label="Current time and date">
            <p className="clock-time">{currentTime}</p>
            <p className="clock-date">{currentDate}</p>
          </div>
          <button type="button" className="help-button">
            CALL HELP
          </button>
        </div>
      </header>

      <main className="app-shell">
        <section className="dashboard" aria-labelledby="services-heading">
          <header className="dashboard-header">
            <h1 id="services-heading">What would you like to do?</h1>
            <p>Tap any tile below to access services.</p>
          </header>

          <div className="tile-grid">
            {apps.map((app) => (
              <Link key={app.name} to={app.path} className={`app-tile ${app.colorClass}`}>
                <span className="app-icon" aria-hidden="true" />
                <span className="app-label">{app.name}</span>
                <span className="app-subtitle">{app.subtitle}</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tv-movies" element={<BlankPage />} />
      <Route path="/order-food" element={<BlankPage />} />
      <Route path="/video-call" element={<BlankPage />} />
      <Route path="/my-health" element={<BlankPage />} />
      <Route path="/room-controls" element={<BlankPage />} />
      <Route path="/my-schedule" element={<BlankPage />} />
      <Route path="/learn" element={<BlankPage />} />
      <Route path="/hospital-info" element={<BlankPage />} />
      <Route path="/billing-enquiry" element={<BlankPage />} />
      <Route path="/web-browser" element={<BlankPage />} />
      <Route path="/my-feedback" element={<BlankPage />} />
    </Routes>
  );
}
