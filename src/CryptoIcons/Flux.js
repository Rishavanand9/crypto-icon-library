import * as React from "react";

const SvgFlux = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="flux_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="flux_svg__a"
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
      <circle id="flux_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#flux_svg__a)" xlinkHref="#flux_svg__b" />
      <use fill="#2B61D1" xlinkHref="#flux_svg__b" />
      <use
        fill="url(#flux_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#flux_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g fill="#FFF" fillRule="nonzero">
        <path d="M17.963 24.862 16 26l-4.218-2.442 1.915-1.109.048-.028.073.042zM25.5 9.5v2.289l-4.152-2.403-1.126-.652-1.126.652-5.278 3.055-1.126.652v1.348l-2.03-1.176-1.127-.652-1.126.652L6.5 14.371V9.5L16 4z" />
        <path d="M25.5 14.397v6.111l-5.278 3.056-.007-.004-5.27-3.052v-6.11l5.277-3.058zm-12.929 2.582v3.514L9.536 22.25 6.5 20.493v-3.514l3.036-1.758z" />
      </g>
    </g>
  </svg>
);

export default SvgFlux;
