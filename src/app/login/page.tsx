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
        padding: '40px 24px',
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
      }}
    >
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          maxWidth: '1240px',
          zIndex: 10,
        }}
      >
        {/* ============================================================ */}
        {/* Left Column: Visual Showcase & Cards                         */}
        {/* ============================================================ */}
        <div style={{ position: 'relative' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '28px' }}>
            <LogoMark size={40} />
          </Link>

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

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '28.8px',
              color: '#F5F5F6',
              maxWidth: '475px',
              marginBottom: '40px',
            }}
          >
            Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
          </p>

          {/* Overlapping Cards Composition */}
          <div
            style={{
              position: 'relative',
              height: '360px',
              maxWidth: '480px',
            }}
          >
            {/* 3D Torus */}
            <div
              style={{
                position: 'absolute',
                top: '-20px',
                left: '20px',
                width: '90px',
                height: '90px',
                zIndex: 3,
              }}
              className="float-slow"
            >
              <Image src="/shapes/shape-torus.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
            </div>

            {/* 3D Cone Bottom */}
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '0px',
                width: '110px',
                height: '110px',
                zIndex: 3,
              }}
              className="float-reverse"
            >
              <Image src="/shapes/cone-1.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
            </div>

            {/* 3D Zigzag Right */}
            <div
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '10px',
                width: '120px',
                height: '120px',
                zIndex: 3,
              }}
              className="float-slow"
            >
              <Image src="/shapes/shape-zigzag.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
            </div>

            {/* Background Course Card */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '0',
                width: '320px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                padding: '14px',
                opacity: 0.85,
                transform: 'scale(0.92) translateX(-20px)',
                zIndex: 1,
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '110px', borderRadius: '12px', overflow: 'hidden', marginBottom: '10px' }}>
                <Image src="/courses/course-digital-asset.png" alt="Course" fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#242528' }}>Build Digital Asset</div>
              <div style={{ fontSize: '11px', color: '#0445FF' }}>by purepearl studio</div>
            </div>

            {/* Foreground Main Course Card */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '60px',
                width: '340px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '16px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.25)',
                zIndex: 2,
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '130px', borderRadius: '14px', overflow: 'hidden', marginBottom: '12px' }}>
                <Image src="/courses/course-big-data.png" alt="Big Data" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '8px', left: '8px', display: 'flex', gap: '6px' }}>
                  <span style={{ backgroundColor: 'rgba(246, 246, 246, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '10px', fontWeight: 500, padding: '3px 8px', borderRadius: '9999px' }}>17 Lessons</span>
                  <span style={{ backgroundColor: 'rgba(246, 246, 246, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '10px', fontWeight: 500, padding: '3px 8px', borderRadius: '9999px' }}>2 hours 16 mins</span>
                  <span style={{ backgroundColor: 'rgba(246, 246, 246, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '10px', fontWeight: 500, padding: '3px 8px', borderRadius: '9999px' }}>59 Comments</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#242528' }}>the Power of Big Data</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '12px', fontWeight: 700, color: '#242528' }}>
                  <span>4.5</span>
                  <StarIcon size={12} color="#CBFC01" />
                </div>
              </div>
              <div style={{ fontSize: '11px', color: '#0445FF', marginBottom: '10px' }}>by purepearl studio</div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F5F5F6', paddingTop: '10px' }}>
                <div style={{ fontSize: '12px', color: '#666973' }}>Beginner</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                  <span style={{ fontSize: '16px', fontWeight: 700, color: '#003BE2' }}>$25</span>
                  <span style={{ fontSize: '10px', color: '#82868E' }}>/lifetime</span>
                </div>
              </div>
            </div>

            {/* Bottom Card: Happy Students */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '120px',
                backgroundColor: '#FFFFFF',
                borderRadius: '16px',
                padding: '16px',
                border: '1px solid #CED0D3',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.12)',
                zIndex: 3,
                color: '#242528',
                width: '258px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 500, color: '#242528' }}>Happy Students</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#82868E' }}>4.5 (240) ★</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {[
                  '/images/student-stack-1.png',
                  '/images/student-stack-2.png',
                  '/images/student-stack-3.png',
                  '/images/student-stack-4.png',
                  '/images/student-stack-5.png',
                  '/images/student-stack-6.png',
                ].map((src, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'relative',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginLeft: i > 0 ? '-10px' : '0',
                      border: '1.5px solid #FFFFFF',
                    }}
                  >
                    <Image src={src} alt="Student" fill sizes="32px" style={{ objectFit: 'cover' }} />
                  </div>
                ))}
                <span
                  style={{
                    backgroundColor: '#242528',
                    color: '#F5F5F6',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 700,
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-10px',
                    zIndex: 7,
                  }}
                >
                  2K+
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* Right Column: Login Modal Card Form (579px, 24px radius)     */}
        {/* ============================================================ */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            color: '#242528',
            borderRadius: '24px',
            padding: '48px 48px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
            maxWidth: '579px',
            width: '100%',
            justifySelf: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '21.6px',
              fontWeight: 400,
              color: '#003BE2',
              marginBottom: '8px',
            }}
          >
            Sign In
          </div>
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

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#242528',
                  marginBottom: '8px',
                }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: '#242528',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#242528',
                  marginBottom: '8px',
                }}
              >
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid #CED0D3',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  color: '#242528',
                  outline: 'none',
                }}
              />
            </div>

            {error && (
              <div
                style={{
                  color: '#DC2626',
                  fontSize: '14px',
                  padding: '10px 14px',
                  backgroundColor: '#FEE2E2',
                  borderRadius: '8px',
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              style={{
                width: '100%',
                height: '48px',
                backgroundColor: '#D4FB20',
                color: '#242528',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '18px',
                borderRadius: '24px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                marginTop: '8px',
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
              margin: '36px 0 24px',
              gap: '16px',
            }}
          >
            <div style={{ flex: 1, height: '1px', backgroundColor: '#CED0D3' }} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '18px', color: '#888888' }}>or</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#CED0D3' }} />
          </div>

          {/* Social Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '36px' }}>
            {['google', 'apple'].map((provider) => (
              <button
                key={provider}
                type="button"
                style={{
                  width: '72px',
                  height: '48px',
                  borderRadius: '24px',
                  border: '1px solid #CED0D3',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {provider === 'google' ? (
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#242528">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.98.6-2.62 1.35-.57.65-1.07 1.71-.93 2.73 1 .08 2.01-.48 2.62-1.23z" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <div
            style={{
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#888888',
            }}
          >
            New user?{' '}
            <Link
              href="/register"
              style={{
                color: '#003BE2',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
