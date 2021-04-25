import _includes from 'lodash/includes';
import _range from 'lodash/range';
import _difference from 'lodash/difference';
import _sampleSize from 'lodash/sampleSize';
import * as tags from '../constants/tag';
import { BANNED_TIDBITS } from '../constants/model';

export function isValidTag(tag) {
  return _includes(tags, tag);
}

export function getRandomTidbitOrders(totalCount, limit = 5) {
  const allTidbitOrders = _range(1, totalCount);
  const allowedTidbitOrders = _difference(allTidbitOrders, BANNED_TIDBITS);

  return _sampleSize(allowedTidbitOrders, limit);
}

// TODO: remove if not being used
export function getRandomTopTidbits(topTidbits, limit = 5) {
  return _sampleSize(topTidbits, limit);
}

export function getRandomOrder(end = 1, limit = 6) {
  const range = _range(1, end + 1);

  return _sampleSize(range, limit);
}
