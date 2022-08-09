import * as React from "react";

const SvgMax = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="max_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="max_svg__a"
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
      <circle id="max_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#max_svg__a)" xlinkHref="#max_svg__b" />
      <use fill="#2D4692" xlinkHref="#max_svg__b" />
      <use
        fill="url(#max_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#max_svg__b"
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
        d="M23.988 13.617c0-.798-.21-1.425-.652-1.896-.454-.484-.946-.732-1.475-.732h-4.093V8.818h5.708s.467-.17.467-.929c0-.758-.467-.889-.467-.889H8.467S8 7.131 8 7.89c0 .758.467.928.467.928h5.785v2.17h-4.094c-.528 0-1.02.25-1.475.733-.43.471-.652 1.099-.652 1.896l-.012 6.578s-.012 1.334.811 2.053c.7.615 1.758.51 1.758.51h1.684c.197 0 .59-.314.59-.85 0-.903-.688-.994-.688-.994h-1.45c-1.034 0-.996-1.007-.996-1.007v-5.91c0-.785.393-1.178 1.155-1.178h3.369v10.567s.049.614.651.614h.651V12.82h.91V24h.652c.602 0 .651-.614.651-.614V12.819h3.369c.774 0 1.156.393 1.156 1.177v5.911s.036 1.007-.996 1.007h-1.451s-.688.091-.688.994c0 .536.393.85.59.85h1.684s1.045.105 1.758-.51c.823-.72.811-2.053.811-2.053l-.012-6.578zm-7.511-2.59h-.922v-2.21h.922v2.21z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgMax;
