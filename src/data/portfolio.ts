import {
  Code2,
  Server,
  Database,
  Wrench,
  Layers,
  Brain,
  Github,
  ExternalLink,
  GraduationCap,
  Briefcase,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Download,
  ArrowRight,
  Sparkles,
  Monitor,
  Layout,
  ShoppingBag,
  Globe,
  RefreshCw,
  Shield,
  Smartphone,
  ServerCog,
  ArrowDown,
  Cookie,
  KeyRound,
  Upload,
  GitBranch,
  Network,
  Cpu,
} from 'lucide-react';

export const profile = {
  name: 'Deepak Sharma',
  roles: ['MERN Stack Developer', 'Frontend Web Developer', 'React Developer', 'JavaScript Developer'],
  headline: 'Building Modern Web Experiences with MERN Stack',
  subheading:
    'I build responsive, scalable and user-focused web applications using React, Node.js, Express and MongoDB.',
  location: 'Noida, Uttar Pradesh',
  email: 'bhardwajdeepak8750@gmail.com',
  phone: '9997908640',
  github: 'https://github.com/Deepak9997',
  linkedin: 'https://www.linkedin.com/in/deepak-bhardwaj99/',
  summary:
    'I am a MERN Stack Developer who enjoys building practical web applications and solving real-world problems. From responsive frontend UI to backend APIs, database integration, authentication, file uploads, and deployment — I handle the full stack with clean code and attention to detail.',
  stats: [
    { label: 'MERN Stack Developer', value: 'MERN' },
    { label: 'Full Stack Projects', value: '3+' },
    { label: 'Responsive Web Apps', value: '5+' },
    { label: 'REST APIs Built', value: '15+' },
    { label: 'Modern UI Development', value: 'React' },
  ],
};

export const techBadges = [
  'React',
  'JavaScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Tailwind CSS',
];

export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-teal-400 to-emerald-500',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS', 'Vite', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-cyan-400 to-teal-500',
    skills: ['Node.js', 'Express.js', 'REST API', 'JWT', 'Cookie Authentication', 'Multer', 'MVC Architecture'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-emerald-400 to-green-500',
    skills: ['MySQL', 'MongoDB', 'Mongoose', 'MongoDB Atlas'],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'from-teal-400 to-cyan-500',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm', 'Docker'],
  },
];

export const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and interactive user interfaces with React, Tailwind CSS, and modern JavaScript.',
    icon: Code2,
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'React.js Development',
    description: 'Creating reusable component architectures, state management, and dynamic single-page applications with React.',
    icon: Layers,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'MERN Stack Development',
    description: 'End-to-end full-stack development using MongoDB, Express, React, and Node.js — from UI to database.',
    icon: Server,
    color: 'from-emerald-500 to-green-500',
  },
  {
    title: 'REST API Integration',
    description: 'Designing and consuming RESTful APIs with Axios, handling authentication, error states, and data flow.',
    icon: Network,
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Backend Development',
    description: 'Building scalable Node.js and Express backends with JWT auth, file uploads, and business logic.',
    icon: ServerCog,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Responsive Web Design',
    description: 'Mobile-first, fully responsive layouts that look great on every device using Tailwind CSS and modern CSS.',
    icon: Smartphone,
    color: 'from-cyan-500 to-teal-500',
  },
  {
    title: 'E-commerce Development',
    description: 'Complete online shopping platforms with cart, checkout, product management, and order workflows.',
    icon: ShoppingBag,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Website Maintenance',
    description: 'Ongoing updates, bug fixes, performance optimization, and feature enhancements for existing web apps.',
    icon: RefreshCw,
    color: 'from-teal-500 to-green-500',
  },
];

export const architectureFlow = [
  { label: 'User', icon: Monitor, description: 'Interacts with the application' },
  { label: 'React Frontend', icon: Code2, description: 'Responsive UI with Tailwind CSS' },
  { label: 'Axios / REST API', icon: Network, description: 'HTTP requests and data fetching' },
  { label: 'Node.js + Express.js', icon: Server, description: 'Backend server and routing' },
  { label: 'Authentication / Business Logic', icon: Shield, description: 'JWT, middleware, and core logic' },
  { label: 'MongoDB + Mongoose', icon: Database, description: 'Data persistence with ODM schemas' },
];

