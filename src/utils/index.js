import { parse } from 'qs';
import * as R from 'ramda';

export const getLocationParams = () => {
  const { location: { search } } = window;
  console.log(search)
  return parse(R.replace(/^\?/, '', search))
}