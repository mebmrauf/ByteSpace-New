import React from 'react';
import Image from 'next/image';
import { StarIcon } from './Icons';

export const CardUIUXDesign = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px 20px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '4px',
      minWidth: '180px',
    }}
  >
    <span
      style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '15px',
        fontWeight: 700,
        color: '#242528',
      }}
    >
      UI/UX Design
    </span>
    <span
      style={{
        fontSize: '11px',
        color: '#82868E',
        fontWeight: 500,
      }}
    >
      200 Courses • 1000+ Students
    </span>
  </div>
);

export const CardLearningProgress = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px 22px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
      minWidth: '180px',
    }}
  >
    <span
      style={{
        fontSize: '11px',
        color: '#82868E',
        fontWeight: 500,
      }}
    >
      Learning Progress
    </span>
    <span
      style={{
        fontFamily: 'var(--font-heading)',
        fontSize: '32px',
        fontWeight: 700,
        color: '#242528',
        lineHeight: 1,
      }}
    >
      55%
    </span>
    {/* Progress bar */}
    <div
      style={{
        width: '140px',
        height: '6px',
        backgroundColor: '#E5E6E8',
        borderRadius: '9999px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '55%',
          height: '100%',
          backgroundColor: '#D4FB20',
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
      padding: '14px 18px',
      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '13px',
          fontWeight: 700,
          color: '#242528',
        }}
      >
        Happy Students
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '11px', color: '#666973' }}>
        <span>4.5</span>
        <span style={{ color: '#82868E' }}>(240)</span>
        <StarIcon size={12} color="#CBFC01" />
      </div>
    </div>

    {/* Avatar stack */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {[
        '/images/student-stack-1.png',
        '/images/student-stack-2.png',
        '/images/student-stack-3.png',
        '/images/student-stack-4.png',
        '/images/student-stack-5.png',
        '/images/student-stack-6.png',
      ].map((src, i) => (
        <div
          key={i}
          style={{
            position: 'relative',
            width: '26px',
            height: '26px',
            borderRadius: '50%',
            overflow: 'hidden',
            marginLeft: i > 0 ? '-8px' : '0',
            border: '2px solid #FFFFFF',
          }}
        >
          <Image src={src} alt="Student" fill sizes="26px" style={{ objectFit: 'cover' }} />
        </div>
      ))}
      <span
        style={{
          backgroundColor: '#242528',
          color: '#FFFFFF',
          fontSize: '10px',
          fontWeight: 700,
          padding: '4px 6px',
          borderRadius: '9999px',
          marginLeft: '-6px',
          border: '2px solid #FFFFFF',
          zIndex: 7,
        }}
      >
        2K+
      </span>
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
