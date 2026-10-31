import CourseDetailView from '@/components/CourseDetailView';
import { COURSES } from '@/data/courses';

export const dynamicParams = false;

export function generateStaticParams() {
  const slugParams = COURSES.map((course) => ({ id: course.id }));
  const indexParams = COURSES.map((_, idx) => ({ id: String(idx + 1) }));
  return [...slugParams, ...indexParams];
}

export default function CourseDetailPage() {
  // Course details page defaults to the About tab (matches Figma Frame: Course Details)
  return <CourseDetailView initialTab="about" />;
}
