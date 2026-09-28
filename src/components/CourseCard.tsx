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
        borderRadius: '20px',
        border: '1px solid #E5E6E8',
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
            height: '200px',
            borderRadius: '14px',
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
              bottom: '10px',
              left: '10px',
              right: '10px',
              display: 'flex',
              gap: '6px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                backgroundColor: 'rgba(36, 37, 40, 0.65)',
                backdropFilter: 'blur(4px)',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 500,
                padding: '4px 10px',
                borderRadius: '9999px',
              }}
            >
              {course.lessons} Lessons
            </span>
            <span
              style={{
                backgroundColor: 'rgba(36, 37, 40, 0.65)',
                backdropFilter: 'blur(4px)',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 500,
                padding: '4px 10px',
                borderRadius: '9999px',
              }}
            >
              {course.duration}
            </span>
            <span
              style={{
                backgroundColor: 'rgba(36, 37, 40, 0.65)',
                backdropFilter: 'blur(4px)',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: 500,
                padding: '4px 10px',
                borderRadius: '9999px',
              }}
            >
              {course.comments} Comments
            </span>
          </div>
        </div>

        {/* Title & Rating */}
        <div style={{ marginTop: '4px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '8px',
              marginBottom: '4px',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '17px',
                fontWeight: 700,
                color: '#242528',
                lineHeight: '24px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {course.title}
            </h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#4B4C53',
                flexShrink: 0,
              }}
            >
              <span>{course.rating.toFixed(1)}</span>
              <StarIcon size={14} color="#CBFC01" />
            </div>
          </div>

          <p
            style={{
              fontSize: '12px',
              color: '#0445FF',
              fontWeight: 500,
              marginBottom: '16px',
            }}
          >
            by {course.author}
          </p>

          {/* Level + Avatar Stack */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid #F5F5F6',
              paddingBottom: '14px',
              marginBottom: '14px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '13px',
                color: '#666973',
              }}
            >
              <SignalCellularIcon size={16} color="#666973" />
              <span>{course.level}</span>
            </div>

            {/* Avatar Stack */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: '8px',
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
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginLeft: idx > 0 ? '-8px' : '0',
                      border: '2px solid #FFFFFF',
                      position: 'relative',
                    }}
                  >
                    <Image src={av} alt="Student" fill sizes="26px" style={{ objectFit: 'cover' }} />
                  </div>
                ))}
                <span
                  style={{
                    backgroundColor: '#D4FB20',
                    color: '#242528',
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '3px 6px',
                    borderRadius: '9999px',
                    marginLeft: '-6px',
                    border: '1.5px solid #FFFFFF',
                    zIndex: 4,
                  }}
                >
                  26+
                </span>
              </div>
            </div>
          </div>

          {/* Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: '#003BE2',
              }}
            >
              ${course.price}
            </span>
            <span
              style={{
                fontSize: '12px',
                color: '#82868E',
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
