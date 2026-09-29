import React from 'react';
import Image from 'next/image';
import { StarIcon } from './Icons';

export const CardUIUXDesign = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '4px',
      width: '208px',
      height: '70px',
      boxSizing: 'border-box',
    }}
  >
    <span
      style={{
        fontFamily: 'Satoshi, var(--font-sans), sans-serif',
        fontSize: '16px',
        fontWeight: 500,
        color: '#242528',
        lineHeight: 1.2,
      }}
    >
      UI/UX Design
    </span>
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#82868E', fontWeight: 400 }}>
      <span>200 Courses</span>
      <span>•</span>
      <span>1000+ Students</span>
    </div>
  </div>
);

export const CardLearningProgress = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
      width: '232px',
      height: '131px',
      boxSizing: 'border-box',
    }}
  >
    <span
      style={{
        fontFamily: 'Satoshi, var(--font-sans), sans-serif',
        fontSize: '14px',
        color: '#242528',
        fontWeight: 500,
        lineHeight: 1.2,
      }}
    >
      Learning Progress
    </span>
    <span
      style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '48px',
        fontWeight: 600,
        color: '#242528',
        lineHeight: 1.0,
        letterSpacing: '-0.48px',
      }}
    >
      55%
    </span>
    {/* Progress bar matching Figma Group 1:1801 */}
    <div
      style={{
        width: '100%',
        height: '8px',
        minHeight: '8px',
        backgroundColor: '#F6F6F6',
        borderRadius: '9999px',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '56%',
          height: '100%',
          backgroundColor: '#CBFC01',
          borderRadius: '9999px',
        }}
      />
    </div>
  </div>
);

export const CardHappyStudents = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
      width: '258px',
      height: '121px',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span
        style={{
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          color: '#242528',
        }}
      >
        Happy Students
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '12px', color: '#82868E' }}>
        <span style={{ fontWeight: 400, color: '#82868E' }}>4.5</span>
        <span style={{ color: '#82868E' }}>(240)</span>
        <StarIcon size={13} color="#CBFC01" />
      </div>
    </div>

    {/* Avatar stack matching Figma 1:1821 */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[
        '/images/student-stack-1.png',
        '/images/student-stack-2.png',
        '/images/student-stack-3.png',
        '/images/student-stack-4.png',
        '/images/student-stack-5.png',
        '/images/student-stack-6.png',
        '/images/student-stack-7.png',
      ].map((src, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            width: '43px',
            height: '43px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginLeft: i > 0 ? '-16px' : '0',
            border: '2px solid #FFFFFF',
            backgroundColor: '#E5E6E8',
            flexShrink: 0,
            zIndex: i + 1,
          }}
        >
          <Image src={src} alt="Student" fill sizes="43px" style={{ objectFit: 'cover' }} />
        </div>
      ))}
      <div
        style={{
          backgroundColor: '#CBFC01',
          color: '#242528',
          fontSize: '12px',
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontWeight: 700,
          width: '43px',
          height: '43px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '-16px',
          border: '2px solid #FFFFFF',
          zIndex: 10,
          boxSizing: 'border-box',
          flexShrink: 0,
        }}
      >
        2K+
      </div>
    </div>
  </div>
);

export const CardTotalRevenue = () => (
  <div
    style={{
      backgroundColor: '#003BE2',
      color: '#FFFFFF',
      borderRadius: '14px',
      padding: '14px 18px',
      boxShadow: '0 8px 24px rgba(0, 59, 226, 0.3)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '4px',
      minWidth: '150px',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '11px', opacity: 0.85 }}>Total Revenue</span>
    </div>
    <span style={{ fontSize: '9px', opacity: 0.7 }}>July 1-28</span>
    <span style={{ fontSize: '20px', fontWeight: 700, marginTop: '2px' }}>$120.29</span>
  </div>
);

export const CardYearToDate = () => (
  <div
    style={{
      backgroundColor: '#003BE2',
      color: '#FFFFFF',
      borderRadius: '14px',
      padding: '14px 18px',
      boxShadow: '0 8px 24px rgba(0, 59, 226, 0.3)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '4px',
      minWidth: '150px',
    }}
  >
    <span style={{ fontSize: '11px', opacity: 0.85 }}>Year to Date</span>
    <span style={{ fontSize: '9px', opacity: 0.7 }}>2021</span>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2px' }}>
      <span style={{ fontSize: '20px', fontWeight: 700 }}>$1,200.38</span>
      <span
        style={{
          backgroundColor: '#D4FB20',
          color: '#242528',
          fontSize: '10px',
          fontWeight: 700,
          padding: '2px 6px',
          borderRadius: '4px',
        }}
      >
        +123
      </span>
    </div>
  </div>
);
