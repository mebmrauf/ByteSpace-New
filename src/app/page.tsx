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

  const displayCourses = filteredCourses.length > 0 ? filteredCourses : COURSES;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
      <section
        className="blue-grid-bg"
        style={{
          position: 'relative',
          paddingBottom: '80px',
          overflow: 'hidden',
          color: '#FFFFFF',
        }}
      >
        <Header variant="light" />

        {/* Floating Decorative 3D Shapes */}
        <div className="floating-shapes-hero">
          <div
            style={{
              position: 'absolute',
              top: '120px',
              left: '3%',
              width: '120px',
              height: '120px',
              pointerEvents: 'none',
              opacity: 0.95,
            }}
            className="float-slow"
          >
            <Image src="/shapes/shape-zigzag.png" alt="3D Zigzag" fill style={{ objectFit: 'contain' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '240px',
              left: '7%',
              width: '90px',
              height: '90px',
              pointerEvents: 'none',
              opacity: 0.9,
            }}
            className="float-reverse"
          >
            <Image src="/shapes/shape-torus.png" alt="3D Torus" fill style={{ objectFit: 'contain' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '100px',
              right: '4%',
              width: '130px',
              height: '130px',
              pointerEvents: 'none',
              opacity: 0.95,
            }}
            className="float-slow"
          >
            <Image src="/shapes/cone-1.png" alt="3D Cone" fill style={{ objectFit: 'contain' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              top: '260px',
              right: '8%',
              width: '100px',
              height: '100px',
              pointerEvents: 'none',
              opacity: 0.9,
            }}
            className="float-reverse"
          >
            <Image src="/shapes/shape-wedge.png" alt="3D Wedge" fill style={{ objectFit: 'contain' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '100px',
              left: '4%',
              width: '110px',
              height: '110px',
              pointerEvents: 'none',
              opacity: 0.9,
            }}
            className="float-slow"
          >
            <Image src="/shapes/cone-2.png" alt="3D Cone" fill style={{ objectFit: 'contain' }} />
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '5%',
              width: '110px',
              height: '110px',
              pointerEvents: 'none',
              opacity: 0.9,
            }}
            className="float-reverse"
          >
            <Image src="/shapes/shape-cylinder.png" alt="3D Cylinder" fill style={{ objectFit: 'contain' }} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '40px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.15,
              maxWidth: '820px',
              margin: '0 auto',
              letterSpacing: '-0.02em',
            }}
          >
            Get Access to Hundreds Courses Available
          </h1>

          <p
            style={{
              fontSize: '16px',
              lineHeight: '26px',
              color: '#F5F5F6',
              maxWidth: '680px',
              margin: '18px auto 36px',
              opacity: 0.92,
            }}
          >
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (searchQuery) window.location.href = `/courses?q=${encodeURIComponent(searchQuery)}`;
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '9999px',
              padding: '6px 6px 6px 20px',
              maxWidth: '520px',
              margin: '0 auto 60px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div style={{ color: '#82868E', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
              <SearchIcon size={20} color="#82868E" />
            </div>
            <input
              type="text"
              placeholder="Course, topic, creator"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: '15px',
                color: '#242528',
                backgroundColor: 'transparent',
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: '#D4FB20',
                color: '#242528',
                fontWeight: 600,
                fontSize: '15px',
                padding: '12px 28px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
              }}
            >
              Search
            </button>
          </form>

          {/* Hero Image & Overlapping Cards Composition */}
          <div
            className="hero-composition"
            style={{
              position: 'relative',
              maxWidth: '620px',
              margin: '0 auto',
              height: '460px',
            }}
          >
            {/* Green Circular Background Disk */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                backgroundColor: '#D4FB20',
                zIndex: 1,
              }}
            />

            {/* Student Photo */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '480px',
                height: '450px',
                zIndex: 2,
              }}
            >
              <Image
                src="/images/hero-student.png"
                alt="Student learning online with ByteSpace"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>

            {/* Floating Card: UI/UX Design (Top-Left) */}
            <div
              style={{
                position: 'absolute',
                top: '60px',
                left: '-40px',
                zIndex: 3,
              }}
              className="float-slow"
            >
              <CardUIUXDesign />
            </div>

            {/* Floating Card: Learning Progress 55% (Top-Right) */}
            <div
              style={{
                position: 'absolute',
                top: '70px',
                right: '-40px',
                zIndex: 3,
              }}
              className="float-reverse"
            >
              <CardLearningProgress />
            </div>

            {/* Floating Card: Happy Students (Bottom-Left) */}
            <div
              style={{
                position: 'absolute',
                bottom: '40px',
                left: '-30px',
                zIndex: 3,
              }}
              className="float-slow"
            >
              <CardHappyStudents />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. PARTNER LOGOS SECTION                                     */}
      {/* ============================================================ */}
      <PartnerLogos />

      {/* ============================================================ */}
      {/* 3. DISCOVER YOUR PASSION, BUILD YOUR SKILLS                  */}
      {/* ============================================================ */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 4vw, 38px)',
                fontWeight: 700,
                color: '#242528',
                marginBottom: '14px',
              }}
            >
              Discover Your Passion,
              <br />
              Build Your Skills
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: '#666973',
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
              different fields, from technology to the arts, and make a difference in your career and life.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
              maxWidth: '1000px',
              margin: '0 auto 48px',
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
                    color: '#242528',
                    fontSize: '13px',
                    fontWeight: isActive ? 600 : 500,
                    padding: '8px 18px',
                    borderRadius: '9999px',
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

          {/* Course Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
            }}
          >
            {displayCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. DIVERSE LEARNING PATHS                                    */}
      {/* ============================================================ */}
      <section style={{ padding: '80px 0', backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 4vw, 38px)',
                fontWeight: 700,
                color: '#242528',
                marginBottom: '14px',
              }}
            >
              Explore Diverse Learning Paths at Bytespace
            </h2>
            <p
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: '#666973',
                maxWidth: '740px',
                margin: '0 auto',
              }}
            >
              At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
              various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully
              curated categories.
            </p>
          </div>

          {/* 6 Category Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '20px',
            }}
          >
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
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 700,
                  color: '#242528',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                Your Path to Professional Growth Starts Here!
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '25px',
                  color: '#666973',
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
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#003BE2',
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}
                  >
                    12K
                  </div>
                  <div style={{ fontSize: '14px', color: '#666973' }}>Students</div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#003BE2',
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}
                  >
                    70+
                  </div>
                  <div style={{ fontSize: '14px', color: '#666973' }}>Courses</div>
                </div>

                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '36px',
                      fontWeight: 700,
                      color: '#003BE2',
                      lineHeight: 1,
                      marginBottom: '6px',
                    }}
                  >
                    16
                  </div>
                  <div style={{ fontSize: '14px', color: '#666973' }}>Creators</div>
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
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 3.5vw, 40px)',
                  fontWeight: 700,
                  color: '#242528',
                  lineHeight: 1.2,
                  marginBottom: '18px',
                }}
              >
                Create & Manage
                <br />
                Courses Easily.
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  lineHeight: '25px',
                  color: '#666973',
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
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#242528' }}>{item}</span>
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
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 700,
              lineHeight: 1.25,
              maxWidth: '780px',
              margin: '0 auto 16px',
            }}
          >
            Unlock Your Potential as a Creator with ByteSpace
          </h2>

          <p
            style={{
              fontSize: '15px',
              lineHeight: '26px',
              color: '#F5F5F6',
              maxWidth: '760px',
              margin: '0 auto 36px',
              opacity: 0.92,
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
              fontSize: '15px',
              fontWeight: 600,
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
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 4vw, 38px)',
                fontWeight: 700,
                color: '#242528',
                lineHeight: 1.25,
              }}
            >
              Discover What Our
              <br />
              Community Is Saying
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '24px',
                color: '#666973',
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
