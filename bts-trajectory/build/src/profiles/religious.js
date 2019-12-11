"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pick_random_stop_1 = require("#utils/pick-random-stop");
const create_stops_path_1 = require("#utils/create-stops-path");
const hotels_1 = require("#data/hotels");
const food_1 = require("#data/food");
const religious_1 = require("#data/religious");
const _logger_1 = require("#logger");
const LOG = _logger_1.getLogger(__filename);
exports.createReligiousProfile = () => {
    const hotel = pick_random_stop_1.pickRandom(hotels_1.hotels);
    const count = Math.floor(Math.random() * (10 - 4)) + 4;
    LOG.info(`Number of stops: ${count}`);
    const stops = create_stops_path_1.createStopsPath([religious_1.religious, food_1.food], count);
    return [hotel, ...stops];
};
//# sourceMappingURL=religious.js.map