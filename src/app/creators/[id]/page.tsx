'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useParams, notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { FilterIcon, SignalCellularIcon, CategoryFilterIcon, SortIcon } from '@/components/Icons';
import { COURSES } from '@/data/courses';

export default function CreatorProfilePage() {
  const params = useParams();
  const creatorId = (params?.id as string)?.toLowerCase();

  if (creatorId && creatorId !== 'purepearl-studio') {
    notFound();
  }

  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(12);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowerCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowerCount((prev) => prev + 1);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* ============================================================ */}
      {/* 1. CREATOR HERO BANNER                                       */}
      {/* ============================================================ */}
      <section
        className="blue-grid-bg"
        style={{
          color: '#FFFFFF',
          paddingBottom: '60px',
          position: 'relative',
        }}
      >
        <Header variant="light" />

        <div className="container" style={{ paddingTop: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Creator Profile Top Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
            <div
              style={{
                position: 'relative',
                width: '104px',
                height: '104px',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <Image src="/images/creator-purepearl.png" alt="PurePearl Studio" fill style={{ objectFit: 'cover' }} priority />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '36px',
                    lineHeight: '43.2px',
                    fontWeight: 600,
                    letterSpacing: '-0.36px',
                    color: '#F5F5F6',
                    margin: 0,
                  }}
                >
                  PurePearl Studio
                </h1>
                <span
                  style={{
                    backgroundColor: '#D4FB20',
                    color: '#242528',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '19.2px',
                    fontWeight: 500,
                    padding: '8px 16px',
                    borderRadius: '24px',
                  }}
                >
                  Creator
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#F5F5F6',
                  margin: 0,
                }}
              >
                Passionate UI/UX, Web designer
              </p>
            </div>
          </div>

          {/* Bio text */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '28.8px',
              color: '#F5F5F6',
              maxWidth: '902px',
              marginBottom: '40px',
            }}
          >
            <p style={{ margin: '0 0 12px 0' }}>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and
              inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p style={{ margin: 0 }}>
              Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to
              multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
            </p>
          </div>

          {/* Stats & Actions */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '12px 24px',
                  height: '46px',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: '#003BE2' }}>3</span>
                <span style={{ color: '#242528' }}>Products</span>
              </div>
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '12px 24px',
                  height: '46px',
                  borderRadius: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: '#003BE2' }}>{followerCount}</span>
                <span style={{ color: '#242528' }}>Followers</span>
              </div>
            </div>

            <button
              onClick={handleFollowToggle}
              style={{
                backgroundColor: isFollowing ? '#FFFFFF' : '#D4FB20',
                color: '#040819',
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                fontWeight: 500,
                padding: '12px 24px',
                height: '46px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. CREATOR COURSES CATALOG                                   */}
      {/* ============================================================ */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Filter Bar: 48px height, 24px radius, 12px 16px padding */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '40px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '12px 16px',
                  height: '48px',
                  borderRadius: '24px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  color: '#4B4C53',
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                <FilterIcon size={20} />
                <span>Filter</span>
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '12px 16px',
                  height: '48px',
                  borderRadius: '24px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  color: '#4B4C53',
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                <SignalCellularIcon size={20} color="#4B4C53" />
                <span>Level</span>
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '12px 16px',
                  height: '48px',
                  borderRadius: '24px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  color: '#4B4C53',
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                <CategoryFilterIcon size={20} />
                <span>Category</span>
              </button>
            </div>

            <div>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '12px 16px',
                  height: '48px',
                  borderRadius: '24px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  color: '#4B4C53',
                  backgroundColor: '#FFFFFF',
                  cursor: 'pointer',
                }}
              >
                <SortIcon size={20} />
                <span>Most relevant</span>
              </button>
            </div>
          </div>

          {/* Courses Grid: exactly 3 columns with 40px gap */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
              gap: '40px',
            }}
          >
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
