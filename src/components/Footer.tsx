'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ByteSpaceLogo } from './Icons';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #CED0D3',
        paddingTop: '71px',
        paddingBottom: '48px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '130px',
          boxSizing: 'border-box',
        }}
        className="footer-container"
      >
        {/* Top Section: Footer_Nav (1200px width, gap 92px) */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '48px',
            width: '100%',
          }}
          className="footer-nav"
        >
          {/* Left Column: Logo, Newsletter Form & Disclaimer (528px width, gap 45px) */}
          <div
            style={{
              width: '100%',
              maxWidth: '528px',
              display: 'flex',
              flexDirection: 'column',
              gap: '45px',
            }}
          >
            {/* Logo and Tagline (gap: 16px) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="/" style={{ display: 'inline-block', textDecoration: 'none', width: 'fit-content' }}>
                <ByteSpaceLogo variant="dark" width={171} height={37} />
              </Link>
              <p
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  lineHeight: '22.4px',
                  color: '#242528',
                  margin: 0,
                  maxWidth: '528px',
                }}
              >
                Stay Up to date with our latest features and releases by joining our newsletter.
              </p>
            </div>

            {/* Newsletter Form & Consent (gap: 24px) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '100%', maxWidth: '504px' }}>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '24px',
                  margin: 0,
                  width: '100%',
                  maxWidth: '504px',
                }}
                className="footer-form"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    width: '376px',
                    maxWidth: '100%',
                    height: '52px',
                    padding: '13px 24px',
                    borderRadius: '100px',
                    border: '1px solid #CED0D3',
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '16px',
                    fontWeight: 400,
                    lineHeight: '25.6px',
                    outline: 'none',
                    backgroundColor: '#FFFFFF',
                    color: '#242528',
                    boxSizing: 'border-box',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    width: '104px',
                    height: '46px',
                    backgroundColor: '#D4FB20',
                    color: '#242528',
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 500,
                    fontSize: '18px',
                    lineHeight: '21.6px',
                    borderRadius: '24px',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '12px 24px',
                    boxSizing: 'border-box',
                    flexShrink: 0,
                    transition: 'opacity 0.2s',
                  }}
                  aria-label="Search newsletter"
                >
                  {subscribed ? 'Done' : 'Search'}
                </button>
              </form>

              <p
                style={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '19.2px',
                  color: '#242528',
                  margin: 0,
                  maxWidth: '504px',
                }}
              >
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Link Columns (580px width, gap 40px) */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              width: '100%',
              maxWidth: '580px',
              justifyContent: 'space-between',
            }}
            className="footer-links-container"
          >
            {/* Col 1: Courses & Categories */}
            <div style={{ width: '167px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Featured Courses', href: '/courses' },
                { label: 'Course Details', href: '/courses/details' },
                { label: 'Course Lessons', href: '/courses/lessons' },
                { label: 'Course Reviews', href: '/courses/reviews' },
                { label: 'Design', href: '/courses?cat=Design' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '22.4px',
                    color: '#242528',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Col 2: Categories continuation */}
            <div style={{ width: '167px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Development', href: '/courses?cat=Development' },
                { label: 'Marketing', href: '/courses?cat=Marketing' },
                { label: 'Photography', href: '/courses?cat=Photography' },
                { label: 'Finance', href: '/courses?cat=Finance' },
                { label: 'Sport', href: '/courses?cat=Sport' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '22.4px',
                    color: '#242528',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Col 3: Platform */}
            <div style={{ width: '166px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Become a Creator', href: '/creators/purepearl-studio' },
                { label: 'Affiliate Program', href: '/register' },
                { label: 'Contact', href: '/courses' },
                { label: 'Help', href: '/courses' },
                { label: 'About', href: '/' },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '14px',
                    fontWeight: 400,
                    lineHeight: '22.4px',
                    color: '#242528',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright_Text (1200px width, gap 24px) */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          {/* 1px divider */}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: '#CED0D3',
            }}
          />

          {/* Copyright row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              width: '100%',
            }}
          >
            <span
              style={{
                fontFamily: 'Satoshi, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '19.2px',
                color: '#242528',
              }}
            >
              @ 2023 ByteSpace. All rights reserved.
            </span>
            <div
              style={{
                display: 'flex',
                gap: '24px',
                alignItems: 'center',
              }}
            >
              {[
                { label: 'Privacy Policy', href: '/' },
                { label: 'Terms of Service', href: '/' },
                { label: 'Cookies Settings', href: '/' },
              ].map((legal) => (
                <Link
                  key={legal.label}
                  href={legal.href}
                  style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '19.2px',
                    color: '#242528',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  className="footer-link"
                >
                  {legal.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
