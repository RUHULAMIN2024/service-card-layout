import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'service-card-layout') },
	{ name: 'style', title: __('Style', 'service-card-layout') }
];
export const themeOptions = [
  { value: "theme1", label: __("Theme-1", "service-card-layout") },
  { value: "theme2", label: __("Theme-2", "service-card-layout") },
  { value: "theme3", label: __("Theme-3", "service-card-layout") },
];

export const blocks = [
  {
    label: "Theme-1",
    value: "theme1",
    content: `<!-- wp:rascl/service-card-layout /-->`,
  },
  {
    label: "Theme-2",
    value: "theme2",
    content: `<!-- wp:rascl/service-card-layout {"theme":"theme2","align":"wide"} /-->`,
  },
  {
    label: "Theme-3",
    value: "theme3",
    content: `<!-- wp:rascl/service-card-layout {"theme":"theme3","align":"wide"} /-->`,
  },
  
];
