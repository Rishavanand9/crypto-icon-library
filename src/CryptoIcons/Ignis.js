import * as React from "react";

const SvgIgnis = ({ title, titleId, ...props }) => (
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
        id="ignis_svg__a"
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
        id="ignis_svg__d"
        width="129.2%"
        height="117.5%"
        x="-14.6%"
        y="-6.2%"
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
      <linearGradient id="ignis_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ignis_svg__b" cx={16} cy={15} r={15} />
      <path
        id="ignis_svg__e"
        d="M14.812 5c1.518.888 2.946 1.914 4.45 2.825l-5.544 9.671c-.736-1.291-1.426-2.608-2.153-3.905C12.612 10.715 13.808 7.89 14.812 5zM10 25c3.139-5.709 6.4-11.355 9.504-17.079.83 1.457 1.661 2.913 2.496 4.37-2.406 4.232-4.83 8.454-7.217 12.695-1.595 0-3.188-.02-4.783.014zm5.082-.023c1.33-2.275 2.583-4.59 3.93-6.855.803 1.027 1.618 2.048 2.415 3.08a613.917 613.917 0 0 1-6.345 3.775z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#ignis_svg__a)" xlinkHref="#ignis_svg__b" />
      <use fill="#F9C011" xlinkHref="#ignis_svg__b" />
      <use
        fill="url(#ignis_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#ignis_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use
          fill="#000"
          filter="url(#ignis_svg__d)"
          xlinkHref="#ignis_svg__e"
        />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#ignis_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgIgnis;
