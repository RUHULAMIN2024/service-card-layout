import { __ } from '@wordpress/i18n';

export const generalStyleTabs = [
	{ name: 'general', title: __('General', 'service-card-layout') },
	{ name: 'style', title: __('Style', 'service-card-layout') }
];
export const themeOptions = [
  { value: "theme1", label: __("Theme-1", "audio-theme") },
  { value: "theme2", label: __("Theme-2", "audio-theme") },
  { value: "theme3", label: __("Theme-3", "audio-theme") },
];

export const blocks = [
  {
    label: "Theme-1",
    value: "theme1",
    content: `<!-- wp:rascl/service-card-layout /-->`,
  },
  
];
