/** Constants for the game is stored here. 
 * This should probably be available for the player scripts.
 */

export const WIDTH = 1200;
export const HEIGHT = 600;
export const ROBOT = {
    DIMENSIONS: {
        WIDTH: 115,
        HEIGHT: 118,
    }
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