import { TextareaControl, TextControl } from "@wordpress/components";

import { updateData } from "../../../../../../bpl-tools/utils/functions";
import { IconLibrary, Label } from "../../../../../../bpl-tools/Components";

const ServicesItemsPanel = ({ attributes, setAttributes, index }) => {
  const { services } = attributes;
  const {icon, title, description } = services[index];
 console.log(icon)

  return (
    <>
      <IconLibrary
        className="mt10"
        label="Service Icon"
        onChange={(v) =>
          setAttributes({
            services: updateData(services, v, index, "icon"),
          })
        }
      />

      <Label>Title</Label>

      <TextControl
        value={title}
        onChange={(v) =>
          setAttributes({ services: updateData(services, v, index, "title") })
        }
      />
      <Label>Description</Label>

      <TextareaControl
        value={description}
        onChange={(v) =>
          setAttributes({ services: updateData(services, v, index, "description") })
        }
      />
    </>
  );
};

export default ServicesItemsPanel;
