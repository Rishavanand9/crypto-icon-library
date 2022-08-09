import * as React from "react";

const SvgSpank = ({ title, titleId, ...props }) => (
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
        id="spank_svg__a"
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
        id="spank_svg__d"
        width="115.9%"
        height="115.9%"
        x="-8%"
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
      <linearGradient id="spank_svg__c" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF" stopOpacity={0.5} />
        <stop offset="100%" stopOpacity={0.5} />
      </linearGradient>
      <circle id="spank_svg__b" cx={16} cy={15} r={15} />
      <path
        id="spank_svg__e"
        d="M8.459 21.141v.141H6.982v-2.667l-.046.148-1.411-.426.797-2.57-.098.144L5 15.098l1.53-2.234-.146.116-.93-1.13 2.201-1.756-.28.107-.53-1.358 2.629-.994-.308.02-.102-1.45 2.752-.19-.249-.056.332-1.417 2.63.598-.166-.094L15.1 4l2.293 1.304-.09-.094 1.08-.992 1.786 1.886-.038-.076 1.327-.638 1.146 2.314-.01-.065 1.457-.228.43 2.673.03-.19 1.459.227-.436 2.712.107-.218 1.327.638-1.228 2.481.18-.19 1.079.993-1.909 2.016.231-.131.738 1.26-2.399 1.364.241-.055.333 1.417-2.652.603.205.014-.103 1.451-2.654-.183.135.051-.53 1.358-2.54-.96.161.128-.929 1.13-2.097-1.673.104.151-1.224.814-1.5-2.19.045.144-1.412.426-.785-2.53zm0-1.728.922-.278.716 2.31.798-.53 1.362 1.99.609-.74 1.888 1.506.338-.867 2.276.86.066-.939 2.436.168-.22-.935 2.388-.543-.495-.844 2.131-1.212-.73-.67 1.683-1.778-.898-.432 1.083-2.186-.982-.154.386-2.4-.94.146-.385-2.4-.846.406-1.075-2.17-.69.633-1.662-1.757-.476.812-2.105-1.197-.218.928-2.368-.539.069.969-2.431.167.359.923-2.29.866.617.749-1.922 1.533.811.539L7.28 14.37l.933.282-.723 2.331h.97v2.43zm7.25-2.725c0-.368-.13-.649-.389-.844-.26-.199-.725-.407-1.399-.623-.674-.22-1.207-.437-1.6-.65-1.07-.58-1.606-1.36-1.606-2.343 0-.511.142-.966.427-1.364.29-.403.702-.717 1.237-.942.54-.225 1.145-.337 1.814-.337.674 0 1.274.123 1.8.37.527.242.935.586 1.225 1.032a2.7 2.7 0 0 1 .44 1.52h-1.943c0-.433-.136-.769-.408-1.007-.272-.242-.654-.363-1.146-.363-.475 0-.845.101-1.108.305a.945.945 0 0 0-.395.792c0 .307.153.565.46.773.31.207.766.402 1.366.584 1.106.333 1.911.747 2.416 1.24.506.494.758 1.109.758 1.844 0 .819-.309 1.461-.926 1.929-.618.463-1.449.695-2.494.695a4.838 4.838 0 0 1-1.982-.396c-.595-.269-1.051-.635-1.366-1.098-.311-.463-.467-1-.467-1.61h1.95c0 1.043.622 1.565 1.865 1.565.462 0 .823-.093 1.082-.28a.928.928 0 0 0 .389-.792zm5.93-5.798-1.873 6.852-1.543-.108 1.167-7.064 2.249.32zm-1.634 7.566-.487 2.421-2.052-.599.471-2.322 2.068.5z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use fill="#000" filter="url(#spank_svg__a)" xlinkHref="#spank_svg__b" />
      <use fill="#FF3B81" xlinkHref="#spank_svg__b" />
      <use
        fill="url(#spank_svg__c)"
        style={{
          mixBlendMode: "soft-light",
        }}
        xlinkHref="#spank_svg__b"
      />
      <circle cx={16} cy={15} r={14.5} stroke="#000" strokeOpacity={0.097} />
      <g fillRule="nonzero">
        <use
          fill="#000"
          filter="url(#spank_svg__d)"
          xlinkHref="#spank_svg__e"
        />
        <use fill="#FFF" fillRule="evenodd" xlinkHref="#spank_svg__e" />
      </g>
    </g>
  </svg>
);

export default SvgSpank;
