import {
	hasPressedKey,
	unregisterKeyPress,
	registerHandlers,
	unregisterHandlers
} from '../lib/keyPressHelper';

export default class CubeAnimation {
	constructor() {
		this.animate = this.animate.bind(this);
		this.keyHandlerUp = this.keyHandlerUp.bind(this);
		this.keyHandlerDown = this.keyHandlerDown.bind(this);
		this.element = undefined;
	}

	_createScene(sceneObjects) {
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
		const geometry = new THREE.TorusGeometry(140, 40, 100, 100);
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
		});
	}

	_setCameraPosition(camera, x, y, z) {
		camera.position.x = x;
		camera.position.y = y;
		camera.position.z = z;
	}

	animate(cube, scene, camera, renderer) {
		cube.rotation.y += Math.PI / 100;
		cube.rotation.x += Math.PI / 200;
		renderer.render(scene, camera);

		return requestAnimationFrame(this.animate);
	}

	keyHandlerUp(event) {
		const { keyCode } = event;
		unregisterKeyPress(keyCode);
	}

	keyHandlerDown(event) {
		const { keyCode } = event;

		if (hasPressedKey(keyCode, 39)) {
			this.x -= 3;
			this.camera.position.x = this.x;
		}

		if (hasPressedKey(keyCode, 37)) {
			this.x += 3;
			this.camera.position.x = this.x;
		}

		if (hasPressedKey(keyCode, 38)) {
			this.y -= 3;
			this.camera.position.y = this.y;
		}

		if (hasPressedKey(keyCode, 40)) {
			this.y += 3;
			this.camera.position.y = this.y;
		}

		if (hasPressedKey(keyCode, 188)) {
			this.z -= 6;
			this.camera.position.z = this.z;
		}

		if (hasPressedKey(keyCode, 190)) {
			this.z += 6;
			this.camera.position.z = this.z;
		}
	}

	initialise(element) {
		const width = 470;
		const height = 470;
		const light = this._createLight();
		const cube = this._createShape();
		const renderer = this._setSceneSize(element, width, height);
		const scene = this._createScene([ cube, light ]);

		registerHandlers(this.keyHandlerUp, this.keyHandlerDown);

		this.x = 0;
		this.y = 0;
		this.z = 700;
		this.camera = this._createCamera(width, height);

		this._setCameraPosition(this.camera, this.x, this.y, this.z);
		this.animate = this.animate.bind(this, cube, scene, this.camera, renderer);
		this.animationFrame = this.animate(cube, scene, this.camera, renderer);
	}

	destroy() {
		unregisterHandlers(this.keyHandlerUp, this.keyHandlerDown);
		cancelAnimationFrame(this.animationFrame);
	}
}

