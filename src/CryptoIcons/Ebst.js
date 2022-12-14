import * as React from "react";

const SvgEbst = ({ title, titleId, ...props }) => (
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
        id="ebst_svg__a"
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
        id="ebst_svg__d"
        width="115.9%"
        height="121.9%"
        x="-8%"
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
      <linearGradient id="ebst_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="ebst_svg__b" cx={16} cy={15} r={15} />
      <path
        id="ebst_svg__e"
        d="M9.928 15.574a8.07 8.07 0 0 1-.005-1.08h-2.8L4 11.996h6.494A8.049 8.049 0 0 1 17.954 7C22.398 7 26 10.582 26 15s-3.602 8-8.046 8a8.05 8.05 0 0 1-7.432-4.928H4l3.123-2.498h2.805zm12.609-.425c0-.83-.112-1.554-.337-2.172-.225-.62-.537-1.136-.935-1.55a3.87 3.87 0 0 0-1.418-.938 4.919 4.919 0 0 0-1.783-.316c-.694 0-1.34.118-1.938.354a4.618 4.618 0 0 0-1.552.995c-.437.428-.78.944-1.031 1.55-.251.606-.376 1.28-.376 2.02 0 .752.125 1.425.376 2.018.25.593.597 1.094 1.04 1.502.444.409.968.724 1.572.948a5.688 5.688 0 0 0 1.986.335c1.735 0 3.06-.613 3.972-1.838l-1.543-1.224c-.257.37-.584.66-.983.87-.398.21-.887.316-1.465.316-.334 0-.656-.057-.964-.172a2.932 2.932 0 0 1-.83-.469 2.262 2.262 0 0 1-.848-1.617h7.038c.013-.102.019-.204.019-.306v-.306zm-2.314-1.034H15.48c.052-.65.318-1.183.8-1.598.483-.414 1.07-.622 1.765-.622.372 0 .697.06.973.182.277.121.505.284.685.488.18.204.311.44.395.708a2.8 2.8 0 0 1 .125.842z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#ebst_svg__a)" xlinkHref="#ebst_svg__b" />
        <use fill="#1693D4" fillRule="evenodd" xlinkHref="#ebst_svg__b" />
        <use
          fill="url(#ebst_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#ebst_svg__b"
        />
        <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      </g>
      <use fill="#000" filter="url(#ebst_svg__d)" xlinkHref="#ebst_svg__e" />
      <use fill="#FFF" xlinkHref="#ebst_svg__e" />
    </g>
  </svg>
);

export default SvgEbst;
