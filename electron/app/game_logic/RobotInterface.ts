export default interface RobotInterface {
    ahead(speed: number) : void;
    turnBody(radians: number) : void;
    turnCannon(radians: number) : void;
    turnRadar(radians: number) : void;
}