import * as React from "react";

const SvgMth = ({ title, titleId, ...props }) => (
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
        id="mth_svg__a"
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
        id="mth_svg__d"
        width="119.4%"
        height="123.3%"
        x="-9.7%"
        y="-8.3%"
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
          result="shadowMatrixOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="mth_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mth_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#mth_svg__a)" xlinkHref="#mth_svg__b" />
      <use fill="#104FCA" fillRule="evenodd" xlinkHref="#mth_svg__b" />
      <use
        fill="url(#mth_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#mth_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fill="#FFF" filter="url(#mth_svg__d)" transform="translate(7 8)">
        <path
          fillOpacity={0.5}
          d="M0 .568 4.234 7.67V15C1.896 15 0 13.164 0 10.899V.568z"
        />
        <path
          fillOpacity={0.6}
          d="M13.765 7.663 17.997.564h.002V10.9C18 13.164 16.104 15 13.765 15V7.663z"
        />
        <path
          fillOpacity={0.8}
          d="M8.997 7.458 6.88 11.01c-.439-.11-.911-.536-1.416-1.277L0 .568c2.025-1.133 4.615-.46 5.784 1.5l3.213 5.39z"
        />
        <path d="M12.216 2.06C13.385.098 15.975-.574 18 .559l-5.464 9.165A4.267 4.267 0 0 1 9 11.568a4.33 4.33 0 0 1-1.9-.435l-.22-.123 5.336-8.95z" />
      </g>
    </g>
  </svg>
);

export default SvgMth;
