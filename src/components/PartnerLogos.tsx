import React from 'react';
import Image from 'next/image';

export const PartnerLogos: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#F5F5F6',
        padding: '36px 0',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1132px',
            height: '42px',
            opacity: 0.85,
          }}
        >
          <Image
            src="/icons/logo_1_1708_Logo_Partner.svg"
            alt="Trusted partners and logos"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </section>
  );
};
