import * as React from "react";

const SvgTgch = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tgch_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="tgch_svg__a"
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
      <circle id="tgch_svg__b" cx={15} cy={15} r={15} />
    </defs>
    <g fill="none">
      <g transform="translate(1)">
        <use fill="#000" filter="url(#tgch_svg__a)" xlinkHref="#tgch_svg__b" />
        <use fill="#434247" xlinkHref="#tgch_svg__b" />
        <use
          fill="url(#tgch_svg__c)"
          style={{
            mixBlendMode: "soft-light",
          }}
          xlinkHref="#tgch_svg__b"
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
        <path d="M16 4a10.919 10.919 0 1 0 0 21.838c6.03 0 10.919-4.889 10.919-10.92C26.919 8.889 22.03 4 16 4m0 21.396c-5.791 0-10.486-4.695-10.486-10.486S10.209 4.424 16 4.424 26.486 9.119 26.486 14.91 21.791 25.396 16 25.396" />
        <path d="M17.2 15.992h2.767v4.084c0 .406-.415.622-.811.83-.388.207-1.02.162-2.083.162h-1.298c-1.993.045-2.552-.108-3.03-.316-.478-.216-.721-.522-.721-.92v-3.84H10.59v4.328c0 .234.117.505.298.748.207.28.18.36.63.586.407.207.812.37 1.543.46.568.072.469.054 1.478.072h2.399c1.803-.036 2.173.09 3.246-.45.874-.434 1.172-.938 1.235-1.263v-5.888h-4.21v1.407M13.465 7.66c-.73.045-1.334.27-1.803.45-.478.18-.577.397-.775.632a1.19 1.19 0 0 0-.289.766v4.797h1.443V9.969c0-.37.225-.667.667-.884.45-.225 1.109-.333 1.722-.333h2.813c1.073 0 1.65-.018 1.984.18.342.216.748.406.748.811v1.146h1.443V9.347c-.027-.199-.244-.767-1.262-1.245-.92-.432-1.218-.46-2.66-.46" />
      </g>
    </g>
  </svg>
);

export default SvgTgch;
