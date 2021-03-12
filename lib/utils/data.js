import _includes from 'lodash/includes';
import _sampleSize from 'lodash/sampleSize';
import _range from 'lodash/range';
import _difference from 'lodash/difference';
import * as tags from '../constants/tag';

export function randomData(end, options = { start: 1, size: 5 }) {
  if (!end) {
    return;
  }

  const { start, size } = options;
  const endIndex = end - 1;
  const collection = _range(start, endIndex);

  return _sampleSize(collection, size);
}

export function isValidTag(tag) {
  return _includes(tags, tag);
}

export function bannedTidbits() {
  return [..._range(1, 3), ..._range(5, 10), ..._range(14, 16), 19, 22];
}

export function allowedOrderTidbits(totalCount) {
  const excludeOrders = [1, 2, 3, 5, 6, 7, 8, 9, 10, 14, 15, 16, 19, 22];
  const allOrders = _range(1, totalCount);

  return _difference(allOrders, excludeOrders);
}
