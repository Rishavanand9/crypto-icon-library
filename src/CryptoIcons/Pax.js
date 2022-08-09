import * as React from "react";

const SvgPax = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pax_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="pax_svg__a"
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
      <circle id="pax_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#pax_svg__a)" xlinkHref="#pax_svg__b" />
      <use fill="#398260" xlinkHref="#pax_svg__b" />
      <use
        fill="url(#pax_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#pax_svg__b"
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
        d="M18.603 5.912c1.738 1.227 3.548 1.364 5.863 1.79 2.106.391 2.553 2.542 1.591 5.28a9.384 9.384 0 0 0-.18-.292l.18.292-.017.045.017-.045c1.467 2.492 1.456 5.191-1.719 6.572-5.653 2.46-5.99 7.305-11.333 4.697A6.71 6.71 0 0 1 11 22.74l-.208-.237-.193-.033c-3.586-.635-5.94-2.579-3.762-7.539 1.927-4.383.206-8.696 6.116-8.504h.002c1.628-1.527 3.505-2.024 5.647-.515zm-5.507 4.432c-2.478 1.779-3.294 5.092-1.644 7.665a5.493 5.493 0 0 0 7.62 1.655c2.558-1.66 2.908-4.88 1.644-7.667-1.295-2.857-4.85-3.642-7.62-1.653z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgPax;
