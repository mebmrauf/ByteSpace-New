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
        return <DesignIcon size={24} />;
      case 'development':
        return <DevelopmentIcon size={24} />;
      case 'it-software':
        return <ITSoftwareIcon size={24} />;
      case 'business':
        return <BusinessIcon size={24} />;
      case 'marketing':
        return <MarketingIcon size={24} />;
      case 'photography':
        return <PhotographyIcon size={24} />;
      default:
        return <DesignIcon size={24} />;
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
        gap: '16px',
        backgroundColor: '#FFFFFF',
        border: '1px solid #E5E6E8',
        borderRadius: '20px',
        padding: '32px 16px',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
      }}
      className="category-card-hover"
    >
      {/* Lime Circle Icon Holder */}
      <div
        style={{
          width: '56px',
          height: '56px',
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
          fontSize: '15px',
          fontWeight: 600,
          color: '#242528',
          textAlign: 'center',
        }}
      >
        {name}
      </span>

      <style jsx>{`
        .category-card-hover:hover {
          transform: translateY(-4px);
          border-color: #d4fb20;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </Link>
  );
};
