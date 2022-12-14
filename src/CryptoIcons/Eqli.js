import * as React from "react";

const SvgEqli = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient id="eqli_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <filter
        id="eqli_svg__a"
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
      <circle id="eqli_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none" transform="translate(1)">
      <use fill="#000" filter="url(#eqli_svg__a)" xlinkHref="#eqli_svg__b" />
      <use fill="#C9A35E" fillRule="evenodd" xlinkHref="#eqli_svg__b" />
      <use
        fill="url(#eqli_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#eqli_svg__b"
      />
      <circle
        cx={15}
        cy={15}
        r={14.5}
        stroke="#000"
        strokeLinejoin="square"
        strokeOpacity={0.097}
      />
      <path
        fill="#FFF"
        d="M9.4 18.168a.349.349 0 0 1-.313.197H5.27a.345.345 0 0 1-.295-.17.348.348 0 0 1-.01-.349l6.94-12.51c.125-.224.483-.224.608 0l5.41 9.729a.37.37 0 0 1-.008.349.324.324 0 0 1-.295.17h-1.583a.357.357 0 0 1-.304-.18l-3.515-6.393-3.935 7.27h1.503c.116 0 .232.063.295.161a.354.354 0 0 1 .018.34L9.4 18.168zm15.632-.322a.328.328 0 0 1-.009.349.324.324 0 0 1-.295.17H14.31a.35.35 0 0 1-.349-.349V16.63a.35.35 0 0 1 .349-.349h7.413l-3.925-7.244-.743 1.485c-.125.232-.51.232-.626 0l-.697-1.386a.382.382 0 0 1 0-.313l1.735-3.479a.366.366 0 0 1 .304-.188c.116 0 .25.063.313.18l6.948 12.51zm-4.516 1.386 1.726 3.13a.347.347 0 0 1 0 .349.324.324 0 0 1-.295.17H8.05a.357.357 0 0 1-.304-.179.348.348 0 0 1 .009-.349l2.781-4.516 2.772-4.856a.336.336 0 0 1 .313-.179c.134 0 .25.072.304.188l.698 1.386a.335.335 0 0 1-.01.331l-3.523 6.081h7.816l-.724-1.207a.328.328 0 0 1-.009-.349.357.357 0 0 1 .304-.179h1.735c.125 0 .242.072.304.18z"
      />
    </g>
  </svg>
);

export default SvgEqli;
