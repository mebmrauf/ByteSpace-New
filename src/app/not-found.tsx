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
            top: '80px',
            left: '-60px',
            width: '280px',
            height: '280px',
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
            bottom: '120px',
            left: '40px',
            width: '160px',
            height: '160px',
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
            top: '90px',
            right: '40px',
            width: '190px',
            height: '190px',
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
            bottom: '80px',
            right: '-60px',
            width: '300px',
            height: '300px',
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
            paddingTop: '60px',
            paddingBottom: '60px',
            zIndex: 2,
          }}
        >
          {/* Giant 404 Backdrop Text */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(180px, 32vw, 380px)',
                fontWeight: 800,
                lineHeight: 0.85,
                background: 'linear-gradient(180deg, #D4FB20 0%, rgba(212, 251, 32, 0.3) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                userSelect: 'none',
                opacity: 0.85,
              }}
            >
              404
            </div>

            {/* Overlay Headline */}
            <div
              style={{
                position: 'absolute',
                top: '55%',
                transform: 'translateY(-50%)',
                width: '100%',
                maxWidth: '780px',
                zIndex: 2,
              }}
            >
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(28px, 4.5vw, 48px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#FFFFFF',
                  letterSpacing: '-0.01em',
                }}
              >
                The page you are looking
                <br />
                for doesn&apos;t exist
              </h1>
            </div>
          </div>

          <p
            style={{
              fontSize: '15px',
              color: '#F5F5F6',
              opacity: 0.9,
              marginTop: '40px',
              marginBottom: '28px',
              maxWidth: '500px',
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
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 36px',
              borderRadius: '9999px',
              transition: 'all 0.2s',
              textDecoration: 'none',
            }}
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
