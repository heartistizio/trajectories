"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
exports.createStopsPath = (types, count) => shuffleArray(types.map(type => Object.values(type)).flat()).slice(0, count);
//# sourceMappingURL=create-stops-path.js.map