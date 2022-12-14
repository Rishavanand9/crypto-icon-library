import * as React from "react";

const SvgLoom = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="loom_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="loom_svg__a"
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
      <circle id="loom_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#loom_svg__a)" xlinkHref="#loom_svg__b" />
        <use fill="#48BEFF" xlinkHref="#loom_svg__b" />
        <use
          fill="url(#loom_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#loom_svg__b"
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
        <path d="M21.678 24.469 6.658 13.932a3.893 3.893 0 0 1 0-6.373L10.298 5l15.02 10.536a3.893 3.893 0 0 1 0 6.374l-3.64 2.559zM10.294 6.708 7.46 8.692a2.501 2.501 0 0 0 0 4.1l14.222 9.97 2.836-1.984a2.501 2.501 0 0 0 0-4.1l-14.223-9.97z" />
        <path d="M10.283 22.762 7.45 20.776a2.501 2.501 0 0 1 0-4.1l7.333-5.118-1.21-.851-6.915 4.83a3.893 3.893 0 0 0 0 6.373l3.627 2.547 4.49-3.143-1.205-.849-3.287 2.297zm15.04-15.198-3.63-2.546L17.2 8.161l1.205.849 3.281-2.297 2.833 1.986a2.501 2.501 0 0 1 0 4.1l-7.334 5.118 1.205.849 6.925-4.838a3.893 3.893 0 0 0 0-6.373l.008.009z" />
        <path d="m7.517 14.926 5.71-3.998.797 1.137-5.712 3.998zm16.271-1.611-2.782 1.948.795 1.138 2.881-2.02c-.306-.35-.602-.708-.9-1.067l.006.001z" />
      </g>
    </g>
  </svg>
);

export default SvgLoom;
