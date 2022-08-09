import * as React from "react";

const SvgEng = ({ title, titleId, ...props }) => (
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
        id="eng_svg__a"
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
        id="eng_svg__d"
        width="118.4%"
        height="115.9%"
        x="-9.2%"
        y="-5.7%"
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
      <linearGradient id="eng_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="eng_svg__b" cx={16} cy={15} r={15} />
      <path
        id="eng_svg__e"
        d="M25.149 9.295c.114.06.375.202.35.511l-.016 10.417a.477.477 0 0 1-.283.472l-2.3 1.343-1.82 1.062-4.844 2.828a.35.35 0 0 1-.214.072.521.521 0 0 1-.273-.088l-3.342-1.928c-1.856-1.071-3.776-2.179-5.668-3.267-.159-.077-.252-.256-.238-.46l.007-2.752c.006-2.476.01-4.991.012-7.423v-.01a.396.396 0 0 0 .001-.05v-.031c-.004-.135-.01-.412.25-.537 1.06-.633 2.144-1.276 3.193-1.898l1.737-1.03c1.322-.783 2.668-1.582 3.97-2.355l.01-.006a1.83 1.83 0 0 1 .266-.125L16.05 4l.096.057c.946.548 1.908 1.108 2.837 1.65l1.736 1.01 1.695.986 2.667 1.552h.002l.002.002.064.038zm-8.769 15.67 2.962-1.73a8357.882 8357.882 0 0 0 5.387-3.143l.01-5.849.005-3.865-3.85 2.252v1.776a288.84 288.84 0 0 0 .006 3.325v.076l-.045.062a.572.572 0 0 1-.184.16l-.026.016h-.001l-1.244.725c-.45.26-.915.53-1.37.797l-1.644.955-.006 4.443zM12.184 12.41a1302.649 1302.649 0 0 0 2.524 1.447l1.304.749 3.777-2.208-3.783-2.232-3.822 2.244zm-.39.65.071 4.389 3.768 2.195.006-4.379-3.845-2.204zm-4.52-2.594-.019 9.675 8.374 4.83.003-4.451-1.64-.955-1.028-.599c-.527-.306-1.072-.623-1.607-.936-.155-.073-.252-.251-.241-.446l-.081-4.959-3.762-2.159zm17.094-.746-1.469-.856-1.622-.945c-1.544-.896-3.375-1.96-5.264-3.066a3322.48 3322.48 0 0 0-5.736 3.397L7.651 9.806l3.778 2.165 4.334-2.545a.448.448 0 0 1 .5.01l4.276 2.521 3.829-2.238zm-7.982 9.927a1941.6 1941.6 0 0 1 3.792-2.204V13.05l-3.789 2.214-.003 4.382zm5.127-.793a.393.393 0 0 1-.116.017.394.394 0 0 1-.286-.117.467.467 0 0 1-.145-.44.449.449 0 0 1 .436-.377c.123 0 .243.056.33.153l.001.002a.47.47 0 0 1 .078.504.427.427 0 0 1-.298.258zm2.064 1.408a.45.45 0 0 1-.172-.388c.008-.159.09-.3.222-.38a.406.406 0 0 1 .22-.066c.086 0 .17.027.244.077a.46.46 0 0 1 .202.457.455.455 0 0 1-.449.401.407.407 0 0 1-.267-.101zm-13.189-2.32c.125 0 .244.057.327.156a.46.46 0 0 1 .077.496.442.442 0 0 1-.416.274.456.456 0 0 1-.428-.556.458.458 0 0 1 .44-.37zm11.956 1.576a.47.47 0 0 1-.161-.443.46.46 0 0 1 .438-.39c.11 0 .216.044.3.122.127.118.18.289.138.449a.438.438 0 0 1-.282.332.432.432 0 0 1-.433-.07zm-12.905-.723c.133.11.195.285.161.447a.436.436 0 0 1-.254.334h-.001a.456.456 0 0 1-.19.044.426.426 0 0 1-.222-.066.467.467 0 0 1-.217-.446.448.448 0 0 1 .289-.391.394.394 0 0 1 .155-.032c.1 0 .197.038.279.11zm6.51-13.628c.13 0 .253.056.34.154.107.113.147.27.107.42a.438.438 0 0 1-.366.338h-.005a.461.461 0 0 1-.476-.202.45.45 0 0 1-.027-.442l.001-.002a.456.456 0 0 1 .352-.259.424.424 0 0 1 .075-.007zM8.15 19.49c.145.082.233.23.232.39a.454.454 0 0 1-.211.408.453.453 0 0 1-.244.074.399.399 0 0 1-.204-.054.458.458 0 0 1-.236-.408c0-.173.089-.33.231-.41a.418.418 0 0 1 .432 0zm8.04-11.285a.458.458 0 0 1 .215.42.443.443 0 0 1-.272.379.488.488 0 0 1-.2.044.451.451 0 0 1-.283-.096.444.444 0 0 1-.178-.399.44.44 0 0 1 .233-.364.45.45 0 0 1 .226-.06.48.48 0 0 1 .26.076zm-.57-.758a.442.442 0 0 1-.148-.374V7.07a.462.462 0 0 1 .219-.352.436.436 0 0 1 .244-.073c.08 0 .16.021.233.06l.001.001a.449.449 0 0 1 .236.409.449.449 0 0 1-.275.41.489.489 0 0 1-.2.044.442.442 0 0 1-.31-.122z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#eng_svg__a)" xlinkHref="#eng_svg__b" />
      <use fill="#2F2F2F" xlinkHref="#eng_svg__b" />
      <use
        fill="url(#eng_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#eng_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <use fill="#000" filter="url(#eng_svg__d)" xlinkHref="#eng_svg__e" />
      <use fill="#FFF" xlinkHref="#eng_svg__e" />
    </g>
  </svg>
);

export default SvgEng;
