import { isObjectEmpty, isArrayEmpty } from './helpers';

describe('isObjectEmpty', () => {
  it('returns true for empty object', () => {
    expect(isObjectEmpty({})).toBe(true);
  });

  it('returns false for non empty object', () => {
    expect(isObjectEmpty({ foo: 'foo' })).toBe(false);
  });
});

describe('isArrayEmpty', () => {
  it('returns true for empty array', () => {
    expect(isArrayEmpty([])).toBe(true);
  });

  it('returns false for non empty array', () => {
    expect(isArrayEmpty(['one', 'two', 'three'])).toBe(false);
  });
});
