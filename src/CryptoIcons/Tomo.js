import * as React from "react";

const SvgTomo = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tomo_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="tomo_svg__a"
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
      <circle id="tomo_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#tomo_svg__a)" xlinkHref="#tomo_svg__b" />
        <use fill="#1A1F36" xlinkHref="#tomo_svg__b" />
        <use
          fill="url(#tomo_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#tomo_svg__b"
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
        d="M18.525 13.464a.548.548 0 0 0 .048-1.094h-3.84v-.96a.634.634 0 0 0-1.22 0v.96h-1.027a.547.547 0 1 0 0 1.094h1.028v3.34a3.187 3.187 0 0 0 3.177 3.169 3.11 3.11 0 0 0 1.92-.701l.23-.192a.643.643 0 1 0-.844-.96l-.173.144a1.843 1.843 0 0 1-1.997.23 1.92 1.92 0 0 1-1.094-1.728v-3.302h3.792zm6.24 3.725a.48.48 0 0 0-.375-.567h-.24a.47.47 0 0 0-.46.365 7.488 7.488 0 1 1-14.132-4.733 6.845 6.845 0 0 1 3.706-3.705 7.546 7.546 0 0 1 9.331 2.669.48.48 0 0 0 .653.134l.086-.058a.518.518 0 0 0 .164-.71A8.64 8.64 0 0 0 13.37 7.33a8.102 8.102 0 0 0-4.992 4.924 8.582 8.582 0 1 0 16.387 4.935zM16.874 3.95h-.96A11.443 11.443 0 0 0 5.41 18.59a.547.547 0 0 0 .682.365h.077a.547.547 0 0 0 .288-.643 10.349 10.349 0 1 1 7.68 7.2.518.518 0 0 0-.519.192.557.557 0 0 0 .317.893A11.434 11.434 0 1 0 16.874 3.95z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgTomo;
