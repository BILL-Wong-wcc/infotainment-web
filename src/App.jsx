import { useEffect, useMemo, useRef, useState } from 'react';
import './App.css';
import DefaultAppView from './pages/apps/DefaultAppView';
import TvMoviesApp from './pages/apps/TvMoviesApp';
import WebBrowserApp from './pages/apps/WebBrowserApp';
import VideoCallApp from './pages/apps/VideoCallApp';
import OrderFoodApp from './pages/apps/OrderFoodApp';
import MyScheduleApp from './pages/apps/MyScheduleApp';
import MyHealthApp from './pages/apps/MyHealthApp';
import BillingEnquiryApp from './pages/apps/BillingEnquiryApp';
import HospitalInfoApp from './pages/apps/HospitalInfoApp';
import LearnApp from './pages/apps/LearnApp';
import MyFeedbackApp from './pages/apps/MyFeedbackApp';
import MirroringApp from './pages/apps/MirroringApp';
import BluetoothApp from './pages/apps/BluetoothApp';
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

const tvMoviesApps = [
  { name: 'TVB', subtitle: 'Live & catch-up', shortLabel: 'TVB', colorClass: 'tile-teal', dialogSize: 'medium', contentKey: 'tvb' },
  { name: 'Hoy TV', subtitle: 'Shows & movies', shortLabel: 'HOY', colorClass: 'tile-cyan', dialogSize: 'medium', contentKey: 'hoyTV' },
  { name: 'ViuTV', subtitle: 'Series & news', shortLabel: 'Viu', colorClass: 'tile-pink', dialogSize: 'medium', contentKey: 'viutv' },
  { name: 'Netflix', subtitle: 'Premium streaming', shortLabel: 'N', colorClass: 'tile-red', dialogSize: 'large', contentKey: 'netflix' },
  { name: 'Disney+', subtitle: 'Family favorites', shortLabel: 'D+', colorClass: 'tile-indigo', dialogSize: 'large', contentKey: 'disneyPlus' },
  { name: 'HBO', subtitle: 'Award-winning', shortLabel: 'HBO', colorClass: 'tile-purple', dialogSize: 'medium', contentKey: 'hbo' },
];

const apps = [
  {
    name: 'TV & Movies',
    subtitle: 'Watch shows',
    colorClass: 'tile-blue',
    icon: tvMoviesIcon,
    dialogSize: 'wide',
    contentKey: 'tvMovies',
    children: tvMoviesApps,
  },
  {
    name: 'Web Browser',
    subtitle: 'Search the internet',
    colorClass: 'tile-orange',
    icon: webIcon,
    dialogSize: 'large',
    contentKey: 'webBrowser',
  },
  {
    name: 'Video Call',
    subtitle: 'Call Family',
    colorClass: 'tile-purple',
    icon: videoCallIcon,
    dialogSize: 'medium',
    contentKey: 'videoCall',
  },
  {
    name: 'Order Food',
    subtitle: 'Lunch at 12:30 PM',
    colorClass: 'tile-green',
    icon: orderFoodIcon,
    dialogSize: 'small',
    contentKey: 'orderFood',
  },
  {
    name: 'My Schedule',
    subtitle: '2 activities today',
    colorClass: 'tile-teal',
    icon: myScheduleIcon,
    dialogSize: 'small',
    contentKey: 'mySchedule',
  },
  {
    name: 'My Health',
    subtitle: 'Records & Meds',
    colorClass: 'tile-lime',
    icon: myHealthIcon,
    dialogSize: 'medium',
    contentKey: 'myHealth',
  },
  {
    name: 'Billing Enquiry',
    subtitle: 'View charges & pay',
    colorClass: 'tile-amber',
    icon: billingEnquiryIcon,
    dialogSize: 'medium',
    contentKey: 'billingEnquiry',
  },
  {
    name: 'Hospital Info',
    subtitle: 'Services & Billing',
    colorClass: 'tile-cyan',
    icon: hospitalInfoIcon,
    dialogSize: 'small',
    contentKey: 'hospitalInfo',
  },
  {
    name: 'Learn',
    subtitle: 'Health information',
    colorClass: 'tile-pink',
    icon: learnIcon,
    dialogSize: 'medium',
    contentKey: 'learn',
  },
  {
    name: 'My Feedback',
    subtitle: 'Share your thoughts',
    colorClass: 'tile-magenta',
    icon: myFeedbackIcon,
    dialogSize: 'small',
    contentKey: 'myFeedback',
  },
  {
    name: 'Mirroring',
    subtitle: 'Search your Internet',
    colorClass: 'tile-slate',
    icon: mirroringIcon,
    dialogSize: 'medium',
    contentKey: 'mirroring',
  },
  {
    name: 'Bluetooth',
    subtitle: 'Pair devices',
    colorClass: 'tile-indigo',
    icon: bluetoothIcon,
    dialogSize: 'small',
    contentKey: 'bluetooth',
  },
];

