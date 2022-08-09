import * as React from "react";

const SvgAgrs = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        id="agrs_svg__a"
        width="111.7%"
        height="111.7%"
        x="-5.8%"
        y="-4.2%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
        />
      </filter>
      <filter
        id="agrs_svg__d"
        width="119.4%"
        height="121.9%"
        x="-9.7%"
        y="-7.8%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={0.5}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
      </filter>
      <linearGradient id="agrs_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="agrs_svg__b" cx={16} cy={15} r={15} />
      <path
        id="agrs_svg__e"
        d="M19.755 16.334C22.001 12.815 23.75 7 23.75 7l-3.745.849-1.371 4.85c-.129-3.636-2.622-4.967-2.622-4.967-1.997-.973-3.777-.545-5.06.124-1.588.826-2.743 2.266-3.296 3.924-.786 2.359-.69 5.006-.586 6.204.042.562.166 1.115.37 1.643 1.378 3.573 5.195 3.37 5.195 3.37 3.497-.124 5.622-4.242 5.622-4.242l1.002 3.028c.898 1.519 2.887.95 3.296.865.072-.016.136-.024.209-.04L25 22.267v-.973c-4.868.132-5.245-4.959-5.245-4.959m-4.739 3.659a2.369 2.369 0 0 1-1.098.638c-.907.226-1.604-.155-2.085-.622a3.937 3.937 0 0 1-1.059-1.978c-.882-4.99.337-7.177 1.147-8.182a2.258 2.258 0 0 1 1.868-.864c3.144.164 3.85 6.742 3.85 6.742-.89 2.335-2.037 3.69-2.623 4.266"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#agrs_svg__a)" xlinkHref="#agrs_svg__b" />
      <use fill="#F49E00" xlinkHref="#agrs_svg__b" />
      <use
        fill="url(#agrs_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#agrs_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#agrs_svg__d)" xlinkHref="#agrs_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#agrs_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgAgrs;
