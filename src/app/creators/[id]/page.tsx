import CreatorProfileView from '@/components/CreatorProfileView';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'PurePearl Studio - ByteSpace',
  description: 'Explore courses and creative works by PurePearl Studio on ByteSpace.',
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: 'purepearl-studio' }];
}

export default async function CreatorProfilePage({
  params,
}: {
  params: Promise<{ id?: string }>;
}) {
  const { id } = await params;
  const creatorId = id?.toLowerCase();

  if (creatorId && creatorId !== 'purepearl-studio') {
    notFound();
  }

  return <CreatorProfileView />;
}
