import * as React from "react";

const SvgBix = ({ title, titleId, ...props }) => (
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
        id="bix_svg__a"
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
        id="bix_svg__d"
        width="119.4%"
        height="117.5%"
        x="-9.7%"
        y="-6.2%"
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
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.204257246 0"
        />
      </filter>
      <linearGradient id="bix_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bix_svg__b" cx={16} cy={15} r={15} />
      <path
        id="bix_svg__e"
        d="M16.941 23.577c.052.122.08.255.08.395 0 .568-.468 1.028-1.045 1.028s-1.045-.46-1.045-1.028c0-.136.027-.266.076-.385l-6.21-3.527a1.05 1.05 0 0 1-.752.314c-.577 0-1.045-.46-1.045-1.028 0-.48.333-.882.784-.996v-7.027A1.032 1.032 0 0 1 7 10.327C7 9.76 7.468 9.3 8.045 9.3c.346 0 .653.166.844.422l6.072-3.45a.975.975 0 0 1-.03-.243C14.931 5.46 15.4 5 15.976 5a1.037 1.037 0 0 1 1.017 1.265l6.108 3.47c.19-.264.501-.436.854-.436.577 0 1.045.46 1.045 1.028 0 .48-.335.884-.787.997l-.018 7.02c.461.107.805.515.805 1.002 0 .568-.468 1.028-1.045 1.028a1.05 1.05 0 0 1-.776-.34l-6.238 3.543zm-.279-.38 6.287-3.572a1.013 1.013 0 0 1 .02-.622l-6.065-3.9a1.24 1.24 0 0 1-.904.388 1.24 1.24 0 0 1-.979-.475l-5.977 4.027a1.013 1.013 0 0 1-.004.616l6.242 3.545a1.05 1.05 0 0 1 .694-.26c.263 0 .503.095.686.252zm.119-16.513a1.05 1.05 0 0 1-.547.34l-.016 6.056a1.221 1.221 0 0 1 1.017 1.196c0 .151-.028.297-.08.43l6.07 3.904c.135-.13.305-.223.495-.266l.018-7.011a1.033 1.033 0 0 1-.816-1.16l-6.141-3.489zm-1.605.005-6.101 3.465a1.033 1.033 0 0 1-.816 1.18v7.005c.212.044.4.15.544.3l6.005-4.045a1.22 1.22 0 0 1 .935-1.506l.016-6.054a1.047 1.047 0 0 1-.583-.345z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bix_svg__a)" xlinkHref="#bix_svg__b" />
      <use fill="#272727" xlinkHref="#bix_svg__b" />
      <use
        fill="url(#bix_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#bix_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#bix_svg__d)" xlinkHref="#bix_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#bix_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBix;
