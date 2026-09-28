'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoMark, StarIcon } from '@/components/Icons';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Logged in successfully!');
    window.location.href = '/courses';
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
              fontSize: 'clamp(32px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Sign in with ease
          </h1>

          <p
            style={{
              fontSize: '15px',
              lineHeight: '25px',
              color: '#F5F5F6',
              maxWidth: '460px',
              marginBottom: '48px',
              opacity: 0.9,
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
                  <span style={{ backgroundColor: 'rgba(36, 37, 40, 0.65)', color: '#fff', fontSize: '10px', padding: '3px 8px', borderRadius: '9999px' }}>17 Lessons</span>
                  <span style={{ backgroundColor: 'rgba(36, 37, 40, 0.65)', color: '#fff', fontSize: '10px', padding: '3px 8px', borderRadius: '9999px' }}>2 hours 16 mins</span>
                  <span style={{ backgroundColor: 'rgba(36, 37, 40, 0.65)', color: '#fff', fontSize: '10px', padding: '3px 8px', borderRadius: '9999px' }}>59 Comments</span>
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
                backgroundColor: '#D4FB20',
                borderRadius: '16px',
                padding: '12px 18px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                zIndex: 3,
                color: '#242528',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700 }}>Happy Students</span>
                <span style={{ fontSize: '11px', fontWeight: 600 }}>4.5 (240) ★</span>
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
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      marginLeft: i > 0 ? '-6px' : '0',
                      border: '1.5px solid #D4FB20',
                    }}
                  >
                    <Image src={src} alt="Student" fill sizes="24px" style={{ objectFit: 'cover' }} />
                  </div>
                ))}
                <span
                  style={{
                    backgroundColor: '#242528',
                    color: '#FFFFFF',
                    fontSize: '9px',
                    fontWeight: 700,
                    padding: '3px 6px',
                    borderRadius: '9999px',
                    marginLeft: '-4px',
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
        {/* Right Column: Login Modal Card Form                          */}
        {/* ============================================================ */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            color: '#242528',
            borderRadius: '36px',
            padding: '56px 48px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.25)',
            maxWidth: '540px',
            width: '100%',
            justifySelf: 'center',
          }}
        >
          <div style={{ fontSize: '15px', fontWeight: 500, color: '#0445FF', marginBottom: '8px' }}>Sign In</div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '36px',
              fontWeight: 700,
              color: '#242528',
              marginBottom: '36px',
            }}
          >
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#242528', marginBottom: '8px' }}>
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
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid #CED0D3',
                  fontSize: '15px',
                  color: '#242528',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#242528', marginBottom: '8px' }}>
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
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid #CED0D3',
                  fontSize: '15px',
                  color: '#242528',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#D4FB20',
                  color: '#242528',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px 36px',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Social Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '36px 0',
              color: '#82868E',
              fontSize: '14px',
            }}
          >
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E6E8' }} />
            <span style={{ padding: '0 16px' }}>or</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E6E8' }} />
          </div>

          {/* Social Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '36px' }}>
            <button
              onClick={() => alert('Social sign in demo')}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '1px solid #CED0D3',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '20px',
              }}
              aria-label="Sign in with Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#242528">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </button>

            <button
              onClick={() => alert('Social sign in demo')}
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '1px solid #CED0D3',
                backgroundColor: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 700,
                color: '#242528',
              }}
              aria-label="Sign in with Google"
            >
              G
            </button>
          </div>

          <div style={{ textAlign: 'center', fontSize: '14px', color: '#666973' }}>
            New user?{' '}
            <Link href="/register" style={{ color: '#0445FF', fontWeight: 600 }}>
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
