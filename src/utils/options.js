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
    content: `<!-- wp:rascl/service-card-layout {"theme":"theme2","styles":{"grid":{"columnItems":{"desktop":3,"tablet":2,"mobile":1},"columnGap":{"desktop":20,"tablet":20,"mobile":0}},"card":{"shadow":[],"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"border":{"width":"0px","style":"solid","color":"#ddd"},"radius":{"top":"16px","right":"16px","bottom":"16px","left":"16px"},"bg":{"color":"#fff"}},"container":{"margin":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"border":{"width":"0px","style":"solid","color":"#333"},"radius":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"bg":{"color":""}},"content":{"icon":{"display":true,"color":"","size":{"desktop":48,"tablet":48,"mobile":48},"bg":{}},"title":{"display":true,"typo":{"fontSize":{"desktop":"","tablet":"","mobile":""},"fontWeight":"","lineHeight":"","fontFamily":"","textTransform":""},"colors":{"color":"","bg":""},"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}},"description":{"display":true,"typo":{"fontSize":{"desktop":"","tablet":"","mobile":""},"fontWeight":"","lineHeight":"","letterSpace":"","textTransform":"","fontFamily":""},"color":"","colors":{"color":"","bg":""},"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}}}}} /-->`,
  },
  {
    label: "Theme-3",
    value: "theme3",
    content: `<!-- wp:rascl/service-card-layout {"theme":"theme3","styles":{"grid":{"columnItems":{"desktop":3,"tablet":2,"mobile":1},"columnGap":{"desktop":20,"tablet":20,"mobile":0}},"card":{"shadow":[],"padding":{"desktop":{"top":"32px","right":"32px","bottom":"32px","left":"32px"},"tablet":{"top":"32px","right":"32px","bottom":"32px","left":"32px"},"mobile":{"top":"32px","right":"32px","bottom":"32px","left":"32px"}},"border":{"width":"0px","style":"solid","color":"#ddd"},"radius":{"top":"16px","right":"16px","bottom":"16px","left":"16px"},"bg":{"color":"#fff"}},"container":{"margin":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}},"border":{"width":"0px","style":"solid","color":"#333"},"radius":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"bg":{"color":""}},"content":{"icon":{"display":true,"color":"","size":{"desktop":60,"tablet":60,"mobile":60},"bg":{}},"title":{"display":true,"typo":{"fontSize":{"desktop":"","tablet":"","mobile":""},"fontWeight":"","lineHeight":"","fontFamily":"","textTransform":""},"colors":{"color":"","bg":""},"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}},"description":{"display":true,"typo":{"fontSize":{"desktop":"","tablet":"","mobile":""},"fontWeight":"","lineHeight":"","letterSpace":"","textTransform":"","fontFamily":""},"color":"","colors":{"color":"","bg":""},"padding":{"desktop":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"tablet":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"mobile":{"top":"0px","right":"0px","bottom":"0px","left":"0px"}}}}}} /-->`,
  },
  
];
