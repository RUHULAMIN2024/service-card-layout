const slug = "advanced-post-block";

export const dashboardInfo = (info) => {
  const { version, isPremium, hasPro } = info;

  const proSuffix = isPremium ? " Pro" : "";

  return {
    name: `Service Card Layout${proSuffix}`,
    displayName: `Service Card Layout${proSuffix} - Showcase Posts with Grid, List, Card Layouts and Filters`,
    description:
      "Service Card Layout is a powerful and flexible block plugin that allows you to display posts, display blog posts, and embed custom posts in a fully customizable and responsive layout.",
    slug,
    logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    banner: `https://i.ibb.co.com/H0cyzC8/service-card.png`,
    // video: 'https://www.youtube.com/watch?v=milYZrqLJsE',
    // isYoutube: true,
    version,
    isPremium,
    hasPro,
    pages: {
      org: `https://wordpress.org/plugins/${slug}/`,
      landing: `https://bplugins.com/products/${slug}/`,
      docs: `https://bplugins.com/docs/${slug}/`,
      pricing: `https://bplugins.com/products/${slug}/#pricing`,
    },
    freemius: {
      product_id: 20851,
      plan_id: 34736,
      public_key: "pk_4fbd049b3187ec723341e81b89a80",
    },
  };
};

export const changelogs = [
  {
    version: "2.0.0 - 13 Aug 2025",
    list: [
      "Fix Post Type Issues",
      "Update SDK",
      "Change UI",
      "Admin Dashboard",
    ],
  },
  {
    version: "1.16.1 - 3 Jul 2025",
    list: ["Fix Pagination issue"],
  },
  {
    version: "1.16.0 - 18 Jun 2025",
    list: [
      "Update Upgrade Page",
      "Fix other users premium unlock issue",
      "Update SDK",
    ],
  },
];

export const demoInfo = {
  title: "Live Overview",
  description: "Click on any section to view it live",
  layout: "list",
  allInOneLabel: "See All Demos",
  allInOneLink: "https://apb.bplugins.com/all-demos-in-one-place/",
  demos: [
    {
      icon: "",
      title: "Wide Img",
      description: "",
      category: "",
      type: "image",
      url: "https://placehold.co/2000x500/856BFE/FFFFFF/svg",
    },
    {
      icon: "",
      title: "Long Img",
      description: "",
      category: "",
      type: "image",
      url: "https://images.pexels.com/photos/32837692/pexels-photo-32837692.jpeg",
    },
    {
      icon: "",
      title: "small Img",
      description: "",
      category: "",
      type: "image",
      url: "https://placehold.co/200x300/856BFE/FFFFFF/svg",
    },
    {
      icon: "",
      title: "Grid- Default layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-default-layout/",
    },
    {
      icon: "",
      title: "Grid- Title Meta layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-title-meta-layout/",
    },
    {
      icon: "",
      title: "Grid- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-side-image-layout/",
    },
    {
      icon: "",
      title: "Grid- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/grid-overlay-layout/",
    },
    {
      icon: "",
      title: "Masonry- Default layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-default-layout/",
    },
    {
      icon: "",
      title: "Masonry- Title Meta layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-title-meta-layout/",
    },
    {
      icon: "",
      title: "Masonry- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-side-image-layout/",
    },
    {
      icon: "",
      title: "Masonry- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/masonry-overlay-layout/",
    },
    {
      icon: "",
      title: "Slider- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/slider-side-image-layout/",
    },
    {
      icon: "",
      title: "Slider- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/slider-overlay-layout/",
    },
    {
      icon: "",
      title: "Ticker- Side Image layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/ticker-side-image-layout/",
    },
    {
      icon: "",
      title: "Ticker- Overlay layout",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/ticker-overlay-layout/",
    },
    {
      icon: "",
      title: "All Posts",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/all-posts/",
    },
    {
      icon: "",
      title: "Post Section (Design 1)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/design-1/",
    },
    {
      icon: "",
      title: "Post Section (Design 2)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-2/",
    },
    {
      icon: "",
      title: "Post Section (Design 3)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-3/",
    },
    {
      icon: "",
      title: "Post Section (Design 4)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-4/",
    },
    {
      icon: "",
      title: "Post Section (Design 5)",
      description: "",
      category: "",
      type: "iframe",
      url: "https://apb.bplugins.com/demo/post-section-design-5/",
    },
  ],
};

