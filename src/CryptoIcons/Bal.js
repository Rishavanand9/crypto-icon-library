import * as React from "react";

const SvgBal = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="bal_svg__a"
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
      <filter id="bal_svg__d">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
      <filter
        x="-17.9%"
        y="-23.4%"
        width="135.7%"
        height="146.9%"
        filterUnits="objectBoundingBox"
        id="bal_svg__e"
      >
        <feOffset dy={0.5} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation={0.5}
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
          in="shadowBlurOuter1"
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bal_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="bal_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bal_svg__a)" xlinkHref="#bal_svg__b" />
      <use fill="#1E1E1E" xlinkHref="#bal_svg__b" />
      <use
        fill="url(#bal_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#bal_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g filter="url(#bal_svg__d)">
        <g
          filter="url(#bal_svg__e)"
          transform="translate(6 7)"
          fill="#FFF"
          fillRule="nonzero"
        >
          <path d="M10.092 15.196C4.518 15.196 0 13.586 0 11.428c0-1.126 1.23-2.14 3.2-2.856 1.538.987 4.117 1.493 7.042 1.493 2.856 0 5.38-.617 6.93-1.562 1.859.707 3.013 1.694 3.013 2.782 0 2.161-4.518 3.911-10.093 3.911z" />
          <path d="M10.152 9.58C5.926 9.58 2.5 8.255 2.5 6.62c0-.906 1.056-1.718 2.712-2.259 1.182.617 2.953 1.011 4.94 1.011 1.987 0 3.758-.394 4.94-1.01 1.659.543 2.712 1.352 2.712 2.258.003 1.635-3.424 2.96-7.652 2.96z" />
          <path d="M10.124 4.88c-3.267 0-5.916-1.094-5.916-2.44 0-1.345 2.65-2.44 5.916-2.44 3.266 0 5.916 1.095 5.916 2.44 0 1.346-2.65 2.44-5.916 2.44z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgBal;