const appContentMap = {
  tvMovies: TvMoviesApp,
  webBrowser: WebBrowserApp,
  videoCall: VideoCallApp,
  orderFood: OrderFoodApp,
  mySchedule: MyScheduleApp,
  myHealth: MyHealthApp,
  billingEnquiry: BillingEnquiryApp,
  hospitalInfo: HospitalInfoApp,
  learn: LearnApp,
  myFeedback: MyFeedbackApp,
  mirroring: MirroringApp,
  bluetooth: BluetoothApp,
  tvb: DefaultAppView,
  hoyTV: DefaultAppView,
  viutv: DefaultAppView,
  netflix: DefaultAppView,
  disneyPlus: DefaultAppView,
  hbo: DefaultAppView,
};

function Dashboard({ onOpenApp }) {
  const currentTime = '5:36 PM';
  const currentDate = 'Oct 24, 2023';
  const columnsPerPage = 5;
  const [isMobilePaged, setIsMobilePaged] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const appShellRef = useRef(null);
  const dashboardHeaderRef = useRef(null);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 1024px) and (hover: none) and (pointer: coarse)');

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
                      <button
                        type="button"
                        key={app.name}
                        className={`app-tile ${app.colorClass}`}
                        onClick={() => onOpenApp(app)}
                      >
                        <span className="app-icon" aria-hidden="true">
                          {app.icon ? <img src={app.icon} alt="" className="app-icon-image" /> : null}
                        </span>
                        <span className="app-label">{app.name}</span>
                        <span className="app-subtitle">{app.subtitle}</span>
                      </button>
                    ))}
                  </div>
                ))
              : apps.map((app) => (
                  <button
                    type="button"
                    key={app.name}
                    className={`app-tile ${app.colorClass}`}
                    onClick={() => onOpenApp(app)}
                  >
                    <span className="app-icon" aria-hidden="true">
                      {app.icon ? <img src={app.icon} alt="" className="app-icon-image" /> : null}
                    </span>
                    <span className="app-label">{app.name}</span>
                    <span className="app-subtitle">{app.subtitle}</span>
                  </button>
                ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [activeDialog, setActiveDialog] = useState(null);

  const openApp = (app) => {
    if (app.children && app.children.length > 0) {
      setActiveDialog({ type: 'folder', app });
      return;
    }

    setActiveDialog({ type: 'app', app });
  };

  const closeDialog = () => setActiveDialog(null);

  return (
    <>
      <Dashboard onOpenApp={openApp} />

      {activeDialog && activeDialog.type === 'folder' && (
        <div className="dialog-backdrop" onClick={closeDialog}>
          <div
            className={`app-dialog dialog-${activeDialog.app.dialogSize || 'medium'} ${activeDialog.type === 'folder' ? 'dialog-folder' : ''}`}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="dialog-header">
              <div className="dialog-title-group">
                <span className="dialog-dot" />
                <h2>{activeDialog.app.name}</h2>
              </div>
              <button type="button" className="dialog-close" onClick={closeDialog} aria-label="Close dialog">
                ×
              </button>
            </div>

            <div className="folder-grid">
              {activeDialog.app.children.map((child) => (
                <button
                  key={child.name}
                  type="button"
                  className={`folder-item ${child.colorClass || 'tile-indigo'}`}
                  onClick={() => setActiveDialog({ type: 'app', app: child, parent: activeDialog.app })}
                >
                  <span className="folder-item-icon" aria-hidden="true">
                    {child.shortLabel || child.name.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="folder-item-label">{child.name}</span>
                  <span className="folder-item-subtitle">{child.subtitle}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeDialog && activeDialog.type === 'app' && (() => {
        const AppView = appContentMap[activeDialog.app.contentKey] || DefaultAppView;
        return (
          <div className="app-window-iframe" role="dialog" aria-modal="true">
            <div className="app-window-header">
              <button type="button" className="window-close" onClick={closeDialog} aria-label="Close app view">
                ×
              </button>
            </div>
            <AppView app={activeDialog.app} parent={activeDialog.parent} />
          </div>
        );
      })()}

      <div className="rotate-overlay" role="dialog" aria-modal="true" aria-live="polite">
        <div className="rotate-card">
          <p>Please rotate your phone and then refresh the page</p>
        </div>
      </div>
    </>
  );
}
