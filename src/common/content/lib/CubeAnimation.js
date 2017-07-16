export default class CubeAnimation {
	constructor () {
		this.animate = this.animate.bind(this);
		this.keyHandler = this.keyHandler.bind(this);
		this.element
	}

	_createScene (sceneObjects, width, height) {
		const scene = new THREE.Scene();

		this._addElementsToScene(scene, sceneObjects);

		return scene;
	}

	_setSceneSize(element, width, height) {
		const renderer = new THREE.WebGLRenderer();

		renderer.setSize(width, height);
		element.appendChild(renderer.domElement);

		return renderer;
	}

	_createShape() {
		const geometry = new THREE.TorusGeometry(100, 40, 100, 100);
		const material = new THREE.MeshStandardMaterial();
		const cube = new THREE.Mesh(geometry, material);

		cube.position.set(0, 0, 0);

		return cube;
	}

	_createLight() {
		const light = new THREE.PointLight(0xffffff);

		light.position.set(0, 0, 400);

		return light;
	}

	_createCamera(width, height) {
		return new THREE.PerspectiveCamera(30, width / height, 0.1, 1000);
	}

	_addElementsToScene(scene, elements) {
		elements.forEach((element) => {
			scene.add(element);
		})
	}

	_setCameraPosition(camera, x, y, z) {
		camera.position.x = x;
		camera.position.y = y;
		camera.position.z = z;
	}

	animate(cube, scene, camera, renderer) {
		requestAnimationFrame(this.animate);
		cube.rotation.y += Math.PI / 100;
		cube.rotation.x += Math.PI / 200;
		renderer.render(scene, camera);
	}

	keyHandler(event) {
		const { keyCode } = event;

		switch(keyCode) {
			case 39:
				this.x -= 3;
				this.camera.position.x = this.x;
				break;
			case 37:
				this.x += 3;
				this.camera.position.x = this.x;
				break;
			case 38:
				this.y -= 3;
				this.camera.position.y = this.y;
				break;
			case 40:
				this.y += 3;
				this.camera.position.y = this.y;
				break;
			case 188:
				this.z -= 6;
				this.camera.position.z = this.z;
				break;
			case 190:
				this.z += 6;
				this.camera.position.z = this.z;
				break;
		}
	}

	initialise(element) {
		const width = 470;
		const height = 470;
		const light = this._createLight();
		const cube = this._createShape();
		const renderer = this._setSceneSize(element, width, height)
		const scene = this._createScene ([cube, light ], width, height);

		document.addEventListener('keydown', this.keyHandler, false);

		this.x = 0;
		this.y = 0;
		this.z = 700;
		this.camera = this._createCamera(width, height);

		this._setCameraPosition(this.camera, this.x, this.y, this.z);
		this.animate = this.animate.bind(this, cube, scene, this.camera, renderer);
		this.animate(cube, scene, this.camera, renderer);
	}

	destroy() {
		document.removeEventListener('keydown', this.keyHandler, false);
	}
}

