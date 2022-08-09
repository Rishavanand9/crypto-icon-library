import * as React from "react";

const SvgKnc = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="knc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="knc_svg__a"
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
      <circle id="knc_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#knc_svg__a)" xlinkHref="#knc_svg__b" />
      <use fill="#31CB9E" xlinkHref="#knc_svg__b" />
      <use
        fill="url(#knc_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#knc_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g fill="#FFF" fillRule="nonzero">
        <path d="m14.927 15.162 7.72 4.423a.408.408 0 0 0 .618-.353v-8.146a.405.405 0 0 0-.618-.35l-7.72 4.426zm7.557-6.383-5.278-3.882a.42.42 0 0 0-.661.222l-1.927 8.647 7.82-4.323a.39.39 0 0 0 .046-.664M17.2 25.424l5.284-3.882a.395.395 0 0 0-.044-.673l-7.822-4.323 1.927 8.647a.417.417 0 0 0 .655.238" />
        <path d="m12.92 15.002 2.007-9.389a.398.398 0 0 0-.618-.404L9.167 9.152a1.065 1.065 0 0 0-.417.85v10.006c-.005.337.15.656.417.861l5.117 3.932a.398.398 0 0 0 .618-.405l-1.983-9.394z" />
      </g>
    </g>
  </svg>
);

export default SvgKnc;
