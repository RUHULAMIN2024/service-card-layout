import { withSelect } from "@wordpress/data";
import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme/theme";
import ClipBoard from "../../utils/ClipBoard";
import { usePremiumInEditor } from "../../../../bpl-tools/hooks";
import { FrontShortCode } from "../../../../bpl-tools/ProControls";

const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, postType, postId } =
    props;

  const { isPremium, isLoading } = usePremiumInEditor(
    "rasclUtils",
    "rasclPremiumChecker"
  );

  return (
    <>
      <Settings
        {...{
          attributes,
          setAttributes,
          device,
          clientId,
          isPremium,
          isLoading,
        }}
      />

      <div {...useBlockProps()}>
        <Style
          device={device}
          attributes={attributes}
          id={`block-${clientId}`}
        />

        <div className="app-container">
          {postType == "rascl" && (
            <ClipBoard shortcode={`[rascl id=${postId}]`} />
          )}
          <div className="card-section">
            <Theme setAttributes={setAttributes} attributes={attributes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default withSelect((select) => {
  const { getDeviceType, getCurrentPostType, getCurrentPostId } =
    select("core/editor");

  return {
    device: getDeviceType()?.toLowerCase(),
    postType: getCurrentPostType(),
    postId: getCurrentPostId(),
  };
})(Edit);
