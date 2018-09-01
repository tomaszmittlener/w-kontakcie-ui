import React from 'react'
import styled, {keyframes} from 'styled-components'

// const gradientColors = ['#174677', '#2B768A', '#2FBB92'] // picked from img
const gradientColors = ['#25516C', '#2B768A', '#2FBB92']

const Svg = styled.svg`
  cursor: pointer;
  #slice_1 {
    fill: ${gradientColors[0]};
  }
  #slice_2 {
    fill: url(#gradient-horizontal-slice_2);
  }
  #slice_3 {
    fill: url(#gradient-horizontal-slice_3);
  }
  #slice_4 {
    fill: ${gradientColors[2]};
  }
  &:hover {
    #slice_1,
    #slice_2,
    #slice_3,
    #slice_4 {
      fill: ${({theme: {colors}}) => colors.text};
      transition: fill 300ms linear;
    }
  }
`

const Logo = ({withText, className}) => (
  <Svg
    viewBox={withText ? '0 0 89 81' : '0 0 92 53'}
    version="1.1"
    role="img"
    aria-label={`Logo "W kontakcie"`}
    className={className}>
    <title>Logo "W kontakcie"</title>
    <desc>Logo gabinetu terapeutycznego "W kontakcie"</desc>
    <defs>
      <path
        d="M70.0706736,6.44290141 L69.0455113,8.9585493 C69.0455113,8.97815493 69.0275934,8.99530986 69.0275934,9.01246479 C67.4239375,13.5634225 69.8658971,18.6118732 74.5808757,20.3604507 C79.3700857,22.1457887 84.7736252,19.9511831 86.7855542,15.4725211 C86.8239497,15.3830704 86.8623453,15.2936197 86.8994611,15.204169 L87.7927985,12.9740282 C89.6562645,8.33484507 87.2155848,3.07073239 82.3700612,1.26946479 C81.2527495,0.840591549 80.0791243,0.644535211 78.9400551,0.644535211 C75.1388916,0.644535211 71.5245866,2.85874648 70.0706736,6.44290141"
        id="path-1"
      />
      <path
        d="M1.8801041,37.8400986 L1.76747704,38.1072254 L0.87413962,40.3385915 C-0.989326393,44.9765493 1.45135334,50.240662 6.29687691,52.0431549 C7.41418861,52.4708028 8.58909369,52.6668592 9.72432333,52.6668592 C13.5267667,52.6668592 17.1410716,50.4550986 18.5949847,46.868493 L19.620147,44.3516197 C19.620147,44.3356901 19.6393448,44.3160845 19.6393448,44.2989296 C21.2430006,39.7491972 18.7997612,34.6995211 14.0860625,32.9509437 C12.9559522,32.5294225 11.791286,32.3309155 10.6445377,32.3309155 C6.93424372,32.3309155 3.41720759,34.4189155 1.8801041,37.8400986"
        id="path-3"
      />
      <path
        d="M47.7602755,1.26333803 C42.8981139,3.08298592 40.4548744,8.3826338 42.3554562,13.0389718 L56.1292345,46.868493 C57.5831476,50.4550986 61.1987324,52.6668592 64.9998959,52.6668592 C66.1543233,52.6668592 67.3100306,52.4708028 68.4286221,52.0431549 C73.3099816,50.2222817 75.7340232,44.9238592 73.8334415,40.2662958 L60.0801408,6.438 C58.6172688,2.85507042 55.0042437,0.644535211 51.1915615,0.645760563 C50.0486528,0.645760563 48.8865462,0.844267606 47.7602755,1.26333803"
        id="path-5"
      />
      <path
        d="M20.2357563,1.26333803 C15.3723148,3.08298592 12.931635,8.3826338 14.8322168,13.0389718 L28.6021555,46.868493 C30.0560686,50.4550986 33.6716534,52.6668592 37.4740967,52.6668592 C38.629804,52.6668592 39.7842315,52.4708028 40.902823,52.0431549 C45.7867422,50.2222817 48.2082241,44.9238592 46.3076424,40.2662958 L32.5543417,6.438 C31.0914697,2.85507042 27.4669259,0.644535211 23.6580833,0.645760563 C22.5164544,0.645760563 21.3569075,0.844267606 20.2357563,1.26333803"
        id="path-7"
      />
      <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#7A5FFF">
          <animate
            attributeName="stop-color"
            values="#7A5FFF; #01FF89; #7A5FFF"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#01FF89">
          <animate
            attributeName="stop-color"
            values="#01FF89; #7A5FFF; #01FF89"
            dur="4s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="gradient-horizontal-slice_2"
        x1="0%"
        y1="100%"
        x2="100%"
        y2="0%">
        <stop offset="0%" stopColor={gradientColors[0]} />
        <stop offset="30%" stopColor={gradientColors[0]} />
        <stop offset="70%" stopColor={gradientColors[1]} />
        <stop offset="100%" stopColor={gradientColors[1]} />
      </linearGradient>

      <linearGradient
        id="gradient-horizontal-slice_3"
        x1="0%"
        y1="100%"
        x2="100%"
        y2="0%">
        <stop offset="0%" stopColor={gradientColors[0]} />
        <stop offset="100%" stopColor={gradientColors[2]} />
      </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="logo">
        {withText && (
          <text
            id="text"
            fontFamily="LucidaGrande, Lucida Grande"
            fontSize="21.5406"
            fontWeight="normal"
            fill="#1A1919">
            <tspan x="0.24688365" y="75.6684656">
              w relacji
            </tspan>
          </text>
        )}
        <mask id="mask-2" fill="white">
          <use xlinkHref="#path-1" />
        </mask>

        <use id="slice_4" fill="#FFFFFF" xlinkHref="#path-1" />
        <mask id="mask-4" fill="white">
          <use xlinkHref="#path-3" />
        </mask>

        <use id="slice_1" fill="#FFFFFF" xlinkHref="#path-3" />
        <mask id="mask-6" fill="white">
          <use xlinkHref="#path-5" />
        </mask>

        <use id="slice_3" fill="#FFFFFF" xlinkHref="#path-5" />
        <mask id="mask-8" fill="white">
          <use xlinkHref="#path-7" />
        </mask>

        <use id="slice_2" fill="#FFFFFF" xlinkHref="#path-7" />
      </g>
    </g>
  </Svg>
)

export default Logo
