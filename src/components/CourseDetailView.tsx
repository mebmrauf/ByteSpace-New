'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams, notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  StarIcon,
  SignalCellularIcon,
  UsersIcon,
  ShareIcon,
  PlayIcon,
  CheckCircleIcon,
  VideoCameraIcon,
  BookOpenIcon,
  CertificateIcon,
  HeadsetIcon,
} from '@/components/Icons';
import { COURSES } from '@/data/courses';

export interface CourseDetailViewProps {
  initialTab?: 'about' | 'lessons' | 'reviews';
  defaultCourseId?: string;
}

function CourseDetailContent({ initialTab, defaultCourseId }: CourseDetailViewProps) {
  const params = useParams();
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab') as 'about' | 'lessons' | 'reviews' | null;

  const courseId = (params?.id as string) || defaultCourseId || 'build-digital-asset';
  const course = COURSES.find((c, idx) => c.id === courseId || String(idx + 1) === courseId);

  if (!course) {
    notFound();
  }

  const resolvedTab = initialTab || (tabParam === 'reviews' ? 'reviews' : tabParam === 'lessons' ? 'lessons' : 'about');
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>(resolvedTab);
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('All');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    } else if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [initialTab, tabParam]);

  useEffect(() => {
    const onPopState = () => {
      const path = window.location.pathname;
      if (path.endsWith('/reviews')) {
        setActiveTab('reviews');
      } else if (path.endsWith('/lessons')) {
        setActiveTab('lessons');
      } else {
        setActiveTab('about');
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const handleTabChange = (tab: 'about' | 'lessons' | 'reviews') => {
    setActiveTab(tab);
    if (typeof window !== 'undefined') {
      const baseCourseUrl = `/courses/${course.id}`;
      if (tab === 'reviews') {
        window.history.pushState(null, '', `${baseCourseUrl}/reviews`);
      } else if (tab === 'lessons') {
        window.history.pushState(null, '', `${baseCourseUrl}/lessons`);
      } else {
        window.history.pushState(null, '', baseCourseUrl);
      }
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', position: 'relative' }}>
      {/* ============================================================ */}
      {/* 1. BLUE GRID BACKGROUND BANNER (Top 895px)                  */}
      {/* ============================================================ */}
      <div
        className="blue-grid-bg course-blue-banner"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Header variant="light" />
      </div>

      {/* Main Page Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '1440px',
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 120px 100px',
          boxSizing: 'border-box',
        }}
        className="course-page-inner"
      >
        {/* Course Header Info & Share Button */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
            paddingTop: '20px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
          className="course-hero-header"
        >
          {/* Left Title & Metadata */}
          <div style={{ flex: '1 1 auto', minWidth: 0 }}>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(24px, 4vw, 36px)',
                lineHeight: '1.25',
                fontWeight: 600,
                letterSpacing: '-0.36px',
                color: '#F5F5F6',
                margin: '0 0 8px 0',
                wordBreak: 'break-word',
              }}
            >
              Build Digital Asset: A Comprehensive Guide
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                lineHeight: '1.3',
                fontWeight: 600,
                letterSpacing: '-0.2px',
                color: '#F5F5F6',
                margin: '0 0 24px 0',
                wordBreak: 'break-word',
              }}
            >
              Unlock the Power of Digital Creation with Expert Guidance
            </p>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '21.6px',
                fontWeight: 500,
                color: '#F1F4FE',
                margin: '0 0 24px 0',
              }}
            >
              by{' '}
              <Link href="/creators/purepearl-studio" style={{ color: '#F1F4FE', textDecoration: 'none' }}>
                purepearl studio
              </Link>
            </div>

            {/* Badges Row (40px height, 24px radius, 8px 24px padding) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <div
                className="course-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#242528',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  padding: '8px 24px',
                  height: '40px',
                  borderRadius: '24px',
                  boxSizing: 'border-box',
                }}
              >
                <SignalCellularIcon size={20} color="#003BE2" />
                <span>Intermediate</span>
              </div>

              <div
                className="course-badge"
                onClick={() => handleTabChange('reviews')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#242528',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  padding: '8px 24px',
                  height: '40px',
                  borderRadius: '24px',
                  boxSizing: 'border-box',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D4FB20';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
                title="View Course Reviews"
              >
                <StarIcon size={20} color="#003BE2" />
                <span>4.8 (172 reviews)</span>
              </div>

              <div
                className="course-badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: '#242528',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  padding: '8px 24px',
                  height: '40px',
                  borderRadius: '24px',
                  boxSizing: 'border-box',
                }}
              >
                <UsersIcon size={20} color="#003BE2" />
                <span>199 Students</span>
              </div>
            </div>
          </div>

          {/* Right Share Button (Lime pill, 40px height, 24px radius) */}
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: course.title, url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Course link copied to clipboard!');
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'flex-start',
              gap: '8px',
              backgroundColor: '#D4FB20',
              color: '#242528',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: '24px',
              fontWeight: 500,
              padding: '8px 24px',
              height: '40px',
              width: 'fit-content',
              maxWidth: 'fit-content',
              borderRadius: '24px',
              border: 'none',
              cursor: 'pointer',
              flexShrink: 0,
              boxSizing: 'border-box',
              whiteSpace: 'nowrap',
            }}
          >
            <ShareIcon size={20} color="#242528" />
            <span>Share</span>
          </button>
        </div>

        {/* 2-Column Grid: Left Column (723px) + Right Column (412px), gap: 65px */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 723px) 412px',
            gap: '65px',
            alignItems: 'flex-start',
          }}
          className="course-layout-grid"
        >
          {/* ============================================================ */}
          {/* LEFT COLUMN: Video Preview & Tabs Content                   */}
          {/* ============================================================ */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Video Player Box (720x479px in Figma) */}
            <div
              className="course-video-box"
              style={{
                position: 'relative',
                width: '100%',
                height: '479px',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#1E293B',
              }}
            >
              <Image
                src="/images/course-video-hero.png"
                alt={course.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 18%' }}
                priority
              />
              {/* Play Button Overlay (104x104px, 24px radius, 1px border #4F4F4F) */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  width: '104px',
                  height: '104px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(61, 61, 61, 0.24)',
                  border: '1px solid #4F4F4F',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s ease',
                }}
                className="play-btn-hover course-video-play-btn"
              >
                <PlayIcon size={60} />
              </div>
            </div>

            {/* Tabs Switcher: 43px height, 24px radius, 12px 16px padding */}
            <div
              className="course-tabs-bar"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginTop: '64px',
                marginBottom: '40px',
              }}
            >
              <button
                onClick={() => handleTabChange('about')}
                style={{
                  backgroundColor: activeTab === 'about' ? '#D4FB20' : '#F5F5F6',
                  color: activeTab === 'about' ? '#242528' : '#4B4C53',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  padding: '12px 16px',
                  height: '43px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                About
              </button>
              <button
                onClick={() => handleTabChange('lessons')}
                style={{
                  backgroundColor: activeTab === 'lessons' ? '#D4FB20' : '#F5F5F6',
                  color: activeTab === 'lessons' ? '#242528' : '#4B4C53',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  padding: '12px 16px',
                  height: '43px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Lesson
              </button>
              <button
                onClick={() => handleTabChange('reviews')}
                style={{
                  backgroundColor: activeTab === 'reviews' ? '#D4FB20' : '#F5F5F6',
                  color: activeTab === 'reviews' ? '#242528' : '#4B4C53',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  padding: '12px 16px',
                  height: '43px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                Reviews
              </button>
            </div>

            {/* TAB 1: ABOUT */}
            {activeTab === 'about' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: 0,
                  }}
                >
                  Description
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '25.6px',
                    color: '#4B4C53',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <p style={{ margin: 0 }}>
                    Embark on an enlightening exploration into the world of digital creation with our comprehensive
                    course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites
                    you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork
                    with foundational concepts to mastering advanced techniques, this guide is meticulously curated to
                    empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                  </p>
                  <p style={{ margin: 0 }}>
                    In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational
                    concepts that form the backbone of digital asset creation. Understand the fundamental elements that
                    constitute compelling digital content and gain proficiency in leveraging these elements to communicate
                    effectively in the digital realm.
                  </p>
                  <p style={{ margin: 0 }}>
                    As you progress through the course, you&apos;ll ascend to higher levels of expertise, delving into the nuances
                    of design principles that drive impactful creations. Uncover the secrets behind effective visual
                    communication, exploring color theory, typography, and layout strategies that elevate your digital assets
                    to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply
                    these principles in practical scenarios.
                  </p>
                </div>

                {/* Sneak Peak Section */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: '8px 0 0 0',
                  }}
                >
                  Sneak Peak
                </h3>
                <div
                  className="sneak-peak-grid"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '19px',
                  }}
                >
                  {[
                    '/images/sneak-peak-1.png',
                    '/images/sneak-peak-2.png',
                    '/images/sneak-peak-3.png',
                    '/images/sneak-peak-4.png',
                  ].map((src, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'relative',
                        height: '125px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        backgroundColor: '#F5F5F6',
                      }}
                    >
                      <Image src={src} alt="Sneak Peak" fill style={{ objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>

                {/* Key Points */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: '8px 0 0 0',
                  }}
                >
                  Key Points
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Foundational Concepts',
                    'Design Principles Mastery',
                    'Advanced Techniques in Digital Creation',
                    'Project Showcase and Critique',
                    'Optimizing for Various Platforms',
                    'Digital Asset Management Best Practices',
                    'Monetization Strategies',
                    'Capstone Project: Building Your Portfolio',
                  ].map((point, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircleIcon size={20} color="#003BE2" />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '25.6px', color: '#4B4C53' }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            )}

            {/* TAB 2: LESSONS (MATCHING USER REFERENCE IMAGES 1, 2 & FIGMA 60:102) */}
            {activeTab === 'lessons' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: 0,
                  }}
                >
                  Explore the Modules
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '25.6px',
                    color: '#4B4C53',
                    margin: 0,
                  }}
                >
                  Immerse yourself in the course content as we break down each module into comprehensive lessons,
                  providing practical insights and hands-on experiences.
                </p>

                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: 0,
                  }}
                >
                  Lesson List
                </h4>

                {/* 6 Modules List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {[
                    {
                      title: 'Module 1: Introduction to Digital Assets',
                      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
                    },
                    {
                      title: 'Module 2: Design Principles for Impact',
                      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
                    },
                    {
                      title: 'Module 4: User-Centric Design Strategies',
                      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
                    },
                    {
                      title: 'Module 5: Interactive Media and Engagement',
                      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
                    },
                    {
                      title: 'Module 6: Project Showcase and Critique',
                      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
                    },
                    {
                      title: 'Module 7: Optimizing Digital Assets for Various Platforms',
                      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
                    },
                  ].map((mod, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '13px',
                      }}
                    >
                      {/* 72x72px Lime Icon Box (24px radius, 16px padding) */}
                      <div
                        style={{
                          width: '72px',
                          height: '72px',
                          borderRadius: '24px',
                          backgroundColor: '#D4FB20',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <VideoCameraIcon size={30} color="#242528" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '16px',
                            lineHeight: '19.2px',
                            fontWeight: 500,
                            color: '#242528',
                            marginBottom: '4px',
                          }}
                        >
                          {mod.title}
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '16px',
                            lineHeight: '25.6px',
                            color: '#4B4C53',
                          }}
                        >
                          {mod.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: '8px 0 0 0',
                  }}
                >
                  Lesson Content
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '25.6px',
                    color: '#4B4C53',
                    margin: 0,
                  }}
                >
                  Engage with each lesson through captivating video content, detailed textual explanations, and
                  interactive elements. Download resources, complete assignments, and test your understanding with
                  quizzes.
                </p>

                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: '8px 0 0 0',
                  }}
                >
                  Lesson Progress Tracking
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '25.6px',
                    color: '#4B4C53',
                    margin: 0,
                  }}
                >
                  Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
                  through your learning journey.
                </p>

                {/* Progress Box in Figma (60:668): 723x116px, padding 16px, cornerRadius 16px, border 1px solid #CED0D3 */}
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #CED0D3',
                    borderRadius: '16px',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      lineHeight: '16.8px',
                      fontWeight: 500,
                      color: '#242528',
                    }}
                  >
                    Learning Progress
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      lineHeight: '43.2px',
                      fontWeight: 600,
                      color: '#242528',
                    }}
                  >
                    55%
                  </div>
                  <div
                    style={{
                      width: '100%',
                      height: '8px',
                      backgroundColor: '#E5E6E8',
                      borderRadius: '24px',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: '55%',
                        height: '100%',
                        backgroundColor: '#D4FB20',
                        borderRadius: '24px',
                      }}
                    />
                  </div>
                </div>

              </div>
            )}

            {/* TAB 3: REVIEWS (FIGMA 60:681) */}
            {activeTab === 'reviews' && (
              <div id="reviews" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: 0,
                  }}
                >
                  What Learners Are Saying
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '25.6px',
                    color: '#4B4C53',
                    margin: 0,
                  }}
                >
                  Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
                  Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
                  transformative journey of mastering digital asset creation.
                </p>

                {/* Rating Breakdown Card: border 1px solid #CED0D3, borderRadius 16px, padding 40px */}
                <div
                  className="rating-breakdown-card"
                  style={{
                    border: '1px solid #CED0D3',
                    borderRadius: '16px',
                    padding: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '24px',
                    backgroundColor: '#FFFFFF',
                    boxSizing: 'border-box',
                    width: '100%',
                    maxWidth: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '129px',
                      height: '140px',
                      backgroundColor: '#D4FB20',
                      borderRadius: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        lineHeight: '16.8px',
                        fontWeight: 500,
                        color: '#242528',
                        marginBottom: '4px',
                      }}
                    >
                      Ratings
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '36px',
                        lineHeight: '43.2px',
                        fontWeight: 600,
                        color: '#242528',
                      }}
                    >
                      4.7
                    </div>
                  </div>

                  {/* Progress bars (5 stars down to 1 star) */}
                  <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                    {[
                      { count: 720, percent: 92.2 },
                      { count: 120, percent: 36.5 },
                      { count: 21, percent: 9.5 },
                      { count: 12, percent: 3.5 },
                      { count: 16, percent: 5.2 },
                    ].map((bar, idx) => (
                      <div key={idx} className="rating-bar-row" style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, width: '100%' }}>
                        <div
                          style={{
                            flex: '1 1 60px',
                            minWidth: '40px',
                            maxWidth: '282px',
                            height: '8px',
                            backgroundColor: '#E5E6E8',
                            borderRadius: '24px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${bar.percent}%`,
                              height: '100%',
                              backgroundColor: '#D4FB20',
                              borderRadius: '24px',
                            }}
                          />
                        </div>
                        <div className="rating-row-stars" style={{ display: 'flex', gap: '3px', flexShrink: 0 }}>
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} size={18} color="#4B4C53" />
                          ))}
                        </div>
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '15px',
                            lineHeight: '20px',
                            color: '#4B4C53',
                            width: '36px',
                            textAlign: 'right',
                            flexShrink: 0,
                          }}
                        >
                          {bar.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <h4
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: '8px 0 0 0',
                  }}
                >
                  Individual Reviews:
                </h4>

                {/* Rating Filters: 43px height, 24px radius, 12px 16px padding */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  {['All rating', '5', '4', '3', '2', '1'].map((r) => {
                    const isActive = selectedRatingFilter === r || (selectedRatingFilter === 'All' && r === 'All rating');
                    return (
                      <button
                        key={r}
                        onClick={() => setSelectedRatingFilter(r === 'All rating' ? 'All' : r)}
                        style={{
                          backgroundColor: isActive ? '#D4FB20' : '#F5F5F6',
                          color: '#242528',
                          fontFamily: 'var(--font-body)',
                          fontSize: '16px',
                          lineHeight: '19.2px',
                          fontWeight: 500,
                          padding: '12px 16px',
                          height: '43px',
                          borderRadius: '24px',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        {r !== 'All rating' && <StarIcon size={18} color="#4B4C53" />}
                        <span>{r}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Reviews List: 24px radius, 1px solid #CED0D3, 40px padding */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%' }}>
                  {[
                    {
                      name: 'PurePearl Studio',
                      role: 'UI/UX Designer',
                      avatar: '/images/reviewer-purepearl.png',
                      time: 'a year ago',
                      text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
                    },
                    {
                      name: 'Albert Flores',
                      role: 'UI/UX Designer',
                      avatar: '/images/reviewer-albert.png',
                      time: 'a year ago',
                      text: '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
                    },
                    {
                      name: 'Cody Fisher',
                      role: 'UI/UX Designer',
                      avatar: '/images/reviewer-cody.png',
                      time: 'a year ago',
                      text: '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."',
                    },
                    {
                      name: 'Brooklyn Simmons',
                      role: 'UI/UX Designer',
                      avatar: '/images/reviewer-brooklyn.png',
                      time: 'a year ago',
                      text: '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."',
                    },
                  ].map((rev, idx) => (
                    <div
                      key={idx}
                      className="course-review-card"
                      style={{
                        border: '1px solid #CED0D3',
                        borderRadius: '24px',
                        padding: '40px',
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        boxSizing: 'border-box',
                        width: '100%',
                      }}
                    >
                      <div
                        className="review-card-top"
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          justifyContent: 'space-between',
                          gap: '12px',
                          flexWrap: 'wrap',
                        }}
                      >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: 0 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                            <div
                              style={{
                                position: 'relative',
                                width: '52px',
                                height: '52px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: '#F5F5F6',
                                flexShrink: 0,
                              }}
                            >
                              <Image src={rev.avatar} alt={rev.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ minWidth: 0 }}>
                              <div
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '18px',
                                  lineHeight: '21.6px',
                                  fontWeight: 500,
                                  color: '#242528',
                                  wordBreak: 'break-word',
                                }}
                              >
                                {rev.name}
                              </div>
                              <div
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '16px',
                                  lineHeight: '24px',
                                  color: '#4B4C53',
                                }}
                              >
                                {rev.role}
                              </div>
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} size={20} color="#4B4C53" />
                            ))}
                          </div>
                        </div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '16px',
                            lineHeight: '24px',
                            color: '#4B4C53',
                            flexShrink: 0,
                          }}
                        >
                          {rev.time}
                        </div>
                      </div>

                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '16px',
                          lineHeight: '24px',
                          color: '#4B4C53',
                          margin: 0,
                          wordBreak: 'break-word',
                        }}
                      >
                        {rev.text}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN: Sticky Sidebar Card (412px in Figma)          */}
          {/* ============================================================ */}
          <div
            className="course-sidebar-card"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#242528',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid #CED0D3',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              position: 'sticky',
              top: '24px',
            }}
          >
            {/* 112 Lessons (24 hours) Preview */}
            <div>
              <div
                onClick={() => handleTabChange('lessons')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  marginBottom: '24px',
                }}
                title="View full course lessons"
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    margin: 0,
                    transition: 'color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#003BE2';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#242528';
                  }}
                >
                  112 Lessons (24 hours)
                </h3>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 600, color: '#003BE2' }}>
                  View all &rarr;
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div
                  onClick={() => handleTabChange('lessons')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '8px',
                    cursor: 'pointer',
                    padding: '6px 8px',
                    margin: '-6px -8px',
                    borderRadius: '8px',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F5F6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  title="Open Module 1 in Course Lessons"
                >
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '19.2px', fontWeight: 500, color: '#242528' }}>
                      01
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '19.2px', fontWeight: 500, color: '#242528' }}>
                      Introduction to Digital Assets
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '25.6px', color: '#003BE2', whiteSpace: 'nowrap' }}>
                    12 mins
                  </span>
                </div>

                <div
                  onClick={() => handleTabChange('lessons')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '8px',
                    cursor: 'pointer',
                    padding: '6px 8px',
                    margin: '-6px -8px',
                    borderRadius: '8px',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F5F6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  title="Open Module 2 in Course Lessons"
                >
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '19.2px', fontWeight: 500, color: '#242528' }}>
                      02
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '19.2px', fontWeight: 500, color: '#242528' }}>
                      Design Principles for Impacts
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '25.6px', color: '#003BE2', whiteSpace: 'nowrap' }}>
                    21 mins
                  </span>
                </div>

                <div
                  onClick={() => handleTabChange('lessons')}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '8px',
                    cursor: 'pointer',
                    padding: '6px 8px',
                    margin: '-6px -8px',
                    borderRadius: '8px',
                    transition: 'background-color 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#F5F5F6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  title="Open Module 3 in Course Lessons"
                >
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '19.2px', fontWeight: 500, color: '#242528' }}>
                      03
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '19.2px', fontWeight: 500, color: '#242528' }}>
                      Advanced Techniques in Digital Creation
                    </span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', lineHeight: '25.6px', color: '#003BE2', whiteSpace: 'nowrap' }}>
                    16 mins
                  </span>
                </div>
              </div>

              <div
                onClick={() => handleTabChange('lessons')}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '25.6px',
                  color: '#4B4C53',
                  marginTop: '12px',
                  cursor: 'pointer',
                  display: 'inline-block',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#003BE2';
                  e.currentTarget.style.textDecoration = 'underline';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#4B4C53';
                  e.currentTarget.style.textDecoration = 'none';
                }}
                title="View all remaining lesson videos"
              >
                99 more videos &rarr;
              </div>
            </div>

            {/* Ready to Dive In & Price & Enroll Button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '25.6px',
                  color: '#4B4C53',
                  margin: 0,
                }}
              >
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '36px',
                    lineHeight: '43.2px',
                    fontWeight: 600,
                    color: '#003BE2',
                  }}
                >
                  $25
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '25.6px',
                    color: '#4B4C53',
                  }}
                >
                  /lifetime
                </span>
              </div>

              <button
                style={{
                  width: '100%',
                  backgroundColor: '#D4FB20',
                  color: '#242528',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  height: '46px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
              >
                Enroll Now
              </button>
            </div>

            {/* Course Includes */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  lineHeight: '24px',
                  fontWeight: 600,
                  letterSpacing: '-0.2px',
                  color: '#242528',
                  margin: 0,
                }}
              >
                This course include
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Learning Resources', icon: <BookOpenIcon size={20} color="#003BE2" /> },
                  { label: 'Quality Lesson Videos', icon: <VideoCameraIcon size={20} color="#003BE2" /> },
                  { label: 'Certificate of Completion', icon: <CertificateIcon size={20} color="#003BE2" /> },
                  { label: 'Private Consultation', icon: <HeadsetIcon size={20} color="#003BE2" /> },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      lineHeight: '25.6px',
                      color: '#4B4C53',
                    }}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider Line */}
            <div style={{ height: '1px', backgroundColor: '#CED0D3', width: '100%' }}></div>

            {/* Creator Profile Link Box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    position: 'relative',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    backgroundColor: '#F5F5F6',
                    flexShrink: 0,
                  }}
                >
                  <Image src="/images/instructor-purepearl.png" alt="PurePearl Studio" fill style={{ objectFit: 'cover' }} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '18px',
                      lineHeight: '21.6px',
                      fontWeight: 500,
                      color: '#242528',
                    }}
                  >
                    PurePearl Studio
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      lineHeight: '25.6px',
                      color: '#4B4C53',
                    }}
                  >
                    Professional Creator
                  </div>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '25.6px',
                  color: '#4B4C53',
                  margin: 0,
                }}
              >
                Ready to Dive In? Enroll Now and Start Building Your Digital Future!
              </p>

              <Link
                href="/creators/purepearl-studio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px 16px',
                  height: '35px',
                  borderRadius: '24px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  color: '#4B4C53',
                  textDecoration: 'none',
                  textAlign: 'center',
                  width: 'fit-content',
                  boxSizing: 'border-box',
                }}
              >
                See Full Profile
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </main>
  );
}

export default function CourseDetailView(props: CourseDetailViewProps) {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }} />}>
      <CourseDetailContent {...props} />
    </Suspense>
  );
}
