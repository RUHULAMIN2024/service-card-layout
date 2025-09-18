
function Theme1({ services }) {
  
  return (
    <div className="theme1">
      <div className="cards-grid">
        

        {services?.map((service, i) => (
          
          <div key={i} className="card">
           
            <div className="icon-wrapper">
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

export default Theme1;
