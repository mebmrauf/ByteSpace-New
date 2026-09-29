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
        padding: '32px 28px',
        border: '1px solid #CED0D3',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        flex: 1,
      }}
    >
      {/* Author Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            position: 'relative',
            width: '48px',
            height: '48px',
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
            sizes="48px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <h4
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '20px',
              fontWeight: 600,
              lineHeight: '24px',
              letterSpacing: '-0.2px',
              color: '#040819',
              marginBottom: '2px',
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
              color: '#82868E',
            }}
          >
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Quote */}
      <p
        style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: '18px',
          lineHeight: '28.8px',
          color: '#242528',
          fontStyle: 'normal',
        }}
      >
        {testimonial.quote}
      </p>
    </div>
  );
};
