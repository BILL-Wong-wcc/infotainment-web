import { useState } from 'react';

export default function WebBrowserApp({ app }) {
  const homeUrl = 'https://www.hkbh.org.hk/';
  const [urlInput, setUrlInput] = useState(homeUrl);
  const [currentUrl, setCurrentUrl] = useState(homeUrl);

  const normalizeUrl = (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return homeUrl;
    }

    if (/^https?:\/\//i.test(trimmed)) {
      return trimmed;
    }

    return `https://${trimmed}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextUrl = normalizeUrl(urlInput);
    setUrlInput(nextUrl);
    setCurrentUrl(nextUrl);
  };

  return (
    <div className="app-content-panel web-browser-panel">
      <form className="web-browser-toolbar" role="search" aria-label="Browser address bar" onSubmit={handleSubmit}>
        <label className="web-browser-home-label" htmlFor="browser-url-input">URL</label>
        <input
          id="browser-url-input"
          className="web-browser-url-input"
          type="text"
          value={urlInput}
          onChange={(event) => setUrlInput(event.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
        <button type="submit" className="web-browser-go-btn">Go</button>
      </form>

      <div className="web-browser-frame-wrap">
        <iframe
          src={currentUrl}
          title={`${app.name} home page`}
          className="web-browser-iframe"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
