/** Constants for the game is stored here. 
 * This should probably be available for the player scripts.
 */

export const WIDTH = 960;
export const HEIGHT = 600;
export const ROBOT = {
    DIMENSIONS: {
        WIDTH: 115,
        HEIGHT: 118,
    }
}
export const LIMITS = {
    MAX_TURN_PER_TICK: {
        body: 8 * 0.17, // 8 degrees per tick
        cannon: 10 * 0.17,
        radar: 20 * 0.17,
    },
    MAX_SPEED_PER_TICK: 3, // 3 pixels per tick
}
export const INITIAL_ENERGY = 100;
export const OFFSETS = {
    CANNON: {
        x: 24, // Centralized: body width / 2 - cannon width / 2
        y: -19,
    },
    RADAR: {
        x: 24, // Centralized in both x and y
        y: 44,
    },
}
export const BASE_PATHS = {
    ROBOTS: 'assets/game/sprites/robots/'
}