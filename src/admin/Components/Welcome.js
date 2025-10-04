import Changelog from "../../../../bpl-tools/Admin/Changelog/Changelog";
import FSCheckoutButton from "../../../../bpl-tools/Admin/FSCheckoutButton/FSCheckoutButton";
import Overview from "../../../../bpl-tools/Admin/Overview/Overview";

import { changelogs } from "../utils/data";

const Welcome = (props) => {
  const { name, isPremium, freemius } = props;

  return (
    <>
      <Overview {...props}>
        {!isPremium && (
          <button
            type="button"
            className="bPlButton variant-primary"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "#/pricing";
            }}
          >
            Buy Now
          </button>
        )}
      </Overview>

      <Changelog changelogs={changelogs} {...props} />
    </>
  );
};
export default Welcome;
