import * as React from "react";

const SvgTern = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tern_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="tern_svg__a"
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
      <circle id="tern_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#tern_svg__a)" xlinkHref="#tern_svg__b" />
        <use fill="#F4C257" xlinkHref="#tern_svg__b" />
        <use
          fill="url(#tern_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#tern_svg__b"
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
        d="M9.086 19.853 8.03 19.24V9.986l1.702-.989 1.056.613-1.702.99v3.217l4.304 2.5v1.191l-4.304-2.5v4.845zm14.869-1.84v1.227l-7.962 4.626-1.703-.989v-1.226l1.702.989 2.768-1.609v-5.002l1.024-.595v5.002l4.17-2.423zm2.03-3.4v-.21l-4.11 2.39v-1.19l4.11-2.39V8.807L15.991 3l-4.996 2.903-.18.105 4.11 2.388-1.024.595-4.11-2.388L6 8.806V20.42l4.996 2.904.18.104v-4.776l1.024.595v4.777l3.792 2.203 9.993-5.807v-5.806zm-5.177-2.204-4.138 2.406v5.002l-.677.393-.513-.297v-4.81l-4.304-2.501v-.788l.512-.298 4.138 2.405 4.304-2.5.678.393v.596zm-5.871-6.436 1.055-.613 7.962 4.627v1.977l-1.055.613V10.6L20.13 8.991l-4.304 2.501-1.024-.595 4.304-2.501-4.17-2.423z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgTern;
