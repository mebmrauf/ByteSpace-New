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
        paddingTop: '60px',
        paddingBottom: '32px',
        width: '100%',
      }}
    >
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top Section */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Newsletter Column */}
          <div style={{ maxWidth: '504px', flex: '1 1 360px' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <ByteSpaceLogo variant="dark" width={171} height={37} />
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                lineHeight: '22px',
                color: '#242528',
                marginBottom: '24px',
              }}
            >
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px',
                maxWidth: '504px',
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: 1,
                  padding: '12px 24px',
                  borderRadius: '24px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '24px',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: '#242528',
                  height: '48px',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#D4FB20',
                  color: '#242528',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  padding: '12px 24px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  height: '48px',
                  transition: 'background-color 0.2s',
                }}
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? 'Subscribed!' : 'Search'}
              </button>
            </form>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                lineHeight: '19px',
                color: '#242528',
              }}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Columns (3 columns: Browse, Col2, Platform) */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '40px',
              flex: '1 1 500px',
              justifyContent: 'space-between',
            }}
          >
            {/* Col 1 - Browse */}
            <div style={{ minWidth: '130px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 500,
                  color: '#242528',
                  marginBottom: '24px',
                  height: '24px',
                }}
              >
                Browse
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
                {['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Featured Courses' ? '/courses' : `/courses?cat=${encodeURIComponent(item)}`}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: '#242528',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      className="footer-link"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 2 - Categories (aligned with Browse items) */}
            <div style={{ minWidth: '130px' }}>
              <div style={{ height: '24px', marginBottom: '24px' }}></div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
                {['Development', 'Marketing', 'Photography', 'Finance', 'Sport'].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/courses?cat=${encodeURIComponent(item)}`}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: '#242528',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      className="footer-link"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 - Platform */}
            <div style={{ minWidth: '130px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '24px',
                  fontWeight: 500,
                  color: '#242528',
                  marginBottom: '24px',
                  height: '24px',
                }}
              >
                Platform
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', padding: 0, margin: 0 }}>
                {[
                  { label: 'Become a Creator', href: '/creators/purepearl-studio' },
                  { label: 'Affiliate Program', href: '/register' },
                  { label: 'Contact', href: '/courses' },
                  { label: 'Help', href: '/courses' },
                  { label: 'About', href: '/' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        lineHeight: '22px',
                        color: '#242528',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      className="footer-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #CED0D3',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontFamily: 'var(--font-body)',
            fontSize: '12px',
            lineHeight: '19px',
            color: '#242528',
          }}
        >
          <div>@ 2023 ByteSpace. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/" style={{ color: '#242528', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link href="/" style={{ color: '#242528', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link href="/" style={{ color: '#242528', textDecoration: 'none' }}>
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
