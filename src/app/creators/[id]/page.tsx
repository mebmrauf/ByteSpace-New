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

        <div className="container" style={{ paddingTop: '30px' }}>
          {/* Creator Profile Top Bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
            <div
              style={{
                position: 'relative',
                width: '88px',
                height: '88px',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                flexShrink: 0,
              }}
            >
              <Image src="/images/creator-purepearl.png" alt="PurePearl Studio" fill style={{ objectFit: 'cover' }} priority />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                <h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 3.5vw, 36px)',
                    fontWeight: 700,
                    margin: 0,
                  }}
                >
                  PurePearl Studio
                </h1>
                <span
                  style={{
                    backgroundColor: '#D4FB20',
                    color: '#242528',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '4px 14px',
                    borderRadius: '9999px',
                  }}
                >
                  Creator
                </span>
              </div>
              <p style={{ fontSize: '15px', color: '#F5F5F6', opacity: 0.9 }}>Passionate UI/UX, Web designer</p>
            </div>
          </div>

          {/* Bio text */}
          <div
            style={{
              fontSize: '15px',
              lineHeight: '25px',
              color: '#F5F5F6',
              maxWidth: '820px',
              marginBottom: '36px',
              opacity: 0.92,
            }}
          >
            <p style={{ marginBottom: '10px' }}>
              Welcome to the creative world of PurePearl Studio. Here, you&apos;ll discover the passion, expertise, and
              inspiration that drive my creative journey. Let&apos;s explore and learn together!
            </p>
            <p>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#242528',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 20px',
                  borderRadius: '9999px',
                }}
              >
                3 Products
              </span>
              <span
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#242528',
                  fontSize: '13px',
                  fontWeight: 600,
                  padding: '8px 20px',
                  borderRadius: '9999px',
                }}
              >
                {followerCount} Followers
              </span>
            </div>

            <button
              onClick={handleFollowToggle}
              style={{
                backgroundColor: isFollowing ? '#FFFFFF' : '#D4FB20',
                color: '#242528',
                fontSize: '14px',
                fontWeight: 700,
                padding: '10px 32px',
                borderRadius: '9999px',
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
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          {/* Filter Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: '1px solid #CED0D3',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#242528',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <FilterIcon size={16} />
                <span>Filter</span>
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: '1px solid #CED0D3',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#242528',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <SignalCellularIcon size={16} color="#242528" />
                <span>Level</span>
              </button>

              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: '1px solid #CED0D3',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#242528',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <CategoryFilterIcon size={16} />
                <span>Category</span>
              </button>
            </div>

            <div>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: '1px solid #CED0D3',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#242528',
                  backgroundColor: '#FFFFFF',
                }}
              >
                <SortIcon size={16} />
                <span>Most relevant</span>
              </button>
            </div>
          </div>

          {/* Courses Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
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
