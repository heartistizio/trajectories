import { Profile, ProfileEnum } from '#types';

export const isAllowedProfile = (profile?: any): profile is Profile =>
  !!profile && Object.keys(ProfileEnum).includes(profile);
