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
  const defaultTextColor = isLight ? 'rgba(255, 255, 255, 0.85)' : '#585A62';
  const activeTextColor = isLight ? '#D4FB20' : '#003BE2';
  const textColor = isLight ? '#F5F5F6' : '#242528';

  const isHomeActive = pathname === '/';
  const isCoursesActive = pathname.startsWith('/courses');
  const isCreatorsActive = pathname.startsWith('/creators');

  return (
    <header
      style={{
        width: '100%',
        padding: '24px 0',
        zIndex: 50,
        position: 'relative',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <ByteSpaceLogo variant={isLight ? 'light' : 'dark'} width={160} height={32} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          <Link
            href="/"
            style={{
              fontSize: '16px',
              fontWeight: isHomeActive ? 600 : 500,
              color: isHomeActive ? activeTextColor : defaultTextColor,
              transition: 'all 0.2s ease',
            }}
          >
            Home
          </Link>
          <Link
            href="/courses"
            style={{
              fontSize: '16px',
              fontWeight: isCoursesActive ? 600 : 400,
              color: isCoursesActive ? activeTextColor : defaultTextColor,
              transition: 'all 0.2s ease',
            }}
          >
            Courses
          </Link>
          <Link
            href="/creators/purepearl-studio"
            style={{
              fontSize: '16px',
              fontWeight: isCreatorsActive ? 600 : 400,
              color: isCreatorsActive ? activeTextColor : defaultTextColor,
              transition: 'all 0.2s ease',
            }}
          >
            Creators
          </Link>
        </nav>

        {/* Right Action Buttons */}
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
              fontSize: '16px',
              fontWeight: 400,
              color: textColor,
              transition: 'opacity 0.2s',
            }}
          >
            Sign In
          </Link>

          <Link
            href="/register"
            style={{
              fontSize: '16px',
              fontWeight: 400,
              color: textColor,
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
              position: 'relative',
              padding: '4px',
            }}
            aria-label="Cart"
          >
            <ShoppingBagIcon size={22} color={textColor} />
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
