'use client';

import React from 'react';
import Link from 'next/link';
import {
  DesignIcon,
  DevelopmentIcon,
  ITSoftwareIcon,
  BusinessIcon,
  MarketingIcon,
  PhotographyIcon,
} from './Icons';

interface CategoryCardProps {
  id: string;
  name: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ id, name }) => {
  const renderIcon = () => {
    switch (id) {
      case 'design':
        return <DesignIcon size={36} />;
      case 'development':
        return <DevelopmentIcon size={36} />;
      case 'it-software':
        return <ITSoftwareIcon size={36} />;
      case 'business':
        return <BusinessIcon size={36} />;
      case 'marketing':
        return <MarketingIcon size={36} />;
      case 'photography':
        return <PhotographyIcon size={36} />;
      default:
        return <DesignIcon size={36} />;
    }
  };

  return (
    <Link
      href={`/courses?cat=${encodeURIComponent(name)}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #CED0D3',
        borderRadius: '24px',
        padding: '20px 8px',
        aspectRatio: '1 / 1',
        maxWidth: '167px',
        width: '100%',
        margin: '0 auto',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      className="category-card-hover"
    >
      {/* Lime Circle Icon Holder */}
      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#D4FB20',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {renderIcon()}
      </div>

      <span
        style={{
          fontFamily: 'Satoshi, sans-serif',
          fontSize: 'clamp(14px, 1.35vw, 20px)',
          fontWeight: 500,
          lineHeight: '24px',
          color: '#242528',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          maxWidth: '100%',
        }}
      >
        {name}
      </span>
    </Link>
  );
};
