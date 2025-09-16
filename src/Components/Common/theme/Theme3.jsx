import { Code, Palette, Zap } from 'lucide-react';

function Theme3({ services }) {
  return (
    <div className="theme3">
      <div className="cards-grid">
        {services?.map((service, i) => (
          <div key={i} className="card">
            <div className="diagonal-bg"></div>

            <div className="icon-wrapper">
              <Palette className="icon" />
            </div>
            <div className="content-section">
              <div className="accent-line"></div>

              <h3 className="card-title">{service?.title}</h3>
              <p className="card-description">{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theme3;
