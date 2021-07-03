import { imgSizesByWidth, imgSizesBySizes } from './image';

describe('imgSizesByWidth', () => {
  it('returns correct sizes string', () => {
    expect(imgSizesByWidth(200)).toBe(
      'xs:140 sm:180 md:200 lg:220 xl:300 xxl:400',
    );
  });
});

describe('imgSizesBySizes', () => {
  it('returns correct sizes string', () => {
    expect(imgSizesBySizes({ xs: 300 })).toBe(
      'xs:300 sm:386 md:429 lg:471 xl:643 xxl:857',
    );
  });

  it('returns provided size instead of calculated size', () => {
    const xs = 100;
    const sm = 2000;
    const md = 3000;
    const lg = 4000;
    const xl = 5000;
    const xxl = 6000;

    expect(imgSizesBySizes({ xs, sm, md, lg, xl, xxl })).toBe(
      `xs:${xs} sm:${sm} md:${md} lg:${lg} xl:${xl} xxl:${xxl}`,
    );
  });
});
