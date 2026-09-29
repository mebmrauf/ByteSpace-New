'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import { CategoryCard } from '@/components/CategoryCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { PartnerLogos } from '@/components/PartnerLogos';
import {
  CardUIUXDesign,
  CardLearningProgress,
  CardHappyStudents,
  CardTotalRevenue,
  CardYearToDate,
} from '@/components/FloatingCards';
import { SearchIcon, CheckCircleIcon, StarIcon, SignalCellularIcon } from '@/components/Icons';
import { COURSES, CATEGORIES, LEARNING_PATHS } from '@/data/courses';
import { TESTIMONIALS } from '@/data/testimonials';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('Featured');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses =
    selectedCategory === 'Featured'
      ? COURSES
      : COURSES.filter(
          (c) =>
            c.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            c.title.toLowerCase().includes(selectedCategory.toLowerCase())
        );

  const displayCourses = filteredCourses;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section className="hero-section blue-grid-bg">
        <Header variant="light" />

        {/* 1440px Hero Canvas - Pixel Perfect Figma Artboard */}
        <div className="hero-canvas">
          {/* Hero Header Content (Text + Search) */}
          <div className="hero-header-content">
            <h1 className="hero-title">
              Get Access to Hundreds Courses Available
            </h1>

            <p className="hero-subtitle">
              Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
            </p>

            {/* Figma-exact 2-pill Search Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery) window.location.href = `/courses?q=${encodeURIComponent(searchQuery)}`;
              }}
              className="hero-search-form"
            >
              <div className="hero-search-input-box">
                <SearchIcon size={20} color="#82868E" />
                <input
                  type="text"
                  placeholder="Course, topic, creator"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="hero-search-input"
                />
              </div>
              <button type="submit" className="hero-search-button">
                Search
              </button>
            </form>
          </div>

          {/* Stage Group (Green Ring, Student Photo, 3 Floating Cards) */}
          <div className="hero-stage-group">
            {/* Ellipse 7: Hollow Green Ring (Figma id 1:1866) */}
            <div className="hero-ellipse-ring" aria-hidden="true" />

            {/* Student Photo (Figma id 1:1796) */}
            <div className="hero-student-wrapper">
              <Image
                src="/images/hero-student.png"
                alt="Student learning online with ByteSpace"
                width={578}
                height={541}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Floating Card: UI/UX Design (Figma id 46:126) */}
            <div className="hero-card-uiux float-slow">
              <CardUIUXDesign />
            </div>

            {/* Floating Card: Learning Progress 55% (Figma id 1:1797) */}
            <div className="hero-card-progress float-reverse">
              <CardLearningProgress />
            </div>

            {/* Floating Card: Happy Students (Figma id 1:1821) */}
            <div className="hero-card-students float-slow">
              <CardHappyStudents />
            </div>
          </div>

          {/* 3D Ornaments (Figma id 46:79) */}
          {/* Shape 1: Large Lime Coil (46:90) */}
          <div className="hero-shape hero-shape-coil-lime float-slow" aria-hidden="true">
            <Image
              src="/shapes/hero-shape-coil-lime.png"
              alt=""
              width={385}
              height={385}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Shape 2: Small White Coil (46:95) */}
          <div className="hero-shape hero-shape-coil-white float-reverse" aria-hidden="true">
            <Image
              src="/shapes/hero-shape-coil-white.png"
              alt=""
              width={175}
              height={175}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Shape 3: White Donut/Torus (46:105) */}
          <div className="hero-shape hero-shape-torus-white float-slow" aria-hidden="true">
            <Image
              src="/shapes/hero-shape-torus-white.png"
              alt=""
              width={342}
              height={342}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Shape 4: Large Lime Cylinder (46:110) */}
          <div className="hero-shape hero-shape-cylinder-lime float-slow" aria-hidden="true">
            <Image
              src="/shapes/hero-shape-cylinder-lime.png"
              alt=""
              width={370}
              height={370}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Shape 5: White Pyramid/Cone (46:80) */}
          <div className="hero-shape hero-shape-cone-white float-reverse" aria-hidden="true">
            <Image
              src="/shapes/hero-shape-cone-white.png"
              alt=""
              width={188}
              height={188}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>

          {/* Shape 6: White Upright Spring (46:85) */}
          <div className="hero-shape hero-shape-spring-white float-slow" aria-hidden="true">
            <Image
              src="/shapes/hero-shape-spring-white.png"
              alt=""
              width={330}
              height={330}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PARTNER LOGOS SECTION                                     */}
      {/* ============================================================ */}
      <PartnerLogos />

      {/* ============================================================ */}
      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS (Frame 3, 12:101)*/}
      {/* ============================================================ */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 600,
                lineHeight: '52.8px',
                letterSpacing: '-0.44px',
                color: '#040819',
                maxWidth: '588px',
                margin: '0 auto 16px',
              }}
            >
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '28.8px',
                color: '#82868E',
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different<br className="desktop-break" /> fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Filter Pills (Tab_Categories, Frame 6, Frame 7) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              maxWidth: '1086px',
              margin: '0 auto 56px',
            }}
          >
            {[
              ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
              ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
              ['Productivity', 'Web Development', 'Data Science', 'Cooking', '+ More'],
            ].map((row, rowIdx) => (
              <div
                key={rowIdx}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '16px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {row.map((cat) => {
                  if (cat === '+ More') {
                    return (
                      <Link
                        key={cat}
                        href="/courses"
                        style={{
                          backgroundColor: 'transparent',
                          color: '#003BE2',
                          fontFamily: 'Satoshi, sans-serif',
                          fontSize: '16px',
                          fontWeight: 500,
                          lineHeight: '19.2px',
                          padding: '12px 16px',
                          border: 'none',
                          cursor: 'pointer',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        + More
                      </Link>
                    );
                  }

                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      style={{
                        backgroundColor: isActive ? '#D4FB20' : '#F5F5F6',
                        color: isActive ? '#242528' : '#4B4C53',
                        fontFamily: 'Satoshi, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500,
                        lineHeight: '19.2px',
                        padding: '12px 16px',
                        borderRadius: '24px',
                        transition: 'all 0.15s ease',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Course Cards Grid (Frame 8, 33:683) */}
          {displayCourses.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                gap: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
              }}
            >
              {displayCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 24px',
                color: '#82868E',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '18px',
              }}
            >
              No courses found for &quot;{selectedCategory}&quot;.
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. DIVERSE LEARNING PATHS (Frame 9 & Frame 10)               */}
      {/* ============================================================ */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '68px' }}>
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(28px, 3vw, 36px)',
                fontWeight: 600,
                lineHeight: '43.2px',
                letterSpacing: '-0.36px',
                color: '#040819',
                marginBottom: '16px',
              }}
            >
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '28.8px',
                color: '#82868E',
                maxWidth: '920px',
                margin: '0 auto',
              }}
            >
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various<br className="desktop-break" /> fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
            </p>
          </div>

          {/* 6 Category Cards (Frame 10, 34:725) */}
          <div className="category-cards-grid">
            {LEARNING_PATHS.map((item) => (
              <CategoryCard key={item.id} id={item.id} name={item.name} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5 + 6. VALUE PROPS WRAPPER (shared gradient bg)              */}
      {/* ============================================================ */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#FAFAFA',
          backgroundImage: "url('/images/bg-sections-5-6.webp')",
          backgroundPosition: 'center top',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          padding: '120px 0',
        }}
      >
        <div
          style={{
            maxWidth: '1258px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '72px',
          }}
          className="value-props-container"
        >
          {/* ── Section 5: Professional Growth ── */}
          <section>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '63px',
                alignItems: 'center',
              }}
              className="value-prop-grid"
            >
              {/* Left Column: Text & Stats */}
              <div style={{ maxWidth: '574px' }}>
                <h2
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    fontWeight: 600,
                    color: '#242528',
                    lineHeight: '52.8px',
                    letterSpacing: '-0.44px',
                    marginBottom: '40px',
                  }}
                >
                  Your Path to Professional Growth Starts Here!
                </h2>

                <p
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '18px',
                    lineHeight: '28.8px',
                    color: '#4B4C53',
                    maxWidth: '477px',
                    marginBottom: '40px',
                  }}
                >
                  Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
                  career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a
                  new career path entirely, we have the resources you need.
                </p>

                {/* Stats Counters - gap:56px per Figma */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '56px' }}>
                  {[
                    { value: '12K', label: 'Students' },
                    { value: '70+', label: 'Courses' },
                    { value: '16', label: 'Creators' },
                  ].map(({ value, label }) => (
                    <div key={label}>
                      <div
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '36px',
                          fontWeight: 500,
                          color: '#003BE2',
                          lineHeight: '44px',
                          letterSpacing: '-0.36px',
                        }}
                      >
                        {value}
                      </div>
                      <div
                        style={{
                          fontFamily: 'Satoshi, sans-serif',
                          fontSize: '18px',
                          fontWeight: 400,
                          lineHeight: '28.8px',
                          color: '#4B4C53',
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Visual Composition (Frame 11, 621x552) */}
              <div
                style={{
                  position: 'relative',
                  height: '552px',
                  width: '100%',
                  maxWidth: '621px',
                }}
              >
                {/* Course Card (top-left, 373x384 at x:0 y:0) */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '373px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    border: '1px solid #CED0D3',
                    padding: '16px',
                    boxSizing: 'border-box',
                    zIndex: 1,
                  }}
                >
                  <div style={{ position: 'relative', width: '100%', height: '195px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#443131' }}>
                    <Link href="/courses/learn-figma-from-basic" style={{ display: 'block', width: '100%', height: '100%' }}>
                      <Image src="/courses/course-figma.png" alt="Learn Figma from Basic" fill style={{ objectFit: 'cover' }} />
                    </Link>
                    <div style={{ position: 'absolute', bottom: '12px', left: '12px', display: 'flex', gap: '12px', zIndex: 2 }}>
                      <Link
                        href="/courses/learn-figma-from-basic/lessons"
                        style={{
                          backgroundColor: 'rgba(246,246,246,0.85)',
                          backdropFilter: 'blur(8px)',
                          WebkitBackdropFilter: 'blur(8px)',
                          color: '#4F4F4F',
                          fontSize: '12px',
                          fontWeight: 500,
                          lineHeight: '20px',
                          padding: '6px 12px',
                          borderRadius: '24px',
                          fontFamily: 'Satoshi, sans-serif',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          transition: 'all 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(212, 251, 32, 0.9)';
                          e.currentTarget.style.color = '#242528';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(246,246,246,0.85)';
                          e.currentTarget.style.color = '#4F4F4F';
                        }}
                        title="View Course Lessons"
                      >
                        17 Lessons
                      </Link>
                      <span style={{ backgroundColor: 'rgba(246,246,246,0.85)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '12px', fontWeight: 500, lineHeight: '20px', padding: '6px 12px', borderRadius: '24px', fontFamily: 'Satoshi, sans-serif' }}>2 hours 16 mins</span>
                    </div>
                  </div>
                  <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div>
                        <Link
                          href="/courses/learn-figma-from-basic"
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '20px',
                            fontWeight: 600,
                            color: '#000000',
                            lineHeight: '28px',
                            textDecoration: 'none',
                            display: 'block',
                          }}
                          title="View Course Details"
                        >
                          Learn Figma from Basic
                        </Link>
                        <div style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '12px', color: '#4F4F4F', lineHeight: '20px' }}>by purepearl studio</div>
                      </div>
                      <Link
                        href="/courses/learn-figma-from-basic/reviews"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontFamily: 'Satoshi, sans-serif',
                          fontSize: '18px',
                          fontWeight: 500,
                          color: '#4F4F4F',
                          flexShrink: 0,
                          textDecoration: 'none',
                          cursor: 'pointer',
                        }}
                        title="View Course Reviews"
                      >
                        <span>4.5</span>
                        <StarIcon size={16} color="#D4FB20" />
                      </Link>
                    </div>
                    {/* Beginner badge + Avatars */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#F5F5F6', borderRadius: '24px', padding: '6px 12px', fontFamily: 'Satoshi, sans-serif', fontSize: '12px', fontWeight: 500, color: '#4B4C53' }}>
                        <SignalCellularIcon size={16} color="#4B4C53" />
                        <span>Beginner</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        {[
                          '/images/student-stack-1.png',
                          '/images/student-stack-2.png',
                          '/images/student-stack-3.png',
                          '/images/student-stack-4.png',
                        ].map((src, i) => (
                          <div
                            key={i}
                            style={{
                              position: 'relative',
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              overflow: 'hidden',
                              marginLeft: i > 0 ? '-8px' : '0',
                              border: '2px solid #FFFFFF',
                              flexShrink: 0,
                              zIndex: i + 1,
                            }}
                          >
                            <Image src={src} alt="Student" fill sizes="32px" style={{ objectFit: 'cover' }} />
                          </div>
                        ))}
                        <div
                          style={{
                            position: 'relative',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            backgroundColor: '#000000',
                            border: '2px solid #FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginLeft: '-8px',
                            flexShrink: 0,
                            zIndex: 6,
                            color: '#FFFFFF',
                            fontFamily: 'Satoshi, sans-serif',
                            fontSize: '12px',
                            fontWeight: 500,
                          }}
                        >
                          26+
                        </div>
                      </div>
                    </div>
                    {/* Price */}
                    <div>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600, color: '#003BE2', lineHeight: '28px' }}>$25</span>
                      <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '12px', color: '#4F4F4F', fontWeight: 400 }}>/lifetime</span>
                    </div>
                  </div>
                </div>

                {/* Lime Coil shape (215x215, x:406 y:67) - placed OVER the learning progress card */}
                <div
                  style={{
                    position: 'absolute',
                    top: '67px',
                    left: '406px',
                    width: '215px',
                    height: '215px',
                    zIndex: 4,
                    pointerEvents: 'none',
                  }}
                  className="float-slow"
                >
                  <Image src="/shapes/spring-sec5-exact.png" alt="" fill style={{ objectFit: 'contain' }} />
                </div>

                {/* Student person image (577x540, x:0 y:12) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    left: '0px',
                    width: '577px',
                    height: '540px',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                >
                  <Image
                    src="/images/hero-student.png"
                    alt="Student"
                    width={577}
                    height={540}
                    priority
                  />
                </div>

                {/* Learning Progress Card (232x138, x:345 y:213) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '213px',
                    left: '345px',
                    zIndex: 3,
                  }}
                >
                  <CardLearningProgress />
                </div>
              </div>
            </div>
          </section>

          {/* ── Section 6: Create & Manage Courses ── */}
          <section>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '79px',
                alignItems: 'center',
              }}
              className="value-prop-grid"
            >
              {/* Left Column: Creator Image + Revenue Cards (Frame 12, 541x596) */}
              <div
                style={{
                  position: 'relative',
                  height: '596px',
                  width: '100%',
                  maxWidth: '541px',
                }}
              >
                {/* Lime coil shape (215x215, x:305 y:114) - placed OVER creator woman shoulder */}
                <div
                  style={{
                    position: 'absolute',
                    top: '114px',
                    left: '305px',
                    width: '215px',
                    height: '215px',
                    zIndex: 3,
                    pointerEvents: 'none',
                  }}
                  className="float-slow"
                >
                  <Image src="/shapes/spring-sec6-exact.png" alt="" fill style={{ objectFit: 'contain' }} />
                </div>

                {/* Total Revenue card (232x119, x:0 y:44) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '44px',
                    left: '0px',
                    zIndex: 1,
                  }}
                >
                  <CardTotalRevenue />
                </div>

                {/* Year to Date card (134x135, x:0 y:194) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '194px',
                    left: '0px',
                    zIndex: 1,
                  }}
                >
                  <CardYearToDate />
                </div>

                {/* Creator Woman image (435x596 at x:28 y:0) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0px',
                    left: '28px',
                    width: '435px',
                    height: '596px',
                    zIndex: 2,
                    pointerEvents: 'none',
                  }}
                >
                  <Image
                    src="/images/creator-woman.png"
                    alt="Creator teaching"
                    width={435}
                    height={596}
                    priority
                  />
                </div>

                {/* Happy Students card (258x123, x:283 y:413) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '413px',
                    left: '283px',
                    zIndex: 4,
                  }}
                >
                  <CardHappyStudents />
                </div>
              </div>

              {/* Right Column: Text & Features List */}
              <div style={{ maxWidth: '580px' }}>
                <h2
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(28px, 3.5vw, 44px)',
                    fontWeight: 600,
                    color: '#242528',
                    lineHeight: '52.8px',
                    letterSpacing: '-0.44px',
                    marginBottom: '18px',
                  }}
                >
                  Create & Manage
                  <br />
                  Courses Easily.
                </h2>

                <p
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '18px',
                    lineHeight: '28.8px',
                    color: '#4B4C53',
                    maxWidth: '574px',
                    marginBottom: '32px',
                  }}
                >
                  <strong style={{ fontWeight: 700, color: '#242528' }}>ByteSpace</strong> supports individuals or entities in the creation, publication,{' '}
                  and administration of educational courses.
                </p>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Share Your Expertise',
                    'Monetize Your Passion',
                    'Flexibility and Autonomy',
                    'Build a Community',
                  ].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircleIcon size={24} color="#003BE2" />
                      <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', fontWeight: 500, lineHeight: '21.6px', color: '#242528' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div> {/* end gradient wrapper */}

      {/* ============================================================ */}
      {/* 7. CREATOR CTA BANNER                                        */}
      {/* ============================================================ */}
      <section
        className="creator-cta-banner"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '488px',
          height: '488px',
          overflow: 'hidden',
          color: '#FFFFFF',
          textAlign: 'center',
          backgroundColor: '#003BE2',
          backgroundImage: "url('/shapes/cta-bg-exact.png')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 16px',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '964px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 600,
              lineHeight: '52.8px',
              letterSpacing: '-0.44px',
              color: '#F5F5F6',
              maxWidth: '710px',
              margin: 0,
            }}
          >
            Unlock Your Potential as a
            <br />
            Creator with ByteSpace
          </h2>

          <p
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '28.8px',
              color: '#F5F5F6',
              maxWidth: '964px',
              margin: 0,
            }}
          >
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a
            <br className="desktop-break" /> part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your
            <br className="desktop-break" /> expertise by publishing your finest course on the ByteSpace Course Library.
          </p>

          <Link
            href="/register"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D4FB20',
              color: '#242528',
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '18px',
              fontWeight: 500,
              lineHeight: '21.6px',
              width: '172px',
              height: '46px',
              borderRadius: '24px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            Join as Creator
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. TESTIMONIALS SECTION                                      */}
      {/* ============================================================ */}
      <section
        style={{
          width: '100%',
          backgroundColor: '#FAFAFA',
          backgroundImage: "url('/images/bg-testimonials.png')",
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          padding: '74px 0 57px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            maxWidth: '1204px',
            width: '100%',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '72px',
            position: 'relative',
            zIndex: 10,
          }}
          className="testimonials-container"
        >
          {/* Section Header: 2 Columns */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '43px',
            }}
          >
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 600,
                color: '#000000',
                lineHeight: '52.8px',
                letterSpacing: '-0.44px',
                maxWidth: '577px',
                margin: 0,
              }}
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>

            <p
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '28.8px',
                color: '#4F4F4F',
                maxWidth: '580px',
                margin: 0,
              }}
            >
              At ByteSpace, our vibrant community of learners and creators is at the
              <br className="desktop-break" /> heart of what we do. Hear directly from those who have experienced the
              <br className="desktop-break" /> transformative journey of learning and creating on our platform. Explore
              <br className="desktop-break" /> testimonials that reflect the diverse perspectives of enthusiastic learners
              <br className="desktop-break" /> and accomplished creators.
            </p>
          </div>

          {/* 3 Testimonials Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 374px)',
              gap: '41px',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'flex-start',
            }}
            className="testimonials-grid"
          >
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9. FOOTER                                                    */}
      {/* ============================================================ */}
      <Footer />
    </main>
  );
}
