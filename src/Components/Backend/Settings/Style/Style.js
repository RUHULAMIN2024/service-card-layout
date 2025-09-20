import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  PanelRow,
  __experimentalBorderControl as BorderControl,
  RangeControl,
} from "@wordpress/components";
import {
  Background,
  BoxControl,
  ColorControl,
  ColorsControl,
  Device,
  Label,
  ShadowControl,
  Typography,
} from "../../../../../../bpl-tools/Components";
import { updateData } from "../../../../../../bpl-tools/utils/functions";

const Style = ({ attributes, setAttributes, device }) => {
  const { styles } = attributes;
  const { grid, card, content, container} = styles;
  const { columnItems, columnGap } = grid;
  const { icon, title, description } = content;
  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Grid", "service-card-layout")}
        initialOpen={true}
      >
        <PanelRow>
          <Label className="">Column Items</Label> <Device />
        </PanelRow>
        <RangeControl
          value={columnItems[device]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "grid", "columnItems", device),
            })
          }
          min={1}
          max={12}
        />
        <PanelRow>
          <Label className="">Gap</Label> <Device />
        </PanelRow>
        <RangeControl
          value={columnGap[device]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "grid", "columnGap", device),
            })
          }
          min={1}
          max={50}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Container", "service-card-layout")}
        initialOpen={false}
      >
        <Background
          className="mt10"
          value={container?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "container", "bg"),
            })
          }
        />

        {/* container margin  */}
        <PanelRow>
          <Label className="">Margin</Label> <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={container?.margin?.[device]}
          resetValues={{
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "container", "margin", device),
            });
          }}
        />

        {/* container padding  */}

        <PanelRow>
          <Label className="">Padding</Label> <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={container?.padding?.[device]}
          resetValues={{
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "container", "padding", device),
            });
          }}
        />

        <BorderControl
          className="mt10"
          label={__("Border", "service-card-layout")}
          value={container?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "container", "border"),
            })
          }
        />

        {/* container border radius  */}
        <BoxControl
          className="mt10"
          label="Border Radius"
          values={container?.radius}
          resetValues={{
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "container", "radius"),
            });
          }}
        />
      </PanelBody>



      <PanelBody
        className="bPlPanelBody"
        title={__("Card", "service-card-layout")}
        initialOpen={false}
      >
        <ShadowControl
          label={__("Shadow", "pc-card")}
          value={card?.shadow}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "card", "shadow"),
            })
          }
        />
        <Background
          className="mt10"
          value={card?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "card", "bg"),
            })
          }
        />

        {/* card padding  */}

        <PanelRow>
          <Label className="">Padding</Label> <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={card?.padding?.[device]}
          resetValues={{
            top: "32px",
            right: "32px",
            bottom: "32px",
            left: "32px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "card", "padding", device),
            });
          }}
        />

        <BorderControl
          className="mt10"
          label={__("Border", "service-card-layout")}
          value={card?.border}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "card", "border"),
            })
          }
        />

        {/* card border radius  */}
        <BoxControl
          className="mt10"
          label="Border Radius"
          values={card?.radius}
          resetValues={{
            top: "16px",
            right: "16px",
            bottom: "16px",
            left: "16px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(styles, v, "card", "radius"),
            });
          }}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Icon", "service-card-layout")}
        initialOpen={false}
      >
      
        <ColorControl
          className="mt10"
          label={__("Color", "service-card-layout")}
          value={icon?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "icon", "color"),
            })
          }
          defaults={icon?.color}
        />

        <Background
          isImage={false}
          className="mt10"
          value={icon?.bg}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "icon", "bg"),
            })
          }
        />
        <PanelRow>
          <Label className="">Size</Label> <Device />
        </PanelRow>
        <RangeControl
          min={50}
          max={150}
          className="mt10"
          value={icon?.size[device]}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "icon", "size", device),
            })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        title={__("Title", "service-card-layout")}
        initialOpen={false}
      >
        {/* title  */}
        <Typography
          className="mt10"
          value={title?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "title", "typo"),
            })
          }
        />
        <ColorsControl
          className="mt10"
          label={__("Colors", "service-card-layout")}
          value={title?.colors}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "title", "colors"),
            })
          }
          defaults={title?.colors}
        />

        <PanelRow>
          <Label className="">Padding</Label> <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={title?.padding?.[device]}
          resetValues={{
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "title",
                "padding",
                device
              ),
            });
          }}
        />
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        title={__("Description", "service-card-layout")}
        initialOpen={false}
      >
        <Typography
          className="mt10"
          value={description?.typo}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "description", "typo"),
            })
          }
        />
        <ColorsControl
          className="mt10"
          value={description?.colors}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "description", "colors"),
            })
          }
          defaults={title?.colors}
        />

        <PanelRow>
          <Label className="">Padding</Label> <Device />
        </PanelRow>
        <BoxControl
          className="mt10"
          values={description?.padding?.[device]}
          resetValues={{
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px",
          }}
          onChange={(v) => {
            setAttributes({
              styles: updateData(
                styles,
                v,
                "content",
                "description",
                "padding",
                device
              ),
            });
          }}
        />
        {/* <ColorControl
          className="mt10"
          label={__("Description Color", "service-card-layout")}
          value={description?.color}
          onChange={(v) =>
            setAttributes({
              styles: updateData(styles, v, "content", "description", "color"),
            })
          }
          defaults={description?.color}
        /> */}
      </PanelBody>
    </>
  );
};

export default Style;
