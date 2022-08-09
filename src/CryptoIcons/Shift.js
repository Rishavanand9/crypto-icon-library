import * as React from "react";

const SvgShift = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="shift_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="shift_svg__a"
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
      <circle id="shift_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use
          fill="#000"
          filter="url(#shift_svg__a)"
          xlinkHref="#shift_svg__b"
        />
        <use fill="#964B9C" xlinkHref="#shift_svg__b" />
        <use
          fill="url(#shift_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#shift_svg__b"
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
      <g fill="#FFF">
        <path
          opacity={0.6}
          d="m20.006 14.916-3.975 3.975h7.949l-3.974-3.975z"
        />
        <path opacity={0.7} d="M12.025 14.92 16 10.945H8.05l3.976 3.975z" />
        <path
          opacity={0.4}
          d="m16.03 18.891 3.966-3.965-3.983-3.983-7.95 7.949 7.95 7.949 7.948-7.949z"
        />
        <path
          opacity={0.8}
          d="m16.05 3-7.945 7.944H16l-3.952 3.952 4.001 4.001 7.949-7.948z"
        />
      </g>
    </g>
  </svg>
);

export default SvgShift;
