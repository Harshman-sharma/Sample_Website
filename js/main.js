let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    
    renderer = new THREE.WebGLRenderer( {antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    //box geometry is a cuboid that we can render by giving height, width and depth.
    const geometry = new THREE.BoxGeometry(2,2,2);
    
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    //const texture =  new THREE.TextureLoader().load();
    //const material = new THREE.MeshBasicMaterial( {map:texture} );
    
    cube = new THREE.Mesh( geometry, material );
    scene.add(cube);
    
    // Till this point the cube would still not be visible because
    // the cube and camera are by default at the same place
    
    camera.position.z = 5;
}


function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth/ window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Listening to the event, when a webiste is resized, accomodate the website accordingly.
window.addEventListener('resize',onWindowResize,false)

init();
animate();