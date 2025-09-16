import { __ } from "@wordpress/i18n";
import { PanelBody, SelectControl, TextControl, ToggleControl } from "@wordpress/components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { themeOptions } from "../../../../utils/options";
import { themeSwitch } from "../../../../utils/functions";
import { Label } from "../../../../../../bpl-tools/Components";

const General = ({ attributes, setAttributes }) => {
  const { theme, services } = attributes;

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
       
      </PanelBody>
    </>
  );
};

export default General;
