import { isValidTag } from './data';

jest.mock('../constants/tag');

describe('isValidTag', () => {
  it('returns true for valid tag', () => {
    expect(isValidTag('javascript')).toBe(true);
  });

  it('returns false for invalid tag', () => {
    expect(isValidTag('not valid tag')).toBe(false);
  });
});
