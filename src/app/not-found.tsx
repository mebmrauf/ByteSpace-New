'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* 404 Hero Section */}
      <section
        className="blue-grid-bg"
        style={{
          flex: 1,
          color: '#FFFFFF',
          paddingBottom: '120px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '800px',
        }}
      >
        {/* Floating 3D Shapes */}
        <div
          style={{
            position: 'absolute',
            top: '149px',
            left: '-76px',
            width: '332px',
            height: '331px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          className="float-slow"
        >
          <Image src="/shapes/shape-404-top-left.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '140px',
            left: '34px',
            width: '188px',
            height: '188px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          className="float-reverse"
        >
          <Image src="/shapes/shape-404-bottom-left.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            top: '169px',
            right: '57px',
            width: '222px',
            height: '222px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          className="float-reverse"
        >
          <Image src="/shapes/shape-404-top-right.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '-131px',
            width: '357px',
            height: '356px',
            pointerEvents: 'none',
            zIndex: 1,
          }}
          className="float-slow"
        >
          <Image src="/shapes/shape-404-bottom-right.png" alt="Decoration" fill style={{ objectFit: 'contain' }} />
        </div>

        <Header variant="light" />

        <div
          className="container"
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            paddingTop: '20px',
            paddingBottom: '80px',
            zIndex: 2,
          }}
        >
          {/* Giant 404 Backdrop Text */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(200px, 33.3vw, 480px)',
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: '-0.01em',
              background: 'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(255, 255, 255, 0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              userSelect: 'none',
              textAlign: 'center',
            }}
          >
            404
          </div>

          {/* Frame 1 Content overlapping bottom of 404 */}
          <div
            style={{
              marginTop: '-120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
              maxWidth: '935px',
              width: '100%',
              zIndex: 3,
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 600,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                color: '#FFFFFF',
                textAlign: 'center',
                margin: 0,
              }}
            >
              The page you are looking for doesn’t exist
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '18px',
                fontWeight: 400,
                lineHeight: '28.8px',
                color: '#E5E6E8',
                textAlign: 'center',
                margin: 0,
                maxWidth: '650px',
              }}
            >
              Try to use a correct url or go back to homepage to start again
            </p>

            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#D4FB20',
                color: '#242528',
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: '21.6px',
                height: '46px',
                padding: '12px 24px',
                borderRadius: '24px',
                textDecoration: 'none',
                transition: 'transform 0.2s, opacity 0.2s',
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
