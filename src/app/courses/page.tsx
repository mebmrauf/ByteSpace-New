'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CourseCard } from '@/components/CourseCard';
import {
  SearchIcon,
  FilterIcon,
  SignalCellularIcon,
  CategoryFilterIcon,
  SortIcon,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from '@/components/Icons';
import { COURSES } from '@/data/courses';

const FILTER_CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
];

function CoursesContent() {
  const searchParams = useSearchParams();
  const qParam = searchParams.get('q') || '';
  const catParam = searchParams.get('category') || 'Featured';

  const [activeCategory, setActiveCategory] = useState(catParam);
  const [searchTerm, setSearchTerm] = useState(qParam);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('Most relevant');

  useEffect(() => {
    if (qParam) setSearchTerm(qParam);
    if (catParam) setActiveCategory(catParam);
  }, [qParam, catParam]);

  // Generate courses list (duplicate courses so we have full grid of 9 or 12 items for pagination)
  const fullList = [...COURSES, ...COURSES];

  const filtered = fullList.filter((c) => {
    const matchesCat =
      activeCategory === 'Featured' ||
      c.category.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch =
      !searchTerm ||
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevel === 'All' || c.level === selectedLevel;
    return matchesCat && matchesSearch && matchesLevel;
  });

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {/* Header Banner */}
      <section
        className="blue-grid-bg"
        style={{
          minHeight: '360px',
          color: '#FFFFFF',
          position: 'relative',
          paddingBottom: '50px',
        }}
      >
        <Header variant="light" />

        <div className="header-inner" style={{ textAlign: 'center', paddingTop: '20px', width: '1440px', maxWidth: '100%', margin: '0', padding: '0 120px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '36px',
              lineHeight: '43.2px',
              fontWeight: 600,
              letterSpacing: '-0.36px',
              color: '#F5F5F6',
              marginBottom: '32px',
            }}
          >
            Find Your Next Course
          </h1>

          {/* Search bar with category dropdown - TWO SEPARATE PILLS in Figma */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              maxWidth: '624px',
              margin: '0 auto',
              flexWrap: 'wrap',
            }}
          >
            {/* Search Input Pill */}
            <div
              style={{
                flex: '1 1 340px',
                height: '52px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '12px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <div style={{ color: '#82868E', display: 'flex', alignItems: 'center' }}>
                <SearchIcon size={24} color="#82868E" />
              </div>
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#242528',
                  backgroundColor: 'transparent',
                }}
              />
            </div>

            {/* Courses selector Pill */}
            <div
              style={{
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#D4FB20',
                color: '#242528',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '21.6px',
                padding: '12px 24px',
                borderRadius: '24px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <span>Courses</span>
              <ChevronDown size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Course Catalog */}
      <section style={{ padding: '72px 0 80px' }}>
        <div
          className="courses-catalog-container"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          {/* Top Filter Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '48px',
              marginBottom: '32px',
            }}
          >
            {/* Left Filter Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                className="btn-secondary"
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
                className="btn-secondary"
                onClick={() => setSelectedLevel(selectedLevel === 'All' ? 'Beginner' : 'All')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '12px 16px',
                  height: '48px',
                  borderRadius: '24px',
                  border: selectedLevel !== 'All' ? '1px solid #D4FB20' : '1px solid #CED0D3',
                  backgroundColor: selectedLevel !== 'All' ? '#FDFFE4' : '#FFFFFF',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '19.2px',
                  fontWeight: 500,
                  color: '#4B4C53',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
              >
                <SignalCellularIcon size={24} color="#242528" />
                <span>Level{selectedLevel !== 'All' ? ` (${selectedLevel})` : ''}</span>
              </button>

              <button
                className="btn-secondary"
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

            {/* Right Sort Dropdown */}
            <div>
              <button
                className="btn-secondary"
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
                <span>{sortBy}</span>
              </button>
            </div>
          </div>

          {/* Categories Pills: Exactly 1200px width, space-between matching 55:1819 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              marginBottom: '77px',
              overflowX: 'auto',
            }}
          >
            {FILTER_CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    backgroundColor: active ? '#D4FB20' : '#F5F5F6',
                    color: active ? '#242528' : '#4B4C53',
                    fontFamily: 'var(--font-body)',
                    fontSize: '16px',
                    lineHeight: '19.2px',
                    fontWeight: 500,
                    padding: '12px 16px',
                    height: '43px',
                    borderRadius: '24px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxSizing: 'border-box',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Courses Grid: exactly 3 columns of 373px with 40px gap matching Frame 8 */}
          <div
            className="courses-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 373px)',
              gap: '40px',
              justifyContent: 'space-between',
              marginBottom: '72px',
            }}
          >
            {filtered.slice(0, 9).map((course, idx) => (
              <CourseCard key={`${course.id}-${idx}`} course={course} />
            ))}
          </div>

          {/* Pagination: 56x48 prev/next buttons, Poppins 600 20px numbers, gap 24px */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
            }}
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                width: '56px',
                height: '48px',
                borderRadius: '24px',
                border: '1px solid #CED0D3',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: currentPage === 1 ? '#CED0D3' : '#242528',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              }}
              aria-label="Previous page"
            >
              <ChevronLeft size={20} />
            </button>

            {[1, 2, 3, 4, 5].map((page) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    padding: '0 8px',
                    height: '48px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: isActive ? '#CED0D3' : '#242528',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '28px',
                    letterSpacing: '-0.2px',
                    cursor: 'pointer',
                    transition: 'color 0.15s',
                  }}
                >
                  {page}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
              disabled={currentPage === 5}
              style={{
                width: '56px',
                height: '48px',
                borderRadius: '24px',
                border: '1px solid #CED0D3',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: currentPage === 5 ? '#CED0D3' : '#242528',
                cursor: currentPage === 5 ? 'not-allowed' : 'pointer',
              }}
              aria-label="Next page"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={null}>
      <CoursesContent />
    </Suspense>
  );
}
