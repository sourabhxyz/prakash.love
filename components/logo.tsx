export default function Logo({ logoHover }: { logoHover: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={'20'}
      viewBox="0 0 189.732 67.292"
      filter={
        logoHover
          ? 'drop-shadow(0px 0px 10px #FFF'
          : 'drop-shadow(0px 0px 0px #FFF'
      }
    >
      <defs>
        <style>
          {
            '.cls-1{fill:none;stroke:#FFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:6px}'
          }
        </style>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Ram">
          <path id="topLine" className="cls-1" d="M36.187 3h117" />
          <path
            id="R"
            className="cls-1"
            d="M57.203 3s20.984 28.5-12.016 33.5l-4-6s1.185 12.585 22.592 33.792"
          />
          <path id="A" className="cls-1" d="M85.34 3v61.292" />
          <path
            id="M"
            className="cls-1"
            d="M112.87 3v37.57l-7.459-6.924h34.581V3v61.292"
          />
          <g id="leftLines">
            <path className="cls-1" d="M13.732 3v61.292M3 3v61.292" />
          </g>
          <g id="rightLines">
            <path className="cls-1" d="M186.732 3v61.292M176 3v61.292" />
          </g>
        </g>
      </g>
    </svg>
  );
}
