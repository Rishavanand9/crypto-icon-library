import * as React from "react";

const SvgDot = ({ title, titleId, ...props }) => (
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
        id="dot_svg__a"
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
      <filter id="dot_svg__d">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
      <filter
        x="-26.8%"
        y="-20.8%"
        width="153.6%"
        height="141.7%"
        filterUnits="objectBoundingBox"
        id="dot_svg__e"
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
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dot_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="dot_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#dot_svg__a)" xlinkHref="#dot_svg__b" />
      <use fill="#E6007A" xlinkHref="#dot_svg__b" />
      <use
        fill="url(#dot_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#dot_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g filter="url(#dot_svg__d)">
        <g filter="url(#dot_svg__e)" transform="translate(9.5 5.5)">
          <path
            d="M6.772.125C3.065.125.036 3.137.036 6.86c0 .749.124 1.48.356 2.192a.95.95 0 0 0 1.194.589.95.95 0 0 0 .588-1.194 4.745 4.745 0 0 1-.267-1.73c.071-2.512 2.103-4.58 4.616-4.704a4.86 4.86 0 0 1 5.115 4.847 4.862 4.862 0 0 1-4.58 4.848s-.945.053-1.408.125c-.232.035-.41.071-.535.089-.054.018-.107-.036-.09-.09l.161-.783.873-4.028a.934.934 0 0 0-.712-1.105.934.934 0 0 0-1.105.713s-2.103 9.802-2.121 9.909a.934.934 0 0 0 .713 1.105.934.934 0 0 0 1.105-.713c.017-.107.303-1.408.303-1.408a2.367 2.367 0 0 1 1.996-1.854 21.43 21.43 0 0 1 1.051-.089 6.744 6.744 0 0 0 6.22-6.719c0-3.724-3.03-6.736-6.737-6.736zm.481 15.505a1.122 1.122 0 0 0-1.336.873c-.125.606.25 1.212.873 1.337a1.122 1.122 0 0 0 1.337-.874c.124-.623-.25-1.212-.874-1.336z"
            fill="#FFF"
            fillRule="nonzero"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgDot;
