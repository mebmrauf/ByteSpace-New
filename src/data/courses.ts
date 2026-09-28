export interface Course {
  id: string;
  title: string;
  author: string;
  authorAvatar: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  reviewCount: number;
  studentsCount: number;
  level: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

export const COURSES: Course[] = [
  {
    id: 'learn-figma-from-basic',
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    authorAvatar: '/images/creator-purepearl.png',
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    reviewCount: 142,
    studentsCount: 1850,
    level: 'Beginner',
    price: 25,
    image: '/courses/course-figma.png',
    category: 'UI/UX Design',
    description: 'Master the fundamentals of UI/UX design in Figma from scratch. Learn components, auto layout, prototyping and responsive design systems.',
  },
  {
    id: 'build-digital-asset',
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    authorAvatar: '/images/creator-purepearl.png',
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    reviewCount: 172,
    studentsCount: 199,
    level: 'Beginner',
    price: 25,
    image: '/courses/course-digital-asset.png',
    category: 'Digital Illustration',
    description: 'Unlock the Power of Digital Creation with Expert Guidance. Embark on an enlightening exploration into the world of digital creation with our comprehensive course.',
  },
  {
    id: 'the-power-of-big-data',
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    authorAvatar: '/images/creator-purepearl.png',
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    reviewCount: 88,
    studentsCount: 1240,
    level: 'Beginner',
    price: 25,
    image: '/courses/course-big-data.png',
    category: 'Data Science',
    description: 'Understand big data architectures, analytics dashboards, data visualization, and decision making for modern digital products.',
  },
  {
    id: 'balancing-productivity-and-self-care',
    title: 'Balancing Productivity and Self-Care',
    author: 'purepearl studio',
    authorAvatar: '/images/creator-purepearl.png',
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    reviewCount: 95,
    studentsCount: 1100,
    level: 'Beginner',
    price: 25,
    image: '/courses/course-productivity.png',
    category: 'Productivity',
    description: 'Learn sustainable productivity workflows, time management systems, mindfulness, and habits designed to avoid burnout.',
  },
  {
    id: 'mastering-money-management',
    title: 'Mastering Money Management',
    author: 'purepearl studio',
    authorAvatar: '/images/creator-purepearl.png',
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    reviewCount: 115,
    studentsCount: 1450,
    level: 'Beginner',
    price: 25,
    image: '/courses/course-money.png',
    category: 'Business',
    description: 'Take control of your personal and business finances with actionable financial strategies, budgeting models, and wealth building.',
  },
  {
    id: 'from-idea-to-startup-success',
    title: 'From Idea to Startup Success',
    author: 'purepearl studio',
    authorAvatar: '/images/creator-purepearl.png',
    lessons: 17,
    duration: '2 hours 16 mins',
    comments: 59,
    rating: 4.5,
    reviewCount: 134,
    studentsCount: 1670,
    level: 'Beginner',
    price: 25,
    image: '/courses/course-startup.png',
    category: 'Freelance & Entrepreneurship',
    description: 'Turn your early product idea into a thriving business. Master customer discovery, MVP validation, go-to-market, and fundraising.',
  },
];

export const CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
  '+ More',
];

export const LEARNING_PATHS = [
  { id: 'design', name: 'Design', count: 24 },
  { id: 'development', name: 'Development', count: 32 },
  { id: 'it-software', name: 'IT & Software', count: 18 },
  { id: 'business', name: 'Business', count: 21 },
  { id: 'marketing', name: 'Marketing', count: 15 },
  { id: 'photography', name: 'Photography', count: 12 },
];
