import { 
  getBackgroundCSS, 
  getBorderCSS, 
  getBoxCSS, 
  getColorsCSS, 
  getMultiShadowCSS, 
  getTypoCSS 
} from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id }) => {
  const { styles, theme } = attributes;
  const { grid, card, content, container } = styles;
  const { columnItems, columnGap } = grid;
  const { icon, title, description } = content;

  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .app-container .card-section`;
  const cardSl = `${blockSl} .card `;
  const iconSl = `${cardSl} .icon-wrapper`;
  const titleSl = `${cardSl} .card-title`;
  const descriptionSl = `${cardSl} .card-description`;

  // ===== ICON SIZE (Responsive) =====
  const iconSize = `
    /* Desktop */
    ${theme === "theme2" ? `
      ${iconSl} svg {
        width:${icon?.size?.desktop}px;
        height:${icon?.size?.desktop}px;
      }
    ` : `
      ${iconSl} {
        width:${icon?.size?.desktop}px;
        height:${icon?.size?.desktop}px;
        ${getBackgroundCSS(icon?.bg)};
      }
    `}

    /* Tablet */
    @media (max-width:1023px) {
      ${theme === "theme2" ? `
        ${iconSl} svg {
          width:${icon?.size?.tablet}px;
          height:${icon?.size?.tablet}px;
        }
      ` : `
        ${iconSl} {
          width:${icon?.size?.tablet}px;
          height:${icon?.size?.tablet}px;
        }
      `}
    }

    /* Mobile */
    @media (max-width:767px) {
      ${theme === "theme2" ? `
        ${iconSl} svg {
          width:${icon?.size?.mobile}px;
          height:${icon?.size?.mobile}px;
        }
      ` : `
        ${iconSl} {
          width:${icon?.size?.mobile}px;
          height:${icon?.size?.mobile}px;
        }
      `}
    }
  `;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `

        ${getTypoCSS("", title?.typo).googleFontLink} 
        ${getTypoCSS("", description?.typo).googleFontLink} 

        ${getTypoCSS(titleSl, title?.typo).styles} 
        ${getTypoCSS(descriptionSl, description?.typo).styles} 

        /* Container (desktop default) */
        ${blockSl} {
          ${getBackgroundCSS(container?.bg)};
          ${getBorderCSS(container?.border)};
          padding:${getBoxCSS(container?.padding?.desktop)};
          margin:${getBoxCSS(container?.margin?.desktop)};
          border-radius:${getBoxCSS(container?.radius)};
        }

        /* Cards grid desktop */
        ${blockSl} .cards-grid {
          display: grid;
          grid-template-columns: repeat(${columnItems?.desktop || 3}, 1fr);
          gap: ${columnGap?.desktop || 20}px;
        }

        /* Tablet */
        @media (max-width:1023px) {
          ${blockSl} {
            padding:${getBoxCSS(container?.padding?.tablet)};
            margin:${getBoxCSS(container?.margin?.tablet)};
          }
          ${blockSl} .cards-grid {
            grid-template-columns: repeat(${columnItems?.tablet || 2}, 1fr);
            gap: ${columnGap?.tablet || 15}px;
          }
          ${cardSl} {
            padding:${getBoxCSS(card?.padding?.tablet)};
          }
          ${titleSl} {
            padding:${getBoxCSS(title?.padding?.tablet)};
          }
          ${descriptionSl} {
            padding:${getBoxCSS(description?.padding?.tablet)};
          }
        }

        /* Mobile */
        @media (max-width:767px) {
          ${blockSl} {
            padding:${getBoxCSS(container?.padding?.mobile)};
            margin:${getBoxCSS(container?.margin?.mobile)};
          }
          ${blockSl} .cards-grid {
            grid-template-columns: repeat(${columnItems?.mobile || 1}, 1fr);
            gap: ${columnGap?.mobile || 10}px;
          }
          ${cardSl} {
            padding:${getBoxCSS(card?.padding?.mobile)};
          }
          ${titleSl} {
            padding:${getBoxCSS(title?.padding?.mobile)};
          }
          ${descriptionSl} {
            padding:${getBoxCSS(description?.padding?.mobile)};
          }
        }

        /* Card base style */
        ${cardSl} {
          ${getBackgroundCSS(card?.bg)};
          ${getBorderCSS(card?.border)};
          box-shadow: ${getMultiShadowCSS(card?.shadow)};
          padding:${getBoxCSS(card?.padding?.desktop)};
          border-radius:${getBoxCSS(card?.radius)};
        }

        ${iconSize}

        ${iconSl} svg {
          fill:${icon?.color};
        }

        ${iconSl} {
          ${getBackgroundCSS(icon?.bg)};
        }
        ${iconSl}::after {
          ${getBackgroundCSS(icon?.bg)};
        }

        ${titleSl} {
          ${getColorsCSS(title?.colors)};
          padding:${getBoxCSS(title?.padding?.desktop)};
        }

        ${descriptionSl} {
          ${getColorsCSS(description?.colors)};
          padding:${getBoxCSS(description?.padding?.desktop)};
        }

      `,
      }}
    />
  );
};

export default Style;
