export interface PortfolioItem {
  id: string;
  title: string;
  category: 'social' | 'flyer' | 'cards' | 'thumb' | 'logo' | 'banner' | 'resume' | 'ugc';
  categoryLabel: string;
  image: string;
  aspect: 'square' | 'vertical' | 'wide';
  industry: string;
  turnaround: string;
  software: string[];
  deliverables: string[];
  description: string;
  highlights: string[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Works' },
  { id: 'social', label: 'Social Media' },
  { id: 'flyer', label: 'Flyers & Posters' },
  { id: 'cards', label: 'Wedding & Stationery' },
  { id: 'thumb', label: 'Thumbnails' },
  { id: 'logo', label: 'Branding & Logos' },
  { id: 'banner', label: 'Banners & Covers' },
  { id: 'resume', label: 'Resumes & CVs' },
  { id: 'ugc', label: 'UGC & Ad Photos' },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  // Social Media
  {
    id: 'salon-promo',
    title: 'Luxury Beauty Salon Promotional Post',
    category: 'social',
    categoryLabel: 'Social Media',
    image: '/assets/aistudio/sample-salon-post_792707b6.webp',
    aspect: 'square',
    industry: 'Beauty & Wellness',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Illustrator'],
    deliverables: ['Instagram Feed (1:1)', 'Story Resized (9:16)', 'PSD Source File'],
    description: 'High-end soft blush and warm gold promotional post designed to showcase premium salon services and luxury treatment packages with high visual conversion.',
    highlights: ['Gold typography highlights', 'Clean booking CTA', 'Flawless skin tones & soft lighting']
  },
  {
    id: 'restaurant-deal',
    title: 'Sizzling Karahi & Biryani Food Deal',
    category: 'social',
    categoryLabel: 'Social Media',
    image: '/assets/aistudio/sample-restaurant-post_7f6060b8.webp',
    aspect: 'square',
    industry: 'Restaurants & Food',
    turnaround: '12 - 24 Hours',
    software: ['Photoshop', 'Lightroom'],
    deliverables: ['1080x1080px Feed Graphic', 'Menu Deal Banner', 'Editable Template'],
    description: 'High-energy steam and embers food promotional creative with bold contrast typography engineered to drive hungry diners to order delivery.',
    highlights: ['Appetite-triggering color contrast', 'Steam & flame particle effects', 'Prominent phone order strip']
  },
  {
    id: 'fashion-sale',
    title: 'Autumn Edit Designer Apparel Campaign',
    category: 'social',
    categoryLabel: 'Social Media',
    image: '/assets/aistudio/sample-social-fashion_40bebb6d.webp',
    aspect: 'square',
    industry: 'Fashion & Apparel',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Illustrator'],
    deliverables: ['Instagram Square Post', 'Carousel Header', 'Source Files'],
    description: 'Editorial-grade typography pairing condensed headline lettering with minimal luxury grid layout for seasonal clothing discounts.',
    highlights: ['Bespoke editorial grid', 'High contrast 40% discount kicker', 'Warm suede texture harmonizing']
  },
  {
    id: 'gym-promo',
    title: 'Power Workout & Gym Membership Post',
    category: 'social',
    categoryLabel: 'Social Media',
    image: '/assets/aistudio/sample-social-gym_9758f3f9.webp',
    aspect: 'square',
    industry: 'Fitness & Health',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Illustrator'],
    deliverables: ['Feed Graphic', 'Ad Creative Set', 'Story Variation'],
    description: 'Distressed grunge typography in industrial yellow and chalk white, emphasizing intense athletic drive and gym enrollment.',
    highlights: ['Textured stencil typography', 'Atmospheric chalk & smoke', 'Clear opening hours & trial perk']
  },
  {
    id: 'real-estate-post',
    title: 'Modern Architecture Luxury Villa Showcase',
    category: 'social',
    categoryLabel: 'Social Media',
    image: '/assets/aistudio/sample-social-realestate_758b9c47.webp',
    aspect: 'square',
    industry: 'Real Estate & Properties',
    turnaround: '24 Hours',
    software: ['Photoshop', 'InDesign'],
    deliverables: ['Social Carousel Cover', 'Listing Sheet', 'PNG/JPG Export'],
    description: 'Refined architectural showcase utilizing dark navy backdrop, gold accents, and clean tabular specifications for high-net-worth property buyers.',
    highlights: ['Golden hour pool illumination', 'Structured property spec bar', 'Sophisticated corporate navy baseline']
  },

  // Flyers & Posters
  {
    id: 'boutique-flyer',
    title: 'Zhara Boutique Grand Opening Flyer',
    category: 'flyer',
    categoryLabel: 'Flyers & Posters',
    image: '/assets/aistudio/sample-boutique-flyer_e70216bf.webp',
    aspect: 'vertical',
    industry: 'Retail & Fashion',
    turnaround: '24 - 48 Hours',
    software: ['Illustrator', 'Photoshop'],
    deliverables: ['Print-Ready PDF (300 DPI CMYK)', 'Social Story Version', 'Vector Elements'],
    description: 'Traditional floral border motif paired with modern retail typography. Designed for both street handouts and digital WhatsApp distribution.',
    highlights: ['Delicate floral border filigree', '50% off discount hierarchy', 'Dual print & digital prep']
  },
  {
    id: 'music-festival',
    title: 'Summer Beats Neon Music Festival Poster',
    category: 'flyer',
    categoryLabel: 'Flyers & Posters',
    image: '/assets/aistudio/sample-poster-music_d9ee0ad0.webp',
    aspect: 'vertical',
    industry: 'Entertainment & Concerts',
    turnaround: '24 - 48 Hours',
    software: ['Photoshop', 'Illustrator'],
    deliverables: ['A3/A2 High-Res Print File', 'Social Banner', 'Ticketing Graphic'],
    description: 'Vibrant cyberpunk neon beams and DJ silhouette with glowing typography designed for nightlife, EDM, and outdoor festival promotions.',
    highlights: ['Dual-tone magenta and cyan lasers', 'Legible venue and date breakdown', 'Ticketing call-to-action']
  },
  {
    id: 'academy-admissions',
    title: 'Higher Education Academy Admissions Flyer',
    category: 'flyer',
    categoryLabel: 'Flyers & Posters',
    image: '/assets/aistudio/sample-flyer-academy_160a0099.webp',
    aspect: 'vertical',
    industry: 'Education & Schools',
    turnaround: '24 Hours',
    software: ['InDesign', 'Illustrator'],
    deliverables: ['A4 Print Ready PDF', 'Tri-fold variation', 'Source AI file'],
    description: 'Trustworthy navy blue and crisp white layout featuring 3 clear value pillars (Accredited Programs, Expert Faculty, Scholarships) for student recruitment.',
    highlights: ['Clean institutional color palette', '3-column icon value cards', 'Direct admissions hotline callout']
  },
  {
    id: 'food-festival',
    title: 'City Street Food Festival Poster',
    category: 'flyer',
    categoryLabel: 'Flyers & Posters',
    image: '/assets/aistudio/sample-poster-foodfest_37d2aa25.webp',
    aspect: 'vertical',
    industry: 'Culinary Events',
    turnaround: '24 - 48 Hours',
    software: ['Illustrator', 'Photoshop'],
    deliverables: ['A3 Event Poster', 'Square Instagram Promo', 'Press Kit'],
    description: 'Warm terracotta and festive bunting illustration celebrating tacos, burgers, churros, and community street food vendors.',
    highlights: ['Dimensional 3D-styled display title', 'Festive Mexican & South Asian bunting', 'Rich food spread layout']
  },
  {
    id: 'techno-night',
    title: 'Underground Techno Night Wireframe Poster',
    category: 'flyer',
    categoryLabel: 'Flyers & Posters',
    image: '/assets/aistudio/sample-poster-techno_c091c883.webp',
    aspect: 'vertical',
    industry: 'Nightlife & DJ Shows',
    turnaround: '24 Hours',
    software: ['Photoshop', 'After Effects'],
    deliverables: ['Vertical Print Poster', 'Animated Motion Teaser', 'Instagram Story'],
    description: 'Geometric 3D wireframe mesh with electric ultraviolet neon backlighting, creating a futuristic, sleek nightlife aesthetic.',
    highlights: ['3D low-poly wireframe polygons', 'Pure deep black background contrast', 'Minimal modern typographic stack']
  },

  // Wedding & Cards
  {
    id: 'wedding-gold',
    title: 'Luxury Gold Foil Islamic Wedding Invitation',
    category: 'cards',
    categoryLabel: 'Wedding & Stationery',
    image: '/assets/aistudio/sample-wedding-card_47e0a0e0.webp',
    aspect: 'vertical',
    industry: 'Wedding Stationery',
    turnaround: '24 - 48 Hours',
    software: ['Illustrator', 'InDesign'],
    deliverables: ['Print PDF with Foil Die Lines', 'Digital WhatsApp Video Card', 'Envelope Monogram'],
    description: 'Exquisite embossed gold filigree and geometric Islamic arch border on textured cotton rag paper, crafted for timeless wedding announcements.',
    highlights: ['Custom Islamic arabesque border', 'Simulated hot foil stamping', 'Calligraphic couple names']
  },
  {
    id: 'wedding-mehndi',
    title: 'Festive Marigold Mehndi Ceremony Card',
    category: 'cards',
    categoryLabel: 'Wedding & Stationery',
    image: '/assets/aistudio/sample-wedding-mehndi_e567f7b3.webp',
    aspect: 'vertical',
    industry: 'Wedding Stationery',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Illustrator'],
    deliverables: ['Print Card (5x7 inch)', 'WhatsApp Invitation Image', 'Story Format'],
    description: 'Traditional vibrant yellow and saffron marigold floral garlands with intricate gold paisley mandalas on handmade parchment.',
    highlights: ['Photorealistic marigold floral border', 'Deep forest green calligraphy', 'Festive dholak & henna vibe']
  },
  {
    id: 'wedding-walima',
    title: 'Royal Emerald Velvet Walima Reception Card',
    category: 'cards',
    categoryLabel: 'Wedding & Stationery',
    image: '/assets/aistudio/sample-wedding-walima_fc43f415.webp',
    aspect: 'vertical',
    industry: 'Wedding Stationery',
    turnaround: '24 - 48 Hours',
    software: ['Photoshop', 'InDesign'],
    deliverables: ['CMYK Foil-Ready PDF', 'Digital Invitation MP4/PNG', 'RSVP Card'],
    description: 'Deep royal emerald green background with vintage French baroque gold leaf embellishments, perfect for formal Walima receptions.',
    highlights: ['Velvet dark green depth', 'Intricate 3D embossed gold floral framing', 'Curated Spencerian script']
  },
  {
    id: 'invite-birthday',
    title: 'Modern Black & Gold Milestone Birthday Card',
    category: 'cards',
    categoryLabel: 'Wedding & Stationery',
    image: '/assets/aistudio/sample-invite-birthday_05ddf4bb.webp',
    aspect: 'vertical',
    industry: 'Parties & Events',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Illustrator'],
    deliverables: ['Digital Invitation', 'Print 5x7 Card', 'Instagram Story'],
    description: 'Chic Great Gatsby art-deco inspired gold foil typography surrounded by floating black and metallic gold balloons and confetti.',
    highlights: ['Art deco geometric frames', 'Floating 3D gold balloons', 'High-glamour festive mood']
  },

  // YouTube Thumbnails
  {
    id: 'thumb-billion',
    title: 'High-CTR Finance Documentary Thumbnail',
    category: 'thumb',
    categoryLabel: 'Thumbnails',
    image: '/assets/aistudio/sample-youtube-thumbnail_d372ddec.webp',
    aspect: 'wide',
    industry: 'YouTube & Creator Media',
    turnaround: 'Same Day (8 - 12h)',
    software: ['Photoshop', 'Lightroom'],
    deliverables: ['1280x720 HD Thumbnail', '1920x1080 Full HD', 'Layered PSD with Text'],
    description: 'Calculated visual contrast with expressive subject face, burning red stock market crash graph, and massive high-impact yellow typography.',
    highlights: ['Proven 14%+ CTR formula', 'Subject expression lighting & cutout', 'Subtle burn & fire backdrop']
  },
  {
    id: 'thumb-tech',
    title: 'Tech Gadget Review Video Thumbnail',
    category: 'thumb',
    categoryLabel: 'Thumbnails',
    image: '/assets/aistudio/sample-thumb-tech_65d49ce8.webp',
    aspect: 'wide',
    industry: 'Tech Reviewers',
    turnaround: 'Same Day (8 - 12h)',
    software: ['Photoshop'],
    deliverables: ['High-Res Thumbnail (JPG & PNG)', 'A/B Test Variant'],
    description: 'Electric blue studio rim lighting, excited handheld phone showcase, and eye-level yellow headline asking the ultimate buying question.',
    highlights: ['Bold question curiosity hook', 'High product clarity and edge-light', 'Vibrant blue contrast backdrop']
  },
  {
    id: 'thumb-cooking',
    title: 'Biryani Secret Recipe Cooking Thumbnail',
    category: 'thumb',
    categoryLabel: 'Thumbnails',
    image: '/assets/aistudio/sample-thumb-cooking_82cac4f7.webp',
    aspect: 'wide',
    industry: 'Food & Culinary Channels',
    turnaround: 'Same Day (8 - 12h)',
    software: ['Photoshop', 'Lightroom'],
    deliverables: ['1920x1080 Thumbnail', 'Shorts/TikTok Resized Cover'],
    description: 'Mouth-watering close-up of steaming Royal Biryani held by a smiling chef in traditional apron with yellow comic-stroke lettering.',
    highlights: ['Warm mouth-watering color grade', 'Steam particle enhancements', 'Friendly welcoming chef connection']
  },
  {
    id: 'thumb-travel',
    title: 'Mountain Survival $100 Challenge Thumbnail',
    category: 'thumb',
    categoryLabel: 'Thumbnails',
    image: '/assets/aistudio/sample-thumb-travel_b13a9dd8.webp',
    aspect: 'wide',
    industry: 'Travel & Adventure',
    turnaround: 'Same Day (8 - 12h)',
    software: ['Photoshop'],
    deliverables: ['YouTube Thumbnail', 'Clean Uncaptioned Background'],
    description: 'Epic snow-peaked Himalayan mountain background with traveler looking toward the summits, paired with high-voltage challenge lettering.',
    highlights: ['Crisp mountain atmospheric depth', 'Adventure storytelling composition', 'Heavy black-bordered yellow text']
  },

  // Branding & Logos
  {
    id: 'logo-cafe',
    title: 'Bean Story Cafe Brand Board & Packaging',
    category: 'logo',
    categoryLabel: 'Branding & Logos',
    image: '/assets/aistudio/sample-logo-cafe_0c8e3807.webp',
    aspect: 'wide',
    industry: 'Cafe & Specialty Coffee',
    turnaround: '3 - 5 Days',
    software: ['Illustrator', 'Photoshop'],
    deliverables: ['Primary & Secondary Logo', 'Cup Sleeve & Business Card Mockups', 'Color Palette & Font System'],
    description: 'Minimalist warm brown and cream aesthetic celebrating artisanal espresso brewing, including business cards and sustainable craft cup sleeves.',
    highlights: ['Single-line steam icon', 'Earth-toned warm palette codes', 'Complete print stationery mockup']
  },
  {
    id: 'logo-tech',
    title: 'Nexova Tech Geometric Hexagon Brand Identity',
    category: 'logo',
    categoryLabel: 'Branding & Logos',
    image: '/assets/aistudio/sample-logo-tech_d5288857.webp',
    aspect: 'wide',
    industry: 'SaaS & Digital Product',
    turnaround: '3 - 5 Days',
    software: ['Illustrator', 'Figma'],
    deliverables: ['Vector SVG/EPS Logos', 'Mobile App Icon', 'Full Brand Guidelines PDF'],
    description: 'Modern origami-style geometric aperture hexagon in rich blue gradients, showing brand application across iPhone home screen and business cards.',
    highlights: ['Mathematical geometric fold logo', 'Mobile app icon ready', 'Crisp corporate brand board']
  },
  {
    id: 'logo-boutique',
    title: 'Velvet Rose Luxury Fashion Boutique Identity',
    category: 'logo',
    categoryLabel: 'Branding & Logos',
    image: '/assets/aistudio/sample-logo-boutique_d9e7d2e6.webp',
    aspect: 'wide',
    industry: 'Luxury Fashion',
    turnaround: '3 - 5 Days',
    software: ['Illustrator', 'Photoshop'],
    deliverables: ['Gold Foil Logo Mark', 'Shopping Bag & Tag Mockup', 'Typography Pairing Sheet'],
    description: 'Cormorant Garamond and handwritten signature script finished with gold foil effect on blush pink and cream textured paper packaging.',
    highlights: ['Signature script lettering', 'Shopping bag foil stamp mockup', 'Curated blush & gold palette']
  },
  {
    id: 'logo-realestate',
    title: 'Skyline Properties Architectural Brand Board',
    category: 'logo',
    categoryLabel: 'Branding & Logos',
    image: '/assets/aistudio/sample-logo-realestate_b1e8d764.webp',
    aspect: 'wide',
    industry: 'Real Estate & Construction',
    turnaround: '3 - 5 Days',
    software: ['Illustrator', 'Photoshop'],
    deliverables: ['Architectural Geometric Monogram', 'Exterior Building Signage Mockup', 'Stationery Suite'],
    description: 'Geometric line-art skyscraper symbol in matte gold foil against deep charcoal stone, portraying trust, prestige, and modern elegance.',
    highlights: ['Golden geometric skyscraper mark', 'Exterior illuminated signage mockup', 'Prestige dark charcoal branding']
  },

  // Banners & Covers
  {
    id: 'banner-cafe',
    title: 'Brew & Bean Cozy Coffee Facebook Cover',
    category: 'banner',
    categoryLabel: 'Banners & Covers',
    image: '/assets/aistudio/sample-fb-cover_f72615ed.webp',
    aspect: 'wide',
    industry: 'Coffee Shops & Bakeries',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Lightroom'],
    deliverables: ['FB Page Cover (820x312 safe zone)', 'Desktop & Mobile Checked', 'Source File'],
    description: 'Warm cafe ambiance with steaming latte art and fresh coffee beans on rustic wood, framed with elegant serif lettering and burlap texture.',
    highlights: ['Safe-zone mobile & desktop compliance', 'Steaming latte focal anchor', 'Rustic morning atmosphere']
  },
  {
    id: 'banner-game',
    title: 'Game Zone Neon YouTube Channel Banner',
    category: 'banner',
    categoryLabel: 'Banners & Covers',
    image: '/assets/aistudio/sample-banner-youtube_83000a74.webp',
    aspect: 'wide',
    industry: 'Gaming & Twitch Streamers',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Illustrator'],
    deliverables: ['YouTube Channel Art (2560x1440)', 'Safe Zone Profile Version', 'Twitter Header'],
    description: 'Triple-monitor battlestation drenched in ultraviolet purple neon glow, mechanical keyboard, and esports title typography.',
    highlights: ['Safe-zone TV/Desktop/Mobile ready', 'Ultraviolet purple studio illumination', 'High-tech gaming desk setup']
  },
  {
    id: 'banner-eid',
    title: 'Eid Collection Night Sky Festive Facebook Banner',
    category: 'banner',
    categoryLabel: 'Banners & Covers',
    image: '/assets/aistudio/sample-banner-eid_c660303b.webp',
    aspect: 'wide',
    industry: 'Festive Retail & Clothing',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Lightroom'],
    deliverables: ['Facebook Banner', 'Website Hero Header', 'WhatsApp Catalog Cover'],
    description: 'Starry midnight sky with glowing crescent moon and golden lanterns framing models in embroidered Eastern royal attire.',
    highlights: ['Golden brass fanoos lanterns', 'Intricate zardozi embroidery highlight', 'Crescent moon festive glow']
  },
  {
    id: 'banner-gym',
    title: 'Power House Gym High-Impact Facebook Cover',
    category: 'banner',
    categoryLabel: 'Banners & Covers',
    image: '/assets/aistudio/sample-banner-gym_e15cba12.webp',
    aspect: 'wide',
    industry: 'Fitness Centers',
    turnaround: '24 Hours',
    software: ['Photoshop'],
    deliverables: ['Facebook Cover', 'Website Header', 'Source PSD'],
    description: 'Dramatic industrial gym aesthetic with textured gold & steel typography, barbell overhead press, and chalk dust atmosphere.',
    highlights: ['Heavy industrial metal texture', 'Dynamic athletic pose', 'Strong brand positioning']
  },

  // Resumes & CVs
  {
    id: 'resume-designer',
    title: 'Creative Graphic Designer Purple Accent Resume',
    category: 'resume',
    categoryLabel: 'Resumes & CVs',
    image: '/assets/aistudio/sample-resume-designer_a3b837b1.webp',
    aspect: 'vertical',
    industry: 'Creative & Tech Professionals',
    turnaround: '24 Hours',
    software: ['InDesign', 'Photoshop'],
    deliverables: ['Print-Ready PDF', 'Editable Word/Google Doc', 'ATS-Friendly Plain Text'],
    description: 'Two-column modern layout with royal purple sidebar for skills and contact, paired with crisp corporate white body for work history.',
    highlights: ['ATS-optimized structure', 'Geometric Islamic pattern motif', 'Skill proficiency dot scale']
  },
  {
    id: 'resume-corporate',
    title: 'Executive Marketing Manager Navy Resume',
    category: 'resume',
    categoryLabel: 'Resumes & CVs',
    image: '/assets/aistudio/sample-resume-corporate_1fa8ac1a.webp',
    aspect: 'vertical',
    industry: 'Corporate & Finance',
    turnaround: '24 Hours',
    software: ['InDesign', 'Word'],
    deliverables: ['PDF Portfolio Attachment', 'Editable MS Word Template', 'Cover Letter Template'],
    description: 'Distinguished deep navy header banner with clean modular grid, bulleted accomplishments, and executive level typography.',
    highlights: ['Executive navy & white elegance', 'Strict chronological spacing', 'Matched cover letter option']
  },
  {
    id: 'resume-minimal',
    title: 'Minimalist Editorial Content Writer Resume',
    category: 'resume',
    categoryLabel: 'Resumes & CVs',
    image: '/assets/aistudio/sample-resume-minimal_baac43d9.webp',
    aspect: 'vertical',
    industry: 'Writers, Academics & Tech',
    turnaround: '24 Hours',
    software: ['InDesign', 'Illustrator'],
    deliverables: ['Clean Vector PDF', 'ATS-Parsed DOCX', 'Web Version'],
    description: 'Generous white space, subtle teal hairline dividers, and refined typography tailored for writers, editors, and modern agency roles.',
    highlights: ['Ultra-clean scannability', 'Zero visual clutter', 'Ideal for automated ATS filters']
  },
  {
    id: 'resume-creative',
    title: 'Modern Geometric Video Editor Resume',
    category: 'resume',
    categoryLabel: 'Resumes & CVs',
    image: '/assets/aistudio/sample-resume-creative_256c3e6d.webp',
    aspect: 'vertical',
    industry: 'Video Editors & Motion Artists',
    turnaround: '24 Hours',
    software: ['Illustrator', 'InDesign'],
    deliverables: ['Creative PDF Resume', 'Interactive Link Icons', 'Source Files'],
    description: 'Bold constructivist color-block layout in warm red and amber, showcasing bold personality for creative multimedia specialists.',
    highlights: ['Dynamic geometric color blocks', 'Portfolio video link placeholders', 'Eye-catching bold display name']
  },

  // UGC & Lifestyle Ads
  {
    id: 'ugc-skincare',
    title: 'Vitamin C Glow Serum Natural UGC Ad Photo',
    category: 'ugc',
    categoryLabel: 'UGC & Ad Photos',
    image: '/assets/aistudio/sample-ugc-skincare_bbde17e3.webp',
    aspect: 'vertical',
    industry: 'Skincare & Cosmetics',
    turnaround: '24 - 48 Hours',
    software: ['Photoshop', 'Lightroom'],
    deliverables: ['9:16 Story/TikTok Format', '4:5 Feed Ad Format', 'Retouched Raw Assets'],
    description: 'Authentic creator selfie holding a glowing Vitamin C dropper bottle with natural morning bathroom sunlight, authentic dewy skin, and bright smile.',
    highlights: ['Raw natural creator lighting', 'Clear bottle label visibility', 'High TikTok/Meta ROAS conversion']
  },
  {
    id: 'ugc-watch',
    title: 'Fitness Smartwatch Wrist Snapshot UGC Ad',
    category: 'ugc',
    categoryLabel: 'UGC & Ad Photos',
    image: '/assets/aistudio/sample-ugc-watch_30fc27ea.webp',
    aspect: 'vertical',
    industry: 'Consumer Tech & Wearables',
    turnaround: '24 - 48 Hours',
    software: ['Lightroom', 'Photoshop'],
    deliverables: ['High-Res Ad Creative', 'Overlay Text Variations', 'Multiple Aspect Ratios'],
    description: 'First-person POV perspective showing active smartwatch display with heart-rate and step tracker in a bustling coffee shop setting.',
    highlights: ['Engaging POV perspective', 'Crisp readable screen metrics', 'Natural cafe depth of field']
  },
  {
    id: 'ugc-food',
    title: 'Gourmet Double Smash Burger Foodie UGC Ad',
    category: 'ugc',
    categoryLabel: 'UGC & Ad Photos',
    image: '/assets/aistudio/sample-ugc-food_fcde35ed.webp',
    aspect: 'vertical',
    industry: 'Fast Casual & Food Delivery',
    turnaround: '24 Hours',
    software: ['Photoshop', 'Lightroom'],
    deliverables: ['Food Delivery Ad Set', 'Instagram Story Format', 'Color Graded Photos'],
    description: 'Mouthwatering smiling creator holding a dripping double cheeseburger with seasoned fries and iced tea, driving immediate appetite response.',
    highlights: ['Crisp appetizing cheese melt', 'Relatable authentic foodie joy', 'Ideal for Meta & TikTok ads']
  }
];

export const TESTIMONIALS = [
  {
    id: 'rev-1',
    name: 'Fatima Khan',
    role: 'Salon Director & Founder',
    company: 'Glow Luxe Salon',
    location: 'Lahore, Pakistan',
    rating: 5,
    text: 'Maryam handled our complete salon social media launch package. From weekly appointment promo posts to menu boards and banners, everything looked supremely premium. Our WhatsApp booking volume doubled in 3 weeks.',
    date: 'February 2026',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Daniel Roberts',
    role: 'Documentary Channel Creator',
    company: 'History Vault Media',
    location: 'London, United Kingdom',
    rating: 5,
    text: 'The YouTube thumbnails she created for my financial collapse documentaries have an average CTR above 13.8%. She understands thumbnail psychology, facial contrast, and bold curiosity hooks like few designers do.',
    date: 'January 2026',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Mrs. Shazia Ahmed',
    role: 'Bride Mother & Event Host',
    company: 'Family Wedding Celebration',
    location: 'Karachi, Pakistan',
    rating: 5,
    text: 'We ordered our daughter’s Mehndi and Walima digital invitations and gold foil printed cards. Maryam delivered the designs before the promised deadline and accommodated every tiny revision with great courtesy.',
    date: 'March 2026',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Ahmed Saeed',
    role: 'Managing Partner',
    company: 'Saffron & Spice Restaurant',
    location: 'Dubai, United Arab Emirates',
    rating: 5,
    text: 'Fast, creative, and extremely dependable. She designs all our weekly Biryani deal posts, restaurant table standees, and Ramadan promotions. Having an all-in-one designer who also understands marketing is invaluable.',
    date: 'April 2026',
    verified: true
  }
];

export const SERVICES = [
  {
    id: 'graphic-design',
    title: 'Graphic Design — Any Style',
    icon: 'Palette',
    tagline: 'Custom digital and print visuals tailored to your audience',
    description: 'From single promotional flyers to full corporate identity kits, we design with meticulous attention to color harmony, typography, and marketing conversion.',
    features: [
      'Social Media Creatives & Carousel Posts',
      'Event Posters & Business Flyers',
      'Wedding, Mehndi & Walima Stationery',
      'High-CTR YouTube Thumbnails',
      'Facebook Covers, Web & Banner Headers',
      'ATS-Optimized Resumes & Executive CVs',
      'Logos & Comprehensive Brand Identity Kits'
    ]
  },
  {
    id: 'ai-video-ugc',
    title: 'YouTube AI Videos & UGC Ads',
    icon: 'Video',
    tagline: 'High-retention video content that drives views & sales',
    description: 'We produce faceless YouTube documentary reels and authentic UGC-style video ads complete with hook scriptwriting, voiceover, sound design, and motion editing.',
    features: [
      'Faceless Storytelling & History Video Reels',
      'TikTok & Meta UGC Product Ad Creatives',
      'Shorts & Reels with Kinetic Captions',
      'Full End-to-End Production (Script + Voice + Edit)'
    ]
  },
  {
    id: 'smm',
    title: 'Social Media Management',
    icon: 'Share2',
    tagline: 'Hands-off page handling so you can focus on running your business',
    description: 'Turn your dormant social media pages into active client acquisition channels with scheduled postings, branded graphics, and persuasive copywriting.',
    features: [
      'Monthly Content Calendars (15 - 30 Posts)',
      'Instagram, Facebook & TikTok Page Management',
      'Brand Consistency & Caption Copywriting',
      'Ad Creative Testing & Refreshing'
    ]
  },
  {
    id: 'whatsapp-bot',
    title: 'WhatsApp Automation & AI Bot',
    icon: 'Bot',
    tagline: '24/7 instant customer reply & booking assistant',
    description: 'Never lose a midnight inquiry again. We build automated WhatsApp reply flows that answer FAQs, send price lists, take appointments, and qualify leads automatically.',
    features: [
      'Instant Auto-Replies 24 Hours a Day',
      'Catalog & Price List Auto-Delivery',
      'Appointment & Table Booking Capture',
      'Seamless Handover to Human Agent'
    ]
  }
];

export const FAQS = [
  {
    q: 'What is the usual delivery turnaround time?',
    a: 'For single designs (social media posts, YouTube thumbnails, resumes, and covers), turnaround is typically same-day or within 12 to 24 hours. Larger projects like full brand boards or multi-post monthly packages take 2 to 4 days.'
  },
  {
    q: 'How many revisions do I get?',
    a: 'We offer unlimited revisions until you are completely satisfied with the result. We prioritize long-term client relationships over transactional limits.'
  },
  {
    q: 'Which file formats will I receive?',
    a: 'You will receive high-resolution web-ready PNG and JPG files, print-ready 300 DPI CMYK PDFs with bleed marks, and source files (Photoshop PSD, Illustrator AI, or editable Canva templates upon request).'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'For clients in Pakistan: JazzCash, Easypaisa, and Raast Bank Transfer. For overseas clients (Dubai, UK, USA, Europe): Payoneer, Wise, Remitly, and Western Union.'
  },
  {
    q: 'How can I host this portfolio on GitHub Pages for free?',
    a: 'We have included a dedicated "GitHub Deployment Guide" in this website! It provides one-click copyable instructions to publish directly to GitHub Pages at your own username.github.io for $0/month.'
  }
];
