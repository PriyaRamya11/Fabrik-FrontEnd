import React, { useEffect } from 'react';

import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

function IndividualModel(props) {

    useEffect(() => {
        const canvas = document.getElementById('mycanvas');
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xdddddd)

        //  using gltf loader to load the 3-d model 
        const loader = new GLTFLoader()
        
        loader.load(`https://backend-api-priya.herokuapp.com${props.modal.filename}`, function(glb) {
            console.log(glb);
            const root = glb.scene;
            root.scale.set(10,10,10);
            scene.add(root)

            animate();
        }, function(xhr) {
            console.log(((xhr.loaded/xhr.total) * 100) + "% loaded")
        }, function(error) {
            console.log('An error occurred')
        });


        let hlight = new THREE.AmbientLight (0x404040,100);
        scene.add(hlight);
        let directionalLight = new THREE.DirectionalLight(0xffffff,100);
        directionalLight.position.set(0,1,0);
        directionalLight.castShadow = true;
        scene.add(directionalLight);

        //  boilet plate code
        const size = {
            width : canvas.clientWidth,
            height : canvas.clientHeight
        }

        const camera = new THREE.PerspectiveCamera(100, size.width / size.height, 0.1, 100);
        camera.rotation.y = 45/180 * Math.PI;
        camera.position.set(2,0,1.8);
        scene.add(camera)

        const renderer = new THREE.WebGL1Renderer({
            canvas : canvas
        })

        renderer.setSize(size.width, size.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.shadowMap.enabled = true;
        renderer.setClearColor("#e5e5e5")

        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }


    }, [props.modal]);

    console.log(props);

    return (
        <div>
            <p>Select a model to render</p>
            <canvas style={{height : "550px", width : "100%"}} id='mycanvas'>

            </canvas>
        </div>
    )
}

export default IndividualModel
