import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import Theme from "./Components/Common/theme/theme";

document.addEventListener("DOMContentLoaded", () => {
  const serviceCardLayoutEls = document.querySelectorAll(
    ".wp-block-rascl-service-card-layout"
  );
  serviceCardLayoutEls.forEach((serviceCardLayoutEl) => {
    const attributes = JSON.parse(serviceCardLayoutEl.dataset.attributes);

    createRoot(serviceCardLayoutEl).render(
      <>
        <Style attributes={attributes} id={serviceCardLayoutEl.id} />

        <div className="app-container">
          <div className="card-section">
            <Theme attributes={attributes} />
          </div>
        </div>
      </>
    );

    serviceCardLayoutEl?.removeAttribute("data-attributes");
  });
});
