import Theme1 from "./Theme1";
import Theme2 from "./Theme2";
import Theme3 from "./Theme3";



const Theme = ({ attributes,setAttributes }) => {
  const { theme } = attributes;
  switch (theme) {
    case "theme2":
      return <Theme2 setAttributes={setAttributes} attributes={attributes} />;

    case "theme3":
      return <Theme3 setAttributes={setAttributes} attributes={attributes} />;

    default:
      return <Theme1 setAttributes={setAttributes} attributes={attributes} />;
  }
};

export default Theme;

