import * as React from "react";

const SvgSib = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sib_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="sib_svg__a"
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
      <circle id="sib_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#sib_svg__a)" xlinkHref="#sib_svg__b" />
        <use fill="#057BC1" xlinkHref="#sib_svg__b" />
        <use
          fill="url(#sib_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#sib_svg__b"
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
        d="M16 4C9.925 4 5 8.925 5 15s4.925 11 11 11 11-4.925 11-11A11 11 0 0 0 16 4zm3.828 15.15h-.448v2.504h-1.502V19.15h-2.29v-.93h2.326v-1.682a5.902 5.902 0 0 1-3.97.644c-.752-.179-1.503-.59-1.897-1.27a4.205 4.205 0 0 1-.536-2.182V9.76h1.52v4.113c.036.894.608 1.789 1.484 2.057a4.577 4.577 0 0 0 3.38-.537c0-1.252-.017-3.13 0-5.634h1.54v8.46h.393v.93z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgSib;
