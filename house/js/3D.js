window.onload = function(){

var width = window.innerWidth;
var height = window.innerHeight;
var canvas = document.getElementById('canvas');

canvas.setAttribute('width', width);
canvas.setAttribute('height', height);

var renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setClearColor(0x000000);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000);
camera.position.set(0, 0, 1000);

var light = new THREE.AmbientLight(0xffffff);
scene.add(light);

var geometry = new THREE.PlaneGeometry(1000, 1000, 12, 12);
var material = new THREE.MeshBasicMaterial({color:0X00ff00, wireframe: true});
var floy = new THREE.Mesh(geometry, material);
floy.position.set(0, 0, 0);
floy.rotation.x = Math.PI/2;
scene.add(floy);


renderer.render(scene, camera);

}
