import * as React from "react";

const SvgMcap = ({ title, titleId, ...props }) => (
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
        id="mcap_svg__a"
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
        id="mcap_svg__d"
        width="119.4%"
        height="121.9%"
        x="-9.7%"
        y="-7.8%"
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
      <linearGradient id="mcap_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="mcap_svg__b" cx={16} cy={15} r={15} />
      <path
        id="mcap_svg__e"
        d="M15.532 6.064c.557-.163 1.148.003 1.629.294a470.684 470.684 0 0 0 6.464 3.635c.833.441 1.387 1.346 1.375 2.28-.002 3.094-.01 6.19-.005 9.284.034.215-.112.46-.356.438-.961.006-1.922.002-2.883.001-.21.031-.412-.145-.39-.358-.092-2.635-.057-5.273-.03-7.91 0-.33-.064-.678-.277-.945-.216-.283-.557-.428-.862-.596-.5-.262-.971-.579-1.489-.808-.196-.078-.451-.162-.636-.013-.205.193-.203.498-.224.758a73.454 73.454 0 0 0-.011 3.88c-.001.306.009.662-.225.9-.239.234-.6.238-.914.243-.568-.006-1.136.015-1.702-.013-.24-.026-.528-.04-.684-.25-.14-.207-.134-.468-.146-.706-.003-1.359.014-2.719 0-4.077-.014-.24-.01-.51-.18-.7-.163-.168-.423-.113-.619-.042-.425.166-.806.42-1.209.63-.403.232-.836.43-1.182.746-.225.205-.285.517-.292.805-.005 2.67.003 5.338-.02 8.008.023.202-.097.448-.333.444-.99.012-1.98.005-2.97.003-.198.019-.38-.155-.36-.352.04-3.245.015-6.491.018-9.737a1.848 1.848 0 0 1 .957-1.67c2.255-1.264 4.514-2.52 6.76-3.799.254-.144.51-.295.796-.373z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#mcap_svg__a)" xlinkHref="#mcap_svg__b" />
      <use fill="#033B4A" xlinkHref="#mcap_svg__b" />
      <use
        fill="url(#mcap_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#mcap_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#mcap_svg__d)" xlinkHref="#mcap_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#mcap_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgMcap;
