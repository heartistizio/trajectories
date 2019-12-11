"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _profiles_1 = require("#profiles");
const food_1 = require("#src/profiles/food");
const guest_1 = require("#src/profiles/guest");
exports.config = {
    PORT: 6969,
    profiles: {
        tourist: _profiles_1.createTouristProfile,
        religious: _profiles_1.createReligiousProfile,
        food: food_1.createFoodProfile,
        guest: guest_1.createGuestProfile,
    },
};
//# sourceMappingURL=config.js.map