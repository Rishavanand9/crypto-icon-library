import * as React from "react";

const SvgOmg = ({ title, titleId, ...props }) => (
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
        id="omg_svg__a"
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
      <filter id="omg_svg__d">
        <feColorMatrix
          in="SourceGraphic"
          values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"
        />
      </filter>
      <filter
        x="-15.6%"
        y="-46.9%"
        width="131.2%"
        height="193.8%"
        filterUnits="objectBoundingBox"
        id="omg_svg__e"
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
          result="shadowMatrixOuter1"
        />
        <feMerge>
          <feMergeNode in="shadowMatrixOuter1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="omg_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <circle id="omg_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#omg_svg__a)" xlinkHref="#omg_svg__b" />
      <use fill="#101010" xlinkHref="#omg_svg__b" />
      <use
        fill="url(#omg_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#omg_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g filter="url(#omg_svg__d)">
        <g
          filter="url(#omg_svg__e)"
          transform="translate(4 11)"
          fill="#FFF"
          fillRule="nonzero"
        >
          <path d="M12.057 5.776 10.027.178H8.3v7.323h1.245V2.342l1.884 5.159h1.224l1.882-5.159v5.159h1.276V.178h-1.725zM3.671 0C1.423 0 0 1.695 0 3.845c0 2.149 1.423 3.84 3.671 3.84 2.248 0 3.674-1.679 3.674-3.84C7.345 1.683 5.922 0 3.67 0zm0 6.383c-1.433 0-2.29-1.078-2.29-2.533 0-1.456.857-2.541 2.29-2.541s2.293 1.088 2.293 2.536c0 1.447-.858 2.538-2.293 2.538zm16.467-1.547h2.102c-.124 1.068-.9 1.57-1.894 1.57-1.423 0-2.216-1.047-2.216-2.554 0-1.413.699-2.573 2.186-2.573.972 0 1.758.496 1.842 1.329h1.39C23.36.934 22.083.002 20.358.002c-2.449 0-3.59 1.884-3.59 3.892 0 2.157 1.32 3.788 3.37 3.788 1.202 0 1.874-.556 2.144-1.026v.837h1.266V3.577h-3.41v1.26z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgOmg;
