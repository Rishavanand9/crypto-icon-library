import * as React from "react";

const SvgXpm = ({ title, titleId, ...props }) => (
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
        id="xpm_svg__a"
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
        id="xpm_svg__d"
        width="121.9%"
        height="119.4%"
        x="-10.9%"
        y="-6.9%"
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
      <linearGradient id="xpm_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="xpm_svg__b" cx={16} cy={15} r={15} />
      <path
        id="xpm_svg__e"
        d="M24 14.562c0 4.423-3.426 5.927-6.31 5.927v1.153h2.225v1.562h-2.224V25h-3.48v-1.796h-2.127v-1.562h2.123v-1.168c-.923 0-6.207-.219-6.207-6.233V7h3.455v7.518c0 3.139 2.766 3.11 2.766 3.11V7h3.47v10.628s2.854.16 2.854-3.153V7H24v7.562z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#xpm_svg__a)" xlinkHref="#xpm_svg__b" />
      <use fill="#FFD81B" xlinkHref="#xpm_svg__b" />
      <use
        fill="url(#xpm_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#xpm_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#xpm_svg__d)" xlinkHref="#xpm_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#xpm_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgXpm;
