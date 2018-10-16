import React from 'react'
import PropTypes from 'prop-types'

const Plane = ({className}) => (
  <svg height="55px" viewBox="0 0 75 68" version="1.1" className={className}>
    <title>Plane Icon</title>
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="plane" fill="#464644">
        <path
          d="M64.9343038,30.4556294 C62.3263291,39.5356076 60.4208228,48.5786158 58.6496835,57.8308883 C50.6732911,52.2658529 42.168481,47.455564 33.918481,42.3181253 C33.9797468,42.2379074 34.0347468,42.1548992 34.1008861,42.0760763 C35.063038,40.9300054 36.2883544,39.928327 37.3556329,38.8792153 C39.7700633,36.5068556 42.1831013,34.1324033 44.5940506,31.757951 C53.6070886,22.8816567 62.6048101,13.9907139 71.5983544,5.09558583 C69.6336709,13.6154332 67.348038,22.0515749 64.9343038,30.4556294 Z M28.899557,60.5324905 C30.0942405,56.1651444 30.9275949,51.6889809 31.9809494,47.2909428 C32.2475949,46.1776567 32.4856962,45.1278474 32.8860127,44.1387248 C34.7239873,45.282703 36.5737975,46.4120327 38.4291772,47.5350845 C35.1451899,51.7838474 31.9927848,56.1386376 28.899557,60.5324905 Z M67.9697468,4.99583651 C53.7567722,16.1628774 39.7665823,27.7449591 26.2317089,39.6960436 C19.1193038,38.0386703 12.0187342,36.4524469 4.81582278,35.2959128 C15.8457595,29.9115422 26.7573418,24.2851226 37.8972785,19.1309428 C47.936519,14.4866703 57.7550633,9.2613406 67.9697468,4.99583651 Z M32.2935443,41.9449373 C32.0192405,42.1269973 31.8298734,42.4443815 31.7908861,42.7799019 C31.3947468,43.5325559 31.0758861,44.4163488 30.7772152,45.6161308 C29.5435443,50.5701144 28.6544937,55.6412861 27.2718354,60.562485 C27.266962,54.0027466 27.3881013,47.4444033 27.2474684,40.8860599 C39.641962,29.9387466 52.4193671,19.3046322 65.3993671,9.01231608 C57.6659494,16.6567411 49.9325316,24.3018638 42.1837975,31.9309428 C39.7951266,34.282376 37.4043671,36.6331117 35.0136076,38.9824523 C33.7966456,40.1773515 32.9444937,41.0018529 32.2935443,41.9449373 Z M73.1494937,0.706615804 C61.0390506,5.20231063 49.6610127,11.4097875 37.9501899,16.815782 C25.4470886,22.5872916 13.2238608,28.9342779 0.823797468,34.9192371 C0.0628481013,35.2868447 0.187468354,36.7070518 1.07303797,36.8319128 C9.20329114,37.9807738 17.1810759,39.738594 25.1706962,41.596861 C25.3217722,49.7672371 25.0892405,57.936218 25.2243038,66.1086866 C25.2431013,67.196861 26.5944304,67.4647193 27.1708861,66.6367302 C31.4037975,60.554812 35.668038,54.4687084 40.2128481,48.6141907 C46.5225316,52.4248937 52.8489241,56.2279237 58.8432278,60.5031935 C59.3674684,60.8763815 60.2586076,60.5059837 60.3776582,59.8774932 C62.2302532,50.1041526 64.1998101,40.5798365 66.9484177,31.0122725 C69.7081646,21.4070409 72.2987342,11.7599564 74.4339873,1.99428883 C74.5899367,1.2813951 73.9452532,0.411553134 73.1494937,0.706615804 Z"
          id="Fill-102"
        />
        <path
          d="M17.1669558,34.8902034 C19.6500817,33.4377143 22.1338977,31.9844935 24.6170235,30.5312727 C25.492812,30.0197916 24.7101925,28.5973036 23.833714,29.1095163 C21.349898,30.5627372 18.8660819,32.015958 16.3829561,33.4691788 C15.5071677,33.9806598 16.2897871,35.4031479 17.1669558,34.8902034"
          id="Fill-104"
        />
      </g>
    </g>
  </svg>
)

Plane.propTypes = {
  className: PropTypes.string,
}

Plane.defaultProps = {
  className: '',
}

export default Plane