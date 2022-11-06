import { _decorator, Component, TiledMap, RigidBody2D, ERigidBody2DType, v2, BoxCollider2D, Camera, Button } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MainGame")
export class MainGame extends Component {
    @property(TiledMap)
    private tiledMap: TiledMap;

    protected onLoad(): void {
        // For developer
        // PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Shape;
    }

    protected start(): void {
        const tiledSize = this.tiledMap.getTileSize();

        this.tiledMap.getLayers().map((layer) => {
            const name = layer.getLayerName();

            //   const layer = this.tiledMap.getLayer("WorldBoundaries");
            const layerSize = layer.getLayerSize();

            for (let i = 0; i < layerSize.width; i++) {
                for (let k = 0; k < layerSize.height; k++) {
                    try {
                        //something went wrong heree!!!
                        // its not properly calculating the positions of the cube
                        //canvas and map size do not match, therefore, position is being all messed up
                        const tiled = layer.getTiledTileAt(i, k, true);
                        if (name === "Ground") {
                            return;
                        }
                        if (tiled.grid != 0) {
                            const blockBody = tiled.node.addComponent(RigidBody2D)!;
                            blockBody.type = ERigidBody2DType.Static;

                            const collider = tiled.node.addComponent(BoxCollider2D)!;
                            collider.offset = v2(-248, -152);
                            collider.size = tiledSize;
                            collider.group = 2;
                            collider.friction = 0;
                            collider.restitution = 0;

                            collider.apply();
                        }
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
        });
    }
}
