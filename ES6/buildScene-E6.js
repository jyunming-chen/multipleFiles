// to use THREE
import * as THREE from "https://threejs.org/build/three.module.js";

export function buildScene() {
   let box = new THREE.Mesh (new THREE.BoxGeometry(50,30,10), new THREE.MeshNormalMaterial());
   return box;
}
