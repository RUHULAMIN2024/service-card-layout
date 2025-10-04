import { HashRouter as Router, Route, Routes } from "react-router-dom";

import ListDemos from "../../../../bpl-tools/Admin/Demos/ListDemos";
import FilterDemos from "../../../../bpl-tools/Admin/Demos/FilterDemos";
import FSCheckoutButton from "../../../../bpl-tools/Admin/FSCheckoutButton/FSCheckoutButton";
import FSCheckoutForm from "../../../../bpl-tools/Admin/FSCheckoutForm/FSCheckoutForm";
import Pricing from "../../../../bpl-tools/Admin/Pricing/Pricing";
import FeatureCompare from "../../../../bpl-tools/Admin/FeatureCompare/FeatureCompare";

import Layout from "./Layout";
import {
  demoInfo,
  featureCompareInfo,
  filterDemoInfo,
  pricingInfo,
} from "../utils/data";
import Welcome from "./Welcome";

const App = (props) => {
  const { name, isPremium, freemius } = props;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout {...props} />}>
          <Route index element={<Welcome {...props} />} />

          <Route path="welcome" element={<Welcome {...props} />} />

          <Route
            path="demos"
            element={
              <ListDemos demoInfo={demoInfo} {...props}>
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
              </ListDemos>
            }
          />

          <Route
            path="filter-demos"
            element={
              <FilterDemos demoInfo={filterDemoInfo} {...props}>
                {!isPremium && (
                  <button
                    type="button"
                    className="bPlButton variant-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.hash = "#/pricing";
                    }}
                  >
                    Upgrade Now
                  </button>
                )}
              </FilterDemos>
            }
          />

          {!isPremium && (
            <Route
              path="purchase"
              element={
                <FSCheckoutForm freemius={freemius} options={{ title: name }} />
              }
            />
          )}

          {!isPremium && (
            <Route
              path="pricing"
              element={
                <Pricing pricingInfo={pricingInfo} options={{}} {...props} />
              }
            />
          )}

          {!isPremium && (
            <Route
              path="feature-comparison"
              element={
                <FeatureCompare
                  featureCompareInfo={featureCompareInfo}
                  {...props}
                />
              }
            />
          )}

          <Route path="*" element={<Welcome {...props} />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
