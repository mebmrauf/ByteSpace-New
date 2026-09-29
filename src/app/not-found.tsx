'use client';

import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      {/* 404 Hero Section */}
      <section
        className="blue-grid-bg not-found-section"
        style={{
          width: '100%',
          minHeight: '957px',
          height: '100vh',
          maxHeight: '1024px',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Header variant="light" />

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'relative',
            paddingBottom: '50px',
            width: '1440px',
            maxWidth: '100%',
            margin: '0 auto',
            boxSizing: 'border-box',
          }}
        >
          {/* Giant 404 Backdrop Text (480px height, 920px width in Figma id 63:643) */}
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '480px',
              fontWeight: 600,
              lineHeight: '480px',
              letterSpacing: '-4.8px',
              background:
                'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.96) 25%, rgba(212, 251, 32, 0.81) 50.5%, rgba(212, 251, 32, 0.61) 68%, rgba(212, 251, 32, 0) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              userSelect: 'none',
              textAlign: 'center',
              width: '920px',
              height: '480px',
              margin: '0 auto',
            }}
            className="not-found-giant-num"
          >
            404
          </div>

          {/* Overlay Content Frame (Figma Frame 1 id 63:638, y=2269 overlapping lower half of 404) */}
          <div
            style={{
              marginTop: '-165px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '32px',
              maxWidth: '935px',
              width: '100%',
              zIndex: 2,
            }}
            className="not-found-content"
          >
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '72px',
                fontWeight: 600,
                lineHeight: '86.4px',
                letterSpacing: '-0.72px',
                color: '#FFFFFF',
                textAlign: 'center',
                margin: 0,
                maxWidth: '935px',
              }}
              className="not-found-title"
            >
              The page you are looking<br />for doesn’t exist
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
                maxWidth: '486px',
              }}
              className="not-found-subtitle"
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
                boxSizing: 'border-box',
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <style>{`
        @media (max-width: 992px) {
          .not-found-giant-num {
            font-size: clamp(160px, 24vw, 320px) !important;
            line-height: 1 !important;
            width: auto !important;
            height: auto !important;
          }
          .not-found-content {
            margin-top: -60px !important;
            gap: 20px !important;
            padding: 0 20px !important;
          }
          .not-found-title {
            font-size: clamp(32px, 5vw, 48px) !important;
            line-height: 1.2 !important;
          }
          .not-found-subtitle {
            font-size: 16px !important;
            line-height: 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
