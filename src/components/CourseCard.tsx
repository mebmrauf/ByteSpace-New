'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Course } from '@/data/courses';
import { StarIcon, SignalCellularIcon } from './Icons';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        border: '1px solid #CED0D3',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      className="course-card-hover"
    >
      <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        {/* Course Thumbnail + Overlays */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '195px',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#F5F5F6',
          }}
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />

          {/* Bottom Badges */}
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '13px',
              right: '13px',
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                backgroundColor: 'rgba(246, 246, 246, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#4F4F4F',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '20px',
                padding: '6px 12px',
                borderRadius: '24px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {course.lessons} Lessons
            </span>
            <span
              style={{
                backgroundColor: 'rgba(246, 246, 246, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#4F4F4F',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '20px',
                padding: '6px 12px',
                borderRadius: '24px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {course.duration}
            </span>
            <span
              style={{
                backgroundColor: 'rgba(246, 246, 246, 0.6)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                color: '#4F4F4F',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '20px',
                padding: '6px 12px',
                borderRadius: '24px',
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              {course.comments} Comments
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Row 1: Title & Author + Rating */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ minWidth: 0, flex: 1 }}>
              <h3
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: '#040819',
                  lineHeight: '28px',
                  letterSpacing: '-0.2px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  margin: 0,
                }}
              >
                {course.title}
              </h3>
              <p
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '12px',
                  color: '#4F4F4F',
                  fontWeight: 400,
                  lineHeight: '20px',
                  margin: '4px 0 0 0',
                }}
              >
                by {course.author}
              </p>
            </div>

            {/* Rating */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '28px',
                color: '#4F4F4F',
                flexShrink: 0,
              }}
            >
              <span>{course.rating.toFixed(1)}</span>
              <StarIcon size={20} color="#D4FB20" />
            </div>
          </div>

          {/* Row 2: Level Pill + Avatar Stack */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            {/* Level Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                backgroundColor: '#F5F5F6',
                borderRadius: '24px',
                padding: '6px 12px',
                height: '32px',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '20px',
                color: '#4B4C53',
              }}
            >
              <SignalCellularIcon size={16} color="#4B4C53" />
              <span>{course.level}</span>
            </div>

            {/* Avatar Stack */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {[
                  '/images/avatar-1.png',
                  '/images/avatar-2.png',
                  '/images/avatar-3.png',
                ].map((av, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginLeft: idx > 0 ? '-8px' : '0',
                      border: '2px solid #FFFFFF',
                      position: 'relative',
                    }}
                  >
                    <Image src={av} alt="Student" fill sizes="32px" style={{ objectFit: 'cover' }} />
                  </div>
                ))}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-8px',
                    border: '2px solid #FFFFFF',
                    zIndex: 4,
                  }}
                >
                  26+
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '28px',
                color: '#040819',
              }}
            >
              ${course.price}
            </span>
            <span
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '20px',
                color: '#4F4F4F',
              }}
            >
              /lifetime
            </span>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .course-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </div>
  );
};
