import * as React from "react";

const SvgPart = ({ title, titleId, ...props }) => (
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <defs>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="part_svg__c">
        <stop stopColor="#FFF" stopOpacity={0.5} offset="0%" />
        <stop stopOpacity={0.5} offset="100%" />
      </linearGradient>
      <filter
        x="-5.8%"
        y="-4.2%"
        width="111.7%"
        height="111.7%"
        filterUnits="objectBoundingBox"
        id="part_svg__a"
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
      <circle id="part_svg__b" cx={16} cy={15} r={15} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#part_svg__a)" xlinkHref="#part_svg__b" />
      <use fill="#65CB8D" xlinkHref="#part_svg__b" />
      <use
        fill="url(#part_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#part_svg__b"
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
        d="M18.454 17.487h-4.945v-4.974h4.945v4.974zm7.46-8.324a5.028 5.028 0 0 0-1.797-3.052 4.951 4.951 0 0 0-3.13-1.11c-3.357 0-6.717-.003-10.074.002-1.752.02-3.408 1.035-4.26 2.561-.474.82-.652 1.74-.653 2.678.002 3.062-.001 6.126.001 9.187-.006.712.025 1.397.247 2.08.495 1.582 1.83 2.864 3.423 3.31-.482-.385-.695-.92-.852-1.499-.324-1.27-.349-2.59-.297-3.89-.005-3.063.002-6.126-.004-9.188.005-.527.044-1.022.313-1.488.415-.744 1.224-1.242 2.082-1.23 3.19-.003 6.385 0 9.575-.002.482.001.92-.035 1.38.14a2.38 2.38 0 0 1 1.541 1.73c.095.463.07.977.071 1.45v8.987c0 .441-.049.873-.238 1.276-.391.819-1.237 1.387-2.153 1.37-2.526.004-5.054 0-7.58.002-.004-.824-.003-1.649 0-2.473 2.061 0 4.122-.003 6.183.002.444.024.955-.201 1.16-.61.115-.21.134-.432.139-.665-.002-2.497-.001-4.993-.001-7.491a1.156 1.156 0 0 0-.612-1.094c-.341-.2-.707-.148-1.086-.155-2.36.006-4.723-.003-7.082.005-.675-.017-1.237.571-1.216 1.244-.01 3.588 0 7.196-.005 10.786.019.713-.004 1.389.409 2.006.313.51.842.769 1.412.882.673.109 1.317.083 1.994.084 2.06 0 4.121-.001 6.183.002 1.025.009 2.024-.324 2.865-.904.903-.666 1.603-1.585 1.925-2.667.223-.732.219-1.443.223-2.2v-8.587c-.004-.491-.01-.993-.085-1.48"
        fill="#FFF"
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default SvgPart;
