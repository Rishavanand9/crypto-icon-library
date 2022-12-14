import * as React from "react";

const SvgBq = ({ title, titleId, ...props }) => (
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
        id="bq_svg__a"
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
        id="bq_svg__d"
        width="121.9%"
        height="119.4%"
        x="-10.9%"
        y="-6.9%"
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
      <linearGradient id="bq_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="bq_svg__b" cx={16} cy={15} r={15} />
      <path
        id="bq_svg__e"
        d="M9.962 15.954a3.849 3.849 0 0 0 3.869 3.848c2.122-.013 3.846-1.716 3.847-3.8a3.834 3.834 0 0 0-3.858-3.869c-2.132.003-3.858 1.712-3.858 3.821m.004 4.14v1.273H8V7c.559.01 1.031.21 1.41.605.363.38.544.835.542 1.363-.005.947-.002 1.894-.002 2.886 1.373-1.147 2.902-1.712 4.683-1.44 1.765.27 3.12 1.158 4.044 2.677 1.395 2.295.943 5.226-1.078 7.05-1.971 1.78-5.246 2.056-7.633-.047zm6.359 1.247c.078-.047.119-.075.162-.097a5.713 5.713 0 0 0 1.65-1.222.528.528 0 0 1 .38-.179c1.67-.096 3.175-1.44 3.458-3.084.372-2.16-.94-4.066-3.11-4.48a1.282 1.282 0 0 1-.77-.42c-.4-.442-.886-.787-1.403-1.084-.044-.025-.086-.052-.158-.096.984-.27 1.943-.334 2.915-.113.967.219 1.8.693 2.58 1.34v-1.275H24V25a1.959 1.959 0 0 1-1.401-.602 1.902 1.902 0 0 1-.552-1.376v-2.87c-1.698 1.423-3.576 1.849-5.722 1.189z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#bq_svg__a)" xlinkHref="#bq_svg__b" />
      <use fill="#1D1D1D" xlinkHref="#bq_svg__b" />
      <use
        fill="url(#bq_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#bq_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#bq_svg__d)" xlinkHref="#bq_svg__e" />
      <use fill="#FFF" xlinkHref="#bq_svg__e" />
    </g>
  </svg>
);

export default SvgBq;
