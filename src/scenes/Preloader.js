
// You can write more code here

/* START OF COMPILED CODE */

class Preloader extends Phaser.Scene {

	constructor() {
		super("Preloader");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// mainLayer
		const mainLayer = this.add.layer();

		// uiLayer
		const uiLayer = this.add.layer();

		// progressText
		const progressText = this.add.text(0, 0, "", {});
		progressText.setOrigin(0.5, 0.5);
		progressText.text = "0%";
		progressText.setStyle({ "fontFamily": "verdana", "fontSize": "64px" });
		uiLayer.add(progressText);

		// spottr_logo
		const spottr_logo = this.add.image(714, 630, "Spottr-logo");
		uiLayer.add(spottr_logo);

		// progressText (components)
		new PreloadText(progressText);
		const progressTextAlign = new Align(progressText);
		progressTextAlign.middle = true;
		progressTextAlign.center = true;
		progressTextAlign.verticalOffset = 200;

		// spottr_logo (components)
		const spottr_logoAlign = new Align(spottr_logo);
		spottr_logoAlign.middle = true;
		spottr_logoAlign.center = true;

		this.mainLayer = mainLayer;
		this.uiLayer = uiLayer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	mainLayer;
	/** @type {Phaser.GameObjects.Layer} */
	uiLayer;

	/* START-USER-CODE */

	// Write your code here

	loaded = false;

	preload()
	{
		this.editorCreate();

		this.editorPreload();

		this.initCameras();

		this.resize();

	// start input
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);

	// load event
		this.load.on(Phaser.Loader.Events.COMPLETE, () => 
		{
			this.loaded = true;
		});
	}

	create()
	{

	}

	/** 
	 * Set registry's mobile value based on input.
	 * 
	 * Start the game if loaded.
	 */
	onPointer = (event) => 
	{
	// set registry's mobile value
		if (event.type == 'touchstart')
		{
			this.registry.set('mobile', true);
		}
		else if (event.type == 'click')
		{
			this.registry.set('mobile', false);
		}

		if (this.loaded)
		{
			this.scene.start('Map');
			window.removeEventListener('touchstart', this.onPointer);
			window.removeEventListener('click', this.onPointer);
		}
	}

	/**
	 * initialize main & UI cameras.
	 * 
	 * scene is seperated into two layers, each camera ignoring the other layer.
	 */
	initCameras()
	{
		this.adaptiveZoom = new AdaptiveZoom();

	// main
		this.cameras.main.ignore(this.uiLayer.getChildren());
		this.cameras.main.setName('main');
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);

	// UI
		this.UICam = this.cameras.add(0, 0, this.cameras.main.width, this.cameras.main.height);
		this.UICam.setName('UICam');
		this.UICam.ignore(this.mainLayer.getChildren());

		this.adaptiveZoom.setAdaptiveZoom(this.UICam, 1170, 2532);

		this.UICam.preRender(1);
			// Must prerender for Align component to have up-to-date scale data for initial 
			// adjustment.

		// // debug: distinguish cameras
		// 	if (this.registry.get('debug'))
		// 	{
		// 		this.UICam.setAlpha(.5);
		// 	}
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
