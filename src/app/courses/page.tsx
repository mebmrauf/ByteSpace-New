'use client';

import React, { useState } from 'react';
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

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('Most relevant');

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
          paddingBottom: '60px',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        <Header variant="light" />

        <div className="container" style={{ textAlign: 'center', paddingTop: '30px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 700,
              marginBottom: '32px',
            }}
          >
            Find Your Next Course
          </h1>

          {/* Search bar with category dropdown */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '9999px',
              padding: '6px 8px 6px 20px',
              maxWidth: '560px',
              margin: '0 auto',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
            }}
          >
            <div style={{ color: '#82868E', display: 'flex', alignItems: 'center', marginRight: '10px' }}>
              <SearchIcon size={20} color="#82868E" />
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
                fontSize: '15px',
                color: '#242528',
                backgroundColor: 'transparent',
              }}
            />
            {/* Courses selector */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#D4FB20',
                color: '#242528',
                fontWeight: 600,
                fontSize: '13px',
                padding: '10px 18px',
                borderRadius: '9999px',
                cursor: 'pointer',
              }}
            >
              <span>Courses</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Filter & Course Catalog */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          {/* Top Filter Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '32px',
            }}
          >
            {/* Left Filter Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <button
                className="btn-secondary"
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
                className="btn-secondary"
                onClick={() => setSelectedLevel(selectedLevel === 'All' ? 'Beginner' : 'All')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  border: selectedLevel !== 'All' ? '1px solid #D4FB20' : '1px solid #CED0D3',
                  backgroundColor: selectedLevel !== 'All' ? '#FDFFE4' : '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#242528',
                }}
              >
                <SignalCellularIcon size={16} color="#242528" />
                <span>Level {selectedLevel !== 'All' ? `(${selectedLevel})` : ''}</span>
              </button>

              <button
                className="btn-secondary"
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

            {/* Right Sort Dropdown */}
            <div>
              <button
                className="btn-secondary"
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
                <span>{sortBy}</span>
              </button>
            </div>
          </div>

          {/* Categories Pills */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              marginBottom: '40px',
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
                    color: '#242528',
                    fontSize: '13px',
                    fontWeight: active ? 600 : 500,
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Courses Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
              marginBottom: '60px',
            }}
          >
            {filtered.slice(0, 9).map((course, idx) => (
              <CourseCard key={`${course.id}-${idx}`} course={course} />
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
            }}
          >
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
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
              <ChevronLeft size={18} />
            </button>

            {[1, 2, 3, 4, 5].map((page) => {
              const isActive = currentPage === page;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: isActive ? '#F5F5F6' : 'transparent',
                    color: '#242528',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'background-color 0.15s',
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
                width: '40px',
                height: '40px',
                borderRadius: '50%',
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
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
