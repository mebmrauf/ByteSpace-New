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
          paddingBottom: '82px',
          position: 'relative',
        }}
      >
        <Header variant="light" />

        <div className="header-inner" style={{ paddingTop: '52px', width: '1440px', maxWidth: '100%', margin: '0', padding: '0 120px', boxSizing: 'border-box' }}>
          {/* Creator Profile Top Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px' }}>
            <div
              style={{
                position: 'relative',
                width: '96px',
                height: '96px',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                flexShrink: 0,
              }}
            >
              <Image src="/images/creator-purepearl.png" alt="PurePearl Studio" fill sizes="96px" style={{ objectFit: 'cover' }} priority />
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
                    padding: '8px 24px',
                    height: '35px',
                    borderRadius: '24px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxSizing: 'border-box',
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
              maxWidth: '1198px',
              marginBottom: '40px',
              whiteSpace: 'pre-line',
            }}
          >
            {`Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!\nive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.`}
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  fontWeight: 500,
                  boxSizing: 'border-box',
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  fontWeight: 500,
                  boxSizing: 'border-box',
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
                lineHeight: '21.6px',
                fontWeight: 500,
                padding: '12px 24px',
                height: '46px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxSizing: 'border-box',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
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
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
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
                  boxSizing: 'border-box',
                }}
              >
                <FilterIcon size={24} color="#242528" />
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
                  boxSizing: 'border-box',
                }}
              >
                <SignalCellularIcon size={24} color="#242528" />
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
                  boxSizing: 'border-box',
                }}
              >
                <CategoryFilterIcon size={24} color="#242528" />
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
                  boxSizing: 'border-box',
                }}
              >
                <SortIcon size={24} color="#242528" />
                <span>Most relevant</span>
              </button>
            </div>
          </div>

          {/* Courses Grid: exactly 3 columns of 373px with 40px gap */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 373px)',
              justifyContent: 'space-between',
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

