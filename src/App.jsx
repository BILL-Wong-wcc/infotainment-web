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
import WifiInfoApp from './pages/apps/WifiInfoApp';
import ThemesApp from './pages/apps/ThemesApp';
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
import wifiIcon from './pages/icon/wifi.svg';
import themesIcon from './pages/icon/themes.svg';
import languageIcon from './pages/icon/language.svg';
import hkbhLogo from './pages/resource/hkbh_logo.png';
import weather from './pages/resource/weather.png';
import tvIcon from './pages/resource/appIcon/tv.webp';
import myTvSuperIcon from './pages/resource/appIcon/mytvsuper.webp';
import hoyTvIcon from './pages/resource/appIcon/hoy.webp';
import viuTvIcon from './pages/resource/appIcon/viu.webp';
import netflixIcon from './pages/resource/appIcon/netflix.webp';
import disneyIcon from './pages/resource/appIcon/disney.webp';
import hboIcon from './pages/resource/appIcon/hbo.webp';
import classicThemeIcon from './pages/resource/appIcon/style-1-classic.svg';
import horizontalThemeIcon from './pages/resource/appIcon/style-2-horizontal-slide.svg';

const tvMoviesApps = [
  { name: 'TV', subtitle: 'Live channels', shortLabel: 'TV', colorClass: 'tile-teal', dialogSize: 'medium', contentKey: 'tv', icon: tvIcon },
  { name: 'myTV SUPER', subtitle: 'Live & catch-up', shortLabel: 'myTV', colorClass: 'tile-teal', dialogSize: 'medium', contentKey: 'mytvsuper', icon: myTvSuperIcon },
  { name: 'Hoy TV', subtitle: 'Shows & movies', shortLabel: 'HOY', colorClass: 'tile-cyan', dialogSize: 'medium', contentKey: 'hoyTV', icon: hoyTvIcon },
  { name: 'ViuTV', subtitle: 'Series & news', shortLabel: 'Viu', colorClass: 'tile-pink', dialogSize: 'medium', contentKey: 'viutv', icon: viuTvIcon },
  { name: 'Netflix', subtitle: 'Premium streaming', shortLabel: 'N', colorClass: 'tile-red', dialogSize: 'large', contentKey: 'netflix', icon: netflixIcon },
  { name: 'Disney+', subtitle: 'Family favorites', shortLabel: 'D+', colorClass: 'tile-indigo', dialogSize: 'large', contentKey: 'disneyPlus', icon: disneyIcon },
  { name: 'HBO', subtitle: 'Award-winning', shortLabel: 'HBO', colorClass: 'tile-purple', dialogSize: 'medium', contentKey: 'hbo', icon: hboIcon },
];

