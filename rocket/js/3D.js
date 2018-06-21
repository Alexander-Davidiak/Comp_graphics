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

	var Cyl_geometry = new THREE.CylinderBufferGeometry( 20, 20, 200, 32 );
	var Cyl_material = new THREE.MeshStandardMaterial({color:0xF5FFFA, wireframe: false});
	var Cyl = new THREE.Mesh(Cyl_geometry, Cyl_material);
	Cyl.castShadow = true; 
	Cyl.receiveShadow = true;
	Cyl.rotation.x = Math.PI/2;
	Cyl.position.set(0, 100, 0);
	scene.add(Cyl);
	
	var con_geometry = new THREE.ConeBufferGeometry( 20, 50, 32 );
	var con_material = new THREE.MeshStandardMaterial({color:0xF5FFFA, wireframe: false});
	var con = new THREE.Mesh(con_geometry, con_material);
	con.castShadow = true; 
	con.receiveShadow = true;
	con.rotation.x = Math.PI/2;
	con.position.set(0, 100, 125);
	scene.add(con);
	
	var sphere_geometry = new THREE.CylinderBufferGeometry( 20, 30, 50, 32, 1, true );
	var sphere_material = new THREE.MeshStandardMaterial({color:0xF5FFFA, wireframe: false});
	var sphere = new THREE.Mesh(sphere_geometry, sphere_material);
	//sphere.thetaLength = 1.3;
	sphere.castShadow = true; 
	sphere.receiveShadow = true;
	sphere.rotation.x = Math.PI/2;
	sphere.position.set(0, 100, -125);
	scene.add(sphere);

	var cube_geometry = new THREE.BoxGeometry( 20, 2, 80 );
	var cube_material = new THREE.MeshStandardMaterial( {color: 0xF5FFFA, wireframe: false} );
	var cube = new THREE.Mesh( cube_geometry, cube_material );
	cube.castShadow = true; 
	cube.receiveShadow = true;
	cube.rotation.y = -Math.PI*12/13;
	cube.position.set(-19, 100, -45);
	scene.add( cube );

	var cube2 = new THREE.Mesh( cube_geometry, cube_material );
	cube2.castShadow = true; 
	cube2.receiveShadow = true;
	cube2.rotation.y = Math.PI*12/13;
	cube2.position.set(19, 100, -45);
	scene.add( cube2 );


	function loop(){
		renderer.render(scene, camera);
		requestAnimationFrame(function(){loop();})
		controls.update();
	}
	
	loop();

}
