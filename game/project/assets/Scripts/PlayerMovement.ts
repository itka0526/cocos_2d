import { _decorator, Component, EventKeyboard, KeyCode, Input, input, Vec3, RigidBody2D, CCFloat } from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerMovement")
export class PlayerMovement extends Component {
    @property(CCFloat)
    public playerSpeed: number = 200;
    private moveDelta: Vec3;

    start() {}

    update(deltaTime: number) {
        const { forwards, backwards, left, right } = this.actions;
        this.moveDelta = new Vec3(0, (forwards ? 1 : 0) - (backwards ? 1 : 0), 0)
            .subtract(new Vec3((left ? 1 : 0) - (right ? 1 : 0), 0, 0))
            .normalize()
            .multiplyScalar(this.playerSpeed);

        // swipe sprites
        if (this.moveDelta.x > 0) this.node.scale = Vec3.ONE;
        else if (this.moveDelta.x < 0) this.node.scale = new Vec3(-1, 1, 1);

        // Transforms
        const temp = this.node.getComponent(RigidBody2D).linearVelocity;

        temp.x = this.moveDelta.x * deltaTime;
        temp.y = this.moveDelta.y * deltaTime;

        this.node.getComponent(RigidBody2D).linearVelocity = temp;

        // this.node.translate(new Vec3(0, this.moveDelta.y * deltaTime, 0));
        // this.node.translate(new Vec3(this.moveDelta.x * deltaTime, 0, 0));
    }

    private actions = {
        forwards: false,
        backwards: false,
        left: false,
        right: false,
    };

    onKeyDown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                this.actions.forwards = true;
                break;
            case KeyCode.KEY_S:
                this.actions.backwards = true;
                break;
            case KeyCode.KEY_A:
                this.actions.left = true;
                break;
            case KeyCode.KEY_D:
                this.actions.right = true;
                break;
        }
    }

    onKeyUp(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_W:
                this.actions.forwards = false;
                break;
            case KeyCode.KEY_S:
                this.actions.backwards = false;
                break;
            case KeyCode.KEY_A:
                this.actions.left = false;
                break;
            case KeyCode.KEY_D:
                this.actions.right = false;
                break;
        }
    }

    onLoad() {
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
}
