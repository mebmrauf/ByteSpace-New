'use client';

import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
        maxWidth: '374px',
        boxSizing: 'border-box',
        alignSelf: 'flex-start',
      }}
    >
      {/* 80px Circular Avatar */}
      <div
        style={{
          position: 'relative',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: '#F5F5F6',
          flexShrink: 0,
        }}
      >
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          sizes="80px"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Name and Role */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '28px',
            letterSpacing: '-0.2px',
            color: '#000000',
            margin: 0,
          }}
        >
          {testimonial.name}
        </h4>
        <span
          style={{
            fontFamily: 'Satoshi, sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '28.8px',
            color: '#003BE2',
            margin: 0,
          }}
        >
          {testimonial.role}
        </span>
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '28.8px',
          color: '#4F4F4F',
          margin: 0,
        }}
      >
        {testimonial.quoteLines ? (
          testimonial.quoteLines.map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              {idx < testimonial.quoteLines.length - 1 && <br className="desktop-break" />}
            </React.Fragment>
          ))
        ) : (
          testimonial.quote
        )}
      </p>
    </div>
  );
};
