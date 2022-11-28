
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

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

		// progress
		const progress = this.add.text(0, 0, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "arial", "fontSize": "30px" });
		mainLayer.add(progress);

		// uiLayer
		const uiLayer = this.add.layer();

		// text_1
		const text_1 = this.add.text(20, 220, "", {});
		text_1.setOrigin(0, 1);
		text_1.text = "Bottom left corner";
		text_1.setStyle({ "fontFamily": "arial", "fontSize": "32px" });
		uiLayer.add(text_1);

		// progress (components)
		new PreloadText(progress);

		// text_1 (components)
		const text_1Align = new Align(text_1);
		text_1Align.down = true;
		text_1Align.left = true;
		text_1Align.horizontalOffset = 50;
		text_1Align.verticalOffset = -50;

		this.mainLayer = mainLayer;
		this.uiLayer = uiLayer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	mainLayer;
	/** @type {Phaser.GameObjects.Layer} */
	uiLayer;

	/* START-USER-CODE */

	loaded = false

	preload()
	{
		this.editorCreate();

		this.editorPreload();

		this.initCameras();

		this.resize();

	// camera
		this.cameras.main.setViewport(0, 0, this.scale.width, this.scale.height);
		this.cameras.main.setBackgroundColor(0x242424);

	// start input
		window.addEventListener('touchstart', this.onPointer);
		window.addEventListener('click', this.onPointer);

	// load event
		this.load.on(Phaser.Loader.Events.COMPLETE, () => 
		{
			this.loaded = true;
		});
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
			// this.start();
		}
	}

	/**
	 * CURRENTLY DEPRECATED
	 * 
	 * loads next scene
	 */
	loadScene()
	{
		window.removeEventListener('touchstart', this.onPointer);
		window.removeEventListener('click', this.onPointer);

		// remove music here if applicable

		this.scene.stop(this);
		this.scene.launch("Level");
	}

	/**
	 * initialize main & UI cameras.
	 * 
	 * scene is seperated into two layers, each camera ignoring the other layer.
	 */
	initCameras()
	{
	// main
		this.cameras.main.ignore(this.uiLayer.getChildren());
		this.cameras.main.centerOn(0, 0);
		
	// UI
		this.UICam = this.cameras.add(0, 0, this.cameras.main.width, this.cameras.main.height);
		this.UICam.ignore(this.mainLayer.getChildren());
		this.UICam.centerOn(0, 0);

	// // debug: distinguish cameras
	// 	if (this.registry.get('debug'))
	// 	{
	// 		this.UICam.setAlpha(.5);
	// 		console.log('alpha');
	// 	}
	}

	resize()
	{
		this.cameras.main.centerOn(0, 0);
		this.UICam.centerOn(0, 0);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
