/** MUST IMPLEMENT THIS */
import UserScript from '../game_logic/UserScript';
import RobotInterface from '../game_logic/RobotInterface';

export default class TestScript implements UserScript {
    update(robot: RobotInterface) {
        robot.ahead(3);
        robot.turnBody(0.17*5);
    }
}