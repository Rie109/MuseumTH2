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
let objToRender6 = 'AK-47';
let objToRender7 = 'Artillery';
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
// Load model
loader.load(
  `models/${objToRender6}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(2, 2, 2);
    object.position.set(-160, 50, 680);
    scene.add(object);
  }
);
// Load model
loader.load(
  `models/${objToRender7}/scene.gltf`,
  function (gltf) {
    object = gltf.scene;
    object.scale.set(8, 8, 8);
    object.position.set(203, 45, 580);
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

const moveSpeed = 9; // Reduced move speed
const rotationSpeed = 0.0003; // Reduced turn speed for smoother control

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
  { position: [-7, 50, 585], size: [50, 30, 1], textureUrl: 'pics/taynguyen/5.webp', title: "Phương tiện chiến tranh ở Chi khu quân sự kiên cố Đức Lập", description: "Phương tiện chiến tranh của địch ở Chi khu quân sự kiên cố Đức Lập rơi vào tay quân giải phóng.", artist: "Tư liệu TTXVN" }
  ,{ position: [-7, 50, 525], size: [50, 30, 1], textureUrl: 'pics/taynguyen/3.webp', title: "Phương tiện VNCH Chi khu kiên cố Đức Lập rơi vào tay quân giải phóng", description: "Xe tăng quân Giải phóng tấn công địch trong chiến dịch Tây Nguyên tháng 3/1975 ", artist: "Tư liệu TTXVN" }
  ,{ position: [-7, 50, 465], size: [50, 30, 1], textureUrl: 'pics/taynguyen/8.webp', title: "Chiếm sân bay Hòa Bình", description: "Quân Giải phóng chiếm sân bây Hòa Bình (Buôn Ma Thuột)", artist: "Tư liệu TTXVN" }
  ,{ position: [7, 50, 585], size: [50, 30, 1], textureUrl: 'pics/taynguyen/1.webp', title: "Giải phóng Quy Nhơn", description: "Pháo binh và xe tăng quân Giải phóng trên đường hành quân vào giải phóng Quy Nhơn", artist: "Vũ Tạo - TTXVN" }
  ,{ position: [7, 50, 525], size: [50, 30, 1], textureUrl: 'pics/taynguyen/7.webp', title: "Giải phóng Đắc Tô - Tân Cảnh (Kon Tum)", description: "Bộ đội ta giải phóng Đắc Tô - Tân Cảnh (Kon Tum)", artist: "Lương Biên - TTXVN" }
  ,{ position: [7, 50, 465], size: [50, 30, 1], textureUrl: 'pics/taynguyen/4.webp', title: "Xe quân đoàn 2 VNCH chiến thắng Tây Nguyên", description: "Quân giải phóng chặn đánh và phá huỷ phương tiện của lính ngụy thuộc Quân đoàn 2 rút chạy trên đường số 7 từ Cheo Reo đi Phú Bổn", artist: "Tư liệu TTXVN" }
  ,{ position: [-7, 50, 245], size: [50, 30, 1], textureUrl: 'pics/danang/1.jpg', title: "Giải phóng Thừa Thiên Huế", description: "Quân ta tấn công theo 4 hướng: Tuyến phía Nam, tuyến phía Bắc, tuyến phía Tây - Bắc Huế và tuyến phía Tây.", artist: "Tư liệu TTXVN" }
  ,{ position: [-7, 50, 185], size: [50, 30, 1], textureUrl: 'pics/danang/2.jpg', title: "Giải phóng thành phố Đà Nẵng", description: "Bộ đội ta tiến vào giải phóng thành phố Đà Nẵng", artist: "Tư liệu TTXVN" }
  ,{ position: [-7, 50, 125], size: [50, 30, 1], textureUrl: 'pics/danang/3.jpg', title: "Bộ đội tiến vào Huế, hai bên đường là vũ khí và phương tiện quân Sài Gòn bỏ lại", description: "", artist: "Tư liệu TTXVN" } 
  ,{ position: [7, 50, 245], size: [50, 30, 1], textureUrl: 'pics/danang/4.jpg', title: "Quân ta dành quyền kiểm soát ở Đà Nẳng", description: "CCB Trần Như Tiếp (giữa) cùng đồng đội tại sân bay Đà Nẵng trong ngày giải phóng", artist: "Tư liệu TTXVN" }
  ,{ position: [7, 50, 185], size: [50, 30, 1], textureUrl: 'pics/test1.jpg', title: "Art Piece 5", description: "Description for Art 1", artist: "Artist 1" }
  ,{ position: [7, 50, 125], size: [50, 30, 1], textureUrl: 'pics/test1.jpg', title: "Art Piece 6", description: "Description for Art 1", artist: "Artist 1" }
  ,{ position: [555, 50, 15], size: [50, 30, 1], textureUrl: 'pics/tphcm/1.jpg', title: "Xe tăng của Lữ đoàn tăng (thiết giáp 203)", description: "Sư đoàn 304, Quân đoàn 2 tiến vào Dinh Độc Lập", artist: "Tư liệu TTXVN" }
  ,{ position: [555, 50, -45], size: [50, 30, 1], textureUrl: 'pics/tphcm/2.webp', title: "Bộ đội lên máy bay vận tải", description: "Bộ đội lên máy bay vận tải vào miền Nam tham gia Chiến dịch Hồ Chí Minh", artist: "Tư liệu TTXVN" }
  ,{ position: [555, 50, -105], size: [50, 30, 1], textureUrl: 'pics/tphcm/3.jpg', title: "Đánh chiếm Bộ Tổng Tham mưu", description: "Đánh chiếm Bộ Tổng Tham mưu cùng ngày 30/4/1975 lúc 10 giờ 30 phút", artist: "Tư liệu TTXVN" }
  ,{ position: [574, 50, 15], size: [50, 30, 1], textureUrl: 'pics/tphcm/4.jpg', title: "Một trận địa pháo M-46 130mm", description: "Pháo kích vào hệ thống phòng ngự của địch trong Chiến dịch Hồ Chí Minh", artist: "Tư liệu TTXVN" }
  ,{ position: [574, 50, -45], size: [50, 30, 1], textureUrl: 'pics/tphcm/5.jpg', title: "Sau 4 ngày đêm chiến đấu", description: "Sư đoàn 304 đã chính thức tiêu diệt toàn bộ cứ điểm căn cứ Nước Trong (Long Thành, Đồng Nai) của địch", artist: "Tư liệu TTXVN" }
  ,{ position: [574, 50,-105], size: [50, 30, 1], textureUrl: 'pics/tphcm/6.jpg', title: "Tổng thống Ngụy Dương Văn Minh ", description: "Tổng thống Ngụy Dương Văn Minh cùng nội các ra trước Đài Phát thanh Sài Gòn tuyên bố đầu hàng vô điều kiện, kết thúc chiến tranh Việt Nam, trưa 30/4/1975", artist: "Tư liệu TTXVN" }
];
const modelDetails = [
  { position: [-160.88, 45, 393.15], size: [40, 40, 40], title: "Type - 59", description: "Một chiếc xe tăng hung dữ được sử dụng ở Việt Nam", artist: "China/USSR" }
  ,{ position: [-160, 50, 680], size: [40, 40, 40], title: "AK-47", description: "Loại súng trường tấn công được thiết kế bởi Mikhail Kalashnikov vào năm 1947.", artist: "Mikhail Kalashnikov" }
  ,{ position: [203, 45, 580], size: [40, 40, 40], title: "Artillery", description: "A ferocious tank used in war in Viet Nam", artist: "China/USSR" }
  ,{ position: [-160.88, 45, 393.15], size: [40, 40, 40], title: "B41", description: "A ferocious tank used in war in Viet Nam", artist: "China/USSR" }
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
audioLoader.load('./ambient/ambient3.ogg', function (buffer) {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.25);

  document.getElementById('song-title').textContent = 'Room With A View';
  document.getElementById('artist-name').textContent = 'by: Yiruma';
});

// Show the start screen and wait for the button click
startButton.addEventListener('click', () => {
  gsap.to(startScreen, { opacity: 0, duration: 0.5, onComplete: () => startScreen.style.display = 'none' });

  // Play audio only when the button is clicked
  sound.play();
  songInfo.style.display = 'block';
});


// Create a pitch-black loading screen div
const loadingScreen = document.createElement('div');
loadingScreen.style.position = 'absolute';
loadingScreen.style.top = '0';
loadingScreen.style.left = '0';
loadingScreen.style.width = '100%';
loadingScreen.style.height = '100%';
loadingScreen.style.backgroundColor = 'black';  // Pitch black background
loadingScreen.style.display = 'flex';
loadingScreen.style.alignItems = 'center';
loadingScreen.style.justifyContent = 'center';
loadingScreen.style.zIndex = '9999';
document.body.appendChild(loadingScreen);

// Create a container for the progress bar
const progressBarContainer = document.createElement('div');
progressBarContainer.style.width = '50%';
progressBarContainer.style.height = '5px';
progressBarContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';  // Semi-transparent background for progress bar
progressBarContainer.style.borderRadius = '15px';
progressBarContainer.style.overflow = 'hidden';
loadingScreen.appendChild(progressBarContainer);

// Create the progress bar itself
const progressBar = document.createElement('div');
progressBar.style.width = '0%';  // Initial width set to 0%
progressBar.style.height = '100%';
progressBar.style.backgroundColor = '#ffffff';  // Green progress bar
progressBar.style.borderRadius = '15px 0 0 15px';
progressBarContainer.appendChild(progressBar);

// Track the number of models to be loaded
const modelsToLoad = [
  { name: 'eye', url: `models/eye/scene.gltf` },
  { name: 'dino', url: `models/dino/scene.gltf` },
  { name: 'pot', url: `models/pot/scene.gltf` },
  { name: 'bench', url: `models/bench/scene.gltf` },
  { name: 'pot2', url: `models/pot2/scene.gltf` }
];

let modelsLoaded = 0;  // Counter for the number of loaded models

// Create a function to handle model loading and track progress
function loadModel(url, onLoad) {
  loader.load(
    url,
    function (gltf) {
      onLoad(gltf.scene);
      modelsLoaded++;
      updateProgressBar();  // Update progress bar whenever a model is loaded
      checkIfLoadingComplete();  // Check if all models are loaded
    },
    undefined,
    function (error) {
      console.error(`Error loading model from ${url}:`, error);
      modelsLoaded++;  // Increment even if there's an error to avoid infinite loading
      updateProgressBar();  // Update progress bar even if there's an error
      checkIfLoadingComplete();  // Check if all models are loaded
    }
  );
}

// Function to update the progress bar based on the number of models loaded
function updateProgressBar() {
  const progressPercentage = (modelsLoaded / modelsToLoad.length) * 100;
  progressBar.style.width = `${progressPercentage}%`;  // Update progress bar width
}

// Check if all models are fully loaded
function checkIfLoadingComplete() {
  if (modelsLoaded === modelsToLoad.length) {
    gsap.to(loadingScreen, { opacity: 0, duration: 1, onComplete: () => loadingScreen.style.display = 'none' });  // Hide loading screen
    animate();  // Start rendering the scene
  }
}

// Load all models and add them to the scene
modelsToLoad.forEach(model => {
  loadModel(model.url, (modelScene) => {
    switch (model.name) {
      case 'eye':
        modelScene.scale.set(40, 40, 40);
        modelScene.position.set(0, 0, 0);
        break;
      case 'dino':
        modelScene.scale.set(3, 3, 3);
        modelScene.position.set(-160.88, 45, 395.15);
        break;
      case 'pot':
        modelScene.scale.set(60, 60, 60);
        modelScene.position.set(175, 25, 730);
        break;
      case 'bench':
        modelScene.scale.set(60, 60, 60);
        modelScene.position.set(-261, 0, 453);
        break;
      case 'pot2':
        modelScene.scale.set(60, 60, 60);
        modelScene.position.set(-327, 0, 458);
        break;
    }
    scene.add(modelScene);
  });
});





animate();
