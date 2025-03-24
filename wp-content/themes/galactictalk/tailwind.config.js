/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig }
 */
import fs from 'fs';
import plugin from 'tailwindcss/plugin';
import containerQueries from '@tailwindcss/container-queries';
import fluid, { extract } from 'fluid-tailwind';

const breakpoints = {
  xxs: '22.5rem', // 360px
  xs: '30rem', // 480px
  sm: '40rem', // 640px
  md: '48rem', // 768px
  lg: '64rem', // 1024px
  xl: '80rem', // 1280px
  '2xl': '100rem', // 1600px
};

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: {
    files: [
      './**/*.{php,html}',
      './src/**/*.{js,ts}',
      '../../plugins/galactictalk/**/*.{php,html}',
    ],
    extract,
  },
  safelist: [
    {
      pattern: /^icon-(.*)$/,
      variants: ['before'],
    },
  ],
  theme: {
    borderWidth: {
      DEFAULT: '.0625rem',
      0: '0',
      px: '1px',
      ...generatePxToRemObject(0.5, 1.5, 2, 4, 6, 8, 12),
    },
    borderRadius: {
      ...generatePxToRemObject(
        range(0, 16, 1),
        range(18, 32, 2),
        range(36, 48, 4),
      ),
      full: '100vmax',
    },
    boxShadow: {
      DEFAULT: '0 0.125rem 2rem 0 rgba(188, 94, 239, 0.40)',
      sm: '0 0 1.5rem 0 rgba(188, 94, 239, 0.64)',
      md: '0 0 2.5rem 0 rgba(188, 94, 239, 0.60)',
      lg: '0 0.5rem 3.5rem 0 rgba(188, 94, 239, 0.64)',
      inner: '0 0 2.5rem 0 rgba(49, 25, 90, 0.50) inset',
      none: '0 0 #0000',
    },
    containers: {
      ...breakpoints,
    },
    fontFamily: {
      notosans: "'Noto Sans JP', sans-serif",
      inter: "'Inter', sans-serif",
      barlow: "'Barlow', sans-serif",
      'barlow-condensed': "'Barlow Condensed', sans-serif",
      sans: "'Inter', 'Noto Sans JP', sans-serif",
    },
    fontSize: generatePxToRemObject(range(1, 12, 1), 12.8, range(13, 160, 1)),
    icon: {
      ...(() => {
        try {
          return fs
            .readdirSync(__dirname + '/assets/images/icon/')
            .reduce((acc, name) => {
              name = name.replace('.svg', '');
              acc[name] = name;
              return acc;
            }, {});
        } catch (error) {
          console.warn(
            'Warning: icons directory not found at /assets/images/icon/',
          );
          return {};
        }
      })(),
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.75',
      loose: '2',
      ...generatePxToRemObject(range(1, 240, 1)),
    },
    outlineWidth: {
      0: '0',
      ...generatePxToRemObject(0, 1, 2, 4, 8, 12, 20, 28),
    },
    screens: breakpoints,
    spacing: {
      0: '0',
      lh: '1lh',
      px: '1px',
      gutter: 'var(--gutter)',
      'gutter-0.5': 'calc(var(--gutter) * 0.5)',
      'gutter-0.75': 'calc(var(--gutter) * 0.75)',
      'gutter-1.5': 'calc(var(--gutter) * 1.5)',
      'gutter-2': 'calc(var(--gutter) * 2)',
      'gutter-2.5': 'calc(var(--gutter) * 2.5)',
      'gutter-3': 'calc(var(--gutter) * 3)',
      'col-1': 'var(--col-1)',
      'col-2': 'var(--col-2)',
      'col-3': 'var(--col-3)',
      'col-4': 'var(--col-4)',
      'col-5': 'var(--col-5)',
      'col-6': 'var(--col-6)',
      'col-7': 'var(--col-7)',
      'col-8': 'var(--col-8)',
      'col-9': 'var(--col-9)',
      'col-10': 'var(--col-10)',
      'col-11': 'var(--col-11)',
      'col-12': 'var(--col-12)',
      'col-1-container': 'calc(var(--col-1) + var(--gutter) * 2)',
      'col-2-container': 'calc(var(--col-2) + var(--gutter) * 2)',
      'col-3-container': 'calc(var(--col-3) + var(--gutter) * 2)',
      'col-4-container': 'calc(var(--col-4) + var(--gutter) * 2)',
      'col-5-container': 'calc(var(--col-5) + var(--gutter) * 2)',
      'col-6-container': 'calc(var(--col-6) + var(--gutter) * 2)',
      'col-7-container': 'calc(var(--col-7) + var(--gutter) * 2)',
      'col-8-container': 'calc(var(--col-8) + var(--gutter) * 2)',
      'col-9-container': 'calc(var(--col-9) + var(--gutter) * 2)',
      'col-10-container': 'calc(var(--col-10) + var(--gutter) * 2)',
      'col-11-container': 'calc(var(--col-11) + var(--gutter) * 2)',
      container: 'min(100%, 74rem)',
      screen: 'calc(100 * var(--cw))',
      ...generatePxToRemObject(
        range(1, 48, 1),
        range(50, 144, 2),
        range(148, 720, 4),
        range(728, 1920, 8),
      ),
    },
    tag: {
      md: {
        padding: '0 0.5rem',
        fontSize: '0.8125rem',
      },
      sm: {
        padding: '0 0.25rem',
        fontSize: '0.75rem',
      },
    },
    extend: {
      colors: {
        brand: {
          50: '#efd6ff',
          100: '#e6bdff',
          200: '#d898ff',
          300: '#c67aff',
          400: '#b95cff',
          500: '#a733ff',
          600: '#9100ff',
          700: '#6e00c2',
          800: '#39007a',
          900: '#20103c',
          950: '#07030E',
        },
        orange: { DEFAULT: '#F78324' },
        blue: { DEFAULT: '#0095FF' },
        pink: { DEFAULT: '#FF3AA0' },
        green: { DEFAULT: '#00AF92' },
      },
      fontFeatureSettings: {
        palt: '"palt"',
      },
      keyframes: {
        marquee: {
          to: { translate: '-100%' },
        },
      },
      animation: {
        marquee: 'marquee 60s linear infinite',
      },
      transitionTimingFunction: {
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [
    containerQueries,
    fluid({
      checkSC144: false,
    }),
    plugin(
      ({
        addVariant,
        addComponents,
        matchComponents,
        addUtilities,
        matchUtilities,
        theme,
      }) => {
        /**
         * Variant for touch device
         */
        addVariant('hover-none', '@media (hover: none)');

        /**
         * Container
         */
        addComponents({
          '.container': {
            '@apply max-w-container w-full mx-auto px-gutter': '',
          },
        });

        /**
         * Full width
         */
        addComponents({
          '.container-screen': {
            '@apply mx-[calc(50%-50*var(--cw))] max-w-none w-screen': '',
          },
        });

        /**
         * Icon
         */
        matchComponents(
          {
            icon: (value) => ({
              'aspect-ratio': '1/1',
              background: 'currentColor',
              display: 'inline-block',
              mask: 'no-repeat center / contain',
              'mask-image': `url('../images/icon/${value}.svg')`,
              width: '1lh',
              'flex-shrink': '0',
            }),
          },
          { values: theme('icon') },
        );

        /**
         * Tag
         */
        matchComponents(
          {
            tag: ({ padding, fontSize }) => {
              if (!padding || !fontSize) {
                return null;
              }

              return {
                borderRadius: '100vmax',
                display: 'inline-block',
                fontSize,
                fontWeight: 500,
                lineHeight: '1.75',
                padding,
                textAlign: 'center',
              };
            },
          },
          {
            values: theme('tag'),
          },
        );

        /**
         * Text stroke
         */
        addUtilities({
          '.stroke-text': {
            '-webkit-text-stroke':
              '1px var(--stroke-color,theme("colors.brand.400"))',
            'text-stroke': '1px var(--stroke-color,theme("colors.brand.400"))',
            '@apply font-barlow font-bold uppercase text-transparent': '',
          },
          '.gradient-text': {
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            '@apply bg-gradient-to-b from-[#EA98FF] to-[#A733FF] to-100% bg-clip-text font-barlow font-bold uppercase tracking-[-0.02em] text-transparent':
              '',
          },
          '.gradient-stroke-text': {
            '-webkit-text-stroke': '2px transparent',
            'text-stroke': '2px transparent',
            '@apply bg-gradient-to-b from-[#EA98FF] to-[#A733FF] to-100% bg-clip-text font-barlow font-bold uppercase tracking-[-0.02em] text-brand-950':
              '',
          },
        });

        /**
         * Scrollbar
         */
        addUtilities({
          '.hide-scrollbar': {
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          },
        });

        /**
         * Font feature settings
         */
        matchUtilities(
          {
            font: (value) => ({
              'font-feature-settings': value,
            }),
          },
          {
            values: theme('fontFeatureSettings'),
            type: ['any'],
          },
        );
      },
    ),
  ],
};

/**
 * Generates an array of numbers within a specified range with a given step size.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @param {number} step - The step size between numbers in the range.
 * @return {Array<number>} An array of numbers within the specified range with the given step size.
 */
function range(start, end, step) {
  return Array.from({ length: Math.floor((end - start) / step + 1) }, (_, i) =>
    parseFloat((start + i * step).toFixed(2)),
  );
}

/**
 * Generates an object with pixel values as keys and their corresponding rem values as values.
 *
 * @param {...number[]} pxes - Variadic arguments representing pixel values.
 * @return {Object} An object with pixel values as keys and their corresponding rem values as values.
 */
function generatePxToRemObject(...pxes) {
  return pxes.flat(Infinity).reduce((acc, px) => {
    acc[px] = `${px / 16}rem`;
    return acc;
  }, {});
}