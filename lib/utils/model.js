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

export function getRandomOrder(end = 1, limit = 6) {
  const range = _range(1, end + 1);

  return _sampleSize(range, limit);
}

/**
 * Get the store results that excludes the current slug if on a slug page
 *  otherwise return all results of the stated display count
 * @param {*} _this
 * @param {*} options
 * @returns []
 */
export function getStoreResults(_this, { getter, count } = {}) {
  const results = _this.$store.getters[getter];

  // When navigate programmatically, sometimes we have to wait for the store to be populated. So "results" can be empty to start.
  // Important!
  //  - Make sure the components calling this method, there is an empty array check of the computed results
  //  - This will prevent an error in the template loop while we wait for the store to be populated
  if (!results.length) {
    return [];
  }

  const currentSlug = _this.$route.params?.slug;
  const resultsSliced = results.slice(0, count);

  if (currentSlug) {
    const resultsExcludeCurrent = resultsSliced.filter(
      ({ slug }) => slug !== currentSlug,
    );

    if (resultsExcludeCurrent.length !== count) {
      resultsExcludeCurrent.push(results[count]);
    }

    return resultsExcludeCurrent;
  }

  return resultsSliced;
}
