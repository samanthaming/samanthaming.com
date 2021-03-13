import _includes from 'lodash/includes';
import _sampleSize from 'lodash/sampleSize';
import _range from 'lodash/range';
import _difference from 'lodash/difference';
import * as tags from '../constants/tag';
import { BANNED_TIDBITS } from '../constants/data';

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

export function allowedOrderTidbits(totalCount) {
  const allOrders = _range(1, totalCount);

  return _difference(allOrders, BANNED_TIDBITS);
}