const themesApps = [
  { name: 'Classic', subtitle: 'Standard grid layout', shortLabel: 'C1', colorClass: 'tile-gray', dialogSize: 'small', contentKey: 'themeClassic', icon: classicThemeIcon },
  { name: 'Horizontal-slide', subtitle: 'Swipe-focused layout', shortLabel: 'HS', colorClass: 'tile-gray', dialogSize: 'small', contentKey: 'themeHorizontal', icon: horizontalThemeIcon },
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
  {
    name: 'Wifi info',
    subtitle: 'Connection details',
    colorClass: 'tile-red',
    icon: wifiIcon,
    dialogSize: 'small',
    contentKey: 'wifiInfo',
  },
  {
    name: 'Themes',
    subtitle: 'Select style',
    colorClass: 'tile-gray',
    icon: themesIcon,
    dialogSize: 'medium',
    contentKey: 'themes',
    children: themesApps,
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
  wifiInfo: WifiInfoApp,
  themes: ThemesApp,
  themeClassic: ThemesApp,
  themeHorizontal: ThemesApp,
  tv: TvMoviesApp,
  mytvsuper: TvMoviesApp,
  hoyTV: TvMoviesApp,
  viutv: TvMoviesApp,
  netflix: TvMoviesApp,
  disneyPlus: TvMoviesApp,
  hbo: TvMoviesApp,
};

const DASHBOARD_THEMES = {
  classic: 'classic',
  horizontal: 'horizontal',
};

function Dashboard({ onOpenApp, dashboardTheme }) {
  const currentTime = '2:50 PM';
  const currentDate = '30 SEP, 2026';
  const columnsPerPage = 5;
  const [isMobilePaged, setIsMobilePaged] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const [activeWheelIndex, setActiveWheelIndex] = useState(apps.length * 2);
  const appShellRef = useRef(null);
  const dashboardHeaderRef = useRef(null);
  const horizontalWheelRef = useRef(null);
  const activeWheelIndexRef = useRef(apps.length * 2);
  const pointerDownRef = useRef(false);
  const dragPointerIdRef = useRef(null);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const didDragRef = useRef(false);
  const suppressNextClickRef = useRef(false);
  const wheelDebounceRef = useRef(null);
  const [isWheelDragging, setIsWheelDragging] = useState(false);
  const [isWheelScrolling, setIsWheelScrolling] = useState(false);

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

  const horizontalLoopApps = useMemo(() => {
    if (dashboardTheme !== DASHBOARD_THEMES.horizontal) {
      return [];
    }

    return [...apps, ...apps, ...apps, ...apps, ...apps];
  }, [dashboardTheme]);

  useEffect(() => {
    activeWheelIndexRef.current = activeWheelIndex;
  }, [activeWheelIndex]);

  useEffect(() => {
    if (dashboardTheme !== DASHBOARD_THEMES.horizontal) {
      return undefined;
    }

    const track = horizontalWheelRef.current;
    if (!track || horizontalLoopApps.length === 0) {
      return undefined;
    }

    const baseCount = apps.length;
    const loopSafeStart = baseCount;
    const loopSafeEnd = baseCount * 4;
    let segmentWidth = 0;

    const centerToCard = (index, behavior = 'auto') => {
      const card = track.children[index];
      if (!card) {
        return;
      }

      const targetLeft = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
      track.scrollTo({ left: targetLeft, behavior });
      setActiveWheelIndex(index);
      activeWheelIndexRef.current = index;
    };

    const updateSegmentWidth = () => {
      const firstCard = track.children[0];
      const firstMiddleCard = track.children[baseCount];
      if (!firstCard || !firstMiddleCard) {
        return;
      }

      segmentWidth = firstMiddleCard.offsetLeft - firstCard.offsetLeft;
    };

    const getClosestIndex = () => {
      const trackCenter = track.scrollLeft + track.clientWidth / 2;
      let closest = baseCount;
      let minDistance = Number.POSITIVE_INFINITY;

      for (let index = 0; index < track.children.length; index += 1) {
        const card = track.children[index];
        const cardCenter = card.offsetLeft + card.clientWidth / 2;
        const distance = Math.abs(cardCenter - trackCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      }

      return closest;
    };

    const normalizeToMiddleSegmentIndex = (index) => {
      let normalized = index;
      while (normalized < loopSafeStart) {
        normalized += baseCount * 2;
      }
      while (normalized >= loopSafeEnd) {
        normalized -= baseCount * 2;
      }
      return normalized;
    };

    const snapToClosest = (behavior = 'smooth') => {
      const closestIndex = getClosestIndex();
      const normalizedIndex = normalizeToMiddleSegmentIndex(closestIndex);
      centerToCard(normalizedIndex, behavior);
    };

    let rafId = 0;
    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        if (segmentWidth > 0) {
          const closestIndex = getClosestIndex();
          if (closestIndex < loopSafeStart) {
            track.scrollLeft += segmentWidth * 2;
          } else if (closestIndex >= loopSafeEnd) {
            track.scrollLeft -= segmentWidth * 2;
          }
        }

        const closestIndex = getClosestIndex();
        const normalizedIndex = normalizeToMiddleSegmentIndex(closestIndex);
        setActiveWheelIndex(normalizedIndex);
        activeWheelIndexRef.current = normalizedIndex;
      });
    };

    const handleResize = () => {
      updateSegmentWidth();
      centerToCard(activeWheelIndexRef.current, 'auto');
    };

    updateSegmentWidth();
    const initialIndex = normalizeToMiddleSegmentIndex(activeWheelIndexRef.current);
    requestAnimationFrame(() => {
      centerToCard(initialIndex, 'auto');
    });

    track.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (wheelDebounceRef.current) {
        window.clearTimeout(wheelDebounceRef.current);
      }
      track.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [dashboardTheme, horizontalLoopApps.length]);

  const snapWheelToClosest = (behavior = 'smooth') => {
    const track = horizontalWheelRef.current;
    if (!track || dashboardTheme !== DASHBOARD_THEMES.horizontal) {
      return;
    }

    const baseCount = apps.length;
    const loopSafeStart = baseCount;
    const loopSafeEnd = baseCount * 4;
    const trackCenter = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = baseCount;
    let minDistance = Number.POSITIVE_INFINITY;

    for (let index = 0; index < track.children.length; index += 1) {
      const card = track.children[index];
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(cardCenter - trackCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    }

    while (closestIndex < loopSafeStart) {
      closestIndex += baseCount * 2;
    }
    while (closestIndex >= loopSafeEnd) {
      closestIndex -= baseCount * 2;
    }

    const card = track.children[closestIndex];
    if (!card) {
      return;
    }

    const targetLeft = card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left: targetLeft, behavior });
  };

  const onWheelPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) {
      return;
    }

    pointerDownRef.current = true;
    dragPointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragStartScrollRef.current = horizontalWheelRef.current?.scrollLeft ?? 0;
    didDragRef.current = false;
  };

  const onWheelPointerMove = (event) => {
    const track = horizontalWheelRef.current;
    if (!track || !pointerDownRef.current || dragPointerIdRef.current !== event.pointerId) {
      return;
    }

    const deltaX = event.clientX - dragStartXRef.current;
    if (!didDragRef.current && Math.abs(deltaX) > 6) {
      didDragRef.current = true;
      setIsWheelDragging(true);
      track.setPointerCapture(event.pointerId);
    }

    if (!didDragRef.current) {
      return;
    }

    event.preventDefault();
    track.scrollLeft = dragStartScrollRef.current - deltaX;
  };

  const endWheelPointerDrag = (event) => {
    const track = horizontalWheelRef.current;
    if (!track || dragPointerIdRef.current !== event.pointerId) {
      return;
    }

    if (didDragRef.current && track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }

    const wasDragging = didDragRef.current;
    pointerDownRef.current = false;
    setIsWheelDragging(false);
    dragPointerIdRef.current = null;

    if (wasDragging) {
      suppressNextClickRef.current = true;
      window.setTimeout(() => {
        suppressNextClickRef.current = false;
      }, 0);
      snapWheelToClosest('smooth');
    }
  };

  const onWheelPointerLeave = () => {
    if (!pointerDownRef.current || !didDragRef.current) {
      return;
    }

    snapWheelToClosest('smooth');
  };

  const onWheelScroll = (event) => {
    const track = horizontalWheelRef.current;
    if (!track || dashboardTheme !== DASHBOARD_THEMES.horizontal) {
      return;
    }

    const { deltaX, deltaY } = event;
    const horizontalDelta = Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : deltaY;
    if (Math.abs(horizontalDelta) < 0.5) {
      return;
    }

    event.preventDefault();
    track.scrollLeft += horizontalDelta;
    setIsWheelScrolling(true);

    if (wheelDebounceRef.current) {
      window.clearTimeout(wheelDebounceRef.current);
    }

    wheelDebounceRef.current = window.setTimeout(() => {
      setIsWheelScrolling(false);
      snapWheelToClosest('smooth');
    }, 120);
  };

  const onWheelTileClick = (event, app) => {
    if (didDragRef.current || suppressNextClickRef.current) {
      event.preventDefault();
      didDragRef.current = false;
      return;
    }

    onOpenApp(app);
  };

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
            <div className="avatar avatar-patient" aria-hidden="true" />
            <div>
              <p className="info-title">John Doe</p>
              <p className="info-subtitle">ID: #98245</p>
            </div>
          </article>

          <article className="info-card ward-card">
            <div>
              <p className="info-title">A-904</p>
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
          <span className="status-weather" aria-hidden="true">
            <div>
              <img src={weather} alt="weather" className="weather" />
            </div>
            <div>
              <p className="info-title">30ºC</p>
            </div>
          </span>
          <div className="clock-card" aria-label="Current time, date and language">
            <p className="clock-time">{currentTime}</p>
            <p className="clock-date">{currentDate}</p>
            <div className = "language-card" aria-label="Language">
              <img src={languageIcon} alt="Language" className="language-image" />
              <div className="language-text">繁/简</div>
            </div>
          </div>
        </div>
      </header>

      <main className="app-shell" ref={appShellRef}>
        <section className="dashboard" aria-labelledby="services-heading">
          <header className="dashboard-header" ref={dashboardHeaderRef}>
            <p>Tap any tile below to access services.</p>
          </header>

          {dashboardTheme === DASHBOARD_THEMES.horizontal ? (
            <div className="horizontal-wheel-wrap" aria-label="Horizontal app wheel">
              <div
                className={`horizontal-wheel-track${isWheelDragging ? ' is-dragging' : ''}${isWheelScrolling ? ' is-wheeling' : ''}`}
                ref={horizontalWheelRef}
                onPointerDown={onWheelPointerDown}
                onPointerMove={onWheelPointerMove}
                onPointerUp={endWheelPointerDrag}
                onPointerCancel={endWheelPointerDrag}
                onPointerLeave={onWheelPointerLeave}
                onWheel={onWheelScroll}
              >
                {horizontalLoopApps.map((app, index) => (
                  (() => {
                    const distanceFromActive = Math.abs(index - activeWheelIndex);
                    const zLayer = Math.max(1, 8 - distanceFromActive);

                    return (
                  <button
                    type="button"
                    key={`${app.name}-${index}`}
                    className={`app-tile wheel-tile ${app.colorClass} ${index === activeWheelIndex ? 'is-active' : ''}`}
                    style={{ zIndex: zLayer }}
                    onClick={(event) => onWheelTileClick(event, apps[index % apps.length])}
                  >
                    <span className="app-icon" aria-hidden="true">
                      {app.icon ? <img src={app.icon} alt="" className="app-icon-image" /> : null}
                    </span>
                    <span className="app-label">{app.name}</span>
                    <span className="app-subtitle">{app.subtitle}</span>
                  </button>
                    );
                  })()
                ))}
              </div>
            </div>
          ) : (
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
          )}
        </section>
      </main>
    </div>
  );
}

