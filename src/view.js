import { createRoot } from "react-dom/client";
import "./style.scss";
import Style from "./Components/Common/Style";
import Theme from "./Components/Common/theme/theme";

document.addEventListener("DOMContentLoaded", () => {
  const blockNameEls = document.querySelectorAll(
    ".wp-block-rascl-service-card-layout"
  );
  blockNameEls.forEach((blockNameEl) => {
    const attributes = JSON.parse(blockNameEl.dataset.attributes);

    createRoot(blockNameEl).render(
      <>
        <Style attributes={attributes} id={blockNameEl.id} />

        <div className="app-container">
          <div className="card-section">
            <Theme attributes={attributes} />
          </div>
        </div>
      </>
    );

    blockNameEl?.removeAttribute("data-attributes");
  });
});