export const supportingTech = [
  { name: 'JWT', icon: KeyRound },
  { name: 'Cookies', icon: Cookie },
  { name: 'CORS', icon: Network },
  { name: 'Multer', icon: Upload },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  tags: string[];
  features: string[];
  techStack: { Frontend: string[]; Backend: string[]; Database: string[]; Tools: string[] };
  pages?: string[];
  gradient: string;
  icon: typeof Code2;
  featured: boolean;
  github: string;
  demo: string;
  hasLiveDemo: boolean;
};

export const projects: Project[] = [
  
  {
    slug: 'blog-web-application',
    title: 'Blog Web Application',
    category: 'Full-Stack MERN Application',
    shortDescription:
      'A modern full-stack blogging platform where users can create, manage, and interact with blog content through a responsive React frontend and Node.js/Express backend.',
    longDescription:
      'A full-stack blog application built with the MERN stack. Users can register, log in, create/edit/delete blog posts, manage categories, upload avatars and images, and browse blog content. The backend features a clean REST API architecture with JWT and cookie-based authentication, CORS configuration, and file upload support via Multer.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Axios', 'Tailwind CSS'],
    features: [
      'User registration, login/logout, and authentication',
      'Protected routes with JWT and cookie-based auth',
      'Blog creation, editing, and deletion',
      'Category management and blog listing',
      'Blog details and user profile pages',
      'Avatar and image/file upload with Multer',
      'REST API architecture with CORS configuration',
      'Responsive design optimized for all devices',
    ],
    techStack: {
      Frontend: ['React.js', 'Tailwind CSS', 'Axios'],
      Backend: ['Node.js', 'Express.js', 'JWT', 'Multer'],
      Database: ['MongoDB', 'Mongoose'],
      Tools: ['Git', 'GitHub', 'Postman', 'npm'],
    },
    pages: [
      'Authentication APIs', 'Blog APIs', 'Category APIs', 'User APIs', 'Image Upload APIs',
    ],
    gradient: 'from-cyan-500/20 via-teal-500/15 to-emerald-500/20',
    icon: Code2,
    featured: true,
    github: 'https://github.com/',
    demo: 'https://blog-wapapp-1.onrender.com/',
    hasLiveDemo: true,
  },
   {
    slug: 'mern-ecommerce-platform',
    title: 'MERN E-Commerce Platform',
    category: 'Full-Stack MERN Application',
    shortDescription:
      'A full-stack e-commerce platform with product browsing, collections, cart management, authentication, checkout/order workflows, and user profiles.',
    longDescription:
      'A complete MERN Stack e-commerce application designed to provide a full online shopping experience. Users can browse products, filter by category and collection, view product details with sizes and colors, manage their shopping cart, checkout, and track orders. An admin panel allows product management with image uploads and stock control.',
    tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Axios', 'JWT'],
    features: [
      'User registration and login with JWT authentication',
      'Product listing with categories and collections',
      'Product filtering, details, sizes, and colors',
      'Shopping cart — add, remove, and update items',
      'User profile and order management',
      'Admin product management with image upload',
      'Product stock management and discount/old-price system',
      'Fully responsive UI with REST API integration',
    ],
    techStack: {
      Frontend: ['React.js', 'Tailwind CSS', 'Axios'],
      Backend: ['Node.js', 'Express.js', 'JWT'],
      Database: ['MongoDB', 'Mongoose'],
      Tools: ['Git', 'GitHub', 'Postman', 'npm'],
    },
    pages: [
      'Home', 'Products', 'Collections', 'Product Details', 'Cart',
      'Shopping Bag', 'Delivery', 'My Orders', 'Profile', 'Admin', 'Add Product',
    ],
    gradient: 'from-teal-500/20 via-emerald-500/15 to-cyan-500/20',
    icon: ShoppingBag,
    featured: false,
    github: 'https://github.com/',
    demo: '',
    hasLiveDemo: false,
  },
  {
    slug: 'test-the-taste',
    title: 'Test The Taste',
    category: 'Food E-Commerce Web Application',
    shortDescription:
      'An e-commerce/food-focused web application designed to provide users with an engaging interface for discovering and exploring food products.',
    longDescription:
      'TestTheTaste is a food-oriented e-commerce application built with React and the MERN stack. Users can browse food products, explore categories, view product details, and enjoy an interactive shopping experience. The UI is designed to be visually appealing and food-focused while maintaining a consistent, modern design language.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Product browsing with food/product categories',
      'Product details with responsive design',
      'Interactive and engaging UI',
      'Modern React component architecture',
      'Shopping experience with cart functionality',
      'API integration with Node.js/Express backend',
      'Food-oriented visual design',
      'Fully responsive across all devices',
    ],
    techStack: {
      Frontend: ['React.js', 'Tailwind CSS', 'JavaScript'],
      Backend: ['Node.js', 'Express.js'],
      Database: ['MongoDB'],
      Tools: ['Git', 'GitHub', 'npm'],
    },
    pages: ['Home', 'Products', 'Categories', 'Product Details', 'Cart'],
    gradient: 'from-emerald-500/20 via-green-500/15 to-teal-500/20',
    icon: ShoppingBag,
    featured: false,
    github: 'https://github.com/',
    demo: '',
    hasLiveDemo: false,
  },
];

