import * as React from "react";

const SvgOne = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="one_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="one_svg__a"
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
      <circle id="one_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#one_svg__a)" xlinkHref="#one_svg__b" />
      <use fill="#00AEE9" xlinkHref="#one_svg__b" />
      <use
        fill="url(#one_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#one_svg__b"
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
        d="M21.143 6c-2.124 0-3.857 1.738-3.913 3.869v4.317c-.392 0-.783.056-1.23.056-.447 0-.839 0-1.23.056v-4.43c0-2.13-1.789-3.868-3.969-3.812C8.733 6.056 7.056 7.794 7 9.87v10.317c.056 2.13 1.789 3.869 3.969 3.813 2.124-.056 3.801-1.738 3.801-3.813v-4.318c.391 0 .783-.056 1.23-.056.447 0 .838 0 1.23-.056v4.374c.056 2.13 1.789 3.869 3.969 3.813C23.323 23.887 25 22.204 25 20.13V9.869C25 7.739 23.267 6 21.143 6zm-10.23 1.57a2.27 2.27 0 0 1 2.292 2.299v4.542a13.845 13.845 0 0 0-3.298.953c-.447.224-.895.448-1.286.785v-6.28c0-1.234 1.006-2.299 2.292-2.299zm2.292 12.616a2.27 2.27 0 0 1-2.292 2.299 2.27 2.27 0 0 1-2.292-2.3v-1.008c0-.897.727-1.795 1.957-2.3.838-.392 1.733-.616 2.683-.784l-.056 4.093zm7.938 2.299a2.27 2.27 0 0 1-2.292-2.3v-4.54a13.844 13.844 0 0 0 3.298-.954c.447-.224.894-.449 1.286-.785v6.28a2.306 2.306 0 0 1-2.292 2.299zm.335-9.252c-.838.393-1.733.617-2.683.785v-4.15a2.27 2.27 0 0 1 2.292-2.298 2.27 2.27 0 0 1 2.292 2.299v1.01c.056.952-.671 1.793-1.9 2.354z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgOne;
