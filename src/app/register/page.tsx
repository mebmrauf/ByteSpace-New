'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoMark, StarIcon } from '@/components/Icons';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (fullName.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('bytespace_users') : null;
      const users: Array<{ name: string; email: string; password: string }> = stored ? JSON.parse(stored) : [];
      if (users.some((u) => u.email.toLowerCase() === email.toLowerCase())) {
        setError('An account with this email already exists.');
        return;
      }
      users.push({ name: fullName.trim(), email: email.toLowerCase(), password });
      localStorage.setItem('bytespace_users', JSON.stringify(users));
      localStorage.setItem('bytespace_session', JSON.stringify({ name: fullName.trim(), email: email.toLowerCase() }));
      window.location.href = '/courses';
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
          {/* Logo Mark */}
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
            Sign up and come in
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
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly,
            easily, and at no cost
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

            {/* Background Course Card (Build Digital Asset) */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '290px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '16px',
                border: '1px solid #CED0D3',
                zIndex: 1,
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '130px', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
                <Image src="/courses/course-digital-assets.png" alt="Digital Asset" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '8px', left: '8px', display: 'flex', gap: '6px' }}>
                  <span style={{ backgroundColor: 'rgba(246, 246, 246, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '10px', fontWeight: 500, padding: '3px 8px', borderRadius: '24px' }}>17 Lessons</span>
                  <span style={{ backgroundColor: 'rgba(246, 246, 246, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '10px', fontWeight: 500, padding: '3px 8px', borderRadius: '24px' }}>2 hours 16 mins</span>
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 600, color: '#242528', marginBottom: '4px' }}>Build Digital Asset</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#4F4F4F' }}>by purepearl studio</div>
            </div>

            {/* Foreground Main Course Card (the Power of Big Data) */}
            <div
              style={{
                position: 'absolute',
                top: '60px',
                left: '110px',
                width: '290px',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '16px',
                border: '1px solid #CED0D3',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                zIndex: 2,
              }}
            >
              <div style={{ position: 'relative', width: '100%', height: '130px', borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
                <Image src="/courses/course-big-data.png" alt="Big Data" fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '8px', left: '8px', display: 'flex', gap: '6px' }}>
                  <span style={{ backgroundColor: 'rgba(246, 246, 246, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '10px', fontWeight: 500, padding: '3px 8px', borderRadius: '24px' }}>17 Lessons</span>
                  <span style={{ backgroundColor: 'rgba(246, 246, 246, 0.65)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)', color: '#4F4F4F', fontSize: '10px', fontWeight: 500, padding: '3px 8px', borderRadius: '24px' }}>2 hours 16 mins</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 600, color: '#242528' }}>the Power of Big Data</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px', fontSize: '12px', fontWeight: 600, color: '#4F4F4F' }}>
                  <span>4.5</span>
                  <StarIcon size={12} color="#003BE2" />
                </div>
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: '#4F4F4F', marginBottom: '10px' }}>by purepearl studio</div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F5F5F6', paddingTop: '10px' }}>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: '#4F4F4F' }}>Beginner</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 600, color: '#300B6A' }}>$25</span>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#4F4F4F' }}>/lifetime</span>
                </div>
              </div>
            </div>

            {/* Bottom Card: Happy Students (White background in Figma) */}
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
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', color: '#424348' }}>4.5 (240) ★</span>
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
        {/* Right Column: Register Modal Card Form (579px, 24px radius)  */}
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
            Create an Account
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
            Welcome to ByteSpace
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
                Full Name
              </label>
              <input
                type="text"
                placeholder="Jamie Davis"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
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
              Continue
            </button>
          </form>

          <div
            style={{
              textAlign: 'center',
              marginTop: '40px',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: '#4B4C53',
            }}
          >
            Already have an account?{' '}
            <Link
              href="/login"
              style={{
                color: '#003BE2',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
