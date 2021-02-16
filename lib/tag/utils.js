import _includes from 'lodash/includes';
import * as tags from './constants';

export function isValidTag(tag) {
  return _includes(tags, tag);
}
