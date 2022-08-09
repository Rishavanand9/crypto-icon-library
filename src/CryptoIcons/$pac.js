import * as React from "react";

const SvgPac = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="$pac_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="$pac_svg__a"
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
      <circle id="$pac_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#$pac_svg__a)" xlinkHref="#$pac_svg__b" />
        <use fill="#F5EB16" xlinkHref="#$pac_svg__b" />
        <use
          fill="url(#$pac_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#$pac_svg__b"
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
        d="M15.94 4C9.898 4.001 5 8.901 5 14.945c.001 6.043 4.901 10.941 10.945 10.94 6.043-.001 10.941-4.901 10.94-10.944A10.943 10.943 0 0 0 15.941 4zm-4.443 4.794a.113.113 0 0 1 .115-.11h4.558a6.398 6.398 0 0 1 2.775.576c.166.08.328.17.484.268l-2.967 1.698h-1.548a.113.113 0 0 0-.111.115v.854l-3.306 1.913V8.794zM10.27 18.4l-1.982-2.002 6.527-3.765v2.44a.113.113 0 0 0 .115.11h.931L10.276 18.4h-.006zm9.773-1.861c-.956.8-2.27 1.2-3.94 1.2h-1.19a.113.113 0 0 0-.112.112v2.464l-1.659.955-1.55.896-.097.055v-4.085l5.135-2.955c.44-.013.86-.179 1.19-.47a1.59 1.59 0 0 0 .29-.396l3.281-1.899a5 5 0 0 1 .081.912c.004 1.341-.472 2.412-1.429 3.211zm-1.76-2.767a2.88 2.88 0 0 0 .034-.426 2.216 2.216 0 0 0-.515-1.534 1.67 1.67 0 0 0-.748-.478l4.559-2.632 2 2.002-5.33 3.068z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgPac;