export const filterDemoInfo = {
  categories: [
    { label: "All", value: "all", col: 3, height: "300px" },
    { label: "Hero", value: "hero", col: 3 },
    { label: "Ticker", value: "ticker", col: 3 },
    { label: "FAQ", value: "faq", col: 1, height: "400px" },
    {
      label: "Call To Actions",
      value: "call-to-actions",
      col: 2,
      height: "350px",
    },
    { label: "Testimonial", value: "testimonial", col: 3 },
    { label: "Info List", value: "info-list", col: 2, height: "350px" },
    { label: "About", value: "about", col: 3, height: "300px" },
    { label: "Timeline", value: "timeline", col: 3 },
    { label: "Team", value: "team", col: 1 },
  ],
  demos: [
    {
      title: "Testimonial Hero",
      categories: ["hero", "testimonial"],
      url: "https://images.pexels.com/photos/32837692/pexels-photo-32837692.jpeg",
    },
    {
      title: "luxurious fanion furniture store website",
      categories: ["about", "faq"],
      url: "https://www.shutterstock.com/image-vector/luxuriou…tion-furniture-store-website-260nw-2558738679.jpg",
    },
    {
      title: "Home Page Hero",
      categories: ["ticker", "faq"],
      url: "https://www.shutterstock.com/image-vector/pet-adopt-website-homepage-hero-260nw-2572368469.jpg",
    },
    {
      title: "Pet healthcare grooming food shop",
      categories: ["ticker", "faq"],
      url: "https://www.shutterstock.com/image-vector/pet-healthcare-grooming-food-shop-260nw-2572367501.jpg",
    },
    {
      title: "Store",
      categories: ["timeline", "call-to-actions"],
      url: "https://www.shutterstock.com/image-vector/pet-healthcare-grooming-food-shop-260nw-2572367493.jpg",
    },
    {
      title: "Modern Furniture landing page design",
      categories: ["about", "faq"],
      url: "https://www.shutterstock.com/image-vector/modern-furniture-landing-page-design-260nw-2558737307.jpg",
    },
    {
      title: "Web Design Elements",
      categories: ["ticker"],
      url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
    },
    {
      title: "Modern Original Style Search Banners",
      categories: ["ticker"],
      url: "https://img.freepik.com/premium-vector/set-modern-original-style-search-banners_105895-325.jpg",
    },
    {
      title: "Objects Collection",
      categories: ["ticker"],
      url: "https://img.freepik.com/free-vector/web-objects-collection_23-2147543149.jpg",
    },
    {
      title: "Web Ad",
      categories: ["ticker"],
      url: "https://img.freepik.com/free-vector/create-your-ad-web_23-2147510092.jpg",
    },
    {
      title: "Templates Applications",
      categories: ["ticker"],
      url: "https://img.freepik.com/premium-vector/set-navbar-templates-applications_1062041-141.jpg",
    },
    {
      title: "Design Elements Flat Style",
      categories: ["team", "testimonial"],
      url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
    },
    {
      title: "Design Elements Flat Style",
      categories: ["team", "info-list"],
      url: "https://img.freepik.com/free-vector/web-design-elements-flat-style_23-2147542130.jpg",
    },
  ],
};

