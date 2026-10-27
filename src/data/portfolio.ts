/**
 * Portfolio content for Abhishek S R.
 * Public project descriptions are intentionally sanitized; do not add confidential customer drawings,
 * dimensions, BOMs, part numbers, internal documents, or unapproved project imagery.
 */
export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Abhishek S R',
  displayName: 'Abhishek S R',
  firstName: 'ABHISHEK',
  seriesTag: 'DESIGN ENGINEER',
  originalLabel: 'AN ENGINEERING ORIGINAL',
  role: 'Mechanical Design Engineer | Design Engineer',
  tagline: ['Mechanical Design', 'CAD & PLM', 'Engineering Development'],
  intro: 'Mechanical Design Engineer with an Aeronautical Engineering background and experience in CAD modelling, engineering design, and PLM activities. Interested in turning engineering requirements into accurate, manufacturable designs while learning and improving through practical project work.',
  location: 'Bengaluru, India',
  email: 'abhishekabhisr2001@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/abhishek-s-r-647569179/',
    github: 'https://github.com/Abhisr1',
  },
  resumePdf: '/assets/Abhishek_SR_Resume_Public.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Abhishek S R',
  },
  interests: ['Mechanical Design', '3D CAD Modelling', 'Product Development', 'PLM Workflows'],
};

export const education = [
  {
    school: 'Karavali Institute of Technology',
    place: 'Mangalore',
    degree: 'Bachelor of Engineering — Aeronautical Engineering',
    period: '2019 – 2023',
    score: 'Graduated 2023',
  },
  {
    school: 'CADDESK',
    place: 'Marathahalli, Bengaluru',
    degree: 'Design training — CAD / 3D Modelling',
    period: 'Training',
    score: 'Training in CAD tools',
  },
];

