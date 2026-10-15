import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import BlankPage from './pages/BlankPage';

const apps = [
  { name: 'TV & Movies', icon: '📺', path: '/tv-movies' },
  { name: 'Order food', icon: '🍔', path: '/order-food' },
  { name: 'Video Call', icon: '📹', path: '/video-call' },
];

function Dashboard() {
  return (
    <main className="app-shell">
      <section className="dashboard">
        {apps.map((app) => (
          <Link key={app.name} to={app.path} className="app-tile">
            <span className="app-icon" aria-hidden="true">
              {app.icon}
            </span>
            <span className="app-label">{app.name}</span>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/tv-movies" element={<BlankPage />} />
      <Route path="/order-food" element={<BlankPage />} />
      <Route path="/video-call" element={<BlankPage />} />
    </Routes>
  );
}
