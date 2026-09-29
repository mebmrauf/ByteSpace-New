# ByteSpace - Online Learning Platform

A pixel-perfect rebuild of the ByteSpace Figma design system using **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Vanilla CSS**.

---

## 🚀 Live Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | **Home Page** | Hero with 3D floating shapes, student showcase, partner logos, top categories, popular courses, diverse learning paths, creator CTA, student testimonials, and footer. |
| `/courses` | **Courses Catalog** | Search page with search bar, topic filters (Category, Beginner, Intermediate, etc.), category pills, course grid, and pagination. |
| `/courses/[id]` | **Course Details** | Detailed course page with video player preview, instructor info, price / enroll box, and interactive **About**, **Lessons** (accordion modules), and **Reviews** tabs. |
| `/creators/[id]` | **Creator Profile** | Instructor profile with avatar, banner, student & rating metrics, bio, social links, follow toggle, and creator's courses. |
| `/login` | **Sign In** | Authentication page featuring left 3D floating card composition and right login form with social sign-in. |
| `/register` | **Join Us / Register** | Registration page featuring 3D floating cards and complete user sign-up form. |
| `/*` | **404 Not Found** | Custom 404 page featuring giant lime backdrop text, floating 3D shapes, and back-to-home navigation. |

---

## 🎨 Design System & Visual Tokens

- **Primary Colors**:
  - Persian Blue: `#003BE2`
  - Electric Lime: `#D4FB20`
  - Neutral / Dark Charcoal: `#242528`
  - Pure White: `#FFFFFF`
  - Soft Neutral Gray: `#F5F5F6`
- **Typography**:
  - Headings: **Poppins** (600 / 700 / 800)
  - Body & UI: **Satoshi** (400 / 500 / 700)
  - Subtitles & Badges: **Inter**
- **Grid Background**:
  - Authentic 120px × 120px subtle blue grid at 12% opacity (`.blue-grid-bg`) starting cleanly from the header border.
- **Assets**:
  - Organized directly in `public/courses/`, `public/images/`, `public/shapes/`, and `public/icons/`.
  - ByteSpace brand SVGs, partner logos, category icons, and badges.

---

## 🛠️ Development & Production

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```
