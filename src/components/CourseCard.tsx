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
        width: '100%',
        maxWidth: '373px',
        height: '384px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer',
      }}
      className="course-card-hover"
    >
      <Link href={`/courses/${course.id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
        {/* Course Thumbnail + Overlays */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '195px',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#F5F5F6',
            flexShrink: 0,
          }}
        >
          <Image
            src={course.image}
            alt={course.title}
            fill
            sizes="341px"
            style={{ objectFit: 'cover' }}
          />

          {/* Bottom Badges */}
          <div
            style={{
              position: 'absolute',
              bottom: '19px',
              left: '13px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
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
                lineHeight: '14.4px',
                padding: '6px 12px',
                height: '26px',
                boxSizing: 'border-box',
                borderRadius: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                flexShrink: 0,
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
                lineHeight: '14.4px',
                padding: '6px 12px',
                height: '26px',
                boxSizing: 'border-box',
                borderRadius: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                flexShrink: 0,
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
                lineHeight: '14.4px',
                padding: '6px 12px',
                height: '26px',
                boxSizing: 'border-box',
                borderRadius: '24px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {course.comments} Comments
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div style={{ marginTop: '21px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
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
                  color: '#000000',
                  lineHeight: '24px',
                  whiteSpace: 'nowrap',
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
                  lineHeight: '19.2px',
                  margin: 0,
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
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '28.8px',
                color: '#4F4F4F',
                flexShrink: 0,
              }}
            >
              <span>{course.rating.toFixed(1)}&nbsp;</span>
              <StarIcon size={24} color="#CED0D3" />
            </div>
          </div>

          {/* Row 2: Level Pill + Avatar Stack */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
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
                boxSizing: 'border-box',
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                lineHeight: '14.4px',
                color: '#4B4C53',
              }}
            >
              <SignalCellularIcon size={20} color="#242528" />
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
                  '/images/avatar-4.png',
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
                    backgroundColor: '#D4FB20',
                    color: '#242528',
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-8px',
                    border: '2px solid #FFFFFF',
                    position: 'relative',
                    zIndex: 5,
                  }}
                >
                  26+
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Price */}
          <div style={{ display: 'flex', alignItems: 'baseline', height: '24px' }}>
            <span
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '20px',
                fontWeight: 600,
                lineHeight: '24px',
                letterSpacing: '-0.2px',
                color: '#003BE2',
              }}
            >
              ${course.price}
            </span>
            <span
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '19.2px',
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
