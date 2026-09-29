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
import { SearchIcon, CheckCircleIcon } from '@/components/Icons';
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
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across<br className="desktop-break" /> different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Filter Pills (Tab_Categories, 21:33) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              maxWidth: '1086px',
              margin: '0 auto 56px',
            }}
          >
            {CATEGORIES.map((cat) => {
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
      {/* 5. VALUE PROP 1: Professional Growth Starts Here!            */}
      {/* ============================================================ */}
      <section style={{ padding: '80px 0', backgroundColor: '#FAFAFA' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Text & Stats */}
            <div>
              <h2
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(32px, 3.5vw, 44px)',
                  fontWeight: 600,
                  color: '#040819',
                  lineHeight: '52.8px',
                  letterSpacing: '-0.44px',
                  marginBottom: '20px',
                }}
              >
                Your Path to Professional Growth Starts Here!
              </h2>

              <p
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#82868E',
                  marginBottom: '40px',
                }}
              >
                Explore our curated selection of courses tailored to enhance your capabilities and accelerate your
                career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a
                new career path entirely, we have the resources you need.
              </p>

              {/* Stats Counters */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '36px',
                      fontWeight: 600,
                      color: '#040819',
                      lineHeight: '43.2px',
                      marginBottom: '6px',
                    }}
                  >
                    12K
                  </div>
                  <div style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', color: '#82868E' }}>Students</div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '36px',
                      fontWeight: 600,
                      color: '#040819',
                      lineHeight: '43.2px',
                      marginBottom: '6px',
                    }}
                  >
                    70+
                  </div>
                  <div style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', color: '#82868E' }}>Courses</div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '36px',
                      fontWeight: 600,
                      color: '#040819',
                      lineHeight: '43.2px',
                      marginBottom: '6px',
                    }}
                  >
                    16
                  </div>
                  <div style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', color: '#82868E' }}>Creators</div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Composition with Cards */}
            <div
              style={{
                position: 'relative',
                height: '420px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Decorative 3D Zigzag behind */}
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '10px',
                  width: '120px',
                  height: '120px',
                  zIndex: 1,
                }}
              >
                <Image src="/shapes/shape-zigzag.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
              </div>

              {/* Main Student Image */}
              <div
                style={{
                  position: 'relative',
                  width: '380px',
                  height: '380px',
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/hero-student.png"
                  alt="Professional Growth"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Overlay Snippet Card: Learn Figma */}
              <div
                style={{
                  position: 'absolute',
                  top: '40px',
                  left: '10px',
                  zIndex: 3,
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '14px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  maxWidth: '220px',
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '80px', borderRadius: '8px', overflow: 'hidden', marginBottom: '8px' }}>
                  <Image src="/courses/course-figma.png" alt="Course" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#242528' }}>Learn Figma from Basic</div>
                <div style={{ fontSize: '11px', color: '#0445FF' }}>by purepearl studio</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#003BE2' }}>$25<span style={{ fontSize: '10px', color: '#82868E' }}>/lifetime</span></span>
                </div>
              </div>

              {/* Overlay Progress Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '50px',
                  right: '20px',
                  zIndex: 3,
                }}
              >
                <CardLearningProgress />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. VALUE PROP 2: Create & Manage Courses Easily              */}
      {/* ============================================================ */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '64px',
              alignItems: 'center',
            }}
          >
            {/* Left Column: Creator Image + Revenue Cards */}
            <div
              style={{
                position: 'relative',
                height: '480px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Decorative 3D Spiral */}
              <div
                style={{
                  position: 'absolute',
                  top: '100px',
                  right: '30px',
                  width: '130px',
                  height: '130px',
                  zIndex: 1,
                }}
              >
                <Image src="/shapes/shape-spiral.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
              </div>

              {/* Creator Woman */}
              <div
                style={{
                  position: 'relative',
                  width: '360px',
                  height: '460px',
                  zIndex: 2,
                }}
              >
                <Image
                  src="/images/creator-woman.png"
                  alt="Creator teaching"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Floating Card: Total Revenue */}
              <div
                style={{
                  position: 'absolute',
                  top: '60px',
                  left: '10px',
                  zIndex: 3,
                }}
              >
                <CardTotalRevenue />
              </div>

              {/* Floating Card: Year to Date */}
              <div
                style={{
                  position: 'absolute',
                  top: '160px',
                  left: '20px',
                  zIndex: 3,
                }}
              >
                <CardYearToDate />
              </div>

              {/* Floating Card: Happy Students */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '40px',
                  left: '40px',
                  zIndex: 3,
                }}
              >
                <CardHappyStudents />
              </div>
            </div>

            {/* Right Column: Text & Features List */}
            <div>
              <h2
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 'clamp(32px, 3.5vw, 44px)',
                  fontWeight: 600,
                  color: '#040819',
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
                  lineHeight: '28px',
                  color: '#82868E',
                  marginBottom: '32px',
                }}
              >
                <strong>ByteSpace</strong> supports individuals or entities in the creation, publication, and
                administration of educational courses.
              </p>

              {/* Checklist */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Share Your Expertise',
                  'Monetize Your Passion',
                  'Flexibility and Autonomy',
                  'Build a Community',
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircleIcon size={22} color="#0445FF" />
                    <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '18px', fontWeight: 500, color: '#040819' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CREATOR CTA BANNER                                        */}
      {/* ============================================================ */}
      <section
        className="blue-grid-bg"
        style={{
          padding: '90px 0',
          position: 'relative',
          overflow: 'hidden',
          color: '#FFFFFF',
          textAlign: 'center',
        }}
      >
        {/* Floating 3D Shapes */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: '3%',
            width: '100px',
            height: '100px',
            pointerEvents: 'none',
          }}
          className="float-slow"
        >
          <Image src="/shapes/cone-3.png" alt="Cone" fill style={{ objectFit: 'contain' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            left: '6%',
            width: '110px',
            height: '110px',
            pointerEvents: 'none',
          }}
          className="float-reverse"
        >
          <Image src="/shapes/shape-zigzag.png" alt="Zigzag" fill style={{ objectFit: 'contain' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '4%',
            width: '100px',
            height: '100px',
            pointerEvents: 'none',
          }}
          className="float-reverse"
        >
          <Image src="/shapes/shape-wedge.png" alt="Wedge" fill style={{ objectFit: 'contain' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '5%',
            width: '110px',
            height: '110px',
            pointerEvents: 'none',
          }}
          className="float-slow"
        >
          <Image src="/shapes/cone-1.png" alt="Cone" fill style={{ objectFit: 'contain' }} />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <h2
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              fontWeight: 600,
              lineHeight: '52.8px',
              letterSpacing: '-0.44px',
              maxWidth: '820px',
              margin: '0 auto 16px',
            }}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '18px',
              lineHeight: '28.8px',
              color: '#F5F5F6',
              maxWidth: '820px',
              margin: '0 auto 36px',
              opacity: 0.95,
            }}
          >
            Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
            become a part of a community comprising over 10,000 local and international creators. Utilize our Course
            Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
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
              padding: '14px 36px',
              borderRadius: '9999px',
              transition: 'all 0.2s ease',
              textDecoration: 'none',
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
          padding: '90px 0',
          backgroundColor: '#FAFAFA',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Soft Radial Ambient Glow */}
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-5%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(212, 251, 32, 0.25) 0%, rgba(212, 251, 32, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          {/* Section Header: 2 Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              marginBottom: '56px',
              alignItems: 'flex-start',
            }}
          >
            <h2
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(32px, 3.5vw, 44px)',
                fontWeight: 600,
                color: '#040819',
                lineHeight: '52.8px',
                letterSpacing: '-0.44px',
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
                lineHeight: '28.8px',
                color: '#82868E',
              }}
            >
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
              from those who have experienced the transformative journey of learning and creating on our platform. Explore
              testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>

          {/* 3 Testimonials */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
            }}
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
