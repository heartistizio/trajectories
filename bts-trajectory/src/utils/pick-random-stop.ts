import { Stops } from '#types';
import { randomFromObject } from './random-from-object';

export const pickRandom = (stops: Stops) => stops[randomFromObject(stops)];
