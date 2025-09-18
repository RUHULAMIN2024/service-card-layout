import { InspectorControls, BlockControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../bpl-tools/utils/functions";
import General from "./General/General";
import Style from "./Style/Style";
import { blocks, generalStyleTabs } from "../../../utils/options";
import { BplBlockPreview } from "../../../../../bpl-tools/Components";

const Settings = ({ attributes, setAttributes, device, clientId }) => {
  const { theme } = attributes;

  return (
    <>
      <InspectorControls>
        <TabPanel
          className="bPlTabPanel wp-block-rascl-service-card-layout"
          activeClass="activeTab"
          tabs={generalStyleTabs}
          onSelect={tabController}
        >
          {(tab) => (
            <>
              {"general" === tab.name && (
                <General
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}

              {"style" === tab.name && (
                <Style
                  attributes={attributes}
                  setAttributes={setAttributes}
                  device={device}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <BplBlockPreview blocks={blocks} clientId={clientId} value={theme} />
      </BlockControls>
    </>
  );
};
export default Settings;
