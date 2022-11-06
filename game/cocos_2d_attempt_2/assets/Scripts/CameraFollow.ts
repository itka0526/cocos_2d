import { _decorator, Component, Node, RigidBody2D, Camera, Vec3, clamp, BoxCollider2D } from "cc";
const { ccclass, property } = _decorator;

@ccclass("CameraFollow")
export class CameraFollow extends Component {
    @property(Node)
    public followTransform: Node;

    private xMin;
    private xMax;
    private yMin;
    private yMax;
    private camY;
    private camX;
    private camOrthsize;
    private cameraRatio;
    private mainCam: Camera;

    protected start(): void {
        setTimeout(() => {
            this.mainCam.orthoHeight = 75;
        }, 100);

        this.xMin = -350;
        this.xMax = 350;
        this.yMin = -155;
        this.yMax = 155;
        this.mainCam = this.getComponent(Camera);
        this.camOrthsize = 75;
        this.cameraRatio = (this.xMax + this.camOrthsize) / 2;
    }
    protected update(dt: number): void {
        this.camY = clamp(this.followTransform.position.y, this.yMin + this.camOrthsize, this.yMax - this.camOrthsize);
        this.camX = clamp(this.followTransform.position.x, this.xMin + this.cameraRatio, this.xMax - this.cameraRatio);

        // const target_position = this.followTransform.getPosition();

        // const current_position = this.mainCam.node.getPosition();

        // current_position.lerp(target_position, 0.1);

        // this.node.setPosition(current_position);

        this.node.setPosition(new Vec3(this.camX, this.camY, this.node.position.z));
    }
}
