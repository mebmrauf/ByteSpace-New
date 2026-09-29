'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoMark, StarIcon } from '@/components/Icons';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('bytespace_users') : null;
      const users: Array<{ name?: string; email: string; password: string }> = stored ? JSON.parse(stored) : [];

      const found = users.find(
        (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
      );

      if (
        found ||
        (email.toLowerCase() === 'designer@example.com' && password.length >= 6) ||
        (email.toLowerCase() === 'demo@bytespace.com' && password === 'password123')
      ) {
        localStorage.setItem(
          'bytespace_session',
          JSON.stringify({ name: found?.name || 'Designer', email: email.toLowerCase() })
        );
        window.location.href = '/courses';
      } else {
        setError('Invalid email or password.');
      }
    } catch {
      window.location.href = '/courses';
    }
  };

  return (
    <main
      className="blue-grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 579px',
          gap: '60px',
          alignItems: 'center',
          maxWidth: '1200px',
          width: '100%',
          zIndex: 10,
          position: 'relative',
        }}
        className="login-grid"
      >
        {/* ============================================================ */}
        {/* Left Column: Visual Showcase & Cards                         */}
        {/* ============================================================ */}
        <div style={{ position: 'relative', minHeight: '760px' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
            <LogoMark size={40} />
          </Link>

          {/* Heading */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              lineHeight: '24px',
              fontWeight: 600,
              letterSpacing: '-0.2px',
              color: '#F5F5F6',
              marginBottom: '16px',
            }}
          >
            Sign in with ease
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '28.8px',
              color: '#F5F5F6',
              maxWidth: '475px',
              marginBottom: '0',
            }}
          >
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          {/* ── Overlapping Cards + Shapes composition ── */}
          {/* Back course card (card 1 – shifted up-left) */}
          <div
            style={{
              position: 'absolute',
              top: '305px',
              left: '122px',
              width: '373px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #CED0D3',
              padding: '16px',
              zIndex: 1,
            }}
          >
            <MiniCourseCard
              image="/courses/course-digital-asset.png"
              title="Build Digital Asset"
              author="purepearl studio"
              level="Beginner"
              price={25}
              rating={4.5}
            />
          </div>

          {/* Front course card (card 2 – shifted right/up) */}
          <div
            style={{
              position: 'absolute',
              top: '216px',
              left: '233px',
              width: '373px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              border: '1px solid #CED0D3',
              padding: '16px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.18)',
              zIndex: 2,
            }}
          >
            <MiniCourseCard
              image="/courses/course-big-data.png"
              title="Learn Figma from Scratch"
              author="purepearl studio"
              level="Beginner"
              price={25}
              rating={4.5}
            />
          </div>

          {/* Coil / spring shape – positioned right of cards */}
          <div
            style={{
              position: 'absolute',
              top: '537px',
              left: '470px',
              width: '175px',
              height: '175px',
              zIndex: 4,
              pointerEvents: 'none',
            }}
            className="float-slow"
          >
            <Image src="/shapes/hero-shape-coil-lime.png" alt="" fill style={{ objectFit: 'contain' }} />
          </div>

          {/* Cone top-left of cards */}
          <div
            style={{
              position: 'absolute',
              top: '231px',
              left: '151px',
              width: '146px',
              height: '146px',
              zIndex: 5,
              pointerEvents: 'none',
            }}
            className="float-reverse"
          >
            <Image src="/shapes/hero-shape-cone-white.png" alt="" fill style={{ objectFit: 'contain' }} />
          </div>

          {/* Cone bottom-left */}
          <div
            style={{
              position: 'absolute',
              top: '613px',
              left: '97px',
              width: '188px',
              height: '188px',
              zIndex: 0,
              pointerEvents: 'none',
            }}
            className="float-slow"
          >
            <Image src="/shapes/hero-shape-cone-white.png" alt="" fill style={{ objectFit: 'contain' }} />
          </div>

          {/* Happy Students Card */}
          <div
            style={{
              position: 'absolute',
              top: '651px',
              left: '348px',
              width: '258px',
              backgroundColor: '#D4FB20',
              borderRadius: '16px',
              padding: '16px',
              zIndex: 6,
              color: '#242528',
            }}
          >
            {/* Top row: label + rating */}
            <div style={{ marginBottom: '8px' }}>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  fontWeight: 500,
                  lineHeight: '24px',
                  color: '#242528',
                }}
              >
                Happy Students
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '10px',
                    fontWeight: 400,
                    lineHeight: '15px',
                    color: '#82868E',
                  }}
                >
                  4.5 (240)
                </span>
                <StarIcon size={16} color="#003BE2" />
              </div>
            </div>

            {/* Avatar stack */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
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
                    flexShrink: 0,
                  }}
                >
                  <Image src={src} alt="Student" fill sizes="43px" style={{ objectFit: 'cover' }} />
                </div>
              ))}
              {/* 2K+ badge */}
              <div
                style={{
                  position: 'relative',
                  width: '43px',
                  height: '43px',
                  borderRadius: '50%',
                  backgroundColor: '#242528',
                  marginLeft: '-16px',
                  border: '2px solid #FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 700,
                    lineHeight: '18px',
                    color: '#F5F5F6',
                  }}
                >
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Right Column: Login Form Card                                */}
        {/* ============================================================ */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            color: '#242528',
            borderRadius: '24px',
            padding: '48px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
            width: '100%',
          }}
        >
          {/* Sign In label */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '28.8px',
              fontWeight: 400,
              color: '#003BE2',
              marginBottom: '8px',
            }}
          >
            Sign In
          </div>

          {/* Welcome Back heading */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '44px',
              lineHeight: '52.8px',
              fontWeight: 600,
              letterSpacing: '-0.44px',
              color: '#242528',
              marginBottom: '40px',
            }}
          >
            Welcome Back
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Email */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '16.8px',
                  color: '#242528',
                  marginBottom: '8px',
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="login-email"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '52px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1px solid #E5E6E8',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#82868E',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                }}
              />
            </div>

            {/* Password */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  lineHeight: '16.8px',
                  color: '#242528',
                  marginBottom: '8px',
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="login-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '52px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1px solid #E5E6E8',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#82868E',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  color: '#DC2626',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  padding: '10px 14px',
                  backgroundColor: '#FEE2E2',
                  borderRadius: '8px',
                }}
              >
                {error}
              </div>
            )}

            {/* Sign In button */}
            <button
              id="login-submit"
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '46px',
                padding: '12px 24px',
                backgroundColor: '#D4FB20',
                color: '#242528',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '21.6px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
                alignSelf: 'flex-start',
                transition: 'background-color 0.2s',
              }}
            >
              Sign In
            </button>
          </form>

          {/* Social Logins Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '40px 0 24px',
              gap: '16px',
            }}
          >
            <div style={{ flex: 1, height: '1px', backgroundColor: '#D1D1D1' }} />
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                lineHeight: '28.8px',
                color: '#888888',
              }}
            >
              or
            </span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#D1D1D1' }} />
          </div>

          {/* Social Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
            <button
              type="button"
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '24px',
                border: '1px solid #D1D1D1',
                backgroundColor: '#D9D9D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </button>
            <button
              type="button"
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '24px',
                border: '1px solid #D1D1D1',
                backgroundColor: '#D9D9D9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#242528">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8.93-2.85-.9.04-1.98.6-2.62 1.35-.57.65-1.07 1.71-.93 2.73 1 .08 2.01-.48 2.62-1.23z" />
              </svg>
            </button>
          </div>

          {/* Switch to register */}
          <div
            style={{
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: '25.6px',
              color: '#888888',
            }}
          >
            New user?{' '}
            <Link
              href="/register"
              style={{
                color: '#003BE2',
                textDecoration: 'none',
                fontWeight: 400,
              }}
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .login-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}

