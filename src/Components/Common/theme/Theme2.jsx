
function Theme2({ attributes, setAttributes }) {

  const {services, styles}=attributes;
  const {icon, title, description}=styles?.content
  return (
    <div className="theme2">
      <div className="cards-grid">
        {services?.map((service, i) => (
          <div key={i} onClick={() => setAttributes({ activeServiceIdx: i })} className="card">
            {
              icon?.display && <div className="icon-wrapper">
              <span dangerouslySetInnerHTML={{__html:service?.icon}} className="icon" />
            </div>
            }
            <div className="content-section">
              {
                title?.display && <h3 className="card-title">{service?.title}</h3>
              }
              {
                description?.display && <p className="card-description">{service?.description}</p>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Theme2;
