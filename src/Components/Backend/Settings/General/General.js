import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl} from "@wordpress/components";
import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import { ItemsPanel } from "../../../../../../bpl-tools/Components";
import ServicesItemsPanel from "./ServicesItemsPanel";

const General = ({ attributes, setAttributes }) => {
  const { theme, activeServiceIdx } = attributes;

  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Themes", "service-card-layout")}
        initialOpen={true}
      >
        <SelectControl
          value={theme}
          options={themeOptions}
          onChange={(val) => setAttributes(themeSwitch(val, attributes))}
          help={__(
            "Some settings will be change when you will change the player.",
            "audio-player-showcase"
          )}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Services", "service-card-layout")}
        initialOpen={false}
      >
       <ItemsPanel
        {...{ attributes, setAttributes,activeServiceIdx }}
        arrKey="services"
        activeIndex={activeServiceIdx}
        newItem={{
          "icon": "",
          "title": "Service Card Layout Designs",
          "description": "Three completely different layout approaches for service cards, each with unique structure and visual hierarchy"
        }}
        ItemSettings={ServicesItemsPanel}
        design="sortable"
        // title="name"
      />

      </PanelBody>
    </>
  );
};

export default General;
