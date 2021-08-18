import { imgSizesByWidth, imgSizesBySizes } from './image';

describe('imgSizesByWidth', () => {
  it('returns correct sizes string', () => {
    expect(imgSizesByWidth(200)).toBe(
      'xs:140 sm:150 md:160 lg:180 xl:200 xxl:300 xxxl:400',
    );
  });

  it('returns double the amount for xxl', () => {
    expect(imgSizesByWidth(100)).toEqual(expect.stringContaining('xxl:200'));
  });
});

describe('imgSizesBySizes', () => {
  it('returns empty object for null undefined', () => {
    expect(imgSizesBySizes(undefined)).toEqual({});
    expect(imgSizesBySizes(null)).toEqual({});
  });

  it('returns empty object for empty object', () => {
    expect(imgSizesBySizes({})).toEqual({});
  });

  it('returns correct sizes string', () => {
    expect(imgSizesBySizes({ xs: 300 })).toBe(
      'xs:300 sm:321 md:343 lg:386 xl:429 xxl:643 xxxl:857',
    );
  });

  it('returns provided size instead of calculated size', () => {
    const xs = 100;
    const sm = 2000;
    const md = 3000;
    const lg = 4000;
    const xl = 5000;
    const xxl = 6000;
    const xxxl = 100000;

    expect(imgSizesBySizes({ xs, sm, md, lg, xl, xxl, xxxl })).toBe(
      `xs:${xs} sm:${sm} md:${md} lg:${lg} xl:${xl} xxl:${xxl} xxxl:${xxxl}`,
    );
  });
});