export const pricingInfo = {
  cycles: [
    {
      cycle: "monthly",
      label: "Monthly",
      isDefault: false,
    },
    {
      cycle: "annual",
      label: "Yearly",
      isDefault: true,
    },
    {
      cycle: "lifetime",
      label: "Lifetime",
      isDefault: false,
    },
  ],
  plans: [
    {
      name: "Single Site",
      quantity: 1,
      prices: {
        monthly: "4.99",
        annual: "49.99",
        lifetime: "170.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
    {
      name: "3 Sites",
      quantity: 3,
      prices: {
        monthly: "9.99",
        annual: "99.99",
        lifetime: "299.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: true,
      note: "",
    },
    {
      name: "Unlimited Sites",
      quantity: "null",
      prices: {
        monthly: "39.99",
        annual: "399.99",
        lifetime: "1499.99",
      },
      pricePrefix: "",
      priceSuffix: "",
      isFeatured: false,
      note: "",
    },
  ],
  features: [
    "More layouts and sub-layouts",
    "Tag & Custom Taxonomy Filter",
    "Post Offset",
    "Include or Exclude Posts",
    "Pagination",
    "Sort the title and meta elements",
    "Custom icon for metadata",
    "Taxonomies in Meta",
    "Reading Time",
    "Excerpt from Content",
    "Feature Image Size",
    "ShortCode Powered",
    "Update Post Query",
  ],
  button: {
    label: "Buy Now ➜",
  },
  featured: {
    text: "Best Value",
  },
};

export const featureCompareInfo = {
  title: "Features",
  plans: [
    {
      id: "34735",
      name: "Free Plan",
      color: "#485781",
    },
    {
      id: "34736",
      name: `<span style='color: #485781;'>Pro Start from </span><span style='font-size: 1.3em;'>4.99/m</span>`,
      color: "#146EF5",
    },
  ],
  features: [
    {
      label: "Multiple Layouts (Grid, Masonry, Ticker, and Slider)",
      plans: ["34735", "34736"],
    },
    {
      label: "Sub Layout (Left/Right Image, Overlay Box, Title Meta, and more)",
      plans: ["34735", "34736"],
    },
    {
      label:
        "Post Query (filter by post type, categories, author, post count, and order)",
      plans: ["34735", "34736"],
    },
    {
      label: "Show/Hide Post Elements",
      plans: ["34735", "34736"],
    },
    {
      label: "Feature Image Settings",
      plans: ["34735", "34736"],
    },
    {
      label: "Post Title Customization",
      plans: ["34735", "34736"],
    },
    {
      label: "Meta Info Customization",
      plans: ["34735", "34736"],
    },
    {
      label: "Custom Read More Button",
      plans: ["34735", "34736"],
    },
    {
      label: "Fully Responsiveness for mobile, tablet, and desktop",
      plans: ["34735", "34736"],
    },
    {
      label: "Display Pages & Custom Post Types",
      plans: ["34736"],
    },
    {
      label: "Advanced Filtering (filter by tag, taxonomy, author, and more)",
      plans: ["34736"],
    },
    {
      label: "Post Offset (skip the first n posts)",
      plans: ["34736"],
    },
    {
      label: "Include/Exclude Posts by IDs",
      plans: ["34736"],
    },
    {
      label: "Exclude Current Post",
      plans: ["34736"],
    },
    {
      label: "Customizable pagination",
      plans: ["34736"],
    },
    {
      label: "Rearrange/Sort post title and metadata.",
      plans: ["34736"],
    },
    {
      label: "Feature Image Custom Size",
      plans: ["34736"],
    },
    {
      label: "Display Reading Time",
      plans: ["34736"],
    },
    {
      label: "Excerpt from Main Content",
      plans: ["34736"],
    },
    {
      label: "Custom Post Query Hook",
      plans: ["34736"],
    },
    {
      label: "Post Ticker Customization",
      plans: ["34736"],
    },
    {
      label: "Shortcode to display posts block anywhere",
      plans: ["34736"],
    },
    {
      label: "Enable/Disable Meta Author Link",
      plans: ["34736"],
    },
    {
      label: "Display categories, tags, and custom taxonomies",
      plans: ["34736"],
    },
    {
      label: "Custom Meta Icons",
      plans: ["34736"],
    },
  ],
};
