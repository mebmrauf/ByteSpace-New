## Overview

This is a multi-page web application developed with Next.js 15, React 19, TypeScript, and Vanilla CSS. It covers all key screens from the Figma file including the landing page, search/catalog, course details with lessons and reviews, creator profile, authentication flows, and a custom 404 page.

## Pages Implemented

- Home (`/`): Landing page with floating hero cards, category list, popular courses, learning paths, testimonials, and footer.
- Search Page (`/courses`): Course catalog with category filters, difficulty level filters, search bar, and course grid.
- Course Details (`/courses/learn-figma-from-basic`): Main course page with video player preview, course info, and checkout sidebar.
- Course Lessons (`/courses/learn-figma-from-basic/lessons`): Curriculum breakdown with expandable module accordions.
- Course Reviews (`/courses/learn-figma-from-basic/reviews`): Course review summary, star rating filter, and individual reviews.
- Creator Profile (`/creators/purepearl-studio`): Instructor page with bio, follower count, course listings, and an interactive follow button.
- Login (`/login`): Sign-in page with social login buttons and card preview.
- Register (`/register`): User registration form.
- 404 Page (`/404` or any invalid URL): Custom not found page with a link back to home.

## Tech Stack

- Framework: Next.js 15 (App Router)
- Library: React 19
- Language: TypeScript
- Styling: Vanilla CSS with CSS variables (no Tailwind or external UI frameworks)
- Fonts: Poppins (headings), Satoshi (body), Inter (subtitles)

## Getting Started

### Prerequisites

Node.js 18.17 or higher.

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run start
```

## Notes

- Responsive Design: Layouts are adapted for desktop (1440px), tablet (768px - 1024px), and mobile (under 768px with a mobile menu drawer).
- Styling: Built with custom Vanilla CSS and CSS custom properties for colors, spacing, and typography. No external UI component libraries were used.
- Icons: All icons are written as inline SVG components to avoid external icon font overhead.
- Tab State: The course details page syncs its active tab (About, Lessons, Reviews) with browser history using pushState.
