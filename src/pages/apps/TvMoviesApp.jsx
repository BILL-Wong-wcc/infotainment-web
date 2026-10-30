import { useEffect, useMemo, useRef, useState } from 'react';
import mytvsuperScreen from '../resource/appScreen/mytvsuperScreen.webp';
import hoyScreen from '../resource/appScreen/hoyScreen.png';
import viuScreen from '../resource/appScreen/viuScreen.png';
import netflixScreen from '../resource/appScreen/netflixScreen.png';
import disneyScreen from '../resource/appScreen/disneyScreen.png';
import hboScreen from '../resource/appScreen/hboScreen.webp';
import viuProgramScreen from '../resource/appScreen/program99.jpg';
import program96 from '../resource/appScreen/program96.jpg';
import program85 from '../resource/appScreen/program85.jpg';
import program83 from '../resource/appScreen/program83.jpg';
import program82 from '../resource/appScreen/program82.webp';
import program81 from '../resource/appScreen/program81.jpg';
import program78 from '../resource/appScreen/program78.jpg';
import program77 from '../resource/appScreen/program77.jpg';
import program76 from '../resource/appScreen/program76.jpg';
import program35 from '../resource/appScreen/program35.png';
import program34 from '../resource/appScreen/program34.png';
import program33 from '../resource/appScreen/program33.jpg';
import program32 from '../resource/appScreen/program32.webp';
import program31 from '../resource/appScreen/program31.png';

const hkFreeChannels = [
  { number: 31, name: 'RTHK 31', screen: program31 },
  { number: 32, name: 'RTHK 32', screen: program32 },
  { number: 33, name: 'RTHK 33', screen: program33 },
  { number: 34, name: 'RTHK 34', screen: program34 },
  { number: 35, name: 'RTHK 35', screen: program35 },
  { number: 76, name: 'HOY International Finance', screen: program76 },
  { number: 77, name: 'HOY TV', screen: program77 },
  { number: 78, name: 'HOY Info', screen: program78 },
  { number: 81, name: 'TVB Jade', screen: program81 },
  { number: 82, name: 'TVB Pearl', screen: program82 },
  { number: 83, name: 'TVB Plus', screen: program83 },
  { number: 85, name: 'TVB News', screen: program85 },
  { number: 96, name: 'ViuTVsix', screen: program96 },
  { number: 99, name: 'ViuTV', screen: viuProgramScreen },
];

const TV_WHEEL_STEP = 52;
const TV_SETTLE_DELAY_MS = 1000;

const getWheelStep = (listElement) => {
  if (!listElement) {
    return TV_WHEEL_STEP;
  }

  const firstItem = listElement.querySelector('.tv-channel-item');
  const measuredHeight = firstItem?.getBoundingClientRect().height;
  if (measuredHeight && measuredHeight > 0) {
    return measuredHeight;
  }

  const cssStep = Number.parseFloat(window.getComputedStyle(listElement).getPropertyValue('--tv-wheel-step'));
  if (Number.isFinite(cssStep) && cssStep > 0) {
    return cssStep;
  }

  return TV_WHEEL_STEP;
};

const screenByContentKey = {
  mytvsuper: mytvsuperScreen,
  hoyTV: hoyScreen,
  viutv: viuScreen,
  netflix: netflixScreen,
  disneyPlus: disneyScreen,
  hbo: hboScreen,
};

export default function TvMoviesApp({ app, parent }) {
  const channelListRef = useRef(null);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedChannel = useMemo(() => {
    if (selectedIndex === null) {
      return null;
    }

    return hkFreeChannels[selectedIndex] || null;
  }, [selectedIndex]);

  useEffect(() => {
    if (app.contentKey !== 'tv') {
      return undefined;
    }

    const list = channelListRef.current;
    if (!list) {
      return undefined;
    }

    list.scrollTop = 0;
    return undefined;
  }, [app.contentKey]);

  useEffect(() => {
    if (app.contentKey !== 'tv') {
      return undefined;
    }

    const timerId = window.setTimeout(() => {
      setSelectedIndex(focusedIndex);
    }, TV_SETTLE_DELAY_MS);

    return () => window.clearTimeout(timerId);
  }, [app.contentKey, focusedIndex]);

  if (app.contentKey === 'tv') {
    const handleListScroll = (event) => {
      const step = getWheelStep(event.currentTarget);
      const nextIndex = Math.floor((event.currentTarget.scrollTop + step / 2) / step);
      const clampedIndex = Math.max(0, Math.min(hkFreeChannels.length - 1, nextIndex));
      setFocusedIndex(clampedIndex);
    };

    const handleChannelClick = (index) => {
      const list = channelListRef.current;
      if (list) {
        const step = getWheelStep(list);
        list.scrollTo({
          top: index * step,
          behavior: 'smooth',
        });
      }

      setFocusedIndex(index);
    };

    const isLoading = selectedIndex === null || selectedIndex !== focusedIndex;

    return (
      <div className="tv-guide-layout">
        <aside className="tv-channel-sidebar" aria-label="TV channels">
          <p className="tv-sidebar-kicker">TV Channels</p>
          <div className="tv-channel-list" role="list" onScroll={handleListScroll} ref={channelListRef}>
            {hkFreeChannels.map((channel, index) => (
              <button
                key={`${channel.number}-${channel.name}`}
                type="button"
                className={`tv-channel-item${index === focusedIndex ? ' active' : ''}`}
                role="listitem"
                onClick={() => handleChannelClick(index)}
              >
                {channel.number} {channel.name}
              </button>
            ))}
          </div>
        </aside>

        <section className="tv-program-preview" aria-label="Program preview">
          {isLoading ? (
            <div className="tv-preview-loading" aria-live="polite">
              <span className="tv-loading-spinner" aria-hidden="true" />
              <span>Loading program...</span>
            </div>
          ) : (
            <img
              src={selectedChannel?.screen || viuProgramScreen}
              alt={`${selectedChannel?.name || 'Selected'} program preview`}
              className="tv-program-image"
            />
          )}
        </section>
      </div>
    );
  }

  const screenSrc = screenByContentKey[app.contentKey];

  if (screenSrc) {
    return (
      <div className="app-content-panel app-content-panel-screen">
        <img src={screenSrc} alt={`${app.name} captured screen`} className="app-screen-image" />
      </div>
    );
  }

  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">{parent ? parent.name : 'Entertainment'}</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid app-content-grid-single">
        <div className="app-content-card app-content-card-spotlight">
          <h4>{app.name}</h4>
          <p>Streaming app content</p>
        </div>
      </div>
    </div>
  );
}
