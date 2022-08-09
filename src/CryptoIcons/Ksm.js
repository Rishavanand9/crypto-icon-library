import * as React from "react";

const SvgKsm = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ksm_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="ksm_svg__a"
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
      <circle id="ksm_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ksm_svg__a)" xlinkHref="#ksm_svg__b" />
      <use fill="#000" xlinkHref="#ksm_svg__b" />
      <use
        fill="url(#ksm_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#ksm_svg__b"
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
        d="M25.847 8.448c-.36-.272-.791-.643-1.576-.736-.736-.093-1.486.378-1.993.69-.507.311-1.465 1.227-1.861 1.505-.396.279-1.41.538-3.042 1.473S9.34 16.24 9.34 16.24l1.667.02-7.43 3.655h.742l-1.069.776s.944.239 1.736-.239v.219s8.847-3.33 10.556-2.467l-1.042.291c.09 0 1.77.107 1.77.107s.056 1.001 1.07 1.644c1.014.637 1.035.989 1.035.989s-.528.205-.528.464c0 0 .778-.226 1.5-.206.722.02 1.354.206 1.354.206s-.055-.279-.757-.464c-.708-.193-1.395-.916-1.736-1.314a1.793 1.793 0 0 1-.284-1.817c.243-.603 1.09-.935 2.84-1.797 2.062-1.022 2.535-1.778 2.826-2.368.292-.59.722-1.764.966-2.315.305-.71.68-1.088.993-1.313.305-.226 1.701-.723 1.701-.723s-1.063-.882-1.403-1.14z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgKsm;
