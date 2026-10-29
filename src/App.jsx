import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import BlankPage from './pages/BlankPage';
import tvMoviesIcon from './pages/icon/tv-movies.svg';
import webIcon from './pages/icon/web-browser.svg';
import videoCallIcon from './pages/icon/video-call.svg';
import orderFoodIcon from './pages/icon/order-food.svg';
import myScheduleIcon from './pages/icon/my-schedule.svg';
import myHealthIcon from './pages/icon/my-health.svg';
import billingEnquiryIcon from './pages/icon/billing-enquiry.svg';
import hospitalInfoIcon from './pages/icon/hospital-info.svg';
import learnIcon from './pages/icon/learn.svg';
import myFeedbackIcon from './pages/icon/my-feedback.svg';
import mirroringIcon from './pages/icon/mirroring.svg';
import bluetoothIcon from './pages/icon/bluetooth.svg';
import hkbhLogo from './pages/resource/hkbh_logo.png';

const apps = [
  {
    name: 'TV & Movies',
    subtitle: 'Watch shows',
    path: '/tv-movies',
    colorClass: 'tile-blue',
    icon: tvMoviesIcon,
  },
  {
    name: 'Web Browser',
    subtitle: 'Search the internet',
    path: '/web-browser',
    colorClass: 'tile-orange',
    icon: webIcon,
  },
  {
    name: 'Video Call',
    subtitle: 'Call Family',
    path: '/video-call',
    colorClass: 'tile-purple',
    icon: videoCallIcon,
  },
  {
    name: 'Order Food',
    subtitle: 'Lunch at 12:30 PM',
    path: '/order-food',
    colorClass: 'tile-green',
    icon: orderFoodIcon,
  },
  {
    name: 'My Schedule',
    subtitle: '2 activities today',
    path: '/my-schedule',
    colorClass: 'tile-teal',
    icon: myScheduleIcon,
  },
  {
    name: 'My Health',
    subtitle: 'Records & Meds',
    path: '/my-health',
    colorClass: 'tile-lime',
    icon: myHealthIcon,
  },
  {
    name: 'Billing Enquiry',
    subtitle: 'View charges & pay',
    path: '/billing-enquiry',
    colorClass: 'tile-amber',
    icon: billingEnquiryIcon,
  },
  {
    name: 'Hospital Info',
    subtitle: 'Services & Billing',
    path: '/hospital-info',
    colorClass: 'tile-cyan',
    icon: hospitalInfoIcon,
  },
  {
    name: 'Learn',
    subtitle: 'Health information',
    path: '/learn',
    colorClass: 'tile-pink',
    icon: learnIcon,
  },
  {
    name: 'My Feedback',
    subtitle: 'Share your thoughts',
    path: '/my-feedback',
    colorClass: 'tile-magenta',
    icon: myFeedbackIcon,
  },
  {
    name: 'Mirroring',
    subtitle: 'Search your Internet',
    path: '/mirroring',
    colorClass: 'tile-slate',
    icon: mirroringIcon,
  },
  {
    name: 'Bluetooth',
    subtitle: 'Pair devices',
    path: '/bluetooth',
    colorClass: 'tile-indigo',
    icon: bluetoothIcon,
  },
];

function Dashboard() {
  const currentTime = '5:36 PM';
  const currentDate = 'Oct 24, 2023';
  const columnsPerPage = 5;
  const [isMobilePaged, setIsMobilePaged] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const appShellRef = useRef(null);
  const dashboardHeaderRef = useRef(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(hover: none) and (pointer: coarse)');

    const updateLayout = () => {
      const isMobile = mobileQuery.matches;
      setIsMobilePaged(isMobile);

      if (!isMobile) {
        setRowsPerPage(3);
        return;
      }

      const shell = appShellRef.current;
      if (!shell) {
        return;
      }

      const styles = window.getComputedStyle(shell);
      const shellPaddingTop = Number.parseFloat(styles.paddingTop) || 0;
      const shellPaddingBottom = Number.parseFloat(styles.paddingBottom) || 0;
      const shellPaddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
      const shellPaddingRight = Number.parseFloat(styles.paddingRight) || 0;
      const appAreaHeight = shell.clientHeight - shellPaddingTop - shellPaddingBottom;
      const appAreaWidth = shell.clientWidth - shellPaddingLeft - shellPaddingRight;

      const headerHeight = dashboardHeaderRef.current?.offsetHeight || 0;
      const gridGap = 16;
      const tileWidth = Math.max(0, (appAreaWidth - gridGap * (columnsPerPage - 1)) / columnsPerPage);
      const tileHeight = tileWidth * (3.5 / 4.5);
      const availableHeight = Math.max(0, appAreaHeight - headerHeight - 8);
      const computedRows = Math.floor((availableHeight + gridGap) / (tileHeight + gridGap));
      const nextRows = Math.max(1, Math.min(3, computedRows));

      setRowsPerPage(nextRows);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);

    const onMobileChange = () => updateLayout();
    if (typeof mobileQuery.addEventListener === 'function') {
      mobileQuery.addEventListener('change', onMobileChange);
    } else {
      mobileQuery.addListener(onMobileChange);
    }

    return () => {
      window.removeEventListener('resize', updateLayout);
      if (typeof mobileQuery.removeEventListener === 'function') {
        mobileQuery.removeEventListener('change', onMobileChange);
      } else {
        mobileQuery.removeListener(onMobileChange);
      }
    };
  }, []);

  const itemsPerPage = rowsPerPage * columnsPerPage;
  const pagedApps = useMemo(() => {
    if (!isMobilePaged) {
      return [apps];
    }

    const pages = [];
    for (let index = 0; index < apps.length; index += itemsPerPage) {
      pages.push(apps.slice(index, index + itemsPerPage));
    }

    return pages;
  }, [isMobilePaged, itemsPerPage]);

  return (
    <div className="page-wrap">
      <header className="topbar" role="banner">
        <div className="topbar-group topbar-left">
          <article className="hospital-card">
            <div>
              <img src={hkbhLogo} alt="Hospital Logo" className="hospital-logo" />
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
        </div>
      </header>

      <main className="app-shell" ref={appShellRef}>
        <section className="dashboard" aria-labelledby="services-heading">
          <header className="dashboard-header" ref={dashboardHeaderRef}>
            <p>Tap any tile below to access services.</p>
          </header>

          <div className={`tile-grid${isMobilePaged ? ' tile-grid-paged' : ''}`}>
            {isMobilePaged
              ? pagedApps.map((page, pageIndex) => (
                  <div className="tile-page" key={`page-${pageIndex}`} aria-label={`App page ${pageIndex + 1}`}>
                    {page.map((app) => (
                      <Link key={app.name} to={app.path} className={`app-tile ${app.colorClass}`}>
                        <span className="app-icon" aria-hidden="true">
                          {app.icon ? <img src={app.icon} alt="" className="app-icon-image" /> : null}
                        </span>
                        <span className="app-label">{app.name}</span>
                        <span className="app-subtitle">{app.subtitle}</span>
                      </Link>
                    ))}
                  </div>
                ))
              : apps.map((app) => (
                  <Link key={app.name} to={app.path} className={`app-tile ${app.colorClass}`}>
                    <span className="app-icon" aria-hidden="true">
                      {app.icon ? <img src={app.icon} alt="" className="app-icon-image" /> : null}
                    </span>
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
    <>
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
        <Route path="/mirroring" element={<BlankPage />} />
        <Route path="/bluetooth" element={<BlankPage />} />
      </Routes>

      <div className="rotate-overlay" role="dialog" aria-modal="true" aria-live="polite">
        <div className="rotate-card">
          <p>Please rotate your phone and then refresh the page</p>
        </div>
      </div>
    </>
  );
}
