import * as React from "react";

const SvgCrw = ({ title, titleId, ...props }) => (
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
        id="crw_svg__a"
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
        id="crw_svg__d"
        width="115.9%"
        height="126.9%"
        x="-8%"
        y="-9.6%"
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
      <linearGradient id="crw_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="crw_svg__b" cx={16} cy={15} r={15} />
      <path
        id="crw_svg__e"
        d="M24.833 14.346c-.201.045-.339.071-.474.107-.845.221-1.696.396-2.576.363-1.176-.045-2.186-.518-3.077-1.28-.36-.309-.694-.65-1.038-.978-.167-.158-.207-.338-.08-.544l.325-.527.439.482c.633.702 1.31 1.341 2.203 1.682.877.334 1.77.285 2.667.134 1.268-.212 2.439-.719 3.587-1.288.038-.019.08-.031.191-.075-.076.143-.118.228-.166.308-1.676 2.818-3.352 5.636-5.03 8.453-.206.346-.283.372-.641.197-2.366-1.162-4.844-1.383-7.402-.943-.4.069-.471.035-.662-.375-.209-.448-.207-.436.266-.527a13.208 13.208 0 0 1 4.002-.163c1.249.14 2.494.324 3.64.912.164.085.251.014.333-.122.727-1.214 1.454-2.428 2.185-3.64.391-.649.79-1.293 1.183-1.94.034-.056.061-.115.125-.236zm-17.654.121c.168.283.336.566.506.848l3.364 5.58c.16.266.16.274-.117.401-.597.275-.523.346-.888-.265-1.29-2.165-2.578-4.332-3.866-6.498l-1.044-1.755c-.05-.083-.09-.173-.134-.26l.039-.052c.147.065.295.126.44.194.883.413 1.776.797 2.722 1.031 1.214.302 2.413.337 3.57-.24.72-.359 1.313-.888 1.847-1.491.855-.968 1.549-2.054 2.178-3.186l.153-.274c.083.124.136.218.203.3.369.452.282.854-.029 1.322-.694 1.044-1.393 2.078-2.317 2.926-.826.758-1.752 1.33-2.84 1.591-.854.205-1.712.164-2.569.005-.392-.073-.782-.155-1.173-.233l-.045.056z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#crw_svg__a)" xlinkHref="#crw_svg__b" />
      <use fill="#0F1529" xlinkHref="#crw_svg__b" />
      <use
        fill="url(#crw_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#crw_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#crw_svg__d)" xlinkHref="#crw_svg__e" />
      <use fill="#FFF" xlinkHref="#crw_svg__e" />
    </g>
  </svg>
);

export default SvgCrw;
