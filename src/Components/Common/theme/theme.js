import Theme1 from "./theme1";
import Theme2 from "./theme2";
import Theme3 from "./theme3";



const Theme = ({ attributes }) => {
  const { theme, services } = attributes;
  switch (theme) {
    case "theme2":
      return <Theme2 services={services} />;

    case "theme3":
      return <Theme3 services={services} />;

    default:
      return <Theme1 services={services} />;
  }
};

export default Theme;

