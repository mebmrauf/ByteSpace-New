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
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

export const StarIcon = ({ size = 16, color = '#CBFC01' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

export const SignalCellularIcon = ({ size = 16, color = '#666973' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22h20V2L2 22zm18-2H4.41L20 4.41V20z"/>
    <rect x="4" y="16" width="3" height="4" rx="0.5" fill={color} />
    <rect x="9" y="12" width="3" height="8" rx="0.5" fill={color} />
  </svg>
);

export const CheckCircleIcon = ({ size = 20, color = '#0445FF' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill={color}/>
    <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const FilterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

export const CategoryFilterIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

export const SortIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="6" x2="20" y2="6"></line>
    <line x1="4" y1="12" x2="14" y2="12"></line>
    <line x1="4" y1="18" x2="8" y2="18"></line>
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

export const ShareIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

export const PlayIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="#ffffff" fillOpacity="0.85"/>
    <polygon points="26,20 46,32 26,44" fill="#003BE2"/>
  </svg>
);

export const VideoCameraIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="23 7 16 12 23 17 23 7"></polygon>
    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
);

export const BookOpenIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

export const CertificateIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6"></circle>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
  </svg>
);

export const HeadsetIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
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
