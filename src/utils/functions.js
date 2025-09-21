import { produce } from "immer";

export const themeSwitch = (theme = "", attributes) =>
  produce(attributes, (draft) => {
    draft["theme"] = theme;

    switch (theme) {
      case "theme1":
        (draft["styles"]["container"] = {
          margin: {
            desktop: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            tablet: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            mobile: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
          },
          padding: {
            desktop: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            tablet: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            mobile: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
          },
          border: {
            width: "0px",
            style: "solid",
            color: "#333",
          },
          radius: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          bg: {
            color: "",
          },
        });
        (draft["styles"]["grid"] = {
          columnItems: {
            desktop: 3,
            tablet: 2,
            mobile: 1,
          },

          columnGap: {
            desktop: 20,
            tablet: 20,
            mobile: 0,
          },
        });
        (draft["styles"]["card"] = {
          shadow: [],
          padding: {
            desktop: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px",
            },
            tablet: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px",
            },
            mobile: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px",
            },
          },

          border: {
            width: "0px",
            style: "solid",
            color: "#ddd",
          },
          radius: {
            top: "16px",
            right: "16px",
            bottom: "16px",
            left: "16px",
          },
          bg: {
            color: "#fff",
          },
        });
        draft["styles"]["content"] = {
          icon: {
            display: true,
            color: "",
            size: {
              desktop: 80,
              tablet: 80,
              mobile: 80,
            },
            bg: {},
          },
          title: {
            display: true,

            typo: {
              fontSize: {
                desktop: "",
                tablet: "",
                mobile: "",
              },
              fontWeight: "",
              lineHeight: "",
              fontFamily: "",
              textTransform: "",
            },
            colors: {
              color: "",
              bg: "",
            },
            padding: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
          },
          description: {
            display: true,

            typo: {
              fontSize: {
                desktop: "",
                tablet: "",
                mobile: "",
              },
              fontWeight: "",
              lineHeight: "",
              letterSpace: "",
              textTransform: "",
              fontFamily: "",
            },
            color: "",
            colors: {
              color: "",
              bg: "",
            },
            padding: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
          },
        };
        break;

      case "theme2":
        (draft["styles"]["container"] = {
          margin: {
            desktop: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            tablet: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            mobile: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
          },
          padding: {
            desktop: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            tablet: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            mobile: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
          },
          border: {
            width: "0px",
            style: "solid",
            color: "#333",
          },
          radius: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          bg: {
            color: "",
          },
        });
        (draft["styles"]["grid"] = {
          columnItems: {
            desktop: 3,
            tablet: 2,
            mobile: 1,
          },

          columnGap: {
            desktop: 20,
            tablet: 20,
            mobile: 0,
          },
        });
        (draft["styles"]["card"] = {
          shadow: [],
          padding: {
            desktop: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            tablet: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            mobile: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
          },

          border: {
            width: "0px",
            style: "solid",
            color: "#ddd",
          },
          radius: {
            top: "16px",
            right: "16px",
            bottom: "16px",
            left: "16px",
          },
          bg: {
            color: "#fff",
          },
        });
        draft["styles"]["content"] = {
          icon: {
            display: true,
            color: "",
            size: {
              desktop: 48,
              tablet: 48,
              mobile: 48,
            },
            bg: {},
          },
          title: {
            display: true,

            typo: {
              fontSize: {
                desktop: "",
                tablet: "",
                mobile: "",
              },
              fontWeight: "",
              lineHeight: "",
              fontFamily: "",
              textTransform: "",
            },
            colors: {
              color: "",
              bg: "",
            },
            padding: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
          },
          description: {
            display: true,

            typo: {
              fontSize: {
                desktop: "",
                tablet: "",
                mobile: "",
              },
              fontWeight: "",
              lineHeight: "",
              letterSpace: "",
              textTransform: "",
              fontFamily: "",
            },
            color: "",
            colors: {
              color: "",
              bg: "",
            },
            padding: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
          },
        };
        break;
      case "theme3":
        (draft["styles"]["container"] = {
          margin: {
            desktop: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            tablet: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            mobile: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
          },
          padding: {
            desktop: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            tablet: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
            mobile: {
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            },
          },
          border: {
            width: "0px",
            style: "solid",
            color: "#333",
          },
          radius: {
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          },
          bg: {
            color: "",
          },
        });
        (draft["styles"]["grid"] = {
          columnItems: {
            desktop: 3,
            tablet: 2,
            mobile: 1,
          },

          columnGap: {
            desktop: 20,
            tablet: 20,
            mobile: 0,
          },
        });
        (draft["styles"]["card"] = {
          shadow: [],
          padding: {
            desktop: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px",
            },
            tablet: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px",
            },
            mobile: {
              top: "32px",
              right: "32px",
              bottom: "32px",
              left: "32px",
            },
          },

          border: {
            width: "0px",
            style: "solid",
            color: "#ddd",
          },
          radius: {
            top: "16px",
            right: "16px",
            bottom: "16px",
            left: "16px",
          },
          bg: {
            color: "#fff",
          },
        });
        draft["styles"]["content"] = {
          icon: {
            display: true,
            color: "",
            size: {
              desktop: 60,
              tablet: 60,
              mobile: 60,
            },
            bg: {},
          },
          title: {
            display: true,

            typo: {
              fontSize: {
                desktop: "",
                tablet: "",
                mobile: "",
              },
              fontWeight: "",
              lineHeight: "",
              fontFamily: "",
              textTransform: "",
            },
            colors: {
              color: "",
              bg: "",
            },
            padding: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
          },
          description: {
            display: true,

            typo: {
              fontSize: {
                desktop: "",
                tablet: "",
                mobile: "",
              },
              fontWeight: "",
              lineHeight: "",
              letterSpace: "",
              textTransform: "",
              fontFamily: "",
            },
            color: "",
            colors: {
              color: "",
              bg: "",
            },
            padding: {
              desktop: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              tablet: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
              mobile: {
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px",
              },
            },
          },
        };
        break;
    }
    console.log("Updated attributes:", draft);
  });