export default function App() {
  const [activeDialog, setActiveDialog] = useState(null);
  const [dashboardTheme, setDashboardTheme] = useState(DASHBOARD_THEMES.classic);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('dashboard-theme');
    if (savedTheme === DASHBOARD_THEMES.horizontal || savedTheme === DASHBOARD_THEMES.classic) {
      setDashboardTheme(savedTheme);
    }
  }, []);

  const applyDashboardTheme = (themeKey) => {
    setDashboardTheme(themeKey);
    window.localStorage.setItem('dashboard-theme', themeKey);
  };

  const mapThemeContentKey = (contentKey) => {
    if (contentKey === 'themeHorizontal') {
      return DASHBOARD_THEMES.horizontal;
    }

    if (contentKey === 'themeClassic') {
      return DASHBOARD_THEMES.classic;
    }

    return null;
  };

  const openChildApp = (child, parent) => {
    if (parent.contentKey === 'themes') {
      const selectedTheme = mapThemeContentKey(child.contentKey);
      if (selectedTheme) {
        applyDashboardTheme(selectedTheme);
        setActiveDialog(null);
        return;
      }
    }

    setActiveDialog({ type: 'app', app: child, parent });
  };

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
      <Dashboard onOpenApp={openApp} dashboardTheme={dashboardTheme} />

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
                  onClick={() => openChildApp(child, activeDialog.app)}
                >
                  <span className="folder-item-icon" aria-hidden="true">
                    {child.icon ? <img src={child.icon} alt="" className={`folder-item-icon-image${activeDialog.app.contentKey === 'themes' ? ' folder-item-icon-image-white' : ''}`} /> : (child.shortLabel || child.name.slice(0, 2).toUpperCase())}
                  </span>
                  <span className="folder-item-label">{child.name}</span>
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
