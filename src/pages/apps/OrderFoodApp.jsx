export default function OrderFoodApp({ app }) {
  return (
    <div className="app-content-panel">
      <div className="app-content-header">
        <div>
          <p className="app-content-kicker">Dining</p>
          <h3>{app.name}</h3>
        </div>
      </div>

      <div className="app-content-grid">
        <div className="app-content-card">
          <h4>Lunch order</h4>
          <p>Chicken, rice, soup and fruit.</p>
        </div>
        <div className="app-content-card">
          <h4>Delivery</h4>
          <p>Estimated arrival: 12:30 PM</p>
        </div>
      </div>
    </div>
  );
}
