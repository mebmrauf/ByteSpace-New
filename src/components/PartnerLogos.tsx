import React from 'react';
import Image from 'next/image';

export const PartnerLogos: React.FC = () => {
  return (
    <section
      style={{
        backgroundColor: '#F5F5F6',
        padding: '80px 0',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1132px',
          padding: '0 24px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          src="/icons/logo_1_1708_Logo_Partner.svg"
          alt="Trusted partners and logos"
          width={1132}
          height={42}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '1132px',
            display: 'block',
          }}
          priority
        />
      </div>
    </section>
  );
};
