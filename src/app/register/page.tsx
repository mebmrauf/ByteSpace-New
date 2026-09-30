'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LogoMark, StarIcon, SignalCellularIcon } from '@/components/Icons';

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
        width: '100%',
        position: 'relative',
        overflowX: 'hidden',
        overflowY: 'auto',
        backgroundColor: '#003BE2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {/* 1440px x 1024px Canvas Container */}
      <div
        className="auth-canvas"
        style={{
          position: 'relative',
          width: '1440px',
          minHeight: '1024px',
          height: '1024px',
          flexShrink: 0,
        }}
      >
        {/* ============================================================ */}
        {/* Header Logo (x = 122px, y = 35px)                             */}
        {/* ============================================================ */}
        <Link
          href="/"
          className="auth-logo"
          style={{
            position: 'absolute',
            left: '122px',
            top: '35px',
            display: 'inline-flex',
            alignItems: 'center',
            zIndex: 30,
          }}
        >
          <LogoMark size={29} />
        </Link>

        {/* ============================================================ */}
        {/* Left Column Text (x = 122px, y = 120px)                      */}
        {/* ============================================================ */}
        <div
          className="auth-left-text"
          style={{
            position: 'absolute',
            left: '122px',
            top: '120px',
            width: '475px',
            zIndex: 20,
          }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              lineHeight: '24px',
              fontWeight: 600,
              letterSpacing: '-0.2px',
              color: '#F5F5F6',
              margin: '0 0 16px 0',
            }}
          >
            Sign up and come in
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '28.8px',
              fontWeight: 400,
              color: '#F5F5F6',
              margin: 0,
            }}
          >
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
          </p>
        </div>

        {/* ============================================================ */}
        {/* Visual Stage: Overlapping Cards & 3D Shapes                  */}
        {/* ============================================================ */}
        <div className="auth-decorative-stage">

        {/* 3D Shape: Lime Torus (x = 151px, y = 320px, 146x146px) */}
        <div
          style={{
            position: 'absolute',
            left: '151px',
            top: '320px',
            width: '146px',
            height: '146px',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/shapes/auth-torus-lime.png"
            alt=""
            width={146}
            height={146}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Card 1: Back Card - Build Digital Asset (x = 122px, y = 394px, 373x384px) */}
        <div
          style={{
            position: 'absolute',
            left: '122px',
            top: '394px',
            width: '373px',
            height: '384px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #CED0D3',
            padding: '16px',
            boxSizing: 'border-box',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Thumbnail */}
          <div
            style={{
              position: 'relative',
              width: '341px',
              height: '195px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#443131',
            }}
          >
            <Link href="/courses/build-digital-asset" style={{ display: 'block', width: '100%', height: '100%' }}>
              <Image
                src="/courses/course-digital-asset.png"
                alt="Build Digital Asset"
                fill
                sizes="341px"
                style={{ objectFit: 'cover' }}
              />
            </Link>
            {/* Pill badges */}
            <div
              style={{
                position: 'absolute',
                left: '12px',
                bottom: '12px',
                display: 'flex',
                gap: '12px',
                zIndex: 2,
              }}
            >
              <Link
                href="/courses/build-digital-asset/lessons"
                style={{
                  backgroundColor: 'rgba(246, 246, 246, 0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4F4F4F',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                title="View course lessons"
              >
                17 Lessons
              </Link>
              <div
                style={{
                  backgroundColor: 'rgba(246, 246, 246, 0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4F4F4F',
                }}
              >
                2 hours 16 mins
              </div>
              <Link
                href="/courses/build-digital-asset/reviews"
                style={{
                  backgroundColor: 'rgba(246, 246, 246, 0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4F4F4F',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                title="View course reviews"
              >
                59 Comments
              </Link>
            </div>
          </div>

          {/* Card Meta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Title & Author & Rating */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <Link
                  href="/courses/build-digital-asset"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '28px',
                    letterSpacing: '-0.2px',
                    color: '#000000',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                  title="View course details"
                >
                  Build Digital Asset
                </Link>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    lineHeight: '20px',
                    color: '#4F4F4F',
                  }}
                >
                  by <span style={{ color: '#003BE2' }}>purepearl studio</span>
                </div>
              </div>

              {/* Rating */}
              <Link
                href="/courses/build-digital-asset/reviews"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                title="View course reviews"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: '#4F4F4F',
                  }}
                >
                  4.5
                </span>
                <StarIcon size={20} color="#D4FB20" />
              </Link>
            </div>

            {/* Row 2: Level badge + Avatars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: '#F5F5F6',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4B4C53',
                }}
              >
                <SignalCellularIcon size={16} color="#4B4C53" />
                Beginner
              </div>

              {/* Avatar Stack */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {['/images/auth_avatars/card_1.png', '/images/auth_avatars/card_2.png', '/images/auth_avatars/card_3.png', '/images/auth_avatars/card_4.png'].map(
                  (src, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'relative',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginLeft: i > 0 ? '-8px' : '0',
                        border: '1.5px solid #FFFFFF',
                        zIndex: i + 1,
                        flexShrink: 0,
                      }}
                    >
                      <Image src={src} alt="Student" fill sizes="32px" style={{ objectFit: 'cover' }} />
                    </div>
                  )
                )}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    border: '1.5px solid #FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-8px',
                    zIndex: 6,
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    color: '#FFFFFF',
                    flexShrink: 0,
                  }}
                >
                  26+
                </div>
              </div>
            </div>

            {/* Row 3: Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.2px',
                  color: '#003BE2',
                }}
              >
                $25
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  lineHeight: '20px',
                  color: '#4F4F4F',
                }}
              >
                /lifetime
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Front Card - the Power of Big Data (x = 233px, y = 305px, 373x384px) */}
        <div
          style={{
            position: 'absolute',
            left: '233px',
            top: '305px',
            width: '373px',
            height: '384px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            border: '1px solid #CED0D3',
            padding: '16px',
            boxSizing: 'border-box',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          {/* Thumbnail */}
          <div
            style={{
              position: 'relative',
              width: '341px',
              height: '195px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#443131',
            }}
          >
            <Link href="/courses/the-power-of-big-data" style={{ display: 'block', width: '100%', height: '100%' }}>
              <Image
                src="/courses/course-big-data.png"
                alt="the Power of Big Data"
                fill
                sizes="341px"
                style={{ objectFit: 'cover' }}
              />
            </Link>
            {/* Pill badges */}
            <div
              style={{
                position: 'absolute',
                left: '12px',
                bottom: '12px',
                display: 'flex',
                gap: '12px',
                zIndex: 2,
              }}
            >
              <Link
                href="/courses/the-power-of-big-data/lessons"
                style={{
                  backgroundColor: 'rgba(246, 246, 246, 0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4F4F4F',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                title="View course lessons"
              >
                17 Lessons
              </Link>
              <div
                style={{
                  backgroundColor: 'rgba(246, 246, 246, 0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4F4F4F',
                }}
              >
                2 hours 16 mins
              </div>
              <Link
                href="/courses/the-power-of-big-data/reviews"
                style={{
                  backgroundColor: 'rgba(246, 246, 246, 0.6)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4F4F4F',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                }}
                title="View course reviews"
              >
                59 Comments
              </Link>
            </div>
          </div>

          {/* Card Meta */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Title & Author & Rating */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <Link
                  href="/courses/the-power-of-big-data"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: '28px',
                    letterSpacing: '-0.2px',
                    color: '#000000',
                    textDecoration: 'none',
                    display: 'block',
                  }}
                  title="View course details"
                >
                  the Power of Big Data
                </Link>
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    lineHeight: '20px',
                    color: '#4F4F4F',
                  }}
                >
                  by <span style={{ color: '#003BE2' }}>purepearl studio</span>
                </div>
              </div>

              {/* Rating */}
              <Link
                href="/courses/the-power-of-big-data/reviews"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                title="View course reviews"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '18px',
                    fontWeight: 500,
                    lineHeight: '28px',
                    color: '#4F4F4F',
                  }}
                >
                  4.5
                </span>
                <StarIcon size={20} color="#D4FB20" />
              </Link>
            </div>

            {/* Row 2: Level badge + Avatars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  backgroundColor: '#F5F5F6',
                  borderRadius: '24px',
                  padding: '6px 12px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  fontWeight: 500,
                  lineHeight: '20px',
                  color: '#4B4C53',
                }}
              >
                <SignalCellularIcon size={16} color="#4B4C53" />
                Beginner
              </div>

              {/* Avatar Stack */}
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {['/images/auth_avatars/card_1.png', '/images/auth_avatars/card_2.png', '/images/auth_avatars/card_3.png', '/images/auth_avatars/card_4.png'].map(
                  (src, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'relative',
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginLeft: i > 0 ? '-8px' : '0',
                        border: '1.5px solid #FFFFFF',
                        zIndex: i + 1,
                      }}
                    >
                      <Image src={src} alt="Student" fill sizes="32px" style={{ objectFit: 'cover' }} />
                    </div>
                  )
                )}
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    border: '1.5px solid #FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '-8px',
                    zIndex: 6,
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    color: '#FFFFFF',
                  }}
                >
                  26+
                </div>
              </div>
            </div>

            {/* Row 3: Price */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  letterSpacing: '-0.2px',
                  color: '#003BE2',
                }}
              >
                $25
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '12px',
                  lineHeight: '20px',
                  color: '#4F4F4F',
                }}
              >
                /lifetime
              </span>
            </div>
          </div>
        </div>

        {/* 3D Shape: White Zigzag Ribbon (x = 470px, y = 626px, 175x175px) */}
        <div
          style={{
            position: 'absolute',
            left: '470px',
            top: '626px',
            width: '175px',
            height: '175px',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/shapes/auth-zigzag-white.png"
            alt=""
            width={175}
            height={175}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            priority
          />
        </div>

        {/* Happy Students Card (x = 348px, y = 740px, 258x123px) */}
        <div
          style={{
            position: 'absolute',
            left: '348px',
            top: '740px',
            width: '258px',
            height: '123px',
            backgroundColor: '#D4FB20',
            borderRadius: '16px',
            padding: '16px',
            boxSizing: 'border-box',
            zIndex: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {/* Top row */}
          <div>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
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
              <StarIcon size={14} color="#003BE2" />
            </div>
          </div>

          {/* Student Avatars Stack */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {[
              '/images/auth_avatars/hs_1.png',
              '/images/auth_avatars/hs_2.png',
              '/images/auth_avatars/hs_3.png',
              '/images/auth_avatars/hs_4.png',
              '/images/auth_avatars/hs_5.png',
              '/images/auth_avatars/hs_6.png',
              '/images/auth_avatars/hs_7.png',
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
                  zIndex: i + 1,
                  flexShrink: 0,
                }}
              >
                <Image src={src} alt="Student" fill sizes="43px" style={{ objectFit: 'cover' }} />
              </div>
            ))}
            <div
              style={{
                width: '43px',
                height: '43px',
                borderRadius: '50%',
                backgroundColor: '#242528',
                border: '2px solid #FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '-16px',
                zIndex: 10,
                flexShrink: 0,
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                fontWeight: 700,
                lineHeight: '18px',
                color: '#F5F5F6',
              }}
            >
              2K+
            </div>
          </div>
        </div>

        {/* 3D Shape: Lime Cone (x = 97px, y = 702px, 188x188px) */}
        <div
          style={{
            position: 'absolute',
            left: '97px',
            top: '702px',
            width: '188px',
            height: '188px',
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <Image
            src="/shapes/auth-cone-lime.png"
            alt=""
            width={188}
            height={188}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            priority
          />
        </div>
        </div>

        {/* ============================================================ */}
        {/* Right Column: Register Form Modal Card (x = 741px, y = 120px)*/}
        {/* ============================================================ */}
        <div
          className="auth-form-card"
          style={{
            position: 'absolute',
            left: '741px',
            top: '120px',
            width: '579px',
            height: '784px',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
            padding: '61px 63px 51px 63px',
            boxSizing: 'border-box',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Subheading Tag */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: '28.8px',
              fontWeight: 400,
              color: '#003BE2',
            }}
          >
            Create an Account
          </div>

          {/* Heading (2 lines in Figma / reference image) */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '44px',
              lineHeight: '52.8px',
              fontWeight: 600,
              letterSpacing: '-0.44px',
              color: '#242528',
              margin: '0 0 40px 0',
            }}
          >
            Welcome to<br />ByteSpace
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Full Name Field */}
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
                Full Name
              </label>
              <input
                type="text"
                id="register-fullname"
                placeholder="Jamie Davis"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '52px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1px solid #E5E6E8',
                  boxSizing: 'border-box',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#242528',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                }}
              />
            </div>

            {/* Email Field */}
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
                id="register-email"
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
                  boxSizing: 'border-box',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#242528',
                  outline: 'none',
                  backgroundColor: '#FFFFFF',
                }}
              />
            </div>

            {/* Password Field */}
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
                id="register-password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  height: '52px',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  border: '1px solid #E5E6E8',
                  boxSizing: 'border-box',
                  fontFamily: 'var(--font-body)',
                  fontSize: '18px',
                  lineHeight: '28.8px',
                  color: '#242528',
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
                  padding: '8px 14px',
                  backgroundColor: '#FEE2E2',
                  borderRadius: '8px',
                }}
              >
                {error}
              </div>
            )}

            {/* Right-aligned Continue Button (w = 123px, h = 46px) */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0px' }}>
              <button
                id="register-submit"
                type="submit"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '123px',
                  height: '46px',
                  backgroundColor: '#D4FB20',
                  color: '#242528',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '18px',
                  lineHeight: '21.6px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, transform 0.1s',
                }}
              >
                Continue
              </button>
            </div>
          </form>

          {/* Bottom Switcher (gap from button = 122px, h = 26px) */}
          <div
            style={{
              marginTop: '122px',
              textAlign: 'center',
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              lineHeight: '25.6px',
              color: '#4B4C53',
            }}
          >
            Already have an account?{' '}
            <Link
              href="/login"
              style={{
                color: '#003BE2',
                textDecoration: 'none',
                fontWeight: 400,
              }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) and (max-width: 1439px) {
          .auth-canvas {
            transform: scale(calc(100vw / 1440));
            transform-origin: top center;
          }
        }
        @media (max-width: 1023px) {
          .auth-canvas {
            width: 100% !important;
            min-height: 100vh !important;
            height: auto !important;
            transform: none !important;
            padding: 32px 16px 64px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .auth-logo {
            position: static !important;
            margin-bottom: 24px !important;
          }
          .auth-left-text {
            position: static !important;
            width: 100% !important;
            max-width: 480px !important;
            text-align: center !important;
            margin-bottom: 24px !important;
          }
          .auth-decorative-stage {
            display: none !important;
          }
          .auth-form-card {
            position: static !important;
            width: 100% !important;
            max-width: 480px !important;
            height: auto !important;
            margin: 0 auto !important;
            padding: 36px 24px !important;
          }
          .auth-form-card form {
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .auth-form-card {
            padding: 28px 16px !important;
            border-radius: 16px !important;
          }
        }
      `}</style>
    </main>
  );
}
