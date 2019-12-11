import { createTouristProfile, createReligiousProfile } from '#profiles';
import { Config } from '#types';
import { createFoodProfile } from '#src/profiles/food';
import { createGuestProfile } from '#src/profiles/guest';

export const config: Config = {
  PORT: 6969,
  profiles: {
    tourist: createTouristProfile,
    religious: createReligiousProfile,
    food: createFoodProfile,
    guest: createGuestProfile,
  },
};
