export default function BillingEnquiryApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Billing</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Charges</h4>
          <p>Pending items overview.</p>
        </div>
        <div className="app-content-card">
          <h4>Payment</h4>
          <p>Available payment methods and details.</p>
        </div>
      </div>
    </div>
  );
}
