import CourseDetailView from '@/components/CourseDetailView';
import { COURSES } from '@/data/courses';

export const dynamicParams = false;

export function generateStaticParams() {
  const slugParams = COURSES.map((course) => ({ id: course.id }));
  const indexParams = COURSES.map((_, idx) => ({ id: String(idx + 1) }));
  return [...slugParams, ...indexParams];
}

export default function CourseDetailsPage() {
  return <CourseDetailView initialTab="about" />;
}
