import * as React from "react";

const SvgChsb = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="chsb_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="chsb_svg__a"
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
      <circle id="chsb_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#chsb_svg__a)" xlinkHref="#chsb_svg__b" />
      <use fill="#01C38D" xlinkHref="#chsb_svg__b" />
      <use
        fill="url(#chsb_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#chsb_svg__b"
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
        d="m18.503 4.5-1.722.978v8.304l.94.534V7.992l3.23 1.833.003-.001.627.355.524-.295v-.5L17.722 6.9v-.864l.781-.444 4.54 2.577v2.294l-2.18 1.23-.073-.037a.921.921 0 0 0-.408-.099.948.948 0 0 0-.94.953c0 .525.421.953.94.953a.94.94 0 0 0 .93-.856l.008-.082 2.2-1.241 2.04 1.158v5.123l-2.043 1.158-8.298-4.712V5.478L13.496 4.5 8.017 7.61v2.84L5.5 11.877v6.24l2.517 1.429v2.843l5.48 3.111 1.722-.978V16.2l-.94-.534v6.342l-3.86-2.187-.524.295v.5l4.383 2.484v.864l-.782.444-4.539-2.577v-2.294l2.18-1.229.073.036c.133.065.27.098.408.098.519 0 .94-.427.94-.952a.948.948 0 0 0-.94-.953.94.94 0 0 0-.93.856l-.008.082-2.2 1.241-2.04-1.158v-5.123l2.043-1.158 8.298 4.712v8.533l1.722.978 5.48-3.11v-2.84l2.517-1.427v-6.24l-2.517-1.428V7.611L18.503 4.5zM8.957 8.17l4.54-2.578.781.444V6.9l-5.32 3.016V8.17zm.488 2.562 4.833-2.74v5.484l-4.833-2.744zm8.277 5.791 4.833 2.745-4.833 2.74v-5.485zm0 7.441V23.1l5.32-3.016v1.747l-4.539 2.577-.781-.444z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgChsb;
