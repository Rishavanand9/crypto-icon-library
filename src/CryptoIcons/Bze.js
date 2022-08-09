import * as React from "react";

const SvgBze = ({ title, titleId, ...props }) => (
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
        id="bze_svg__a"
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
      <filter
        x="-10.3%"
        y="-6.6%"
        width="120.6%"
        height="118.4%"
        filterUnits="objectBoundingBox"
        id="bze_svg__d"
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
        />
      </filter>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bze_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="bze_svg__b" cx={16} cy={15} r={15} />
      <path
        d="M13.952 23.461H8.264l1.116-6.315 5.905-5.319h-5.022l4.061-2.489h6.603l-8.54 8.43-.574 3.22s1.907.14 3.41 0c1.504-.155 3.193-.777 3.193-.777l-4.464 3.25zm8.944-13.516-2.542 2.489s2.139 2.38.17 5.646c-1.937 3.204-8.37 2.613-8.37 2.613l.496-2.815 9.052-8.835H14.2l.76-4.293h-3.627l-1.302 7.341h4.619l-5.487 4.947L8 23.695s4.387.124 8.107 0c3.735-.125 8.09-3.329 8.726-6.953.868-4.9-1.937-6.797-1.937-6.797z"
        id="bze_svg__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bze_svg__a)" xlinkHref="#bze_svg__b" />
      <use fill="#00AEEF" xlinkHref="#bze_svg__b" />
      <use
        fill="url(#bze_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#bze_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#bze_svg__d)" xlinkHref="#bze_svg__e" />
        <use fill="#FFF" xlinkHref="#bze_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgBze;
