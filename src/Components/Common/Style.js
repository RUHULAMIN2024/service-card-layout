import { getBackgroundCSS, getBorderCSS, getBoxCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from "../../../../bpl-tools/utils/getCSS";

const Style = ({ attributes, id, device }) => {
  const { styles, theme } = attributes;
  const { grid, card, content,container } = styles;
  const { columnItems,columnGap  } = grid;
  const { icon, title, description } = content;


  const mainSl = `#${id}`;
  const blockSl = `${mainSl} .app-container .card-section`;
  const cardSl = `${blockSl} .card `;
  const iconSl = `${cardSl} .icon-wrapper`;
  const titleSl = `${cardSl} .card-title`;
  const descriptionSl = `${cardSl} .card-description`;


   let iconSize = "";
  if (theme === "theme2") {
	
    iconSize = `
      ${iconSl} svg {
	  	width:${icon?.size[device]}px;
		height:${icon?.size[device]}px;
      }
      
    `;
  } else{
	iconSize = `
      ${iconSl} {
	  	width:${icon?.size[device]}px;
		height:${icon?.size[device]}px;
		${getBackgroundCSS(icon?.bg)};	

      }
      
    `;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
		

		${getTypoCSS("", title?.typo).googleFontLink} 
		${getTypoCSS("", description?.typo).googleFontLink} 
			

		${getTypoCSS(titleSl, title?.typo).styles} 
		${getTypoCSS(descriptionSl, description?.typo).styles} 
				  
				

		${blockSl} .cards-grid {
			display: grid;
			grid-template-columns: repeat(${columnItems[device]}, 1fr);
			gap: ${columnGap[device]}px;
			${getBackgroundCSS(container?.bg)};
		    ${getBorderCSS(container?.border)};
			padding:${getBoxCSS(container?.padding?.desktop)};
	    	margin:${getBoxCSS(container?.margin?.desktop)};
			border-radius:${getBoxCSS(container?.radius)};

		}
		${cardSl} {

			${getBackgroundCSS(card?.bg)};
			${getBorderCSS(card?.border)};
			box-shadow: ${getMultiShadowCSS(card?.shadow)}; 

			padding:${getBoxCSS(card?.padding?.[device])};
			border-radius:${getBoxCSS(card?.radius)};
		}


		

		${iconSize};
		
		${iconSl} svg{
		    fill:${icon?.color};
			
		}

		${iconSl} {
	  	
		${getBackgroundCSS(icon?.bg)};	
      }
		${iconSl}::after {
		${getBackgroundCSS(icon?.bg)};	

      }
		${titleSl}{
			${getColorsCSS(title?.colors)};
			padding:${getBoxCSS(title?.padding?.[device])};


		}
		 ${descriptionSl}{
			${getColorsCSS(description?.colors)};
			padding:${getBoxCSS(description?.padding?.[device])};

		}		 

	`,
      }}
    />
  );
};
export default Style;
