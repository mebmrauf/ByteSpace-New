'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  StarIcon,
  SignalCellularIcon,
  ShareIcon,
  PlayIcon,
  CheckCircleIcon,
  VideoCameraIcon,
  BookOpenIcon,
  CertificateIcon,
  HeadsetIcon,
} from '@/components/Icons';
import { COURSES } from '@/data/courses';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params?.id as string;
  const course = COURSES.find((c) => c.id === courseId) || COURSES[1]; // defaults to Build Digital Asset

  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>('about');
  const [selectedRatingFilter, setSelectedRatingFilter] = useState('All');

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* ============================================================ */}
      {/* 1. COURSE HERO BANNER & VIDEO PREVIEW                        */}
      {/* ============================================================ */}
      <section
        className="blue-grid-bg"
        style={{
          color: '#FFFFFF',
          paddingBottom: '80px',
          position: 'relative',
        }}
      >
        <Header variant="light" />

        <div className="container" style={{ paddingTop: '20px' }}>
          {/* Top Title & Meta */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '20px',
              marginBottom: '40px',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 4vw, 42px)',
                  fontWeight: 700,
                  marginBottom: '10px',
                  letterSpacing: '-0.01em',
                }}
              >
                {course.title}: A Comprehensive Guide
              </h1>
              <p
                style={{
                  fontSize: '16px',
                  color: '#F5F5F6',
                  opacity: 0.9,
                  marginBottom: '12px',
                }}
              >
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <div
                style={{
                  fontSize: '14px',
                  color: '#D4FB20',
                  fontWeight: 600,
                  marginBottom: '20px',
                }}
              >
                by{' '}
                <Link href="/creators/purepearl-studio" style={{ textDecoration: 'underline' }}>
                  {course.author}
                </Link>
              </div>

              {/* Meta Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#FFFFFF',
                    color: '#242528',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: '9999px',
                  }}
                >
                  <SignalCellularIcon size={14} color="#242528" />
                  <span>Intermediate</span>
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#FFFFFF',
                    color: '#242528',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: '9999px',
                  }}
                >
                  <StarIcon size={14} color="#003BE2" />
                  <span>4.8 (172 reviews)</span>
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    backgroundColor: '#FFFFFF',
                    color: '#242528',
                    fontSize: '13px',
                    fontWeight: 600,
                    padding: '8px 18px',
                    borderRadius: '9999px',
                  }}
                >
                  <span>👥 199 Students</span>
                </span>
              </div>
            </div>

            {/* Share Button */}
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
                gap: '8px',
                backgroundColor: '#D4FB20',
                color: '#242528',
                fontSize: '14px',
                fontWeight: 600,
                padding: '10px 24px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <ShareIcon size={16} />
              <span>Share</span>
            </button>
          </div>

          {/* Large Video Preview Container */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 380px',
              gap: '40px',
              alignItems: 'flex-start',
            }}
            className="course-layout-grid"
          >
            {/* Video Player Box */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                backgroundColor: '#1E293B',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
              }}
            >
              <Image
                src="/images/course-video-hero.png"
                alt={course.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
              {/* Play Button Overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                }}
                className="play-btn-hover"
              >
                <PlayIcon size={64} />
              </div>
            </div>

            {/* Sticky Sidebar Enrollment Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                color: '#242528',
                borderRadius: '24px',
                padding: '32px 28px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 700,
                    marginBottom: '16px',
                  }}
                >
                  112 Lessons (24 hours)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#242528' }}>01 Introduction to Digital Assets</span>
                    <span style={{ color: '#003BE2', fontWeight: 500 }}>12 mins</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#242528' }}>02 Design Principles for Impacts</span>
                    <span style={{ color: '#003BE2', fontWeight: 500 }}>21 mins</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#242528' }}>03 Advanced Techniques in Digital Creation</span>
                    <span style={{ color: '#003BE2', fontWeight: 500 }}>16 mins</span>
                  </div>
                </div>

                <div style={{ fontSize: '12px', color: '#82868E', marginTop: '10px' }}>99 more videos</div>
              </div>

              <div style={{ borderTop: '1px solid #E5E6E8', paddingTop: '20px' }}>
                <p style={{ fontSize: '13px', color: '#666973', lineHeight: '20px', marginBottom: '14px' }}>
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '28px', fontWeight: 700, color: '#003BE2' }}>${course.price}</span>
                  <span style={{ fontSize: '13px', color: '#82868E' }}>/lifetime</span>
                </div>

                <button
                  style={{
                    width: '100%',
                    backgroundColor: '#D4FB20',
                    color: '#242528',
                    fontWeight: 700,
                    fontSize: '15px',
                    padding: '14px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Enroll Now
                </button>
              </div>

              {/* Course Includes */}
              <div style={{ borderTop: '1px solid #E5E6E8', paddingTop: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '14px' }}>This course include</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#4B4C53' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <BookOpenIcon size={18} />
                    <span>Learning Resources</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <VideoCameraIcon size={18} />
                    <span>Quality Lesson Videos</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CertificateIcon size={18} />
                    <span>Certificate of Completion</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <HeadsetIcon size={18} />
                    <span>Private Consultation</span>
                  </div>
                </div>
              </div>

              {/* Creator Profile Link Box */}
              <div style={{ borderTop: '1px solid #E5E6E8', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div
                    style={{
                      position: 'relative',
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      backgroundColor: '#F5F5F6',
                    }}
                  >
                    <Image src="/images/instructor-purepearl.png" alt="PurePearl Studio" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#242528' }}>PurePearl Studio</div>
                    <div style={{ fontSize: '12px', color: '#82868E' }}>Professional Creator</div>
                  </div>
                </div>
                <p style={{ fontSize: '12px', color: '#666973', marginBottom: '14px' }}>
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                </p>
                <Link
                  href="/creators/purepearl-studio"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    padding: '10px',
                    borderRadius: '9999px',
                    border: '1px solid #CED0D3',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#242528',
                    textDecoration: 'none',
                    textAlign: 'center',
                  }}
                >
                  See Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. MAIN TABS CONTENT AREA                                    */}
      {/* ============================================================ */}
      <section style={{ padding: '60px 0 100px', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 380px',
              gap: '40px',
            }}
            className="course-layout-grid"
          >
            {/* Left Content Area */}
            <div>
              {/* Tab Switcher Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '48px',
                }}
              >
                <button
                  onClick={() => setActiveTab('about')}
                  style={{
                    backgroundColor: activeTab === 'about' ? '#D4FB20' : '#F5F5F6',
                    color: '#242528',
                    fontSize: '14px',
                    fontWeight: activeTab === 'about' ? 700 : 500,
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab('lessons')}
                  style={{
                    backgroundColor: activeTab === 'lessons' ? '#D4FB20' : '#F5F5F6',
                    color: '#242528',
                    fontSize: '14px',
                    fontWeight: activeTab === 'lessons' ? 700 : 500,
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  Lesson
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  style={{
                    backgroundColor: activeTab === 'reviews' ? '#D4FB20' : '#F5F5F6',
                    color: '#242528',
                    fontSize: '14px',
                    fontWeight: activeTab === 'reviews' ? 700 : 500,
                    padding: '10px 24px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  Reviews
                </button>
              </div>

              {/* TAB 1: ABOUT */}
              {activeTab === 'about' && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: '16px',
                    }}
                  >
                    Description
                  </h3>
                  <div
                    style={{
                      fontSize: '15px',
                      lineHeight: '26px',
                      color: '#4B4C53',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      marginBottom: '48px',
                    }}
                  >
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive
                      course, &quot;Build Digital Assets: A Comprehensive Guide.&quot; This transformative learning experience invites
                      you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork
                      with foundational concepts to mastering advanced techniques, this guide is meticulously curated to
                      empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation by immersing yourself in the foundational
                      concepts that form the backbone of digital asset creation. Understand the fundamental elements that
                      constitute compelling digital content and gain proficiency in leveraging these elements to communicate
                      effectively in the digital realm.
                    </p>
                    <p>
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
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: '20px',
                    }}
                  >
                    Sneak Peak
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '16px',
                      marginBottom: '48px',
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
                          height: '120px',
                          borderRadius: '12px',
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
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: '20px',
                    }}
                  >
                    Key Points
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
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
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircleIcon size={20} color="#0445FF" />
                        <span style={{ fontSize: '15px', color: '#242528', fontWeight: 500 }}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: LESSONS */}
              {activeTab === 'lessons' && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: '10px',
                    }}
                  >
                    Explore the Modules
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666973', marginBottom: '32px' }}>
                    Immerse yourself in the course content as we break down each module into comprehensive lessons,
                    providing practical insights and hands-on experiences.
                  </p>

                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Lesson List</h4>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
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
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                        <div
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            backgroundColor: '#D4FB20',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <VideoCameraIcon size={20} />
                        </div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: 700, color: '#242528', marginBottom: '4px' }}>
                            {mod.title}
                          </div>
                          <div style={{ fontSize: '13px', color: '#666973', lineHeight: '20px' }}>{mod.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>Lesson Content</h4>
                  <p style={{ fontSize: '14px', color: '#666973', lineHeight: '22px', marginBottom: '32px' }}>
                    Engage with each lesson through captivating video content, detailed textual explanations, and
                    interactive elements. Download resources, complete assignments, and test your understanding with
                    quizzes.
                  </p>

                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
                    Lesson Progress Tracking
                  </h4>
                  <p style={{ fontSize: '14px', color: '#666973', lineHeight: '22px', marginBottom: '20px' }}>
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
                    through your learning journey.
                  </p>

                  <div
                    style={{
                      border: '1px solid #E5E6E8',
                      borderRadius: '16px',
                      padding: '24px',
                      maxWidth: '520px',
                    }}
                  >
                    <div style={{ fontSize: '12px', color: '#82868E', marginBottom: '6px' }}>Learning Progress</div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '36px',
                        fontWeight: 700,
                        color: '#242528',
                        marginBottom: '12px',
                      }}
                    >
                      55%
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#E5E6E8',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: '55%',
                          height: '100%',
                          backgroundColor: '#D4FB20',
                          borderRadius: '9999px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: REVIEWS */}
              {activeTab === 'reviews' && (
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '24px',
                      fontWeight: 700,
                      marginBottom: '10px',
                    }}
                  >
                    What Learners Are Saying
                  </h3>
                  <p style={{ fontSize: '15px', color: '#666973', marginBottom: '32px' }}>
                    Discover what our learners have to say about their experience with &apos;Build Digital Assets: A
                    Comprehensive Guide.&apos; Read reviews and ratings from individuals who have embarked on the
                    transformative journey of mastering digital asset creation.
                  </p>

                  {/* Rating Breakdown Card */}
                  <div
                    style={{
                      border: '1px solid #E5E6E8',
                      borderRadius: '20px',
                      padding: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '36px',
                      marginBottom: '40px',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#D4FB20',
                        borderRadius: '16px',
                        padding: '24px 28px',
                        textAlign: 'center',
                      }}
                    >
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#242528' }}>Ratings</div>
                      <div
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '44px',
                          fontWeight: 700,
                          color: '#242528',
                          lineHeight: 1,
                        }}
                      >
                        4.7
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { stars: 5, count: 720, pct: 90 },
                        { stars: 4, count: 120, pct: 60 },
                        { stars: 3, count: 21, pct: 25 },
                        { stars: 2, count: 12, pct: 15 },
                        { stars: 1, count: 16, pct: 10 },
                      ].map((bar) => (
                        <div key={bar.stars} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div
                            style={{
                              flex: 1,
                              height: '6px',
                              backgroundColor: '#E5E6E8',
                              borderRadius: '9999px',
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                width: `${bar.pct}%`,
                                height: '100%',
                                backgroundColor: '#D4FB20',
                                borderRadius: '9999px',
                              }}
                            />
                          </div>
                          <div style={{ display: 'flex', gap: '2px' }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: '#242528', fontSize: '12px' }}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span style={{ fontSize: '12px', color: '#666973', width: '30px', textAlign: 'right' }}>
                            {bar.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px' }}>Individual Reviews:</h4>

                  {/* Rating Filters */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
                    {['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((r) => (
                      <button
                        key={r}
                        onClick={() => setSelectedRatingFilter(r)}
                        style={{
                          backgroundColor: selectedRatingFilter === r ? '#D4FB20' : '#F5F5F6',
                          color: '#242528',
                          fontSize: '13px',
                          fontWeight: selectedRatingFilter === r ? 600 : 500,
                          padding: '8px 18px',
                          borderRadius: '9999px',
                          border: 'none',
                          cursor: 'pointer',
                        }}
                      >
                        {r}
                      </button>
                    ))}
                  </div>

                  {/* Reviews List */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                        text: 'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
                      },
                      {
                        name: 'Cody Fisher',
                        role: 'UI/UX Designer',
                        avatar: '/images/reviewer-cody.png',
                        time: 'a year ago',
                        text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
                      },
                      {
                        name: 'Brooklyn Simmons',
                        role: 'UI/UX Designer',
                        avatar: '/images/reviewer-brooklyn.png',
                        time: 'a year ago',
                        text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
                      },
                    ].map((rev, idx) => (
                      <div
                        key={idx}
                        style={{
                          border: '1px solid #E5E6E8',
                          borderRadius: '16px',
                          padding: '24px',
                          backgroundColor: '#FFFFFF',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '12px',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div
                              style={{
                                position: 'relative',
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: '#F5F5F6',
                              }}
                            >
                              <Image src={rev.avatar} alt={rev.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div>
                              <div style={{ fontSize: '15px', fontWeight: 700, color: '#242528' }}>{rev.name}</div>
                              <div style={{ fontSize: '12px', color: '#666973' }}>{rev.role}</div>
                            </div>
                          </div>
                          <div style={{ fontSize: '12px', color: '#82868E' }}>{rev.time}</div>
                        </div>

                        {/* Stars */}
                        <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }}>
                          {[...Array(5)].map((_, i) => (
                            <span key={i} style={{ color: '#242528', fontSize: '14px' }}>
                              ★
                            </span>
                          ))}
                        </div>

                        <p style={{ fontSize: '14px', lineHeight: '22px', color: '#4B4C53' }}>{rev.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @media (max-width: 992px) {
          :global(.course-layout-grid) {
            grid-template-columns: 1fr !important;
          }
        }
        .play-btn-hover:hover {
          transform: translate(-50%, -50%) scale(1.08);
        }
      `}</style>
    </main>
  );
}
