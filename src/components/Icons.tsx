import React from 'react';

export const LogoMark = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={(size * 32) / 29} viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5479 10.5479C10.5479 4.72245 5.82544 0 0 0V21.0958C0 26.9212 4.72245 31.6437 10.5479 31.6437V10.5479Z" fill="#D4FB20"/>
    <path d="M18.4588 10.5479C24.2842 10.5479 29.0067 15.2703 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 16.3733 10.5479 10.5479L18.4588 10.5479Z" fill="#D4FB20"/>
    <path d="M18.4588 31.6437C24.2842 31.6437 29.0067 26.9212 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 25.8182 10.5479 31.6437L18.4588 31.6437Z" fill="#D4FB20"/>
  </svg>
);

export const ByteSpaceLogo = ({ variant = 'light', width = 171, height = 35 }: { variant?: 'light' | 'dark'; width?: number; height?: number }) => {
  const textColor = variant === 'light' ? '#F5F5F6' : '#242528';
  return (
    <svg width={width} height={height} viewBox="0 0 171 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5479 10.5479C10.5479 4.72245 5.82544 0 0 0V21.0958C0 26.9212 4.72245 31.6437 10.5479 31.6437V10.5479Z" fill="#D4FB20"/>
      <path d="M18.4588 10.5479C24.2842 10.5479 29.0067 15.2703 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 16.3733 10.5479 10.5479L18.4588 10.5479Z" fill="#D4FB20"/>
      <path d="M18.4588 31.6437C24.2842 31.6437 29.0067 26.9212 29.0067 21.0958H21.0958C15.2703 21.0958 10.5479 25.8182 10.5479 31.6437L18.4588 31.6437Z" fill="#D4FB20"/>
      <path d="M48.7172 30.1368H37.892V13.9835H48.1627C51.6585 13.9835 53.3944 15.3577 53.3944 17.8892C53.3944 19.9626 52.3095 21.4333 49.3681 21.5539V21.795C52.5988 21.9155 54.1418 23.4103 54.1418 25.6525C54.1418 28.3768 52.5747 30.1368 48.7172 30.1368ZM42.4005 18.058V20.1073H47.6805C48.5966 20.1073 48.8618 19.8421 48.8618 19.0947C48.8618 18.3473 48.5002 18.058 47.5599 18.058H42.4005ZM42.4005 23.8201V26.0623H48.1386C49.2235 26.0623 49.561 25.8453 49.561 24.9292C49.561 24.0371 49.2476 23.8201 48.1386 23.8201H42.4005ZM57.7791 34.2354H55.5852V30.1368H59.1052C59.4668 30.1368 59.7561 30.0886 59.949 29.9922L54.1386 17.9857H59.298L61.3956 22.7593L62.2635 25.556H62.5769L63.3725 22.7111L65.1807 17.9857H70.2437L64.4816 30.619C63.1797 33.488 61.3232 34.2354 57.7791 34.2354ZM79.8257 30.1368H76.6433C73.6055 30.1368 71.7973 28.6661 71.7973 25.5078V21.6985H70.0132V17.9857H71.7973V15.8881H76.3299V17.9857H79.8257V21.6985H76.3299V24.8569C76.3299 25.8212 76.6192 26.0623 77.6559 26.0623H79.8257V30.1368ZM87.6824 30.3779C83.5597 30.3779 80.6666 28.6179 80.6666 24.0612C80.6666 20.1073 83.5356 17.7446 87.586 17.7446C91.781 17.7446 94.4572 19.8421 94.4572 23.7478C94.4572 24.1577 94.4331 24.4711 94.3848 24.9051H84.8616C84.9339 26.3758 85.5849 26.7856 87.5136 26.7856C89.346 26.7856 89.8281 26.4722 89.8281 25.7489V25.4837H94.3607V25.773C94.3607 28.4733 91.781 30.3779 87.6824 30.3779ZM87.4895 21.2163C85.826 21.2163 85.1268 21.578 84.9339 22.6147H90.0692C89.9005 21.578 89.1772 21.2163 87.4895 21.2163ZM103.506 30.3779C98.5631 30.3779 95.5494 28.6179 95.5494 24.5193V24.3747H100.082V24.881C100.082 25.9659 100.468 26.2552 103.506 26.2552C106.254 26.2552 106.543 26.0382 106.543 25.3149C106.543 24.7363 106.23 24.4952 104.904 24.3264L99.8409 23.6514C96.8272 23.2415 95.3083 21.6262 95.3083 19.0224C95.3083 16.4427 97.3094 13.7424 103.144 13.7424C108.279 13.7424 110.738 15.9846 110.738 19.601V19.7456H106.206V19.384C106.206 18.2268 105.7 17.841 102.662 17.841C100.347 17.841 99.8409 18.1544 99.8409 18.8536C99.8409 19.3599 100.13 19.601 100.998 19.7215L106.061 20.4689C110.015 21.0476 111.076 23.0728 111.076 25.1462C111.076 27.9188 108.954 30.3779 103.506 30.3779ZM116.684 34.2354H112.151V17.9857H116.394V21.2645H116.635C117.021 18.8536 118.468 17.7446 121.313 17.7446C125.026 17.7446 127.075 20.1314 127.075 24.0612C127.075 28.0152 125.074 30.3779 121.506 30.3779C118.637 30.3779 117.286 29.0278 116.925 27.0026H116.684V34.2354ZM116.684 24.2059C116.684 25.9177 117.648 26.2552 119.673 26.2552C121.771 26.2552 122.494 25.6766 122.494 24.0612C122.494 22.4459 121.771 21.8914 119.673 21.8914C117.648 21.8914 116.684 22.2771 116.684 24.0371V24.2059ZM132.209 30.3779C129.46 30.3779 127.917 29.1242 127.917 27.0508C127.917 25.339 129.099 24.1095 131.847 23.8443L136.79 23.3621V23.121C136.79 21.8914 136.259 21.6985 134.644 21.6985C133.149 21.6985 132.691 21.9878 132.691 23.0004V23.0969H128.158V23.0486C128.158 19.818 130.859 17.7446 134.981 17.7446C139.225 17.7446 141.274 19.818 141.274 23.2174V30.1368H137.031V27.5812H136.79C136.332 29.293 134.837 30.3779 132.209 30.3779ZM132.474 26.7615C132.474 27.1473 132.86 27.2196 133.559 27.2196C135.753 27.2196 136.645 26.9544 136.766 25.8695L133.053 26.3034C132.643 26.3516 132.474 26.4963 132.474 26.7615ZM149.44 30.3779C145.125 30.3779 142.376 27.9911 142.376 24.0612C142.376 20.1073 145.125 17.7446 149.44 17.7446C153.587 17.7446 156.239 19.8662 156.239 23.121V23.5067H151.731V23.3138C151.731 22.0602 150.815 21.795 149.344 21.795C147.68 21.795 146.885 22.1566 146.885 24.0612C146.885 25.9418 147.68 26.3034 149.344 26.3034C150.815 26.3034 151.731 26.0623 151.731 24.8086V24.5916H156.239V25.0015C156.239 28.2322 153.587 30.3779 149.44 30.3779ZM164.225 30.3779C160.103 30.3779 157.209 28.6179 157.209 24.0612C157.209 20.1073 160.078 17.7446 164.129 17.7446C168.324 17.7446 171 19.8421 171 23.7478C171 24.1577 170.976 24.4711 170.928 24.9051H161.404C161.477 26.3758 162.128 26.7856 164.056 26.7856C165.889 26.7856 166.371 26.4722 166.371 25.7489V25.4837H170.904V25.773C170.904 28.4733 168.324 30.3779 164.225 30.3779ZM164.032 21.2163C162.369 21.2163 161.67 21.578 161.477 22.6147H166.612C166.443 21.578 165.72 21.2163 164.032 21.2163Z" fill={textColor}/>
    </svg>
  );
};

