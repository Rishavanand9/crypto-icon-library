import * as React from "react";

const SvgData = ({ title, titleId, ...props }) => (
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
        id="data_svg__a"
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
        id="data_svg__d"
        width="117.5%"
        height="117.5%"
        x="-8.8%"
        y="-6.3%"
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
      <linearGradient id="data_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="data_svg__b" cx={16} cy={15} r={15} />
      <path
        id="data_svg__e"
        d="m24.14 8.914 1.607-1.594c.38-.376.301-1.064-.174-1.535-.475-.472-1.17-.549-1.549-.172l-3.016 2.99-.103.103-2.628 2.605a4.56 4.56 0 0 0-5.867.45 4.464 4.464 0 0 0-.454 5.817l-2.006 1.99a7.844 7.844 0 0 1-1.189-2.293c-.673-2.038-.492-4.27.6-6.11 1.703-2.87 4.75-4.118 7.638-3.752a1.07 1.07 0 0 0 1.216-.986 1.307 1.307 0 0 0-1.174-1.374c-2.901-.297-5.9.65-8.115 2.846-3.67 3.638-3.885 9.409-.66 13.338l-1.84 1.825c-.363.36-.273 1.035.203 1.506.475.471 1.155.562 1.518.202l1.981-1.964h.001l1.432-1.42.003-.004 2.322-2.302a4.558 4.558 0 0 0 4.92-.976 4.463 4.463 0 0 0 .985-4.879l2.634-2.611c1.931 2.908 1.548 6.934-1.11 9.568a7.886 7.886 0 0 1-6.13 2.279.978.978 0 0 0-1.03.888l-.028.32a1.038 1.038 0 0 0 .991 1.13 10.306 10.306 0 0 0 7.832-2.996c3.597-3.567 4.013-9.061 1.19-12.89m-7.001 7.536a2.18 2.18 0 0 1-3.06 0 2.135 2.135 0 0 1 0-3.033 2.179 2.179 0 0 1 3.06 0 2.135 2.135 0 0 1 0 3.033"
      />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#data_svg__a)" xlinkHref="#data_svg__b" />
      <use fill="#E9570F" fillRule="evenodd" xlinkHref="#data_svg__b" />
      <use
        fill="url(#data_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#data_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#data_svg__d)" xlinkHref="#data_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#data_svg__e" />
    </g>
  </svg>
);

export default SvgData;
