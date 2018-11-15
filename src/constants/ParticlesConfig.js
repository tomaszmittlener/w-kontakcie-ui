import darken from 'polished/lib/color/darken'
import THEME from 'layout/theme'

export default {
  particles: {
    number: {
      value: 60,
      density: {
        enable: false,
        value_area: 800,
      },
    },
    color: {
      value: darken(0.4, THEME.colors.secondary),
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: false,
        speed: 1.6241544246026902,
        opacity_min: 0.1,
        sync: true,
      },
    },
    size: {
      value: 2,
      random: false,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: darken(0.4, THEME.colors.secondary),
      opacity: 0.2,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: false,
        mode: 'bubble',
      },
      onclick: {
        enable: false,
        mode: 'push',
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 633.4202255950493,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 170.53621458328246,
        size: 15,
        duration: 3.979178340276591,
        opacity: 0.08932849335314796,
        speed: 3,
      },
      repulse: {
        distance: 105.57003759917487,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
}