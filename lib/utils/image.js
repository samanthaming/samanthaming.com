const multiplier = {
  xs: 7 / 10,
  sm: 9 / 10,
  md: 1,
  lg: 1.1,
  xl: 1.5,
  xxl: 2,
};
const screenSizes = Object.keys(multiplier);

/** Calculate the sizes string
 *
 * If sizes is provided, it will ensure that value is set
 * Otherwise get the calculated value based on the multiplier
 *
 * @param number width
 * @param object sizes
 * @returns 'xs:120 sm:160 md:200 lg:200 xl:300 xxl:400'
 */
function calcSizes(width, sizes = {}) {
  return screenSizes
    .map((size) => {
      return [size, sizes[size] || Math.round(width * multiplier[size])].join(
        ':',
      );
    })
    .join(' ');
}

/** Get the <img> sizes from the width
 *
 * @param number width
 * @returns 'xs:120 sm:160 md:200 lg:200 xl:300 xxl:400'
 */
export function imgSizesByWidth(width = 500) {
  return calcSizes(width);
}

/** Get the <img> sizes from the sizes object
 *
 * @param object sizes
 * @returns 'xs:120 sm:160 md:200 lg:200 xl:300 xxl:400'
 */
export function imgSizesBySizes(sizes = {}) {
  const [screen, width] = Object.entries(sizes)[0];
  const baseWidth = width / multiplier[screen];

  return calcSizes(baseWidth, sizes);
}
