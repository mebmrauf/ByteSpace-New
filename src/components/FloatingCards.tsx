import React from 'react';
import Image from 'next/image';
import { StarIcon } from './Icons';

/* ─── UI/UX Design Card (Hero section) ───────────────────────────────────── */
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

/* ─── Learning Progress Card (Section 5 overlay) ─────────────────────────── */
/* Figma: 232×138, fill #ffffff, rad 16, pad 16/16/16/16, gap 8            */
export const CardLearningProgress = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
      width: '232px',
      height: '138px',
      boxSizing: 'border-box',
      boxShadow: '0 12px 32px rgba(0,0,0,0.10)',
    }}
  >
    {/* "Learning Progress" | Satoshi 500 14px lh:24 col:#242528 */}
    <span
      style={{
        fontFamily: 'Satoshi, var(--font-sans), sans-serif',
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '24px',
        color: '#242528',
      }}
    >
      Learning Progress
    </span>

    {/* "55%" | Poppins 600 48px lh:57.6 col:#242528 */}
    <span
      style={{
        fontFamily: 'Poppins, var(--font-heading), sans-serif',
        fontSize: '48px',
        fontWeight: 600,
        lineHeight: '57.6px',
        letterSpacing: '-0.48px',
        color: '#242528',
      }}
    >
      55%
    </span>

    {/* Progress bar: track #f6f6f6, fill #d4fb20, width 200×8, fill 112px (56%) */}
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '8px',
        backgroundColor: '#F6F6F6',
        borderRadius: '24px',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '112px', /* 56% of 200 */
          height: '100%',
          backgroundColor: '#D4FB20',
          borderRadius: '24px',
        }}
      />
    </div>
  </div>
);

/* ─── Happy Students Card (Section 6 overlay) ────────────────────────────── */
/* Figma: 258×123, fill #ffffff, rad 16, pad 16/16/16/16, gap 8            */
export const CardHappyStudents = () => (
  <div
    style={{
      backgroundColor: '#FFFFFF',
      borderRadius: '16px',
      padding: '16px',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
      width: '258px',
      height: '123px',
      boxSizing: 'border-box',
      boxShadow: '0 12px 32px rgba(0,0,0,0.10)',
    }}
  >
    {/* Header vertical frame: "Happy Students" + rating row */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* "Happy Students" | Satoshi 500 16px lh:24 col:#242528 */}
      <span
        style={{
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '24px',
          color: '#242528',
        }}
      >
        Happy Students
      </span>
      {/* "4.5 (240)" + star | Satoshi 400 10px lh:15 col:#82868e + star #d4fb20 16×16 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
        <span
          style={{
            fontFamily: 'Satoshi, var(--font-sans), sans-serif',
            fontSize: '10px',
            fontWeight: 400,
            lineHeight: '15px',
            color: '#82868E',
          }}
        >
          4.5 (240)&nbsp;
        </span>
        <StarIcon size={16} color="#D4FB20" />
      </div>
    </div>

    {/* Avatar stack: gap:-16, 7 avatars + 2K+ badge */}
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
      {/* 2K+ badge: Ellipse #d4fb20, stroke #fff sw:2, text Satoshi 700 12px lh:18 col:#242528 */}
      <div
        style={{
          position: 'relative',
          width: '43px',
          height: '43px',
          borderRadius: '50%',
          backgroundColor: '#D4FB20',
          border: '2px solid #FFFFFF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '-16px',
          flexShrink: 0,
          zIndex: 10,
          boxSizing: 'border-box',
        }}
      >
        <span
          style={{
            fontFamily: 'Satoshi, var(--font-sans), sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: '18px',
            color: '#242528',
          }}
        >
          2K+
        </span>
      </div>
    </div>
  </div>
);

/* ─── Total Revenue Card (Section 6 overlay) ─────────────────────────────── */
/* Figma: 232×119, fill #003be2, rad 16, pad 16/16/16/16, gap 8            */
export const CardTotalRevenue = () => (
  <div
    style={{
      backgroundColor: '#003BE2',
      borderRadius: '16px',
      padding: '16px',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
      width: '232px',
      height: '119px',
      boxSizing: 'border-box',
    }}
  >
    {/* Label + date: vertical, gap implicit */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* "Total Revenue" | Satoshi 500 16px lh:19.2 col:#f5f5f6 */}
      <span
        style={{
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '19.2px',
          color: '#F5F5F6',
        }}
      >
        Total Revenue
      </span>
      {/* "July 1-28" | Satoshi 400 10px lh:12 col:#f5f5f6 */}
      <span
        style={{
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: '12px',
          color: '#F5F5F6',
        }}
      >
        July 1-28
      </span>
    </div>

    {/* Amount row: "$120.29" */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* "$120.29" | Poppins 600 24px lh:32 col:#f5f5f6 */}
      <span
        style={{
          fontFamily: 'Poppins, var(--font-heading), sans-serif',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '32px',
          letterSpacing: '-0.24px',
          color: '#F5F5F6',
        }}
      >
        $120.29
      </span>
    </div>

    {/* Progress bar: track #ffffff, fill #d4fb20, 200×8, fill=112px (56%) */}
    <div
      style={{
        position: 'relative',
        width: '200px',
        height: '8px',
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          width: '112px',
          height: '100%',
          backgroundColor: '#D4FB20',
          borderRadius: '24px',
        }}
      />
    </div>
  </div>
);

/* ─── Year to Date Card (Section 6 overlay) ──────────────────────────────── */
/* Figma: 134×135, fill #003be2, rad 16, pad 16/16/16/16, gap 8            */
export const CardYearToDate = () => (
  <div
    style={{
      backgroundColor: '#003BE2',
      borderRadius: '16px',
      padding: '16px',
      display: 'inline-flex',
      flexDirection: 'column',
      gap: '8px',
      width: '134px',
      height: '135px',
      boxSizing: 'border-box',
    }}
  >
    {/* Label + year */}
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* "Year to Date" | Satoshi 500 16px lh:19.2 col:#f5f5f6 */}
      <span
        style={{
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '19.2px',
          color: '#F5F5F6',
        }}
      >
        Year to Date
      </span>
      {/* "2023" | Satoshi 400 10px lh:12 col:#f5f5f6 */}
      <span
        style={{
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontSize: '10px',
          fontWeight: 400,
          lineHeight: '12px',
          color: '#F5F5F6',
        }}
      >
        2023
      </span>
    </div>

    {/* "$1,200.38" | Poppins 600 24px lh:32 col:#f5f5f6 */}
    <span
      style={{
        fontFamily: 'Poppins, var(--font-heading), sans-serif',
        fontSize: '24px',
        fontWeight: 600,
        lineHeight: '32px',
        letterSpacing: '-0.24px',
        color: '#F5F5F6',
      }}
    >
      $1,200.38
    </span>

    {/* "+12$" badge | #cbfc01 rad:24 pad:2/8/2/8, Satoshi 500 10px lh:20 col:#242528 */}
    <div
      style={{
        backgroundColor: '#CBFC01',
        borderRadius: '24px',
        padding: '2px 8px',
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
      }}
    >
      <span
        style={{
          fontFamily: 'Satoshi, var(--font-sans), sans-serif',
          fontSize: '10px',
          fontWeight: 500,
          lineHeight: '20px',
          color: '#242528',
        }}
      >
        +12$
      </span>
    </div>
  </div>
);
