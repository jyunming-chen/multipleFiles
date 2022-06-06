import * as THREE from 'https://cdn.skypack.dev/three@0.136';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.136/examples/jsm/controls/OrbitControls.js';
import {buildScene} from "./buildScene-E6b.js";

// global THREE objects defined here
var camera, scene, renderer;
export var flags = {light: true, move: false};

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.set (100,100,100);
  camera.lookAt (0,0,0);

  let controls = new OrbitControls (camera, renderer.domElement);
  
  ////////////////////////////////////////////////////////////////
  buildScene();  
  scene.add (new THREE.GridHelper (200,20,'red','white'));

}

function animate() {

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  
  console.log (flags.light)

}

export {init, animate};
//export {flag};
export {camera, scene, renderer};

