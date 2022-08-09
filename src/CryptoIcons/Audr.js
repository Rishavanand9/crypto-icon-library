import * as React from "react";

const SvgAudr = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="audr_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="audr_svg__a"
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
      <circle id="audr_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#audr_svg__a)" xlinkHref="#audr_svg__b" />
        <use fill="#34318A" xlinkHref="#audr_svg__b" />
        <use
          fill="url(#audr_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#audr_svg__b"
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
        d="m10.783 12.492 3.309 1.76 1.76-.88-4.206-2.28V7.08l8.087 4.198 1.76-.88-10.358-5.43A.774.774 0 0 0 10 5.654v5.562c.003.538.305 1.03.783 1.276zm12.61-.933a.774.774 0 0 0-.88-.14l-11.73 6.089A1.443 1.443 0 0 0 10 18.793v5.553a.774.774 0 0 0 1.135.686L22.84 18.96a1.45 1.45 0 0 0 .783-1.311v-5.544a.766.766 0 0 0-.228-.546zm-1.407 5.993-10.34 5.368v-4.013l10.34-5.368v4.013z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgAudr;