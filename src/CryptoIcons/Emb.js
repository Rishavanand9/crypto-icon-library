import * as React from "react";

const SvgEmb = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="emb_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="emb_svg__a"
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
      <circle id="emb_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#emb_svg__a)" xlinkHref="#emb_svg__b" />
      <use fill="#F6C054" xlinkHref="#emb_svg__b" />
      <use
        fill="url(#emb_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#emb_svg__b"
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
        d="m26.822 14.568-10.39-10.39a.607.607 0 0 0-.86 0L5.18 14.569a.607.607 0 0 0 0 .86l10.39 10.393a.607.607 0 0 0 .859 0l10.39-10.389a.608.608 0 0 0 .004-.864zm-2.284.52-7.616 7.616V15h-1.848v7.704l-7.616-7.616a.12.12 0 0 1 0-.172l8.454-8.453a.12.12 0 0 1 .172 0l8.454 8.453a.12.12 0 0 1 0 .172c0-.004 0-.004 0 0z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgEmb;
