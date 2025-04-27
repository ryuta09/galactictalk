/**
 * @type {import('tailwindcss/tailwind-config').TailwindConfig }
 */

import fs from 'fs';
import plugin from 'tailwindcss/plugin';
import containerQueries from '@tailwindcss/container-queries';
import fluid, { extract } from 'fluid-tailwind';

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./**/*.{php,html}', './src/**/*.{js,jsx,ts,}'],
  theme: {
    extend: {}
  },
  plugins:[]
}

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