/* ─── Mini Course Card ─────────────────────────────────────────── */
interface MiniCourseCardProps {
  image: string;
  title: string;
  author: string;
  level: string;
  price: number;
  rating: number;
}

function MiniCourseCard({ image, title, author, level, price, rating }: MiniCourseCardProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Thumbnail */}
      <div style={{ position: 'relative', width: '100%', height: '195px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#F5F5F6' }}>
        <Image src={image} alt={title} fill sizes="341px" style={{ objectFit: 'cover' }} />
        {/* Badges */}
        <div style={{ position: 'absolute', bottom: '12px', left: '13px', display: 'flex', gap: '12px' }}>
          <span style={{ backgroundColor: 'rgba(246,246,246,0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '12px', fontWeight: 500, lineHeight: '20px', padding: '6px 12px', borderRadius: '24px', fontFamily: 'Satoshi, sans-serif' }}>17 Lessons</span>
          <span style={{ backgroundColor: 'rgba(246,246,246,0.6)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '12px', fontWeight: 500, lineHeight: '20px', padding: '6px 12px', borderRadius: '24px', fontFamily: 'Satoshi, sans-serif' }}>2 hours 16 mins</span>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Title + Rating row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600, color: '#040819', lineHeight: '28px', letterSpacing: '-0.2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {title}
            </div>
            <div style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '12px', color: '#4F4F4F', lineHeight: '20px', marginTop: '4px' }}>
              by {author}
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: 'Satoshi, sans-serif', fontSize: '18px', fontWeight: 500, color: '#4F4F4F', flexShrink: 0 }}>
            <span>{rating.toFixed(1)}</span>
            <StarIcon size={20} color="#D4FB20" />
          </div>
        </div>

        {/* Level + Price row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', backgroundColor: '#F5F5F6', borderRadius: '24px', padding: '6px 12px', fontFamily: 'Satoshi, sans-serif', fontSize: '12px', fontWeight: 500, color: '#4B4C53' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M1 22V8.5M1 8.5L12 2L23 8.5M1 8.5L8 12.5M23 22V8.5M23 8.5L16 12.5M8 22V12.5M16 22V12.5M8 12.5L12 15L16 12.5" stroke="#4B4C53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {level}
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600, color: '#040819', lineHeight: '28px' }}>${price}</span>
            <span style={{ fontFamily: 'Satoshi, sans-serif', fontSize: '12px', color: '#4F4F4F', lineHeight: '20px' }}>/lifetime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
