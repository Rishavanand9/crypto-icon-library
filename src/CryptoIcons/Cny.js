import * as React from "react";

const SvgCny = ({ title, titleId, ...props }) => (
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
        id="cny_svg__a"
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
        id="cny_svg__d"
        width="119.4%"
        height="120.6%"
        x="-9.7%"
        y="-7.4%"
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
      <linearGradient id="cny_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="cny_svg__b" cx={16} cy={15} r={15} />
      <path
        id="cny_svg__e"
        d="M9.171 7h13.816v1.925H9.17V7zm-1.54 5.641h17.073v1.945h-5.23v6.507c0 .5.217.75.67.75h2.172c.237 0 .434-.153.552-.442.139-.308.237-1.252.277-2.811l1.855.578c-.138 2.175-.395 3.465-.75 3.87-.355.384-.868.596-1.56.596h-3.137c-1.402 0-2.092-.712-2.092-2.118v-6.93h-2.922v.385c-.098 2.445-.65 4.408-1.657 5.872-.987 1.347-2.566 2.406-4.777 3.157L7 22.306c2.132-.732 3.553-1.656 4.303-2.734.75-1.194 1.144-2.715 1.223-4.601v-.385H7.632V12.64z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#cny_svg__a)" xlinkHref="#cny_svg__b" />
      <use fill="#FF4314" xlinkHref="#cny_svg__b" />
      <use
        fill="url(#cny_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#cny_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#cny_svg__d)" xlinkHref="#cny_svg__e" />
      <use fill="#FFF" xlinkHref="#cny_svg__e" />
    </g>
  </svg>
);

export default SvgCny;