export const resume = {
  objective:
    'Motivated and detail-oriented MERN Stack Developer with hands-on training in designing and developing responsive, user-centric web applications using React.js, Node.js, Express.js, and MongoDB. Proficient in building secure and scalable applications with RESTful APIs, JWT authentication, MVC architecture, and modern JavaScript. Seeking an opportunity to contribute strong problem-solving, adaptability, and continuous learning to a technology-driven team.',
  education: {
    institution: 'Shobhit University Gangoh',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: 'Education',
    description:
      'Bachelor of Computer Applications. Additional education includes Senior Secondary through NIOS and Matriculation from Alpine International School.'
  },
  experience: {
    role: 'MERN Stack Development Training',
    company: 'DUCAT Training Institute, Gurugram',
    period: 'Jan 2025 – Aug 2025',
    description:
      'Completed intensive MERN stack training and built practical web applications covering frontend development, backend API design, database modeling, authentication, file uploads, and deployment.',
    highlights: [
      'Built full-stack MERN applications from scratch',
      'Implemented JWT and cookie-based authentication',
      'Designed RESTful APIs with Express and Mongoose',
      'Created responsive React frontends with Tailwind CSS',
      'Managed file uploads with Multer and image handling',
      'Used Git/GitHub for version control and collaboration',
    ],
  },
  certifications: [
    'MERN Stack Web Development — DUCAT Training Institute, Gurugram (Jan 2025 – Aug 2025)',
    'React.js & Frontend Development',
    'REST API Design & Integration',
    'JWT Authentication, MVC Architecture & CRUD',
  ],
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { label: 'GitHub', icon: Github, href: 'https://github.com/Deepak9997' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/deepak-bhardwaj99/' },
  { label: 'Email', icon: Mail, href: 'mailto:bhardwajdeepak8750@gmail.com' },
];

export const contactInfo = [
  { label: 'Email', value: 'bhardwajdeepak8750@gmail.com', icon: Mail, href: 'mailto:bhardwajdeepak8750@gmail.com' },
  { label: 'Location', value: 'Noida, Uttar Pradesh', icon: MapPin, href: '#' },
  { label: 'Phone', value: '9997908640', icon: Phone, href: 'tel:+919997908640' },
];

export const icons = {
  Code2, Server, Database, Wrench, Brain, Layers, Github, ExternalLink,
  GraduationCap, Briefcase, Mail, MapPin, Phone, Linkedin, Download,
  ArrowRight, Sparkles, Monitor, Layout, ShoppingBag, Globe, RefreshCw,
  Shield, Smartphone, ServerCog, ArrowDown, Cookie, KeyRound, Upload,
  GitBranch, Network, Cpu,
};
