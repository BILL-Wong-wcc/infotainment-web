import wifiLogo from '../icon/wifi.svg';
import bhWifiQr from '../resource/bhWifi.svg';
import { useTranslation } from 'react-i18next';

export default function WifiInfoApp({ app }) {
  const { t } = useTranslation();
  return (
    <div className="app-content-panel wifi-info-panel">
      <div className="wifi-info-card">
        <div className="wifi-info-wordmark" aria-label="WIFI">
          <img src={wifiLogo} alt="Wifi logo" className="wifi-info-logo" />
          <h3>WIFI</h3>
        </div>

        <div className="wifi-info-body">
          <div className="wifi-info-login-block">
            <p className="wifi-info-section-title">{t('wifi.login')}</p>

            <div className="wifi-info-field">
              <p className="wifi-info-field-label">{t('wifi.network')}</p>
              <p className="wifi-info-field-value">HKBH_Free_Visitor_Secured</p>
            </div>

            <div className="wifi-info-field">
              <p className="wifi-info-field-label">{t('wifi.password')}</p>
              <p className="wifi-info-field-value">bhwifipwd</p>
            </div>
          </div>

          <div className="wifi-info-divider" aria-hidden="true" />

          <div className="wifi-info-qr-block">
            <p className="wifi-info-section-title">{t('wifi.scanCode')}</p>
            <img src={bhWifiQr} alt="Wifi QR code" className="wifi-info-qr" />
          </div>
        </div>
      </div>
    </div>
  );
}
