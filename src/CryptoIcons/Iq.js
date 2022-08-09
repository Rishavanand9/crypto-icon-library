import * as React from "react";

const SvgIq = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="iq_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="iq_svg__a"
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
      <circle id="iq_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#iq_svg__a)" xlinkHref="#iq_svg__b" />
        <use fill="#5DF" xlinkHref="#iq_svg__b" />
        <use
          fill="url(#iq_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#iq_svg__b"
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
        d="M11.83 9.12a7.62 7.62 0 0 1 2-5.12c.35-.35.39-.42.39-.7 0-.28 0-.3-.21-.3a5.63 5.63 0 0 0-.77.14 12.1 12.1 0 0 0-7.29 5.07 11.28 11.28 0 0 0-1.7 4 14.07 14.07 0 0 0-.18 4 11.67 11.67 0 0 0 4.16 7.57c1.23 1 2.61 1.8 2.61 1.44a1.43 1.43 0 0 0-.32-.41 6.34 6.34 0 0 1-1.59-5.09 7.27 7.27 0 0 1 3.4-5.6 5.58 5.58 0 0 1 .77-.46c.15 0 .06-.3-.31-1a6.91 6.91 0 0 1-.96-3.54zm15.51 3.12a12 12 0 0 0-6.08-8.16c-.56-.31-.84-.38-.84-.19a1.4 1.4 0 0 0 .24.44 5.5 5.5 0 0 1 1 3 4 4 0 0 1-1 3.12 1.08 1.08 0 0 1-1.51.06c-.4-.29-.4-.49-.15-.86A4.36 4.36 0 0 0 19.75 7a2.55 2.55 0 0 0-.74-2.07 1.93 1.93 0 0 0-1.94-.51 3.17 3.17 0 0 0-1.92 2.3 9.15 9.15 0 0 0-.4 2.28 7.41 7.41 0 0 0 .85 3.4 6.92 6.92 0 0 0 1.41 1.6c.11.072.207.16.29.26a.88.88 0 0 1-.33.17 6.41 6.41 0 0 0-3.32 3.71 7.15 7.15 0 0 0-.48 2.95 3.43 3.43 0 0 0 1 2.57 3.32 3.32 0 0 0 2.8.75 5.27 5.27 0 0 0 3.46-1.66c.41-.44.49-.49.57-.39.08.1.06.16-.09.41a7.5 7.5 0 0 1-4.27 3.38c-.35.09-.5.16-.5.24 0 .26 2.19-.1 3.52-.57a12.1 12.1 0 0 0 7.3-7.46 9.43 9.43 0 0 0 .55-3.72 9.47 9.47 0 0 0-.17-2.4z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgIq;
