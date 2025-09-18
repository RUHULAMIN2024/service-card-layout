
function Theme2({ services }) {
  return (
    <div className="theme2">
      <div className="cards-grid">
        {services?.map((service, i) => (
          <div key={i} className="card">
            <div className="icon-wrapper">
            <div className="only-theme2"></div>
              <span dangerouslySetInnerHTML={{__html:service?.icon}} className="icon" />
            </div>
            <div className="content-section">
              <h3 className="card-title">{service?.title}</h3>
              <p className="card-description">{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theme2;
