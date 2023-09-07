
import * as THREE from "https://cdn.skypack.dev/three"
import { OrbitControls } from "https://cdn.skypack.dev/three/examples/jsm/controls/OrbitControls.js"
import * as dat from "https://cdn.skypack.dev/dat.gui"

// Texture Loader
const loader = new THREE.TextureLoader()
//const cross = loader.load('https://i.ibb.co/g3Pz0DY/cross.png')

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 2000;

const posArray = new Float32Array(particlesCnt * 3)
//xyz, xyz, xyz, xyz

for(let i=0; i<particlesCnt * 3; i++) {
    // posArray[i] = Math.random()
    // posArray[i] = Math.random() - 0.5
    // posArray[i] = (Math.random() - 0.5)*5
    posArray[i] = (Math.random() - 0.5)*(Math.random() * 5)
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
// Materials

const material = new THREE.PointsMaterial({
size: 0.005
})

const particlesMaterial = new THREE.PointsMaterial({
    size: 0.005,
    // map : cross,
    // transparent: true,
    // color: 'blue',
    // blending: THREE.AdditiveBlending
    })


// Mesh
const sphere = new THREE.Points(geometry,material)
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(sphere, particlesMesh)

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth,
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
   
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(new THREE.Color('#21282a'), 1)


// mouse
document.addEventListener('mousemove', animateParticles)
let mouseX = 0
let mouseY = 0

function animateParticles(event){
    mouseY = event.clientY
    mouseX = event.clientX
}
/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = .5 * elapsedTime
    particlesMesh.rotation.y = -.1 * elapsedTime
    if (mouseX > 0){
    particlesMesh.rotation.x = -mouseY * (elapsedTime*0.00008)
    particlesMesh.rotation.y = -mouseX * (elapsedTime*0.00008)
    }
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

////////js Profil

//////// DOM MANIPULATION DOM EVENT
//memanggil=================================
const idNavbar = document.getElementById("navbar");
const jumbotron = document.getElementById("jumbotron");
const wavesAbout = document.getElementById("wavesAbout");
const education = document.getElementById("education");
const portofolio = document.getElementById("portofolio");
const wavesPortofolio = document.getElementById("wavesPortofolio");
const contact = document.getElementById("contact");
const foter = document.getElementById("foter");
const judul = document.getElementById("judul");
const hardware = document.getElementById("hardware");
const network = document.getElementById("network");
const webDev = document.getElementById("webDev");

// Membuat dan menyisipkan Kalimat pada section about ============================
const pAboutBr = document.createElement("p");
const ktAboutBr = document.createTextNode("Saat ini saya sedang belajar memanipulasi HTML dengan DOM. Kalimat ini dibuat dengan Java Script!!!!");
pAboutBr.appendChild(ktAboutBr);
const idkonten = document.getElementById("kontent");
const aelemen = idkonten.getElementsByTagName("a")[0];
idkonten.insertBefore(pAboutBr, aelemen);
//dom event tulisan
pAboutBr.addEventListener("mouseenter", function () {
  pAboutBr.style.color = "gray";
});
pAboutBr.addEventListener("mouseleave", function () {
  pAboutBr.style.color = "black";
});

///DOM button theme=====================
const buttonTema = document.createElement("button");
const textButton = document.createTextNode("Tema");
buttonTema.appendChild(textButton);
buttonTema.setAttribute("type", "button");
buttonTema.style.backgroundColor = "orange";
const lokasiTema = jumbotron.getElementsByTagName("p")[0];
lokasiTema.after(buttonTema);
//Dom button theme even===================================
buttonTema.onclick = function () {
  buttonTema.classList.toggle("themeBlue");
  judul.classList.toggle("judulColor");
  idNavbar.classList.toggle("themeBlue");
  jumbotron.classList.toggle("themeLightBlue");
  wavesAbout.classList.toggle("wavesLightBlue");
  education.classList.toggle("themeLightBlue");
  wavesPortofolio.classList.toggle("wavesLightBlue");
  contact.classList.toggle("themeLightBlue");
  portofolio.classList.toggle("themeLightBlue");
  foter.classList.toggle("themeLightBlue");
  hardware.classList.toggle("gambarHrdBiru");
  network.classList.toggle("gambarNetBiru");
  webDev.classList.toggle("gambarProgBiru");
};

//button kirim
const tombolKirim = document.querySelector("section#contact button");
tombolKirim.addEventListener("click", function () {
  alert("Pesan Anda Terkirim ;)");
});


/////////// CANVASSSSSSSSSSSSSS
const canvasKita = document.getElementById("myCanvas");
canvasKita.width = window.innerWidth;
canvasKita.height = 700;
let ctx = canvasKita.getContext("2d");

////////////////////////////

////////Wajah Kartun
/////////////Tulisan 
ctx.font = 'bold 50pt Times';
ctx.fillText('My Pet', 100, 150, 200, 100);

ctx.font = 'bold 12pt Times';
ctx.fillText('Hallo...', 800, 450, 300, 100);
ctx.fillText('Namaku Meri', 800, 470, 300, 100);
ctx.fillText('Aku adalah musang pandan', 800, 490, 300, 100);

ctx.beginPath();
ctx.fillStyle = "#c5bfba";
ctx.moveTo(340,350);
ctx.bezierCurveTo(10,700,1000,650,650,350);
ctx.bezierCurveTo(640,300,650,200,550,350);
ctx.bezierCurveTo(500,350,500,350,450,350);
ctx.bezierCurveTo(370,150,350,350,340,350);
ctx.fill(); //lapisan 1

ctx.beginPath();
ctx.fillStyle = "#e8e2dc";
ctx.moveTo(450,400);
ctx.bezierCurveTo(380,650,610,700,560,400);
ctx.fill(); //hidung lap 1


ctx.beginPath();
ctx.fillStyle = "#5e514c";
ctx.moveTo(450,500);
ctx.bezierCurveTo(550,560,406,580,530,560);
ctx.bezierCurveTo(500,500,600,500,540,500);
ctx.fill(); //hidung ckt bwh
ctx.beginPath();
ctx.fillStyle = "#5e514c";
ctx.moveTo(450,500);
ctx.bezierCurveTo(350,500,510,350,500,350);
ctx.bezierCurveTo(650,500,570,504,540,500);
ctx.fill(); //hidung ckt ats

ctx.beginPath();
ctx.fillStyle = "#2e292e";
ctx.moveTo(480,560);
ctx.bezierCurveTo(450,610,560,610,530,560);
ctx.fill(); //hidung htm

ctx.beginPath();
ctx.fillStyle = "#7a6f6b";
ctx.moveTo(500,350);
ctx.bezierCurveTo(580,310,650,350,680,430);
ctx.bezierCurveTo(630,430,550,350,580,480);
//ctx.bezierCurveTo(640,430,580,350,580,480);
ctx.bezierCurveTo(490,460,560,410,500,350);
ctx.fill(); //mt abu kanan

ctx.beginPath();
ctx.fillStyle = "#7a6f6b";
ctx.moveTo(500,350);
ctx.bezierCurveTo(370,310,340,360,310,430);
ctx.bezierCurveTo(320,440,450,350,430,485);
//ctx.bezierCurveTo(640,430,580,350,580,480);
ctx.bezierCurveTo(520,450,440,450,502,350);
ctx.fill(); //mt abu kiri


////mata kanan
ctx.beginPath();
ctx.fillStyle = "#363033";
ctx.arc(580,475, 30,0,Math.PI*2,false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(581,475, 20,0,Math.PI*2,false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(579,470, 20,0,Math.PI*2,false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(575,467, 5,0,Math.PI*2,false);
ctx.fill();



//mt kiri
ctx.beginPath();
ctx.fillStyle = "#363033";
ctx.arc(430,475, 30,0,Math.PI*2,false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(430,472, 20,0,Math.PI*2,false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(433,468, 20,0,Math.PI*2,false);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(430,465, 5,0,Math.PI*2,false);
ctx.fill();



////pipi
ctx.globalCompositeOperation = "source-atop";
ctx.save();
ctx.beginPath();
ctx.arc(330,500,100,0,2 * Math.PI, false);
ctx.clip();

ctx.beginPath();
ctx.fillStyle = "#363033";
ctx.arc(360+50 ,520+50, 80,0,Math.PI*2,false);
ctx.fill();

ctx.restore();
ctx.beginPath();
ctx.arc(540,590,120,0,2 * Math.PI, false);
ctx.clip();

ctx.beginPath();
ctx.fillStyle = "#363033";
ctx.arc(650,535, 70,0,Math.PI*2,false);
ctx.fill();



