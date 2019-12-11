import { pickRandom } from '#utils/pick-random-stop';
import { createStopsPath } from '#utils/create-stops-path';
import { hotels } from '#data/hotels';
import { food } from '#data/food';
import { religious } from '#data/religious';
import { getLogger } from '#logger';

const LOG = getLogger(__filename);

export const createReligiousProfile = () => {
  const hotel = pickRandom(hotels);
  const count = Math.floor(Math.random() * (10 - 4)) + 4;

  LOG.info(`Number of stops: ${count}`);

  const stops = createStopsPath([religious, food], count);

  return [hotel, ...stops];
};
