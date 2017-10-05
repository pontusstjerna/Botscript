import RobotInterface from './RobotInterface';

export default interface UserScript {
    update(RobotInterface: RobotInterface) : void;
}