export const SearchIcon = ({ size = 20, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export const ShoppingBagIcon = ({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6h-2c0-2.21-1.79-4-4-4S8 3.79 8 6H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2zm6 16H6V8h2v2c0 .55.45 1 1 1s1-.45 1-1V8h4v2c0 .55.45 1 1 1s1-.45 1-1V8h2v12z" />
  </svg>
);

export const StarIcon = ({ size = 24, color = '#CED0D3' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>
  </svg>
);

export const SignalCellularIcon = ({ size = 24, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H17V21H19V3ZM12 9H10V21H12V9ZM5 15H3V21H5V15Z" />
  </svg>
);

export const UsersIcon = ({ size = 24, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm-5 5c.22-.72 3.31-2 5-2 1.7 0 4.78 1.28 5 2H4zm5-7c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6.5 4c1.66 0 3-1.34 3-3s-1.34-3-3-3c-.34 0-.66.07-.96.18.61.79.96 1.78.96 2.82s-.35 2.03-.96 2.82c.3.11.62.18.96.18z" />
  </svg>
);

export const CheckCircleIcon = ({ size = 20, color = '#0445FF' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill={color}/>
    <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FilterIcon = ({ size = 24, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M4 4h16l-6 8v8h-4v-8L4 4zm2.8 2L12 12.6 17.2 6H6.8z"/>
  </svg>
);

export const CategoryFilterIcon = ({ size = 24, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="m12 2-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"/>
  </svg>
);

export const SortIcon = ({ size = 24, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="6" width="18" height="2" fill={color} />
    <rect x="3" y="11" width="12" height="2" fill={color} />
    <rect x="3" y="16" width="6" height="2" fill={color} />
  </svg>
);

export const ChevronDown = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const ChevronLeft = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

export const ChevronRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export const ShareIcon = ({ size = 24, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

export const PlayIcon = ({ size = 60 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="22,14 44,30 22,46" fill="#F5F2FF"/>
  </svg>
);

export const VideoCameraIcon = ({ size = 24, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM15 16H5V8h10v8z" />
  </svg>
);

export const BookOpenIcon = ({ size = 24, color = '#003BE2' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10zm-6-8H6v2h8v-2zm-3 4H6v2h5v-2z" />
  </svg>
);

export const CertificateIcon = ({ size = 24, color = '#003BE2' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 7h-5V4c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9-3h2v5h-2V4zm9 16H4V9h5v2h6V9h5v11zm-8-7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 1.5c-1.67 0-5 .83-5 2.5V18h10v-1c0-1.67-3.33-2.5-5-2.5z" />
  </svg>
);

export const HeadsetIcon = ({ size = 24, color = '#003BE2' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M11 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm6.5 4.5c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM20 18.5c0-.85-.39-1.6-1-2.11-.92.65-2.04 1.05-3.25 1.11H15.5c-1.5 0-2.81-.61-3.75-1.59C10.81 16.89 9.5 17.5 8 17.5c-2.33 0-7 1.17-7 3.5V23h14v-2h-7v-.5c0-.73 2.71-1.5 4-1.5h.5c1.65 0 3-.66 3.99-1.74.83.47 1.51 1.15 1.51 1.74V21h4v-2.5z" />
  </svg>
);

// Learning Path Icons (Category cards with lime circles)
export const DesignIcon = ({ size = 36, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 -960 960 960" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="m352-522 86-87-56-57-44 44-56-56 43-44-45-45-87 87 159 158Zm328 329 87-87-45-45-44 43-56-56 43-44-57-56-86 86 158 159Zm-31-510 56 56 56-56-57-57-55 57ZM290-120H120v-170l175-175L80-680l200-200 216 216 151-152q12-12 27-18t31-6q16 0 31 6t27 18l53 54q12 12 18 27t6 31q0 16-6 30.5T816-647L665-495l215 215L680-80 465-295 290-120Z" />
  </svg>
);

export const DevelopmentIcon = ({ size = 36, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 -960 960 960" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M344-296 160-480l184-184 56 58-126 126 126 126-56 58Zm-144 16h80v40h400v-40h80v160q0 33-23.5 56.5T680-40H280q-33 0-56.5-23.5T200-120v-160Zm80-400h-80v-160q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v40Zm0 520v40h400v-40H280Zm0-640h400v-40H280v40Zm336 504-56-58 126-126-126-126 56-58 184 184-184 184ZM280-800v-40 40Zm0 640v40-40Z" />
  </svg>
);

export const ITSoftwareIcon = ({ size = 36, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 -960 960 960" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z" />
  </svg>
);

export const BusinessIcon = ({ size = 36, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 -960 960 960" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M80-200v-560q0-33 23.5-56.5T160-840h240q33 0 56.5 23.5T480-760v80h320q33 0 56.5 23.5T880-600v400q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200Zm80 0h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h320v-400H480v80h80v80h-80v80h80v80h-80v80Zm160-240v-80h80v80h-80Zm0 160v-80h80v80h-80Z" />
  </svg>
);

export const MarketingIcon = ({ size = 36, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 -960 960 960" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M640-80v-90q-56-18-94-64t-44-106h80q8 43 40.5 71.5T700-240h120q25 0 42.5 17.5T880-180v100H640Zm120-200q-33 0-56.5-23.5T680-360q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360q0 33-23.5 56.5T760-280ZM360-400q0-150 105-255t255-105v80q-117 0-198.5 81.5T440-400h-80Zm160 0q0-83 58.5-141.5T720-600v80q-50 0-85 35t-35 85h-80ZM80-520v-100q0-25 17.5-42.5T140-680h120q45 0 77.5-28.5T378-780h80q-6 60-44 106t-94 64v90H80Zm120-200q-33 0-56.5-23.5T120-800q0-33 23.5-56.5T200-880q33 0 56.5 23.5T280-800q0 33-23.5 56.5T200-720Z" />
  </svg>
);

export const PhotographyIcon = ({ size = 36, color = '#242528' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 -960 960 960" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M320-280h320v-22q0-45-44-71.5T480-400q-72 0-116 26.5T320-302v22Zm160-160q33 0 56.5-23.5T560-520q0-33-23.5-56.5T480-600q-33 0-56.5 23.5T400-520q0 33 23.5 56.5T480-440ZM160-120q-33 0-56.5-23.5T80-200v-480q0-33 23.5-56.5T160-760h126l74-80h240l74 80h126q33 0 56.5 23.5T880-680v480q0 33-23.5 56.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73 80H160v480Zm320-240Z" />
  </svg>
);

export const FacebookIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 3.333c-9.205 0-16.667 7.462-16.667 16.667 0 8.318 6.096 15.213 14.063 16.465v-11.648h-4.232v-4.817h4.232v-3.671c0-4.177 2.488-6.484 6.294-6.484 1.823 0 3.73.326 3.73.326v4.101h-2.102c-2.07 0-2.716 1.285-2.716 2.602v3.126h4.622l-.739 4.817h-3.883v11.648C30.57 35.213 36.667 28.318 36.667 20 36.667 10.795 29.205 3.333 20 3.333z"
      fill="#000000"
    />
  </svg>
);

export const GoogleIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.312 20.354c0-1.183-.106-2.32-.303-3.417H20v6.463h9.144c-.394 2.128-1.593 3.931-3.398 5.139v4.271h5.504c3.22-2.964 5.062-7.329 5.062-12.456z"
      fill="#000000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 36.667c4.5 0 8.277-1.492 11.036-4.037l-5.504-4.271c-1.493 1-3.403 1.593-5.532 1.593-4.256 0-7.86-2.875-9.146-6.737H5.166v4.409C7.905 33.067 13.524 36.667 20 36.667z"
      fill="#000000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.854 23.215c-.328-.985-.515-2.037-.515-3.215 0-1.178.187-2.23.515-3.215V12.376H5.166A16.634 16.634 0 003.687 20c0 2.688.647 5.234 1.479 7.624l5.688-4.409z"
      fill="#000000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 9.715c2.448 0 4.647.842 6.377 2.493l4.782-4.782C28.27 4.735 24.493 3.333 20 3.333c-6.476 0-12.095 3.6-14.834 9.043l5.688 4.409c1.286-3.862 4.89-6.737 9.146-6.737z"
      fill="#000000"
    />
  </svg>
);

