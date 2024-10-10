import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "https://cdn.skypack.dev/gsap@3.9.1";
import { Sky } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/objects/Sky.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-352, 50, 566);  // Start position: -352, 50, 566

let object;
let objToRender = 'eye';
let objToRender2 = 'dino';
let objToRender3 = 'pot';
let objToRender4 = 'bench';
let objToRender5 = 'pot2';
const loader = new GLTFLoader();

// Load model
loader.load(
  `models/${objToRender}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(40, 40, 40);
    object.position.set(0, 0, 0);
    scene.add(object);
  }
);

// Load model
loader.load(
  `models/${objToRender2}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(3, 3, 3);
    object.position.set(-160.88, 45, 395.15);
    scene.add(object);
  }
);

// Load model
loader.load(
  `models/${objToRender3}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(60, 60, 60);
    object.position.set(175, 25, 730);
    scene.add(object);
  }
);

// Load model
loader.load(
  `models/${objToRender4}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(60, 60, 60);
    object.position.set(-261, 0, 453);
    scene.add(object);
  }
);

// Load model
loader.load(
  `models/${objToRender5}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(60, 60, 60);
    object.position.set(-327, 0, 458);
    scene.add(object);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

// Hide the mouse pointer and lock it inside the canvas
renderer.domElement.style.cursor = 'none';
renderer.domElement.addEventListener('click', () => {
  renderer.domElement.requestPointerLock();
});

// Add lights
const topLight = new THREE.DirectionalLight(0xffffff, 0.3);
topLight.position.set(28, 150, 284);
scene.add(topLight);

const topLight2 = new THREE.DirectionalLight(0xffffff, 0.3);
topLight2.position.set(-152.28, 50, 399.42);
scene.add(topLight2);

const hemisphereLight = new THREE.HemisphereLight(0xaaaaaa, 0x444444, 0.5);
scene.add(hemisphereLight);

const ambientLight = new THREE.AmbientLight(0x333333, 0.3);
scene.add(ambientLight);

// Define the spotlight to simulate light rays through a window
const spotLight = new THREE.SpotLight(0xffdd88, 0.3);
spotLight.position.set(41, 200, 233);
spotLight.angle = Math.PI / 2; 
spotLight.penumbra = 0.2;
spotLight.decay = 2; 
spotLight.distance = 1000;
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 2048;
spotLight.shadow.mapSize.height = 4096;
spotLight.shadow.camera.near = 10;
spotLight.shadow.camera.far = 500;
scene.add(spotLight);

// Add another spotlight at the specified coordinates (-8, 150, 507)
const secondSpotLight = new THREE.SpotLight(0xffdd88, 0.3);  // Soft yellow hue for sunlight effect
secondSpotLight.position.set(22, 200, 552);  // New spotlight position
secondSpotLight.angle = Math.PI / 2;  // Narrower beam
secondSpotLight.penumbra = 0.2;
secondSpotLight.decay = 2;  // Light decay for realism
secondSpotLight.distance = 1000;
secondSpotLight.castShadow = true;
secondSpotLight.shadow.mapSize.width = 2048;
secondSpotLight.shadow.mapSize.height = 4096;
secondSpotLight.shadow.camera.near = 10;
secondSpotLight.shadow.camera.far = 500;
scene.add(secondSpotLight);

const thirdSpotLight = new THREE.SpotLight(0xffdd88, 0.7);  // Soft yellow hue for sunlight effect
thirdSpotLight.position.set(544, 200, -61);  // New spotlight position
thirdSpotLight.angle = Math.PI / 2;  // Narrower beam
thirdSpotLight.penumbra = 0.2;
thirdSpotLight.decay = 2;  // Light decay for realism
thirdSpotLight.distance = 1000;
thirdSpotLight.castShadow = true;
thirdSpotLight.shadow.mapSize.width = 2048;
thirdSpotLight.shadow.mapSize.height = 4096;
thirdSpotLight.shadow.camera.near = 10;
thirdSpotLight.shadow.camera.far = 500;
scene.add(thirdSpotLight);

const forthSpotLight = new THREE.SpotLight(0xffdd88,0.7);  // Soft yellow hue for sunlight effect
forthSpotLight.position.set(25.78, 150, 698);  // New spotlight position
forthSpotLight.angle = Math.PI / 6;  // Narrower beam
forthSpotLight.penumbra = 0.2;
forthSpotLight.decay = 2;  // Light decay for realism
forthSpotLight.distance = 1000;
forthSpotLight.castShadow = true;
forthSpotLight.shadow.mapSize.height = 4096;
forthSpotLight.shadow.camera.near = 10;
forthSpotLight.shadow.camera.far = 500;
scene.add(forthSpotLight);


// Add a point light to simulate secondary sunlight rays
const pointLight = new THREE.PointLight(0xffdd88, 0.2, 1000);
pointLight.position.set(28, 150, 284);  // Simulating the position near a "window"
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 2048;
scene.add(pointLight);
// Second point light at the specified coordinates
const pointLight2 = new THREE.PointLight(0xffdd88, 0.2, 1000); // Set a non-zero intensity
pointLight2.position.set(25.78, 150, 698);  // Position the second light
pointLight2.castShadow = true;  // Enable shadow casting for this light as well
pointLight2.shadow.mapSize.width = 1024;
pointLight2.shadow.mapSize.height = 2048;
scene.add(pointLight2);
// Second point light at the specified coordinates
const pointLight3 = new THREE.PointLight(0xffdd88, 0.2, 1000); // Set a non-zero intensity
pointLight3.position.set(-160.88, 45, 395.15);  // Position the second light
pointLight3.castShadow = true;  // Enable shadow casting for this light as well
pointLight3.shadow.mapSize.width = 1024;
pointLight3.shadow.mapSize.height = 2048;
scene.add(pointLight3);

// Create the sunset sky
const sky = new Sky();
sky.scale.setScalar(450000);
scene.add(sky);

const skyParams = {
  turbidity: 10,
  rayleigh: 0,  // Reduced for a darker sky
  mieCoefficient: 0.005,
  mieDirectionalG: 0.8,
  elevation: -10,  // Low elevation for a night sky
  azimuth: 270,  // Position the "moon" or light source
  exposure: renderer.toneMappingExposure
};

function updateSky() {
  const sun = new THREE.Vector3();
  const theta = Math.PI * (skyParams.elevation / 180);
  const phi = Math.PI * (skyParams.azimuth / 180);
  sun.x = Math.cos(phi) * Math.sin(theta);
  sun.y = Math.sin(theta);
  sun.z = Math.cos(phi) * Math.cos(theta);
  sky.material.uniforms['sunPosition'].value.copy(sun);
  renderer.toneMappingExposure = skyParams.exposure;
}

// Create a star field
const createStars = () => {
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 1000; // Number of stars
  const positions = new Float32Array(starCount * 3); // x, y, z for each star

  for (let i = 0; i < starCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2000; // Random positions in the range
  }

  starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
};

// Call the function to create stars
createStars();

// Set sky initially
updateSky();

// Set wall boundaries
const boundaries = {
  minX: -500,
  maxX: 500,
  minY: 50,   // Lock the Y position
  maxY: 50,   // Lock the Y position
  minZ: -700,
  maxZ: 700
};

const moveSpeed = 5; // Reduced move speed
const rotationSpeed = 0.0005; // Reduced turn speed for smoother control

// Variables to control camera rotation
let yaw = 0;  // Horizontal rotation
let pitch = 0;  // Vertical rotation
const pitchLimit = Math.PI / 3;  // Limit the pitch to 60 degrees

// Mouse move handler to control only horizontal rotation
function onMouseMove(event) {
  if (document.pointerLockElement === renderer.domElement) {
    // Apply mouse movement to yaw for horizontal
    yaw -= event.movementX * rotationSpeed;
    
    // Update camera rotation
    camera.rotation.set(pitch, yaw, 0);  // Lock roll
  }
}

document.addEventListener('mousemove', onMouseMove);



// Raycaster setup for click detection
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
raycaster.far = 2000;

// Divs for displaying information
const artInfoDiv = document.createElement('div');
artInfoDiv.style.position = 'absolute';
artInfoDiv.style.top = '50%';
artInfoDiv.style.right = '10px';
artInfoDiv.style.transform = 'translateY(-50%)';
artInfoDiv.style.color = 'white';
artInfoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
artInfoDiv.style.padding = '15px';
artInfoDiv.style.display = 'none';
artInfoDiv.style.borderRadius = '10px';
artInfoDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
document.body.appendChild(artInfoDiv);

const modelInfoDiv = document.createElement('div');
modelInfoDiv.style.position = 'absolute';
modelInfoDiv.style.top = '50%';
modelInfoDiv.style.right = '10px';
modelInfoDiv.style.transform = 'translateY(-50%)';
modelInfoDiv.style.color = 'white';
modelInfoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
modelInfoDiv.style.padding = '15px';
modelInfoDiv.style.display = 'none';
modelInfoDiv.style.borderRadius = '10px';
modelInfoDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
document.body.appendChild(modelInfoDiv);

// Function to format text
function formatText(text) {
  const words = text.split(' ');
  const formattedLines = [];
  for (let i = 0; i < words.length; i += 9) {
    formattedLines.push(words.slice(i, i + 9).join(' '));
  }
  return formattedLines.join('<br>');
}

// Separate display functions for art and model information
function displayArtInfo(title, description, artist) {
  artInfoDiv.innerHTML = `<strong>${title}</strong><br>${formatText(description)}<br><em>${artist}</em>`;
  artInfoDiv.style.display = 'block';
  modelInfoDiv.style.display = 'none';  // Hide model info if art is clicked
}

function displayModelInfo(title, description, artist) {
  modelInfoDiv.innerHTML = `<strong>${title}</strong><br>${formatText(description)}<br><em>${artist}</em>`;
  modelInfoDiv.style.display = 'block';
  artInfoDiv.style.display = 'none';  // Hide art info if model is clicked
}

// Art and Model Arrays
const artPieces = [];
const clickableBoxes = [];
const artDetails = [
  { position: [-8, 50, 580], size: [50, 30, 1], textureUrl: '/pics/test1.jpg', title: "Art Piece 1", description: "Description for Art 1", artist: "Artist 1" }
];
const modelDetails = [
  { position: [-160.88, 45, 393.15], size: [40, 40, 40], title: "Type - 59", description: "A ferocious tank used in war in Viet Nam", artist: "China/USSR" }
];

// TextureLoader for Art Pieces
const textureLoader = new THREE.TextureLoader();
artDetails.forEach(detail => {
  const artPieceGeometry = new THREE.BoxGeometry(...detail.size);
  textureLoader.load(detail.textureUrl, (texture) => {
    const artPieceMaterial = new THREE.MeshBasicMaterial({ map: texture });
    const artPiece = new THREE.Mesh(artPieceGeometry, artPieceMaterial);
    artPiece.position.set(...detail.position);
    artPiece.rotation.y = Math.PI / 2;  // Rotate art piece
    scene.add(artPiece);
    artPiece.userData = detail;
    artPieces.push(artPiece);
  });
});

// Create Invisible Click Boxes for Models
modelDetails.forEach(detail => {
  const boxGeometry = new THREE.BoxGeometry(...detail.size);
  const invisibleMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
  const clickableBox = new THREE.Mesh(boxGeometry, invisibleMaterial);
  clickableBox.position.set(...detail.position);
  clickableBox.userData = detail;
  scene.add(clickableBox);
  clickableBoxes.push(clickableBox);
});

// Separate Click Event Handlers for Art Pieces and Models
renderer.domElement.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  // Check for Art Piece Clicks
  let intersects = raycaster.intersectObjects(artPieces, false);
  if (intersects.length > 0) {
    const clickedPiece = intersects[0].object;
    displayArtInfo(clickedPiece.userData.title, clickedPiece.userData.description, clickedPiece.userData.artist);
    return;
  }

  // Check for Model Clicks if no Art Piece is Clicked
  intersects = raycaster.intersectObjects(clickableBoxes, false);
  if (intersects.length > 0) {
    const clickedBox = intersects[0].object;
    const modelInfo = clickedBox.userData;
    displayModelInfo(modelInfo.title, modelInfo.description, modelInfo.artist);
  }
});


// Event listener for the button to move the camera and look up
const lookUpButton = document.getElementById("lookUpButton");
lookUpButton.addEventListener('click', () => {
  gsap.to(camera.position, { duration: 0.5, y: 300, ease: 'power3.out' });
});

// Camera controls
document.addEventListener('keydown', (event) => {
  if (event.code === 'Escape') {
    document.exitPointerLock();
  }
});


document.addEventListener('keydown', (event) => {
  // Unlock the pointer if ESC is pressed
  if (event.code === 'Escape') {
    document.exitPointerLock();
  }
});

// Handle keyboard controls with collision detection and locking Y position
function onKeyDown(event) {
  // Forward
  if (event.code === 'KeyW') {
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(camera.quaternion); // Apply camera rotation
    const newPos = camera.position.clone().add(forward.multiplyScalar(moveSpeed));
    if (newPos.z >= boundaries.minZ && newPos.z <= boundaries.maxZ) {
      gsap.to(camera.position, { duration: 0.5, x: newPos.x, y: boundaries.minY, z: newPos.z, ease: 'power3.out' });
    }
  }

  // Backward
  if (event.code === 'KeyS') {
    const backward = new THREE.Vector3(0, 0, 1);
    backward.applyQuaternion(camera.quaternion); // Apply camera rotation
    const newPos = camera.position.clone().add(backward.multiplyScalar(moveSpeed));
    if (newPos.z >= boundaries.minZ && newPos.z <= boundaries.maxZ) {
      gsap.to(camera.position, { duration: 0.5, x: newPos.x, y: boundaries.minY, z: newPos.z, ease: 'power3.out' });
    }
  }

  // Side Movement - Left and Right
  if (event.code === 'KeyA' || event.code === 'KeyD') {
    const direction = event.code === 'KeyA' ? -1 : 1; // -1 for left, 1 for right
    const strafe = new THREE.Vector3(direction, 0, 0);
    strafe.applyQuaternion(camera.quaternion);
    const newPos = camera.position.clone().add(strafe.multiplyScalar(moveSpeed));
    if (newPos.x >= boundaries.minX && newPos.x <= boundaries.maxX) {
      gsap.to(camera.position, { duration: 0.5, x: newPos.x, y: boundaries.minY, z: camera.position.z, ease: 'power3.out' });
    }
  }
};
// Add mouse move listener
document.addEventListener('mousemove', onMouseMove);

// Add keyboard listener for movement
document.addEventListener('keydown', onKeyDown);


// Modify the existing click event listener to hide info divs when clicking on empty space
renderer.domElement.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  let intersects = raycaster.intersectObjects(artPieces, false);
  if (intersects.length > 0) {
    const clickedPiece = intersects[0].object;
    displayArtInfo(clickedPiece.userData.title, clickedPiece.userData.description, clickedPiece.userData.artist);
    return;
  }

  intersects = raycaster.intersectObjects(clickableBoxes, false);
  if (intersects.length > 0) {
    const clickedBox = intersects[0].object;
    const modelInfo = clickedBox.userData;
    displayModelInfo(modelInfo.title, modelInfo.description, modelInfo.artist);
  } else {
    hideInfoDivs();  // Hide info divs if nothing is clicked
  }
});


// Create Crosshair as a Cross
const crosshair = document.createElement('div');
crosshair.style.position = 'absolute';
crosshair.style.top = '50%';
crosshair.style.left = '50%';
crosshair.style.width = '2px';
crosshair.style.height = '20px';
crosshair.style.background = 'white';
crosshair.style.transform = 'translate(-50%, -50%)';
crosshair.style.zIndex = '1000';

const horizontalBar = document.createElement('div');
horizontalBar.style.position = 'absolute';
horizontalBar.style.top = '50%';
horizontalBar.style.left = '50%';
horizontalBar.style.width = '20px';
horizontalBar.style.height = '2px';
horizontalBar.style.background = 'white';
horizontalBar.style.transform = 'translate(-50%, -50%)';
horizontalBar.style.zIndex = '1000';

document.body.appendChild(crosshair);
document.body.appendChild(horizontalBar);

const coordDisplay = document.createElement('div');
coordDisplay.style.position = 'absolute';
coordDisplay.style.top = '10px';
coordDisplay.style.left = '10px';
coordDisplay.style.color = 'white';
coordDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
coordDisplay.style.padding = '8px';
coordDisplay.style.fontFamily = 'Arial';
document.body.appendChild(coordDisplay);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  updateSky();

  coordDisplay.innerHTML = `
    Camera Coordinates:<br>
    X: ${camera.position.x.toFixed(2)}<br>
    Y: ${camera.position.y.toFixed(2)} (Fixed)<br>
    Z: ${camera.position.z.toFixed(2)}
  `;
}


window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation for showing/hiding info divs using GSAP
function showInfoDiv(div) {
  gsap.to(div, { duration: 0.5, opacity: 1, display: 'block', ease: 'power3.out' });
}

function hideInfoDiv(div) {
  gsap.to(div, { duration: 0.5, opacity: 0, display: 'none', ease: 'power3.out' });
}
// Utility function to hide both info divs
function hideInfoDivs() {
  hideInfoDiv(artInfoDiv);
  hideInfoDiv(modelInfoDiv);
}

// GSAP animation for showing and hiding the "Click for info" hover message
function showHoverMessage() {
  gsap.to(hoverMessage, { opacity: 1, display: 'block', duration: 0.5, ease: 'power3.out' });
}

function hideHoverMessage() {
  gsap.to(hoverMessage, { opacity: 0, display: 'none', duration: 0.5, ease: 'power3.out' });
}

// Display the message when crosshair hovers over objects
const hoverMessage = document.createElement('div');
hoverMessage.innerHTML = "Click for info";
hoverMessage.style.position = 'absolute';
hoverMessage.style.top = '55%';
hoverMessage.style.left = '50%';
hoverMessage.style.transform = 'translate(-50%, -50%)';
hoverMessage.style.color = 'white';
hoverMessage.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
hoverMessage.style.padding = '10px';
hoverMessage.style.borderRadius = '10px';
hoverMessage.style.display = 'none';
hoverMessage.style.zIndex = '1001';
document.body.appendChild(hoverMessage);

// Modify the existing hover message div style for animation control
hoverMessage.style.opacity = 0;  // Initially hidden
hoverMessage.style.display = 'none';  // Hidden by default

// Update the raycasting logic to handle hover detection and show hover message
renderer.domElement.addEventListener('mousemove', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  let intersects = raycaster.intersectObjects(artPieces, false);
  if (intersects.length > 0) {
    showHoverMessage();  // Fade in hover message
    return;
  }

  intersects = raycaster.intersectObjects(clickableBoxes, false);
  if (intersects.length > 0) {
    showHoverMessage();  // Fade in hover message
  } else {
    hideHoverMessage();  // Fade out hover message when not hovering any object
  }
});

// Modify the existing click event listener for handling clicks on art pieces and models
renderer.domElement.addEventListener('click', (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);

  let intersects = raycaster.intersectObjects(artPieces, false);
  if (intersects.length > 0) {
    const clickedPiece = intersects[0].object;
    displayArtInfo(clickedPiece.userData.title, clickedPiece.userData.description, clickedPiece.userData.artist);
    showInfoDiv(artInfoDiv); // Animate showing art info div
    return;
  }

  intersects = raycaster.intersectObjects(clickableBoxes, false);
  if (intersects.length > 0) {
    const clickedBox = intersects[0].object;
    const modelInfo = clickedBox.userData;
    displayModelInfo(modelInfo.title, modelInfo.description, modelInfo.artist);
    showInfoDiv(modelInfoDiv); // Animate showing model info div
  } else {
    hideInfoDivs();  // Hide info divs if nothing is clicked
  }
});

// Animate showing and hiding of the hover message based on intersection
hoverMessage.style.transition = 'opacity 0.3s ease';



// -- Start Screen Setup -- //
const startScreen = document.getElementById('startScreen');
const startButton = document.getElementById('startButton');
const songInfo = document.getElementById('songInfo');

// Audio setup
const listener = new THREE.AudioListener();
camera.add(listener);
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
audioLoader.load('./ambient/ambient2.ogg', function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.25);

  document.getElementById('song-title').textContent = 'First Raindrops';
  document.getElementById('artist-name').textContent = 'by: Dennis Kuo';
});

// Show the start screen and wait for the button click
startButton.addEventListener('click', () => {
  gsap.to(startScreen, { opacity: 0, duration: 0.5, onComplete: () => startScreen.style.display = 'none' });

  // Play audio only when the button is clicked
  sound.play();
  songInfo.style.display = 'block';
});



animate();
