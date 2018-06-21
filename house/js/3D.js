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


	var floor_geometry = new THREE.PlaneGeometry( 1000, 1000, 12, 12 );
	var floor_material = new THREE.MeshBasicMaterial({color:0X32CD32, wireframe: true});
	var floor = new THREE.Mesh(floor_geometry, floor_material);
	floor.position.set(0, 0, 0);
	floor.rotation.x = Math.PI/2;
	scene.add(floor);

	var box_geometry = new THREE.BoxBufferGeometry( 100, 100, 100 );
	var box_material = new THREE.MeshStandardMaterial({color:0XBC8F8F, wireframe: false});
	var box = new THREE.Mesh(box_geometry, box_material);
	box.castShadow = true; 
	box.receiveShadow = true;
	box.position.set(0, 50, 0);
	scene.add(box);
	
	var cone_geometry = new THREE.ConeBufferGeometry( 71, 50, 4 );
	var cone_material = new THREE.MeshStandardMaterial( {color: 0x8B4513} );
	var cone = new THREE.Mesh( cone_geometry, cone_material );
	cone.position.set(0, 125, 0);
	cone.rotation.y = Math.PI*3/4;
	cone.castShadow = true; 
	cone.receiveShadow = true;
	scene.add( cone );


	

	

	function loop(){
		renderer.render(scene, camera);
		requestAnimationFrame(function(){loop();})
		controls.update();
	}
	
	loop();

}
