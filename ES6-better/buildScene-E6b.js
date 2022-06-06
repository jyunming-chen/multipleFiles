// to use THREE
import * as THREE from 'https://cdn.skypack.dev/three@0.136';

// only need 'scene' in this module
import {scene, flags} from "./init.js";

export function buildScene() {
   let box = new THREE.Mesh (new THREE.BoxGeometry(50,30,10), new THREE.MeshNormalMaterial());
   scene.add (box);
  // flags.light = false;
}

