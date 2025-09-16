import { withSelect } from "@wordpress/data";
import { useBlockProps } from "@wordpress/block-editor";
import Settings from "./Settings/Settings";
import Style from "../Common/Style";
import Theme from "../Common/theme/theme";
const Edit = (props) => {
  const { attributes, setAttributes, clientId, device, postType, postId } =
    props;

  return (
    <>
      <Settings {...{ attributes, setAttributes, device, clientId }} />

      <div {...useBlockProps()}>
        <Style attributes={attributes} id={`block-${clientId}`} />

        <div className="app-container">
          <div className="card-section">
            <Theme attributes={attributes} />
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
