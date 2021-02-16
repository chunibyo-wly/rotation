<template>
  <div id="container"></div>
</template>
<script>
import * as Three from 'three'
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default {
  name: 'Home',
  data () {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null
    }
  },
  methods: {
    init: function () {
      let container = document.getElementById('container')

      this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10)
      this.camera.position.z = 1

      this.scene = new Three.Scene()

      let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2)
      let material = new Three.MeshNormalMaterial()

      this.mesh = new Three.Mesh(geometry, material)
      this.scene.add(this.mesh)

      // grid helper
      let gridHelper = new Three.GridHelper(1, 10);
      gridHelper.rotation.x = Math.PI / 2;

      // axes helper
      let axesHelper = new Three.AxesHelper(1);

      this.scene.add(gridHelper, axesHelper)

      this.renderer = new Three.WebGLRenderer({ antialias: true })
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)

      // add stats
      this.stats = new Stats()
      container.appendChild( this.stats.dom );

      // add orbitControls
      let controls = new OrbitControls( this.camera, this.renderer.domElement );
      controls.minDistance = 0.2;
    },
    animate: function () {
      requestAnimationFrame(this.animate)
      this.mesh.rotation.x += 0.01
      this.mesh.rotation.y += 0.02

      this.stats.begin()
      this.renderer.render(this.scene, this.camera)
      this.stats.end()
    }
  },
  mounted () {
    this.init()
    this.animate()
  }
}

</script>

<style scoped>
#container {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
</style>