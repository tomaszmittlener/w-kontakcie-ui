import React from 'react'
import PropTypes from 'prop-types'

const CheckIcon = ({className}) => (
  <svg className={className} height="55px" viewBox="0 0 79 63">
    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="tick_icon" fill="#202020">
        <path
          d="M3.58,26.09 C3.63,26.091 3.68,26.097 3.73,26.099 C3.736,26.287 3.752,26.484 3.786,26.674 C3.799,26.771 3.815,26.868 3.831,26.961 C3.593,26.763 3.36,26.558 3.119,26.362 L2.767,26.084 C3.037,26.077 3.308,26.071 3.58,26.09 Z M6.194,26.294 C6.191,26.328 6.188,26.356 6.185,26.392 C6.152,26.783 6.166,27.294 6.222,27.78 C6.277,28.268 6.361,28.734 6.423,29.076 C6.434,29.135 6.443,29.186 6.453,29.238 C6.067,28.889 5.685,28.537 5.293,28.195 C5.306,28.002 5.305,27.854 5.305,27.854 C5.305,27.854 5.099,27.174 5.007,26.522 C4.99,26.399 4.982,26.283 4.974,26.167 C5.382,26.198 5.788,26.244 6.194,26.294 Z M7.414,26.489 C7.415,26.481 7.416,26.476 7.416,26.468 C7.833,26.537 8.25,26.609 8.665,26.695 C8.645,26.708 8.615,26.722 8.6,26.735 C8.572,26.754 8.573,26.758 8.574,26.77 C8.582,26.832 9.154,31.25 9.154,31.25 C9.154,31.25 9.269,31.649 9.375,31.999 C8.808,31.436 8.231,30.884 7.649,30.336 C7.733,29.922 7.744,29.475 7.744,29.475 C7.744,29.475 7.703,29.245 7.64,28.898 C7.579,28.556 7.498,28.107 7.449,27.669 C7.398,27.23 7.388,26.803 7.414,26.489 Z M11.976,27.539 C11.866,27.608 11.776,27.703 11.716,27.794 C11.685,27.834 11.684,27.845 11.683,27.877 C11.662,28.584 11.682,29.286 11.724,29.981 L11.744,30.296 L11.825,31.288 C11.825,31.288 11.965,32.134 12.108,32.992 C12.256,33.829 12.401,34.643 12.405,34.57 C12.468,34.876 12.534,35.156 12.6,35.383 C11.799,34.5 10.979,33.635 10.144,32.784 C10.176,32.697 10.206,32.592 10.23,32.443 C10.351,31.908 10.381,31.163 10.381,31.163 C10.381,31.163 9.976,28.002 9.841,26.957 C10.557,27.13 11.268,27.326 11.976,27.539 Z M14.915,28.528 C14.88,28.558 14.847,28.59 14.818,28.622 C14.78,28.658 14.778,28.669 14.771,28.701 C14.631,29.426 14.585,30.143 14.575,30.851 C14.563,31.39 14.586,31.921 14.612,32.451 L14.681,33.445 C14.681,33.445 14.803,34.315 14.947,35.154 C15.09,35.994 15.229,36.808 15.235,36.735 C15.503,38.087 15.84,38.979 15.918,36.713 C15.949,36.044 15.939,35.24 15.933,34.605 C15.924,33.942 15.918,33.506 15.918,33.506 L15.839,32.384 C15.816,31.875 15.795,31.368 15.807,30.868 C15.817,30.209 15.861,29.557 15.981,28.94 C15.981,28.94 15.98,28.938 15.98,28.938 C16.08,28.977 16.181,29.013 16.28,29.053 C16.786,29.261 17.288,29.478 17.787,29.703 C17.721,30.328 17.678,30.955 17.653,31.58 C17.549,34.085 17.689,36.573 17.872,39.038 L17.948,40.019 C17.948,40.019 18.125,41.277 18.267,42.238 C16.595,40.013 14.829,37.857 12.97,35.784 C13.028,35.594 13.07,35.207 13.088,34.544 C13.115,33.875 13.102,33.07 13.089,32.435 C13.073,31.767 13.063,31.334 13.063,31.334 L12.97,30.211 L12.954,29.907 C12.914,29.238 12.896,28.572 12.916,27.913 C12.912,27.886 12.878,27.831 12.869,27.818 C13.556,28.041 14.238,28.277 14.915,28.528 Z M18.884,31.632 C18.903,31.172 18.935,30.714 18.974,30.258 C19.756,30.632 20.53,31.025 21.295,31.433 L21.273,32.949 C21.259,35.958 21.361,38.957 21.45,41.946 L21.478,42.926 C21.478,42.926 21.768,46.376 21.785,46.231 C21.948,47.611 22.229,48.51 22.467,46.265 C22.637,44.941 22.71,43.053 22.71,43.053 L22.678,41.91 C22.59,38.917 22.491,35.932 22.506,32.955 L22.519,32.103 L23.643,32.749 L24.601,33.348 C24.537,33.943 24.481,34.538 24.439,35.133 C24.257,37.792 24.268,40.448 24.309,43.085 L24.368,47.034 L24.374,49.001 L24.358,50.315 C24.358,50.315 24.382,50.885 24.402,51.551 L24.35,51.456 C22.754,48.677 20.997,45.997 19.117,43.406 C19.119,43.369 19.121,43.338 19.123,43.299 C19.214,41.966 19.186,40.083 19.186,40.083 L19.098,38.946 C18.917,36.498 18.782,34.054 18.884,31.632 Z M25.465,51.612 C25.546,50.975 25.584,50.501 25.584,50.501 L25.602,49.244 L25.599,47.225 L25.541,43.202 C25.5,40.526 25.487,37.861 25.669,35.218 C25.695,34.845 25.736,34.474 25.771,34.102 L25.837,34.147 L26.321,34.477 C26.321,34.477 27.063,34.904 27.76,35.369 C27.868,35.436 27.974,35.503 28.078,35.569 C27.937,36.221 27.853,36.876 27.784,37.53 C27.477,41.078 27.919,44.543 27.918,47.946 C27.922,48.375 27.908,48.79 27.897,49.206 L27.814,50.501 C27.767,51.373 27.737,52.245 27.724,53.115 C27.711,53.985 27.711,54.854 27.717,55.722 L27.734,57.155 C27.734,57.155 27.781,57.768 27.837,58.465 C27.666,57.982 27.533,57.64 27.533,57.64 L27.28,57.087 L27.154,56.811 L27.091,56.672 L27.06,56.603 L26.924,56.332 L25.679,53.871 L25.247,53.086 C25.336,52.585 25.416,52.059 25.465,51.612 Z M32.279,48.26 L32.208,46.388 C32.18,45.153 32.181,43.886 32.182,42.639 C32.194,40.137 32.265,37.638 32.466,35.156 C32.521,34.48 32.585,33.807 32.664,33.136 C32.662,33.107 32.633,33.048 32.625,33.035 C32.587,32.977 32.55,32.937 32.512,32.892 C33.238,31.991 33.985,31.108 34.755,30.244 L34.713,30.749 C34.397,34.474 34.058,38.225 34.108,42.01 L34.127,43.003 C34.127,43.003 34.15,43.221 34.184,43.547 C34.214,43.873 34.263,44.304 34.324,44.73 C34.427,45.583 34.597,46.41 34.594,46.335 C34.667,46.647 34.744,46.926 34.818,47.152 C33.884,48.828 32.993,50.527 32.151,52.251 C32.306,50.987 32.333,49.503 32.333,49.503 L32.279,48.26 Z M35.336,41.995 C35.289,38.294 35.624,34.58 35.941,30.855 L36.113,28.809 C36.112,28.796 36.105,28.778 36.098,28.761 C36.628,28.196 37.174,27.646 37.721,27.095 C37.707,27.476 37.688,27.856 37.681,28.236 C37.621,31.02 37.692,33.792 37.718,36.549 L37.725,37.527 C37.725,37.527 37.778,38.384 37.83,39.234 C37.879,40.078 37.917,40.905 37.932,40.833 C37.959,41.176 37.994,41.489 38.036,41.734 C37.08,43.243 36.16,44.776 35.276,46.329 C35.276,46.319 35.276,46.312 35.276,46.302 C35.316,44.827 35.362,43.124 35.362,43.124 C35.343,42.748 35.346,42.371 35.336,41.995 Z M38.947,36.538 C38.922,33.767 38.853,31.008 38.913,28.263 C38.927,27.584 38.95,26.907 38.985,26.231 C38.981,26.202 38.949,26.145 38.939,26.132 C38.897,26.075 38.855,26.035 38.813,25.992 C39.462,25.36 40.126,24.744 40.792,24.128 C40.76,24.532 40.735,24.935 40.723,25.336 C40.688,26.453 40.722,27.554 40.741,28.641 C40.751,29.19 40.759,29.713 40.753,30.272 C40.765,30.821 40.757,31.339 40.736,31.881 L40.695,32.857 C40.695,32.857 40.697,33.728 40.758,34.601 C40.808,35.473 40.984,36.327 40.988,36.248 C41.05,36.523 41.131,36.771 41.216,36.978 C40.327,38.244 39.463,39.527 38.624,40.826 C38.839,39.511 38.954,37.684 38.954,37.684 L38.947,36.538 Z M41.796,34.158 C41.866,33.516 41.915,33.072 41.915,33.072 L41.965,31.927 C41.987,31.378 41.995,30.805 41.983,30.262 C41.99,29.729 41.981,29.161 41.972,28.618 C41.953,27.523 41.921,26.44 41.955,25.374 C41.976,24.707 42.02,24.044 42.107,23.393 C42.105,23.365 42.079,23.306 42.071,23.294 C42.02,23.211 41.968,23.146 41.917,23.089 C42.571,22.505 43.231,21.927 43.896,21.354 C43.904,21.867 43.903,22.381 43.897,22.896 C43.865,24.56 43.766,26.236 43.709,27.928 L43.685,28.917 C43.685,28.917 43.716,29.794 43.79,30.652 C43.856,31.511 43.979,32.347 43.988,32.272 C44.038,32.53 44.091,32.768 44.145,32.972 C43.304,34.077 42.48,35.197 41.674,36.33 C41.672,36.285 41.671,36.247 41.669,36.2 C41.673,35.554 41.73,34.779 41.796,34.158 Z M44.671,32.267 C44.749,30.954 44.911,29.1 44.911,29.1 L44.938,27.968 C44.994,26.299 45.095,24.617 45.129,22.919 C45.138,22.227 45.145,21.535 45.121,20.839 C45.115,20.81 45.078,20.753 45.067,20.742 C44.992,20.654 44.919,20.59 44.849,20.54 C45.488,19.999 46.133,19.465 46.784,18.94 C46.768,19.254 46.745,19.569 46.732,19.883 C46.676,21.376 46.664,22.865 46.651,24.347 L46.642,25.327 C46.642,25.327 46.683,26.182 46.723,27.036 C46.763,27.88 46.788,28.707 46.804,28.635 C46.824,28.956 46.851,29.249 46.886,29.486 C46.135,30.409 45.398,31.344 44.67,32.287 C44.671,32.279 44.671,32.274 44.671,32.267 Z M47.483,28.705 C47.727,27.388 47.869,25.501 47.869,25.501 L47.88,24.357 C47.894,22.875 47.908,21.399 47.964,19.931 C47.992,19.258 48.024,18.586 48.074,17.917 C48.745,17.395 49.421,16.879 50.107,16.379 L50.088,17.85 L50.086,19.935 L50.102,20.924 C50.102,20.924 50.17,21.796 50.268,22.648 C50.362,23.501 50.494,24.331 50.501,24.256 C50.56,24.548 50.623,24.812 50.686,25.031 C50.46,25.285 50.226,25.531 50.002,25.788 C49.144,26.772 48.302,27.772 47.47,28.78 C47.475,28.754 47.479,28.733 47.483,28.705 Z M51.184,24.242 C51.261,22.589 51.333,21.058 51.333,21.058 L51.315,19.924 L51.321,17.86 L51.349,15.815 C51.344,15.786 51.31,15.729 51.3,15.717 C51.264,15.671 51.229,15.642 51.194,15.606 C51.82,15.168 52.45,14.737 53.09,14.32 C53.053,14.728 53.009,15.136 52.981,15.544 L52.911,16.725 L52.867,17.713 C52.867,17.713 52.896,18.572 52.926,19.439 C52.964,20.292 53.019,21.123 53.032,21.05 C53.081,21.542 53.147,21.968 53.223,22.219 C52.53,22.964 51.856,23.726 51.178,24.485 C51.18,24.406 51.183,24.331 51.184,24.242 Z M53.713,21.099 C53.904,19.782 54.089,17.919 54.089,17.919 L54.138,16.787 L54.21,15.629 C54.258,14.956 54.317,14.283 54.392,13.614 C54.391,13.589 54.37,13.544 54.358,13.524 C54.942,13.156 55.522,12.784 56.114,12.43 L55.963,13.802 L55.913,14.326 L55.827,15.311 C55.827,15.311 55.807,16.186 55.816,17.042 C55.823,17.899 55.861,18.736 55.877,18.663 C55.899,18.922 55.927,19.162 55.958,19.369 C55.169,20.176 54.381,20.984 53.609,21.809 C53.644,21.619 53.678,21.386 53.713,21.099 Z M56.557,18.725 C56.814,17.042 57.039,15.57 57.039,15.57 L57.137,14.441 L57.19,13.924 L57.414,11.898 C57.412,11.87 57.384,11.81 57.376,11.797 C57.358,11.769 57.34,11.753 57.322,11.728 C57.962,11.357 58.602,10.985 59.25,10.626 C59.132,11.853 58.849,14.799 58.849,14.799 C58.849,14.799 58.917,16.233 58.949,16.178 C58.959,16.241 58.972,16.301 58.985,16.359 C58.169,17.151 57.353,17.942 56.554,18.75 C56.555,18.741 56.556,18.734 56.557,18.725 Z M60.064,14.993 C60.064,14.993 60.527,10.234 60.533,10.168 C60.529,10.156 60.496,10.131 60.487,10.125 C60.425,10.089 60.368,10.077 60.308,10.053 C60.956,9.702 61.605,9.354 62.259,9.014 C62.208,9.292 62.156,9.605 62.111,9.93 C61.996,10.764 61.914,11.577 61.914,11.577 C61.914,11.577 62.01,12.586 62.041,12.547 C62.14,12.957 62.379,13.249 62.716,12.639 C62.947,12.281 63.13,11.757 63.13,11.757 C63.13,11.757 63.215,10.932 63.328,10.123 C63.384,9.718 63.451,9.318 63.511,9.019 C63.575,8.722 63.619,8.52 63.621,8.509 C63.618,8.5 63.587,8.477 63.578,8.472 C63.531,8.441 63.486,8.427 63.439,8.403 C63.906,8.164 64.375,7.928 64.844,7.692 C64.818,7.881 64.789,8.093 64.76,8.306 C64.668,8.944 64.616,9.604 64.616,9.604 C64.616,9.604 64.656,9.802 64.698,10.008 C64.743,10.208 64.8,10.4 64.813,10.383 C64.885,10.545 64.988,10.668 65.105,10.694 C64.771,10.99 64.428,11.276 64.096,11.574 C62.687,12.835 61.304,14.124 59.937,15.43 C60.015,15.18 60.064,14.993 60.064,14.993 Z M65.838,9.732 C65.838,9.732 65.886,9.122 65.977,8.49 C66.067,7.848 66.157,7.2 66.16,7.183 C66.155,7.176 66.122,7.159 66.113,7.155 C66.069,7.136 66.028,7.129 65.985,7.114 C66.013,7.101 66.041,7.086 66.069,7.072 L67.922,6.166 C67.835,6.719 67.733,7.375 67.733,7.375 C67.733,7.375 67.845,7.99 67.876,7.968 C67.91,8.047 67.958,8.115 68.016,8.166 C67.185,8.868 66.37,9.588 65.552,10.306 C65.713,10.039 65.838,9.732 65.838,9.732 Z M69.196,5.66 C69.149,5.639 69.105,5.627 69.06,5.609 L70.748,4.784 C70.723,4.984 70.701,5.164 70.701,5.164 C70.701,5.164 70.871,5.47 70.899,5.461 C70.957,5.519 71.042,5.567 71.14,5.595 C70.414,6.182 69.694,6.778 68.977,7.376 C69.053,6.887 69.239,5.708 69.243,5.687 C69.238,5.681 69.206,5.664 69.196,5.66 Z M0.749,26.068 L2.345,27.323 C7.862,31.812 12.783,37.035 17.084,42.71 C19.234,45.551 21.223,48.516 23.005,51.599 C23.513,52.484 24.006,53.377 24.487,54.278 C24.536,54.893 24.638,55.237 24.806,54.896 C25.05,55.363 25.3,55.828 25.532,56.302 L25.832,56.898 L25.954,57.143 L25.985,57.209 L26.107,57.477 L26.351,58.011 C26.351,58.011 26.756,58.77 27.154,59.513 C27.534,60.264 27.892,61.009 27.879,60.936 C27.985,61.132 28.089,61.314 28.187,61.475 L28.135,61.608 C28.129,61.637 28.142,61.702 28.146,61.716 C28.41,62.505 28.975,62.288 29.236,62.097 C29.279,62.071 29.283,62.061 29.294,62.033 L30.032,60.136 C34.758,48.001 41.988,36.946 50.493,27.104 C54.751,22.176 59.342,17.537 64.172,13.165 L65.985,11.527 L67.84,9.936 L69.697,8.348 L71.593,6.806 L73.667,5.128 C73.667,5.128 76.272,2.862 76.142,2.927 C77.147,1.968 77.695,1.201 75.764,2.356 C74.606,3.011 73.036,4.061 73.036,4.061 C72.875,4.182 72.718,4.308 72.562,4.436 L71.972,4.914 C72.004,4.661 72.04,4.385 72.041,4.377 C72.036,4.375 72.001,4.366 71.992,4.364 C71.927,4.35 71.863,4.337 71.801,4.324 L71.717,4.31 L71.722,4.307 L71.731,4.309 C71.734,4.295 71.735,4.324 71.738,4.299 L74.739,2.832 C74.739,2.832 77.745,1.1 77.6,1.134 C78.769,0.371 79.435,-0.276 77.329,0.505 C76.077,0.941 74.341,1.655 74.341,1.655 L66.202,5.63 C61.702,7.857 57.219,10.177 52.975,12.925 C50.854,14.294 48.777,15.747 46.81,17.338 C44.833,18.905 42.913,20.533 41.036,22.22 C37.286,25.591 33.737,29.22 30.639,33.235 C30.215,33.779 29.805,34.333 29.402,34.895 C29.39,34.921 29.385,34.987 29.386,35.003 C29.434,35.841 30.034,35.778 30.333,35.664 C30.38,35.649 30.386,35.641 30.404,35.617 C30.695,35.21 30.997,34.812 31.3,34.414 C31.28,34.628 31.255,34.842 31.237,35.056 C31.037,37.541 30.965,40.026 30.952,42.507 C30.947,43.752 30.953,44.976 30.974,46.23 L31.041,48.094 L31.099,49.394 C31.099,49.394 31.183,50.249 31.266,51.092 C31.344,51.93 31.389,52.75 31.402,52.679 C31.436,53.028 31.47,53.345 31.511,53.591 C30.57,55.591 29.688,57.621 28.884,59.686 L28.763,59.997 C28.894,58.747 28.965,57.298 28.965,57.298 L28.949,56.02 C28.941,55.145 28.938,54.271 28.95,53.398 C28.962,52.526 28.986,51.655 29.03,50.787 C29.053,50.355 29.08,49.919 29.113,49.479 C29.135,49.037 29.15,48.567 29.148,48.126 C29.161,44.56 28.709,41.058 29.011,37.645 C29.06,37.19 29.122,36.738 29.199,36.292 C30.303,36.991 31.093,37.29 29.556,35.72 C29.107,35.217 28.49,34.697 28.012,34.264 C27.773,34.048 27.557,33.871 27.399,33.749 C27.242,33.625 27.149,33.552 27.149,33.552 L26.045,32.8 C25.078,32.19 24.112,31.577 23.112,31.022 C21.12,29.9 19.075,28.869 16.957,28.002 C12.729,26.283 8.256,24.97 3.608,24.854 C2.911,24.807 2.208,24.868 1.508,24.895 C1.479,24.901 1.424,24.94 1.413,24.95 C1.365,24.993 1.334,25.034 1.298,25.076 C0.57,25.142 0.604,25.703 0.705,25.995 C0.717,26.043 0.726,26.05 0.749,26.068 Z"
          id="Fill-283"
        />
      </g>
    </g>
  </svg>
)

CheckIcon.propTypes = {
  className: PropTypes.string,
}

CheckIcon.defaultProps = {
  className: '',
}

export default CheckIcon
