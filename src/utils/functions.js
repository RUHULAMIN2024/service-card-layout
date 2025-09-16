import { produce } from "immer";

export const themeSwitch = (theme = "", attributes) =>
  produce(attributes, (draft) => {
    draft["theme"] = theme;

    switch (theme) {
      case "theme1":
       
        break;
      case "theme2":
        
        break;
      case "theme3":
       
        break;
    }
  });
