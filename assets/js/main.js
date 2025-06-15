// import * as THREE from './three/build/three.module.js';
// import WebGL from './three/examples/jsm/capabilities/WebGL.js';
// import { OrbitControls } from './three/examples/jsm/controls/OrbitControls.js';
// import { GLTFLoader } from './three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from './three.module.min.js';
import WebGL from './WebGL.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';

// Scene
const scene = new THREE.Scene();

// Camera
// PerspectiveCamera(fov, aspect, near, far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set( 0, 0, 20 );
camera.lookAt( 0, 0, 0 );

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// WebGL compatibility check
if ( WebGL.isWebGL2Available() ) {

	// Initiate function or other initializations here
	renderer.setAnimationLoop(animate);

} else {

	const warning = WebGL.getWebGL2ErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );

}

const wrapper = document.querySelector('.wrapper2');
wrapper.appendChild(renderer.domElement);

// cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//create a blue LineBasicMaterial
const material2 = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const geometry2 = new THREE.BufferGeometry().setFromPoints( points )
const line = new THREE.Line( geometry2, material2 );

// Loading
// const loader = new GLTFLoader();

// loader.load( 'path/to/model.glb', function ( gltf ) {

// 	scene.add( gltf.scene );

// }, undefined, function ( error ) {

// 	console.error( error );

// } );

scene.add( line );
renderer.render( scene, camera );

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
