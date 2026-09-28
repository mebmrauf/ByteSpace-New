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
        border: '1px solid #F0F1F3',
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
              fontFamily: 'var(--font-heading)',
              fontSize: '16px',
              fontWeight: 700,
              color: '#242528',
              marginBottom: '2px',
            }}
          >
            {testimonial.name}
          </h4>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              color: '#0445FF',
            }}
          >
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Quote */}
      <p
        style={{
          fontSize: '14px',
          lineHeight: '23px',
          color: '#4B4C53',
          fontStyle: 'normal',
        }}
      >
        {testimonial.quote}
      </p>
    </div>
  );
};
