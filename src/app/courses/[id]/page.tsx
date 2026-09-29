import CourseDetailView from '@/components/CourseDetailView';

export default function CourseDetailPage() {
  // Course details page defaults to the About tab (matches Figma Frame: Course Details)
  return <CourseDetailView initialTab="about" />;
}
