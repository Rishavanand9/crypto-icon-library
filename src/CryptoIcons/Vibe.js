import * as React from "react";

const SvgVibe = ({ title, titleId, ...props }) => (
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
        id="vibe_svg__a"
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
        id="vibe_svg__d"
        width="117.5%"
        height="121.9%"
        x="-8.8%"
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
      <linearGradient id="vibe_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="vibe_svg__b" cx={16} cy={15} r={15} />
      <path
        id="vibe_svg__e"
        d="M22.63 15.918c.73.196 1.45.423 2.098.822.288.177.557.385.8.619.36.4.336.822.008 1.245-.288.368-.68.603-1.097.799-1.056.509-2.176.799-3.32.971-.929.14-1.873.22-2.81.337a.342.342 0 0 0-.216.149c-.656.978-1.304 1.957-1.96 2.936a1.79 1.79 0 0 0-.144.204 272.253 272.253 0 0 1-2.057-3.133.33.33 0 0 0-.28-.164c-1.873-.133-3.721-.376-5.49-1.01-.56-.196-1.096-.439-1.56-.807-.025-.024-.057-.04-.08-.063-.68-.571-.697-1.182-.04-1.77.52-.47 1.16-.736 1.824-.94.664-.203 1.336-.352 2.009-.524.032-.008.064-.008.12-.024-1.449-2.216-2.881-4.409-4.346-6.633.088-.008.152-.016.208-.016.905-.008 1.809 0 2.713-.008a.327.327 0 0 1 .312.18c2.19 3.34 4.378 6.681 6.563 10.025a.98.98 0 0 0 .112.157c.504-.76.992-1.488 1.472-2.217 1.76-2.66 3.521-5.317 5.282-7.972.064-.094.112-.165.256-.165.952.008 1.905.008 2.857.008.045 0 .09.002.136.008a3255.396 3255.396 0 0 1-4.466 6.72c.377.093.737.172 1.097.266zm-13.732 1.88c.186.207.405.385.648.524 1 .533 2.105.728 3.25.9-.016-.054-.016-.078-.024-.093-.649-.98-1.289-1.966-1.937-2.945a.231.231 0 0 0-.2-.063c-.38.125-.752.274-1.113.447a2.227 2.227 0 0 0-.616.501.517.517 0 0 0-.008.728zm12.604.845a2.672 2.672 0 0 0 1.16-.658c.321-.32.321-.681 0-1.01a1.226 1.226 0 0 0-.271-.22c-.344-.172-.704-.336-1.057-.508-.12-.063-.192-.016-.264.094-.376.58-.76 1.15-1.144 1.723-.24.36-.48.728-.728 1.104a.769.769 0 0 0 .192 0c.704-.172 1.416-.329 2.112-.525zM21.51 8l-5.481 8.732L10.475 8H21.51z"
      />
    </defs>
    <g fill="none">
      <use fill="#000" filter="url(#vibe_svg__a)" xlinkHref="#vibe_svg__b" />
      <use fill="#338BE5" fillRule="evenodd" xlinkHref="#vibe_svg__b" />
      <use
        fill="url(#vibe_svg__c)"
        fillRule="evenodd"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#vibe_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#vibe_svg__d)" xlinkHref="#vibe_svg__e" />
      <use fill="#FFF" fillRule="evenodd" xlinkHref="#vibe_svg__e" />
    </g>
  </svg>
);

export default SvgVibe;
