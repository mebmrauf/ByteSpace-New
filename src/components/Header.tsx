'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ByteSpaceLogo, ShoppingBagIcon } from './Icons';

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export const Header: React.FC<HeaderProps> = ({ variant = 'light' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isLight = variant === 'light';
  const textColor = isLight ? '#F5F5F6' : '#242528';

  const isHomeActive = pathname === '/';
  const isCoursesActive = pathname.startsWith('/courses');
  const isCreatorsActive = pathname.startsWith('/creators');

  return (
    <header
      style={{
        width: '100%',
        height: '120px',
        zIndex: 50,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
      }}
      className="site-header"
    >
      <div
        style={{
          width: '1440px',
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          boxSizing: 'border-box',
        }}
        className="header-inner"
      >
        {/* Brand Logo (171px x 37px per Figma id 1:1787) */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <ByteSpaceLogo variant={isLight ? 'light' : 'dark'} width={171} height={37} />
        </Link>

        {/* Desktop Navigation Links (gap: 24px per Figma id 1:1779) */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '24px',
            height: '26px',
          }}
          className="desktop-nav"
        >
          <Link
            href="/"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '19.2px',
              color: textColor,
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
          >
            Home
          </Link>
          <Link
            href="/courses"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '25.6px',
              color: textColor,
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
          >
            Courses
          </Link>
          <Link
            href="/creators/purepearl-studio"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '25.6px',
              color: textColor,
              textDecoration: 'none',
              transition: 'opacity 0.2s ease',
            }}
          >
            Creators
          </Link>
        </nav>

        {/* Right Action Items (gap: 24px per Figma id 1:1783) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
          }}
          className="desktop-actions"
        >
          <Link
            href="/login"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: textColor,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            style={{
              fontFamily: 'Satoshi, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              color: textColor,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
          >
            Join Us
          </Link>

          <Link
            href="/courses"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: textColor,
              textDecoration: 'none',
              width: '24px',
              height: '24px',
              transition: 'opacity 0.2s',
            }}
            aria-label="Cart"
          >
            <ShoppingBagIcon size={24} color={textColor} />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '8px',
            color: textColor,
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: textColor }}></span>
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: textColor }}></span>
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: textColor }}></span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            width: '100%',
            backgroundColor: isLight ? '#0B36A4' : '#FFFFFF',
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            zIndex: 100,
          }}
        >
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: textColor, fontSize: '16px', fontWeight: 600 }}
          >
            Home
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: textColor, fontSize: '16px', fontWeight: 600 }}
          >
            Courses
          </Link>
          <Link
            href="/creators/purepearl-studio"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: textColor, fontSize: '16px', fontWeight: 600 }}
          >
            Creators
          </Link>
          <div style={{ height: '1px', backgroundColor: isLight ? 'rgba(255,255,255,0.15)' : '#E5E6E8', margin: '4px 0' }} />
          <Link
            href="/login"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: textColor, fontSize: '16px', fontWeight: 500 }}
          >
            Sign In
          </Link>
          <Link
            href="/register"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: textColor, fontSize: '16px', fontWeight: 500 }}
          >
            Join Us
          </Link>
        </div>
      )}
    </header>
  );
};
