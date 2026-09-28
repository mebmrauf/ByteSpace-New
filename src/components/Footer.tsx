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
        borderTop: '1px solid #E5E6E8',
        paddingTop: '64px',
        paddingBottom: '32px',
        width: '100%',
      }}
    >
      <div className="container">
        {/* Top Grid: Newsletter on left, link columns on right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px',
            marginBottom: '64px',
          }}
        >
          {/* Newsletter Column */}
          <div style={{ maxWidth: '420px' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '20px' }}>
              <ByteSpaceLogo variant="dark" width={160} height={32} />
            </Link>
            <p
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: '#666973',
                marginBottom: '20px',
              }}
            >
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px',
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
                  padding: '12px 18px',
                  borderRadius: '9999px',
                  border: '1px solid #CED0D3',
                  fontSize: '14px',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                  color: '#242528',
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#D4FB20',
                  color: '#242528',
                  fontWeight: 600,
                  fontSize: '14px',
                  padding: '12px 24px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.2s',
                }}
                aria-label="Subscribe to newsletter"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>

            <p
              style={{
                fontSize: '11px',
                lineHeight: '16px',
                color: '#82868E',
              }}
            >
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Links Columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '32px',
              flex: 1,
            }}
          >
            {/* Col 1 */}
            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link href="/courses" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Featured Courses
                  </Link>
                </li>
                <li>
                  <Link href="/courses" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Featured Categories
                  </Link>
                </li>
                <li>
                  <Link href="/courses?cat=Business" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Business
                  </Link>
                </li>
                <li>
                  <Link href="/courses?cat=IT+%26+Software" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    IT
                  </Link>
                </li>
                <li>
                  <Link href="/courses?cat=UI%2FUX+Design" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Design
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link href="/courses?cat=Web+Development" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Development
                  </Link>
                </li>
                <li>
                  <Link href="/courses?cat=Marketing" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/courses?cat=Photography" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Photography
                  </Link>
                </li>
                <li>
                  <Link href="/courses?cat=Business" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Finance
                  </Link>
                </li>
                <li>
                  <Link href="/courses" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Sport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <li>
                  <Link href="/creators/purepearl-studio" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Become a Creator
                  </Link>
                </li>
                <li>
                  <Link href="/register" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link href="/courses" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/courses" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    Help
                  </Link>
                </li>
                <li>
                  <Link href="/" style={{ fontSize: '13px', color: '#4B4C53', textDecoration: 'none' }}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid #F5F5F6',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '12px',
            color: '#82868E',
          }}
        >
          <div>© 2023 ByteSpace. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <Link href="/" style={{ color: '#82868E' }}>
              Privacy Policy
            </Link>
            <Link href="/" style={{ color: '#82868E' }}>
              Terms of Service
            </Link>
            <Link href="/" style={{ color: '#82868E' }}>
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
