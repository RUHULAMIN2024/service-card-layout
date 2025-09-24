import { __ } from "@wordpress/i18n";

import { InspectorControls, BlockControls } from "@wordpress/block-editor";
import { TabPanel } from "@wordpress/components";
import { tabController } from "../../../../../bpl-tools/utils/functions";
import General from "./General/General";
import Style from "./Style/Style";
import { blocks, generalStyleTabs } from "../../../utils/options";
import { BplBlockPreview } from "../../../../../bpl-tools/Components";
import { AboutProModal } from "../../../../../bpl-tools/ProControls";
import { compose } from "@wordpress/compose";
import { withSelect } from "@wordpress/data";
import { useState } from "react";

const Settings = ({
  attributes,
  setAttributes,
  device,
  clientId,

  isPremium,
  isLoading,
  siteUrl,
}) => {
  const { theme } = attributes;
  const [isProModalOpen, setIsProModalOpen] = useState(false);
  const siteLocation = `${siteUrl}/wp-admin/admin.php?page=service-card-layout#/pricing`;

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
                  {...{
                    attributes,
                    setAttributes,
                    device,
                    clientId,
                    isPremium,
                    isLoading,
                    setIsProModalOpen,
                  }}
                />
              )}

              {"style" === tab.name && (
                <Style
                  {...{
                    attributes,
                    setAttributes,
                    device,
                    clientId,
                    isPremium,
                    isLoading,
                    setIsProModalOpen,
                  }}
                />
              )}
            </>
          )}
        </TabPanel>
      </InspectorControls>

      <BlockControls>
        <BplBlockPreview blocks={blocks} clientId={clientId} value={theme} />
      </BlockControls>
      <AboutProModal
        isProModalOpen={isProModalOpen}
        setIsProModalOpen={setIsProModalOpen}
        link={siteLocation}
      >
        <li>
          <strong>{__("aaaa: ", "services-card-layout")}</strong>
          {__("gfgfgfgngs.", "services-card-layout")}
        </li>
      </AboutProModal>
    </>
  );
};

export default compose(
  withSelect((select) => {
    return {
      siteUrl: select("core").getSite()?.url,
    };
  })
)(Settings);
