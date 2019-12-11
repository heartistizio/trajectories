"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick_random_stop_1 = require("#utils/pick-random-stop");
const create_stops_path_1 = require("#utils/create-stops-path");
const hotels_1 = require("#data/hotels");
const food_1 = require("#data/food");
const _logger_1 = require("#logger");
const LOG = _logger_1.getLogger(__filename);
exports.createGuestProfile = () => {
    const hotel = pick_random_stop_1.pickRandom(hotels_1.hotels);
    const stops = create_stops_path_1.createStopsPath([food_1.food], 2);
    return [hotel, stops[0], hotel, stops[1]];
};
//# sourceMappingURL=guest.js.map