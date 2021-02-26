import _sampleSize from 'lodash/sampleSize';
import _range from 'lodash/range';

export function randomData(end, options = { start: 1, size: 5 }) {
  if (!end) {
    return;
  }

  const { start, size } = options;
  const endIndex = end - 1;
  const collection = _range(start, endIndex);

  return _sampleSize(collection, size);
}
