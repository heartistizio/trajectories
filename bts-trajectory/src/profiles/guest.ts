import { pickRandom } from '#utils/pick-random-stop';
import { createStopsPath } from '#utils/create-stops-path';
import { hotels } from '#data/hotels';
import { food } from '#data/food';
import { religious } from '#data/religious';
import { getLogger } from '#logger';

const LOG = getLogger(__filename);

export const createGuestProfile = () => {
  const hotel = pickRandom(hotels);
  const stops = createStopsPath([food], 2);

  return [hotel, stops[0], hotel, stops[1]];
};
