import { UserFeature, UsersEffictService as UsersEffectService } from './users';

export const AppStore = {
  [UserFeature.name]: UserFeature.reducer,
};

export const AppEffects = [UsersEffectService];
