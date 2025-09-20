import { produce } from "immer";

export const themeSwitch = (theme = "", attributes) =>
  produce(attributes, (draft) => {
    draft["theme"] = theme;

    switch (theme) {
      case "theme1":
        draft["styles"]["card"]["padding"]["desktop"] = {
          "top": "32px",
          "right": "32px",
          "bottom": "32px",
          "left": "32px"
        };
        draft["styles"]["card"]["padding"]["tablet"] = {
          "top": "32px",
          "right": "32px",
          "bottom": "32px",
          "left": "32px"
        };
        draft["styles"]["card"]["padding"]["mobile"] = {
          "top": "32px",
          "right": "32px",
          "bottom": "32px",
          "left": "32px"
        };
        break;
      case "theme2":
        draft["styles"]["card"]["padding"]["desktop"] = {
          "top": "0px",
          "right": "0px",
          "bottom": "0px",
          "left": "0px"
        };
        draft["styles"]["card"]["padding"]["tablet"] = {
          "top": "0px",
          "right": "0px",
          "bottom": "0px",
          "left": "0px"
        };
        draft["styles"]["card"]["padding"]["mobile"] = {
          "top": "0px",
          "right": "0px",
          "bottom": "0px",
          "left": "0px"
        };

        
        
        break;
      case "theme3":
        draft["styles"]["card"]["padding"]["desktop"] = {
          "top": "32px",
          "right": "32px",
          "bottom": "32px",
          "left": "32px"
        };
        draft["styles"]["card"]["padding"]["tablet"] = {
          "top": "32px",
          "right": "32px",
          "bottom": "32px",
          "left": "32px"
        };
        draft["styles"]["card"]["padding"]["mobile"] = {
          "top": "32px",
          "right": "32px",
          "bottom": "32px",
          "left": "32px"
        };
       
        break;
    }
    console.log("Updated attributes:", draft);
  });
