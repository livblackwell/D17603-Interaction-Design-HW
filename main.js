// Define variables
let scene, camera, renderer;

// Initialize the scene, camera, and renderer
function init() {
    // Create the scene
    scene = new THREE.Scene();

    // Create and position the camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    // Create the renderer and set its size
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);

    // Create the dodecagon geometry
    const geometry = new THREE.DodecahedronGeometry(10);

    // Create a basic material
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

    // Create a mesh and add it to the scene
    const dodecagon = new THREE.Mesh(geometry, material);
    scene.add(dodecagon);

    // Render the scene
    animate();
}

// Function to render the scene
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Call the init function to set everything up
init();
