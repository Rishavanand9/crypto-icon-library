import * as React from "react";

const SvgBtdx = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="btdx_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="btdx_svg__a"
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
      <circle id="btdx_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#btdx_svg__a)" xlinkHref="#btdx_svg__b" />
        <use fill="#0AF" fillRule="evenodd" xlinkHref="#btdx_svg__b" />
        <use
          fill="url(#btdx_svg__c)"
          fillRule="evenodd"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#btdx_svg__b"
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
        <path d="M15.964 4.791c-5.619 0-10.173 4.554-10.173 10.173 0 5.62 4.554 10.176 10.173 10.176 5.62 0 10.176-4.556 10.176-10.176 0-5.619-4.556-10.173-10.176-10.173zm.033 1.611a5.055 5.055 0 0 1 4.747 6.8 3.303 3.303 0 0 0-2.517.584 3.21 3.21 0 0 0 .992-2.325 3.228 3.228 0 0 0-3.224-3.227 3.226 3.226 0 0 0-3.207 2.897 5.53 5.53 0 0 0-1.834-.018 5.056 5.056 0 0 1 5.043-4.71zm1.86 9.501-1.789-1.07a.37.37 0 0 0-.385.002l-1.57.97a.37.37 0 0 0-.173.365c.018.134.025.271.018.413a2.145 2.145 0 0 1-4.288-.114 2.156 2.156 0 0 1 2.111-2.144c.65-.01 1.235.27 1.636.718.115.13.305.157.454.074l1.513-.848a.374.374 0 0 0 .19-.324v-.092a.373.373 0 0 0-.256-.352 2.147 2.147 0 0 1 .779-4.181c1.075.05 1.96.91 2.037 1.986a2.143 2.143 0 0 1-1.599 2.233.374.374 0 0 0-.284.36v.015c0 .13.069.249.178.317l1.588.977a.369.369 0 0 0 .482-.081 2.146 2.146 0 0 1 1.725-.804 2.147 2.147 0 1 1-.165 4.293 2.152 2.152 0 0 1-2.024-2.358.37.37 0 0 0-.178-.355zm-6.043 5.569a5.004 5.004 0 0 1-5.006-5.006 5.004 5.004 0 0 1 5.962-4.914c.026.878.401 1.667.992 2.235a3.288 3.288 0 0 0-1.946-.634 3.314 3.314 0 0 0 0 6.627 3.308 3.308 0 0 0 3.075-2.086c.158.688.45 1.325.843 1.885a4.994 4.994 0 0 1-3.92 1.893zm8.36 0a5.007 5.007 0 0 1-4.996-4.666 5.432 5.432 0 0 0 1.7-.01 3.313 3.313 0 1 0 4.211-3.514 5.351 5.351 0 0 0 .312-1.669 5.006 5.006 0 0 1-1.228 9.859z" />
        <path d="M16 3C9.373 3 4 8.373 4 15s5.373 12 12 12 12-5.373 12-12S22.627 3 16 3zm-.036 23.097c-6.147 0-11.13-4.983-11.13-11.13 0-6.147 4.983-11.13 11.13-11.13 6.148 0 11.13 4.983 11.13 11.13 0 6.147-4.982 11.13-11.13 11.13z" />
      </g>
    </g>
  </svg>
);

export default SvgBtdx;
