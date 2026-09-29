'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
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
  const course = COURSES.find((c, idx) => c.id === courseId || String(idx + 1) === courseId);

  if (!course) {
    notFound();
  }

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

        <div className="container" style={{ paddingTop: '20px', maxWidth: '1200px' }}>
          {/* Top Title & Meta */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '24px',
              marginBottom: '40px',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '36px',
                  lineHeight: '43.2px',
                  fontWeight: 600,
                  letterSpacing: '-0.36px',
                  color: '#F5F5F6',
                  marginBottom: '8px',
                }}
              >
                {course.title}: A Comprehensive Guide
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  lineHeight: '24px',
                  fontWeight: 600,
                  letterSpacing: '-0.2px',
                  color: '#F5F5F6',
                  marginBottom: '24px',
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
                  marginBottom: '24px',
                }}
              >
                by{' '}
                <Link href="/creators/purepearl-studio" style={{ color: '#F1F4FE', textDecoration: 'none' }}>
                  {course.author}
                </Link>
              </div>

              {/* Meta Badges: 40px height, 24px radius, 8px 24px padding */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#FFFFFF',
                    color: '#242528',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 500,
                    padding: '8px 24px',
                    height: '40px',
                    borderRadius: '24px',
                  }}
                >
                  <SignalCellularIcon size={18} color="#242528" />
                  <span>Intermediate</span>
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#FFFFFF',
                    color: '#242528',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 500,
                    padding: '8px 24px',
                    height: '40px',
                    borderRadius: '24px',
                  }}
                >
                  <StarIcon size={18} color="#003BE2" />
                  <span>4.8 (172 reviews)</span>
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: '#FFFFFF',
                    color: '#242528',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    fontWeight: 500,
                    padding: '8px 24px',
                    height: '40px',
                    borderRadius: '24px',
                  }}
                >
                  <span>199 Students</span>
                </span>
              </div>
            </div>

            {/* Share Button: White background, 24px radius, 40px height */}
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
                backgroundColor: '#FFFFFF',
                color: '#242528',
                fontFamily: 'var(--font-body)',
                fontSize: '16px',
                fontWeight: 500,
                padding: '8px 24px',
                height: '40px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <ShareIcon size={18} />
              <span>Share</span>
            </button>
          </div>

          {/* Large Video Preview Container & Right Sidebar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 412px',
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
                  width: '104px',
                  height: '104px',
                  borderRadius: '24px',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s ease',
                }}
                className="play-btn-hover"
              >
                <PlayIcon size={60} />
              </div>
            </div>

            {/* Sticky Sidebar Enrollment Card: 412px width, 40px padding, 24px radius, 1px border */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                color: '#242528',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid #CED0D3',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
              }}
            >
              {/* Lessons Title & Preview */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    lineHeight: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.2px',
                    color: '#242528',
                    marginBottom: '24px',
                  }}
                >
                  112 Lessons (24 hours)
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 500, color: '#242528' }}>
                      01 Introduction to Digital Assets
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#003BE2' }}>12 mins</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 500, color: '#242528' }}>
                      02 Design Principles for Impacts
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#003BE2' }}>21 mins</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 500, color: '#242528' }}>
                      03 Advanced Techniques in Digital Creation
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#003BE2' }}>16 mins</span>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    color: '#4B4C53',
                    marginTop: '12px',
                  }}
                >
                  99 more videos
                </div>
              </div>

              {/* Ready & Price & Enroll Button */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '26px',
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
                      lineHeight: '38px',
                      fontWeight: 600,
                      color: '#003BE2',
                    }}
                  >
                    ${course.price}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
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
                    { label: 'Learning Resources', icon: <BookOpenIcon size={20} /> },
                    { label: 'Quality Lesson Videos', icon: <VideoCameraIcon size={20} /> },
                    { label: 'Certificate of Completion', icon: <CertificateIcon size={20} /> },
                    { label: 'Private Consultation', icon: <HeadsetIcon size={20} /> },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '16px',
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
                        lineHeight: '22px',
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
                    lineHeight: '26px',
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
                    fontWeight: 500,
                    color: '#4B4C53',
                    textDecoration: 'none',
                    textAlign: 'center',
                    width: 'fit-content',
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
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1fr) 412px',
              gap: '40px',
            }}
            className="course-layout-grid"
          >
            {/* Left Content Area (723px in Figma) */}
            <div>
              {/* Tab Switcher Pills: 43px height, 24px radius, 12px 16px padding */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '40px',
                }}
              >
                <button
                  onClick={() => setActiveTab('about')}
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
                  onClick={() => setActiveTab('lessons')}
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
                  onClick={() => setActiveTab('reviews')}
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
                      lineHeight: '26px',
                      color: '#4B4C53',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      marginBottom: '16px',
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
                      margin: 0,
                    }}
                  >
                    Sneak Peak
                  </h3>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '40px',
                      marginBottom: '16px',
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
                      margin: 0,
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
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircleIcon size={20} color="#0445FF" />
                        <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#242528', fontWeight: 500 }}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: LESSONS */}
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
                      lineHeight: '26px',
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

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                          alignItems: 'center',
                          gap: '13px',
                          padding: '12px 16px',
                          borderRadius: '24px',
                          backgroundColor: '#FFFFFF',
                          border: '1px solid #CED0D3',
                        }}
                      >
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '24px',
                            backgroundColor: '#F5F5F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <VideoCameraIcon size={24} />
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '16px',
                              fontWeight: 500,
                              color: '#242528',
                              marginBottom: '2px',
                            }}
                          >
                            {mod.title}
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              color: '#82868E',
                              lineHeight: '20px',
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
                      margin: 0,
                    }}
                  >
                    Lesson Content
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      color: '#4B4C53',
                      lineHeight: '26px',
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
                      margin: 0,
                    }}
                  >
                    Lesson Progress Tracking
                  </h4>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      color: '#4B4C53',
                      lineHeight: '26px',
                      margin: 0,
                    }}
                  >
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you
                    through your learning journey.
                  </p>

                  {/* Progress Box in Figma: 723x116, padding 16px, cornerRadius 16px, background #F5F5F6 */}
                  <div
                    style={{
                      backgroundColor: '#F5F5F6',
                      borderRadius: '16px',
                      padding: '16px 24px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#242528',
                        marginBottom: '8px',
                      }}
                    >
                      Learning Progress
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '20px',
                        fontWeight: 600,
                        color: '#242528',
                        marginBottom: '8px',
                      }}
                    >
                      10%
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: '#CED0D3',
                        borderRadius: '24px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: '10%',
                          height: '100%',
                          backgroundColor: '#003BE2',
                          borderRadius: '24px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: REVIEWS */}
              {activeTab === 'reviews' && (
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
                    What Learners Are Saying
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '16px',
                      lineHeight: '26px',
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
                    style={{
                      border: '1px solid #CED0D3',
                      borderRadius: '16px',
                      padding: '40px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '24px',
                      backgroundColor: '#FFFFFF',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#D4FB20',
                        borderRadius: '8px',
                        padding: '24px 32px',
                        textAlign: 'center',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '14px',
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
                          fontWeight: 600,
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
                              height: '8px',
                              backgroundColor: '#E5E6E8',
                              borderRadius: '24px',
                              overflow: 'hidden',
                            }}
                          >
                            <div
                              style={{
                                width: `${bar.pct}%`,
                                height: '100%',
                                backgroundColor: '#D4FB20',
                                borderRadius: '24px',
                              }}
                            />
                          </div>
                          <div style={{ display: 'flex', gap: '2px' }}>
                            {[...Array(5)].map((_, i) => (
                              <span key={i} style={{ color: '#4B4C53', fontSize: '14px' }}>
                                ★
                              </span>
                            ))}
                          </div>
                          <span
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              color: '#4B4C53',
                              width: '32px',
                              textAlign: 'right',
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
                      margin: 0,
                    }}
                  >
                    Individual Reviews:
                  </h4>

                  {/* Rating Filters: 48px height, 24px radius, 12px 16px padding */}
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    {['All', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((r) => {
                      const isActive = selectedRatingFilter === r || (selectedRatingFilter === 'All' && r === 'All');
                      return (
                        <button
                          key={r}
                          onClick={() => setSelectedRatingFilter(r)}
                          style={{
                            backgroundColor: isActive ? '#D4FB20' : '#FFFFFF',
                            color: '#242528',
                            fontFamily: 'var(--font-body)',
                            fontSize: '16px',
                            fontWeight: 500,
                            padding: '12px 16px',
                            height: '48px',
                            borderRadius: '24px',
                            border: '1px solid #CED0D3',
                            cursor: 'pointer',
                          }}
                        >
                          {r}
                        </button>
                      );
                    })}
                  </div>

                  {/* Reviews List: 24px radius, 1px solid #CED0D3, 40px padding */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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
                        text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
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
                          border: '1px solid #CED0D3',
                          borderRadius: '24px',
                          padding: '40px',
                          backgroundColor: '#FFFFFF',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '24px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <div
                              style={{
                                position: 'relative',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                backgroundColor: '#F5F5F6',
                              }}
                            >
                              <Image src={rev.avatar} alt={rev.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div>
                              <div
                                style={{
                                  fontFamily: 'var(--font-heading)',
                                  fontSize: '20px',
                                  lineHeight: '24px',
                                  fontWeight: 600,
                                  color: '#242528',
                                }}
                              >
                                {rev.name}
                              </div>
                              <div
                                style={{
                                  fontFamily: 'var(--font-body)',
                                  fontSize: '16px',
                                  color: '#4B4C53',
                                }}
                              >
                                {rev.role}
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              fontFamily: 'var(--font-body)',
                              fontSize: '14px',
                              color: '#82868E',
                            }}
                          >
                            {rev.time}
                          </div>
                        </div>

                        <p
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '16px',
                            lineHeight: '26px',
                            color: '#4B4C53',
                            margin: 0,
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
