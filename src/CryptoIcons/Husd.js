import * as React from "react";

const SvgHusd = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="husd_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="husd_svg__a"
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
      <circle id="husd_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#husd_svg__a)" xlinkHref="#husd_svg__b" />
      <use fill="#005FFA" xlinkHref="#husd_svg__b" />
      <use
        fill="url(#husd_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#husd_svg__b"
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
        d="M20.694 13.598a3.407 3.407 0 0 0-1.41-.305h-4.917a1.71 1.71 0 0 1-1.71-1.71v-5.89H9.239v7.6a3.42 3.42 0 0 0 3.42 3.42h4.916a1.71 1.71 0 0 1 1.71 1.71v5.89h3.419v-7.6a3.419 3.419 0 0 0-2.01-3.115zM9.356 18.803v5.744h3.42v-2.325a3.42 3.42 0 0 0-3.42-3.419zM19.88 5.929h-.714v2.325a3.42 3.42 0 0 0 3.42 3.42V5.928H19.88z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgHusd;
