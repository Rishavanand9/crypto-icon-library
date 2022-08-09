import * as React from "react";

const SvgStak = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="stak_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="stak_svg__a"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.199473505 0"
          in="shadowBlurOuter1"
        />
      </filter>
      <circle id="stak_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#stak_svg__a)" xlinkHref="#stak_svg__b" />
        <use fill="#F2941B" xlinkHref="#stak_svg__b" />
        <use
          fill="url(#stak_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#stak_svg__b"
        />
        <circle
          strokeOpacity={0.097}
          stroke="#000"
          strokeLinejoin="square"
          cx={15}
          cy={15}
          r={14.5}
        />
      </g>
      <path
        d="M16.519 5h.01c1.9 1.878 3.778 3.777 5.666 5.666h4.712L16.3 25.692c-.176-1.764-.311-3.528-.467-5.292 1.536-2.21 3.113-4.4 4.649-6.6l-3.508-3.497a8.148 8.148 0 0 0-.103-1.235c-.114-1.35-.187-2.719-.353-4.068zM5.01 20.089c3.56-5.002 7.088-10.025 10.637-15.037l.446 5.313c-1.546 2.21-3.102 4.39-4.649 6.59 1.152 1.152 2.304 2.324 3.477 3.476.155 1.764.29 3.55.467 5.324h-.021l-5.635-5.646c-1.577.021-3.155-.01-4.732.021v-.041h.01z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgStak;
