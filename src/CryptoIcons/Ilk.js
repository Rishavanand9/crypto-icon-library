import * as React from "react";

const SvgIlk = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ilk_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="ilk_svg__a"
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
      <circle id="ilk_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#ilk_svg__a)" xlinkHref="#ilk_svg__b" />
        <use fill="#98C23A" xlinkHref="#ilk_svg__b" />
        <use
          fill="url(#ilk_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#ilk_svg__b"
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
        d="M15.807 4C9.84 4 5 8.839 5 14.807c0 5.97 4.839 10.808 10.807 10.808 5.97 0 10.808-4.839 10.808-10.807C26.605 8.842 21.772 4.01 15.808 4zm0 20.167a9.35 9.35 0 1 1 9.35-9.36 9.36 9.36 0 0 1-9.35 9.35v.01zm-4.775-10.322H9.29v-3.813c0-.715.34-1.073 1.018-1.073h3.776a.917.917 0 0 1 1.054 1.073v3.813h-1.723v-3.392h-2.383v3.392zm2.383 1.118h1.742v4.584a.917.917 0 0 1-1.055 1.063h-3.795A.917.917 0 0 1 9.3 19.528v-4.583h4.125l-.009.018zm7.15.065h1.76v4.583a.917.917 0 0 1-1.063 1.063h-3.823a.917.917 0 0 1-1.045-1.063v-9.497a.917.917 0 0 1 1.073-1.072h3.758a.917.917 0 0 1 1.1 1.072v2.75h-1.833v-2.328H18.2v4.491h2.365z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export default SvgIlk;
