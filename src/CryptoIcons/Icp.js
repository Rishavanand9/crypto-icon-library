import * as React from "react";

const SvgIcp = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="icp_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="icp_svg__a"
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
      <circle id="icp_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#icp_svg__a)" xlinkHref="#icp_svg__b" />
      <use fill="#292A2E" xlinkHref="#icp_svg__b" />
      <use
        fill="url(#icp_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#icp_svg__b"
      />
      <circle
        strokeOpacity={0.097}
        stroke="#000"
        strokeLinejoin="square"
        cx={16}
        cy={15}
        r={14.5}
      />
      <g fill="#FFF" fillRule="nonzero">
        <path d="M22.17 9.5c-1.34 0-2.803.667-4.348 1.982a19.032 19.032 0 0 0-1.843 1.824l.002.002.002-.002s.752.794 1.578 1.643a17.474 17.474 0 0 1 1.827-1.842c1.374-1.169 2.272-1.414 2.783-1.414 1.927 0 3.495 1.484 3.495 3.307 0 1.814-1.569 3.296-3.498 3.308-.088 0-.2-.01-.34-.04.562.235 1.166.405 1.742.405 3.533 0 4.223-2.237 4.27-2.396.105-.41.16-.837.16-1.276 0-3.034-2.615-5.501-5.83-5.501zm-12.34 11c1.34 0 2.803-.667 4.348-1.982a19.032 19.032 0 0 0 1.843-1.824l-.002-.002a.025.025 0 0 1-.002.002s-.752-.794-1.578-1.643a17.474 17.474 0 0 1-1.827 1.842c-1.374 1.169-2.272 1.414-2.783 1.414-1.927 0-3.495-1.484-3.495-3.307 0-1.814 1.569-3.296 3.498-3.308.088 0 .2.01.34.04-.562-.235-1.166-.405-1.742-.405-3.533 0-4.223 2.237-4.27 2.396-.105.41-.16.837-.16 1.276C4 18.033 6.615 20.5 9.83 20.5z" />
        <path d="M23.563 18.617c-1.809-.043-3.689-1.427-4.072-1.771-.991-.89-3.278-3.297-3.457-3.486-1.676-1.822-3.948-3.86-6.205-3.86h-.005c-2.744.013-5.05 1.817-5.663 4.224.047-.159.948-2.439 4.267-2.36 1.809.044 3.698 1.447 4.081 1.79.991.89 3.279 3.298 3.457 3.487 1.676 1.821 3.948 3.859 6.205 3.859h.005c2.744-.013 5.05-1.817 5.663-4.224-.046.159-.957 2.42-4.276 2.341z" />
      </g>
    </g>
  </svg>
);

export default SvgIcp;
