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
          "icon": "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='code'><path d='M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z'/></svg>",
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
