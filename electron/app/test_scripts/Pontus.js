class PontusAsfinaRobot {
    constructor(){
        console.log('*****PONTUS IS ALIVE*****');
    }

    update(robot) {
        robot.turnRadar(0.04);
        robot.ahead(2);
        robot.turnBody(0.01);
    }
}