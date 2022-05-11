
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.121.1/build/three.module.js'

import {PCDLoader} from 'https://cdn.jsdelivr.net/npm/three@0.121.1/examples/jsm/loaders/PCDLoader.js'

const flag = false

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.01, 40 )
camera.position.set( 0, 0, 0 );
scene.add(camera)

const renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize(  window.innerWidth,window.innerHeight );
document.body.appendChild( renderer.domElement );

var arr = []
const pcd_loader = new PCDLoader()
pcd_loader.load('./tree_1.pcd',function( points ){
points.geometry.center()
points.geometry.translate(1,0,1);
points.geometry.rotateY( 10 );
arr=points.clone()
console.log(arr)
if (flag == true){
    arr = null
    }
scene.add(arr)

    })

const animate = function () {
    requestAnimationFrame(animate)
    
    renderer.render(scene,camera)
    
    }

animate()


        