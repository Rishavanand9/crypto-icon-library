import * as React from "react";

const SvgNebl = ({ title, titleId, ...props }) => (
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
        id="nebl_svg__a"
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
        id="nebl_svg__d"
        width="118.4%"
        height="117.5%"
        x="-9.2%"
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
      <linearGradient id="nebl_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="nebl_svg__b" cx={16} cy={15} r={15} />
      <path
        id="nebl_svg__e"
        d="M20.36 12.66v4.784l-4.307 2.367v-4.782l4.306-2.367zm5.14-1.226v7.131c0 .507-.14 1.003-.403 1.434-.26.43-.637.795-1.104 1.052l-3.212 1.765V18.11l.406-.223v-5.679l3.934-2.163c.244.42.379.895.379 1.39zM8.007 21.051a2.944 2.944 0 0 1-1.075-1.007 2.763 2.763 0 0 1-.432-1.478V14l4.424 3.455v.192l.007.198.344.203 4.416 2.428.364.2V25a3.13 3.13 0 0 1-1.562-.382L8.007 21.05zM7.823 9.06 12.5 6.5l3.18 3.08-4.756 2.623v.4L6.51 15.027l-.01-3.594c0-.507.14-1.005.405-1.436.232-.38.546-.7.918-.938zm16.17-.111a2.94 2.94 0 0 1 1.128 1.095l-3.934 2.163v-.036l-.406-.223-4.334-2.382 4.334-2.383 3.212 1.766zM6.51 15.029l4.414-2.427v4.853L6.51 15.028zm9.545-5.649V5a3.124 3.124 0 0 1 1.452.383l3.274 1.8-4.334 2.382-.392-.185zm-.364.2-4.408-2.422 3.402-1.871A3.14 3.14 0 0 1 16.055 5v4.38l-.364.2zm.392 11.111.364-.2 4.282 2.354-3.222 1.772a3.126 3.126 0 0 1-1.452.382v-4.323l.028.015zm4.698-2.582v4.707l-.052.029-4.282-2.354 4.334-2.382z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#nebl_svg__a)" xlinkHref="#nebl_svg__b" />
      <use fill="#50479E" xlinkHref="#nebl_svg__b" />
      <use
        fill="url(#nebl_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#nebl_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use fill="#000" filter="url(#nebl_svg__d)" xlinkHref="#nebl_svg__e" />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#nebl_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgNebl;
