import * as React from "react";

const SvgSteem = ({ title, titleId, ...props }) => (
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
        id="steem_svg__a"
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
        id="steem_svg__d"
        width="119%"
        height="117.7%"
        x="-9.5%"
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
      <linearGradient id="steem_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="steem_svg__b" cx={16} cy={15} r={15} />
      <path
        id="steem_svg__e"
        d="M9.87 7.229c.216.037-.322 1.47-.022 3.107.26 1.403 3.507 6.836 3.373 8.7-.104 1.17-2.77 3.915-3.051 3.732-.307-.085.81-1.95.396-3.504-.482-1.812-3.34-6.496-3.337-8.564 0-1.513 2.448-3.569 2.64-3.471zm6.109-2.14c.274.047-.41 1.876-.028 3.959.33 1.792 4.473 8.72 4.301 11.095-.134 1.494-3.532 4.991-3.892 4.76-.39-.107 1.034-2.486.506-4.468-.613-2.308-4.258-8.282-4.255-10.919 0-1.931 3.122-4.55 3.368-4.426zm6.305 2.14c.216.037-.321 1.47-.022 3.107.26 1.403 3.507 6.836 3.374 8.7-.103 1.17-2.77 3.915-3.052 3.732-.306-.085.81-1.95.396-3.504-.481-1.812-3.34-6.496-3.337-8.564 0-1.513 2.45-3.569 2.641-3.471z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#steem_svg__a)" xlinkHref="#steem_svg__b" />
      <use fill="#4BA2F2" xlinkHref="#steem_svg__b" />
      <use
        fill="url(#steem_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#steem_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use
          fill="#000"
          filter="url(#steem_svg__d)"
          xlinkHref="#steem_svg__e"
        />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#steem_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgSteem;
