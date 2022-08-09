import * as React from "react";

const SvgCtxc = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ctxc_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="ctxc_svg__a"
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
      <circle id="ctxc_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#ctxc_svg__a)" xlinkHref="#ctxc_svg__b" />
        <use fill="#000" xlinkHref="#ctxc_svg__b" />
        <use
          fill="url(#ctxc_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#ctxc_svg__b"
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
      <g fill="#FFF">
        <path d="M15.907 5.362c-.134-.3.346-.513.48-.227 3.12 5.374 6.24 10.751 9.36 16.134-.167 0-.327-.054-.487-.08l-8.327-1.66c-.273-.014-.333-.454-.066-.52l3.266-.9a.272.272 0 0 0 .18-.38L15.907 5.355v.007z" />
        <path d="M15.427 5.389c.03.044.057.09.08.14.986 2.8 2 5.6 2.98 8.4.086.233-.24.426-.4.253-.84-.88-1.64-1.787-2.467-2.667-.133-.12-.327-.04-.413.087L6.62 21.689c-.1.106-.187.266-.353.286-.12 0-.2-.093-.267-.186v-.154c3.147-5.413 6.289-10.829 9.427-16.246z" />
        <path d="M12.8 14.995c.16-.046.373.067.32.26-.333 1.16-.687 2.314-1.033 3.467-.054.147.08.28.22.287 4.493.9 8.986 1.833 13.48 2.733.086.013.146.08.213.133v.187l-.127.133H6.8c2-2.4 3.993-4.813 6-7.2z" />
      </g>
    </g>
  </svg>
);

export default SvgCtxc;