export const experience = [
  {
    company: 'Quest Global Engineering Services Private Limited',
    role: 'Mechanical Design Engineer',
    place: 'Bengaluru, India',
    period: 'March 2026 – Present',
    points: [
      'Contribute to mechanical design and Product Lifecycle Management (PLM) activities.',
      'Work with CAD tools and engineering design workflows to support project deliverables.',
      'Currently assigned to locomotive coupler-related project activities; public details are withheld where required by confidentiality.',
    ],
  },
  {
    company: 'Niharika Aerospace Pvt Ltd',
    role: 'Design Engineer',
    place: 'Bengaluru, India',
    period: 'August 2025 – February 2026',
    points: [
      'Designed aerospace sheet-metal and machined components using SolidWorks/CATIA V5 as per AS9100 & ISO standards.',
      'Prepared detailed 2D drawings applying correct GD&T, tolerance stack-up, and aerospace dimensioning rules.',
      'Converted customer STEP files into fully manufacturable aerospace drawings with title blocks, notes, material specs, and processes.',
      'Created and maintained engineering documentation including BOM, ECN/ECO, revision control, FAIR input, and technical reports.',
      'Performed feasibility checks on models, material selection, and design changes before release to production.',
    ],
  },
  {
    company: 'Williams Refrigeration',
    role: 'Junior Design Engineer',
    place: 'Bengaluru, India',
    period: 'June 2024 – August 2025',
    points: [
      'Proficient in designing complex sheet metal components using CAD tools like SolidWorks, AutoCAD, and CATIA.',
      'Extensive experience in sheet metal forming processes, including bending, stamping, and laser cutting.',
      'Skilled in generating detailed engineering drawings and technical specifications for sheet metal parts.',
      'Experienced in creating prototypes and conducting design reviews to ensure manufacturability.',
    ],
  },
  {
    company: 'Hydroline Products Private Limited',
    role: 'Design Engineer',
    place: 'Bengaluru, India',
    period: 'November 2023 – June 2024',
    points: [
      'Generated tangible 3D models based on 2D design sketches and material samples.',
      'Implemented a design that reduced manufacturing cost by 20%.',
      'Newly designed and built a Hydraulic breather with computerized lock system.',
    ],
  },
  {
    company: 'Hindustan Aeronautics Limited (HAL), ACD Division',
    role: 'Internship',
    place: 'India',
    period: 'Internship',
    points: [
      'Completed an internship at HAL ACD Division. Specific tasks and project details can be added after confirmation.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type ProjectImage = { src: string; caption: string };
export type Project = {
  id: string; title: string; year: string; genre: string; logline: string; stack: string[];
  build: string[]; features: string[]; metrics: Metric[]; github?: string; palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
  images?: ProjectImage[];
};

export const projects: Project[] = [
  {
    id: 'cabin-localization',
    title: 'Ground Support Equipment — Cabin Localization',
    year: '2026',
    genre: 'Mechanical CAD • Design Development',
    logline: 'A sanitized overview of a cabin localization and CAD development assignment for ground support equipment. Proprietary design information is intentionally omitted.',
    stack: ['SOLIDWORKS 2025', '3D CAD', 'Assembly Modelling', 'Engineering Drawings'],
    build: [
      'Supported CAD design and localization activities using customer-provided reference geometry and engineering documentation.',
      'Worked through design interpretation, modelling iterations, assembly structure, and review feedback while maintaining the intended design approach.',
      'Detailed customer-specific information, drawings, dimensions, part numbers, and BOM data are not included in this public portfolio.',
    ],
    features: [
      'CAD modelling and design development',
      'Reference-geometry interpretation',
      'Assembly structure and design documentation',
      'Engineering review and iteration',
      'Confidential customer details intentionally withheld',
    ],
    metrics: [],
    palette: { from: '#17120a', via: '#69451a', to: '#08090c', accent: '#ffb547' },
    motif: 'flow',
    images: [
      { src: '/assets/projects/cabin-assembly.webp', caption: 'Full Cabin 3D Assembly Modelling' },
      { src: '/assets/projects/cabin-frame.webp', caption: 'Structural Cabin Frame & Weldment Architecture' },
      { src: '/assets/projects/cabin-door.webp', caption: 'Door Sub-assembly & Hardware CAD Development' },
      { src: '/assets/projects/cabin-exploded.webp', caption: 'Exploded View & Subsystem Mechanical Breakdown' },
    ],
  },
  {
    id: 'locomotive-couplers',
    title: 'Locomotive Couplers',
    year: 'Current',
    genre: 'Professional Work • Mechanical Design',
    logline: 'Current project area at Quest Global. Public project details are limited to protect employer and customer confidentiality.',
    stack: ['Mechanical Design', 'CAD', 'PLM'],
    build: [
      'Currently assigned to locomotive coupler-related engineering activities.',
      'Specific design details, customer information, CAD files, drawings, and internal deliverables are not published.',
    ],
    features: ['Current project exposure', 'Mechanical design activities', 'Confidentiality-first presentation'],
    metrics: [],
    palette: { from: '#07131b', via: '#17445a', to: '#07090d', accent: '#4cc9ff' },
    motif: 'shield',
  },
];

export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [
  {
    id: 'on-the-fly-award',
    title: 'On the Fly Award',
    org: 'Quest Global',
    detail: 'Recognized for exemplary project delivery and valuable contributions to Quest Global.',
    laurel: 'September 2026',
  },
];

export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [
  { issuer: 'CADDESK', name: 'AutoCAD Mechanical 2D Training', link: '' },
  { issuer: 'CADDESK', name: 'CATIA V5 3D Modelling Training', link: '' },
  { issuer: 'CADDESK', name: 'ANSYS Workbench Training', link: '' },
  { issuer: 'HAL', name: 'Internship — ACD Division', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
  { id: 'cad', title: 'CAD Software', subtitle: '3D modelling and engineering design', skills: [
    { name: 'SOLIDWORKS', mono: 'SW', note: 'Design tool' }, { name: 'CATIA V5', mono: 'C5' }, { name: 'Creo', mono: 'Cr' }, { name: 'NX CAD', mono: 'NX' },
  ]},
  { id: 'plm', title: 'PLM & Engineering Tools', subtitle: 'Product lifecycle and data workflows', skills: [
    { name: 'Teamcenter', mono: 'TC' }, { name: 'Infor Office', mono: 'IO' }, { name: 'SmarTeam', mono: 'ST' },
  ]},
  { id: 'engineering', title: 'Engineering Skills', subtitle: 'Skills to confirm against actual responsibilities', skills: [
    { name: '3D Modelling', mono: '3D' }, { name: 'Assembly Design', mono: 'AD' }, { name: 'Engineering Drawings', mono: 'ED' }, { name: 'Design Development', mono: 'DD' },
  ]},
];
export const skillEvidence: Record<string, string[]> = {
  'SOLIDWORKS': ['Ground Support Equipment — Cabin Localization'],
  'CATIA V5': ['CAD training'],
  'Creo': ['Listed in the provided skills'],
  'NX CAD': ['Listed in the provided skills'],
  'Teamcenter': ['PLM tools'],
  'Infor Office': ['PLM / engineering tools'],
  'SmarTeam': ['PLM / engineering tools'],
  '3D Modelling': ['CAD design work'],
  'Assembly Design': ['CAD design work'],
  'Engineering Drawings': ['Engineering documentation'],
  'Design Development': ['Mechanical design work'],
};

export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
export const seasons: Season[] = [
  { number: 1, title: 'The Foundation', period: '2019 – 2023', synopsis: 'Aeronautical Engineering studies and the foundation for a career in mechanical design.', episodes: [
    { code: 'S01 E01', title: 'Aeronautical Engineering', description: 'Bachelor of Engineering at Karavali Institute of Technology, Mangalore.', tags: ['B.E.', 'Aeronautical Engineering'], runtime: '2019 – 2023', palette: violet },
    { code: 'S01 E02', title: 'CAD Training', description: 'Additional design training at CADDESK, Marathahalli.', tags: ['CAD', 'Design Training'], runtime: 'Training', palette: amber },
  ]},
  { number: 2, title: 'Design in Practice', period: '2023 – 2026', synopsis: 'Professional experience across mechanical design, engineering documentation, and CAD tools.', episodes: [
    { code: 'S02 E01', title: 'Mechanical Design', description: 'Experience creating and supporting engineering design deliverables with CAD tools.', tags: ['CAD', '3D Modelling'], runtime: 'Professional experience', palette: ocean },
    { code: 'S02 E02', title: 'Engineering Collaboration', description: 'Working with design workflows and project requirements while respecting customer-specific standards.', tags: ['Design Development', 'PLM'], runtime: 'Professional experience', palette: jade },
  ]},
  { number: 3, title: 'The Current Chapter', period: '2026 – Present', synopsis: 'Mechanical design and PLM activities at Quest Global.', episodes: [
    { code: 'S03 E01', title: 'Quest Global', description: 'Mechanical Design Engineer | Design Engineer at Quest Global Engineering Services Private Limited.', tags: ['Mechanical Design', 'PLM'], runtime: 'March 2026 – Present', palette: crimson },
    { code: 'S03 E02', title: 'Recognition', description: 'Received the On the Fly Award for exemplary project delivery and valuable contributions.', tags: ['Quest Global', 'Award'], runtime: 'September 2026', palette: amber },
  ]},
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
  { label: 'Primary CAD Tool', title: 'SOLIDWORKS', detail: 'Used in CAD design and development', palette: amber },
  { label: 'CAD Software', title: 'CATIA V5', detail: '3D modelling training and design tools', palette: ocean },
  { label: 'CAD Software', title: 'NX CAD', detail: 'Listed among technical skills', palette: violet },
  { label: 'PLM Tool', title: 'Teamcenter', detail: 'Product lifecycle management tools', palette: jade },
  { label: 'Engineering', title: 'Design Development', detail: 'Mechanical design activities', palette: crimson },
  { label: 'Current Role', title: 'Quest Global', detail: 'Mechanical Design Engineer', palette: amber },
  { label: 'Achievement', title: 'On the Fly', detail: 'Quest Global award · September 2026', palette: ocean },
  { label: 'Project', title: 'Cabin Localization', detail: 'Sanitized project overview', palette: violet },
  { label: 'Current Work', title: 'Locomotive Couplers', detail: 'Details withheld for confidentiality', palette: jade },
  { label: 'Focus', title: 'Precision Design', detail: 'CAD, PLM and engineering development', palette: crimson },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'Aeronautical Engineering', lines: ['Karavali Institute of Technology, Mangalore', 'Graduated in 2023'], chips: ['B.E.'] },
  { kicker: 'Skills', title: 'CAD & PLM', lines: ['SOLIDWORKS · CATIA V5 · Creo · NX CAD', 'Teamcenter · Infor Office · SmarTeam'], chips: ['3D CAD', 'Design', 'PLM'] },
  { kicker: 'Experience', title: 'Mechanical Design', lines: ['Mechanical design and PLM activities', 'Quest Global Engineering Services Private Limited', 'March 2026 – Present'] },
  { kicker: 'Projects', title: 'Engineering Work', lines: ['Ground Support Equipment — Cabin Localization', 'Locomotive Couplers — current project area', 'Confidential customer details are not displayed'] },
  { kicker: 'Recognition', title: 'On the Fly Award', lines: ['Quest Global', 'Recognized for exemplary project delivery', 'September 2026'] },
  { kicker: 'Current mission', title: 'Design with Purpose', lines: ['CAD modelling · Engineering documentation', 'Mechanical design · Product lifecycle workflows'] },
];

export type ProfileId = 'abhishek' | 'recruiter' | 'engineer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
  { id: 'abhishek', name: 'Abhishek', blurb: 'The full series, in order', color: '#e5132b', order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'] },
  { id: 'recruiter', name: 'Recruiter', blurb: 'Experience, skills & recognition first', color: '#4cc9ff', order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'] },
  { id: 'engineer', name: 'Engineer', blurb: 'Projects, CAD tools & PLM first', color: '#46e3a8', order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'] },
  { id: 'creative', name: 'Creative', blurb: 'The journey and highlights first', color: '#ffb547', order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'] },
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Projects', card: 'Featured Work', meta: `${projects.length} Project Stories`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Design Highlights', meta: 'Skills & professional focus', palette: jade },
  skills: { nav: 'Skills', card: 'Technical Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Awards', card: 'Recognition', meta: `${achievements.length} Award`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
