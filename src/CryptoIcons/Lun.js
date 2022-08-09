import * as React from "react";

const SvgLun = ({ title, titleId, ...props }) => (
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
        id="lun_svg__a"
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
        id="lun_svg__d"
        width="119.4%"
        height="117.5%"
        x="-9.7%"
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
      <linearGradient id="lun_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="lun_svg__b" cx={16} cy={15} r={15} />
      <path
        id="lun_svg__e"
        d="M15.813 5.048a.381.381 0 0 1 .372 0l8.225 4.618a.36.36 0 0 1 .186.314c0 .13-.07.25-.185.314l-7.155 4.034a1.656 1.656 0 0 0-.973-.54v-2.193c.775-.129 1.366-.785 1.366-1.578 0-.885-.736-1.603-1.645-1.603s-1.645.718-1.645 1.603c0 .788.585 1.442 1.354 1.576v2.198a1.654 1.654 0 0 0-.96.536L7.599 10.31a.358.358 0 0 1-.001-.628l8.216-4.631m8.62 5.817a.379.379 0 0 1 .372-.001.362.362 0 0 1 .187.314L25 20.147c0 .13-.07.249-.186.314l-7.965 4.49c-.247.14-.557-.035-.557-.314l-.007-7.693c.386-.064.736-.261.987-.555l1.99 1.115a1.56 1.56 0 0 0-.037.628c.126.877.959 1.487 1.858 1.364.9-.124 1.526-.935 1.4-1.812-.127-.876-.96-1.487-1.859-1.363a1.644 1.644 0 0 0-1.122.677l-1.95-1.093c.14-.371.13-.78-.025-1.145l6.908-3.894m-17.427.314c0-.212.178-.363.372-.363.065 0 .13.017.186.05l6.915 3.898c-.153.364-.161.77-.023 1.14l-1.949 1.093a1.645 1.645 0 0 0-1.122-.677c-.9-.124-1.731.487-1.858 1.363s.5 1.687 1.4 1.811c.899.124 1.73-.487 1.858-1.363a1.56 1.56 0 0 0-.037-.629l1.989-1.115c.249.292.595.488.977.554l-.006 7.695c0 .279-.31.453-.558.313l-7.966-4.49A.36.36 0 0 1 7 20.146l.008-8.966"
      />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#lun_svg__a)" xlinkHref="#lun_svg__b" />
      <use fill="#F55749" fillRule="evenodd" xlinkHref="#lun_svg__b" />
      <use
        fill="url(#lun_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#lun_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#lun_svg__d)" xlinkHref="#lun_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#lun_svg__e" />
    </g>
  </svg>
);

export default SvgLun;
