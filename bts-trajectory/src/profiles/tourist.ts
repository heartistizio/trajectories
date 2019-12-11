import { pickRandom } from '#utils/pick-random-stop';
import { createStopsPath } from '#utils/create-stops-path';
import { hotels } from '#data/hotels';
import { sights } from '#data/sights';
import { food } from '#data/food';
import { getLogger } from '#logger';

const LOG = getLogger(__filename);

export const createTouristProfile = () => {
  const hotel = pickRandom(hotels);
  const count = Math.floor(Math.random() * (10 - 4)) + 4;

  LOG.info(`Number of stops: ${count}`);

  const spots = createStopsPath([sights, food], count);

  return [hotel, ...spots];
};
