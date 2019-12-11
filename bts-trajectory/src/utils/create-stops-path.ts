import { Stops, Stop } from '#types';
import { pickRandom } from './pick-random-stop';
import { randomFromObject } from './random-from-object';
import { filterTruthy } from './filter-truthy';

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const createStopsPath = (types: Stops[], count: number) =>
  shuffleArray(types.map(type => Object.values(type)).flat()).slice(0, count);
