import * as React from "react";

const SvgVrsc = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vrsc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="vrsc_svg__a"
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
      <circle id="vrsc_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#vrsc_svg__a)" xlinkHref="#vrsc_svg__b" />
      <use fill="#3165D4" xlinkHref="#vrsc_svg__b" />
      <use
        fill="url(#vrsc_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#vrsc_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <path
        d="M8.846 6.428c.551-.473 1.324-.86 1.996-.587 1.21.49 4.456 7.044 4.456 7.044s4.543-6.46 6.174-7.048c.557-.201 1.32.152 1.902.588 2.042 1.528 2.253 3.66 2.077 4.252-.222.744-11.505 15.073-11.505 15.073-.338-.138-7.023-12.557-7.385-14.682-.346-2.031.832-3.411 2.285-4.64z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgVrsc;
