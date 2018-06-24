window.onload = function(){

	var width = window.innerWidth;
	var height = window.innerHeight;
	var canvas = document.getElementById('canvas');

	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);

	var renderer = new THREE.WebGLRenderer({canvas: canvas});
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	renderer.setClearColor(0xAFEEEE);
	document.body.appendChild( renderer.domElement );

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 1000);
	camera.position.set(0, 100, 400);

	var controls = new THREE.OrbitControls( camera, renderer.domElement );
	controls.minDistance = 300;
	

	var light = new THREE.AmbientLight( 0x404040 ); // soft white light
	scene.add( light );
	var light1 = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light1.position.set( 1000, 1000, 5000 ); 	
	light1.castShadow = true;
	scene.add(light1);
	var light2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light2.position.set( -1000, 1000, 5000 ); 	
	light2.castShadow = true;
	scene.add(light2);
	var light3 = new THREE.DirectionalLight( 0xffffff, 1 );
	light3.position.set( -5000, 5000, -5000 ); 	
	light3.castShadow = true;
	scene.add(light3);


var Key = {
	_pressed: {},

	A: 65,
	W: 87,
	D: 68,
	S: 83,

	isDown: function(keyCode){return this._pressed[keyCode];},
	onKeydown: function(event){this._pressed[event.keyCode]=true;},
	onKeyup: function(event){delete this._pressed[event.keyCode]}
}

	window.addEventListener('keyup', function(event){Key.onKeyup(event);},false);
	window.addEventListener('keydown', function(event){Key.onKeydown(event);},false);



	var floor_geometry = new THREE.PlaneGeometry( 1000, 1000, 12, 12 );
	var floor_material = new THREE.MeshBasicMaterial({color:0X32CD32, wireframe: true});
	var floor = new THREE.Mesh(floor_geometry, floor_material);
	floor.position.set(0, 0, 0);
	floor.rotation.x = Math.PI/2;
	scene.add(floor);



	var geometry = new THREE.BoxGeometry(50,50,50);
	var material = new THREE.MeshNormalMaterial({color:0x00ff00});
	Cube = new THREE.Mesh(geometry, material);
	scene.add(Cube);

function dynamo(){
	var rotY = 0;
	if(Key.isDown(Key.A)){
		rotY =Math.PI/200;
		Cube.position.x -=1;
		Cube.rotation.y += rotY;
			
	}
	if(Key.isDown(Key.D)){
		rotY =Math.PI/200;
		Cube.position.x +=1;
		Cube.rotation.y -= rotY;
	}
	if(Key.isDown(Key.W)){
		rotY =Math.PI/200;
		Cube.position.y +=1;
		Cube.rotation.x += rotY;
	}
	if(Key.isDown(Key.S)){
		rotY =Math.PI/200;
		Cube.position.y -=1;
		Cube.rotation.x -= rotY;
	}
}


	function loop(){
		dynamo();
		renderer.render(scene, camera);
		requestAnimationFrame(function(){loop();})
		controls.update();
	}
	
	loop();

}
