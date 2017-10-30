import RobotInterface from './RobotInterface';

export default interface UserScript {
    update(userRobot: RobotInterface) : void;
}