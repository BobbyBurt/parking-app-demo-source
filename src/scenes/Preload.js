
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

		// uiLayer
		const uiLayer = this.add.layer();

		// bodyCopyText
		const bodyCopyText = this.add.text(51, 1540, "", {});
		bodyCopyText.setOrigin(0, 1);
		bodyCopyText.text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum, dolor ac egestas tincidunt, felis magna vehicula nunc, quis lobortis erat arcu vel odio. Vestibulum vestibulum ultrices quam, euismod viverra diam fringilla in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ultricies sem nec mauris aliquet mattis. Duis at dolor posuere, efficitur lacus id, lacinia tellus. Pellentesque quis tristique dui. Vivamus molestie lacus eu dolor eleifend, vel mattis est blandit.";
		bodyCopyText.setStyle({ "backgroundColor": "#52676cff", "fontFamily": "arial", "fontSize": "64px" });
		bodyCopyText.setPadding({"left":50,"top":50,"right":50,"bottom":50});
		bodyCopyText.setWordWrapWidth(1000, true);
		uiLayer.add(bodyCopyText);

		// alignTest
		const alignTest = this.add.text(20, 220, "", {});
		alignTest.setOrigin(0, 1);
		alignTest.text = "Bottom left corner";
		alignTest.setStyle({ "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(alignTest);

		// alignTest_1
		const alignTest_1 = this.add.text(1095.939697265625, 178.44802856445312, "", {});
		alignTest_1.setOrigin(1, 0);
		alignTest_1.text = "Top right";
		alignTest_1.setStyle({ "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(alignTest_1);

		// progressText
		const progressText = this.add.text(0, 0, "", {});
		progressText.setOrigin(0.5, 0.5);
		progressText.text = "0%";
		progressText.setStyle({ "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(progressText);

		// alignTest (components)
		const alignTestAlign = new Align(alignTest);
		alignTestAlign.down = true;
		alignTestAlign.left = true;

		// alignTest_1 (components)
		const alignTest_1Align = new Align(alignTest_1);
		alignTest_1Align.up = true;
		alignTest_1Align.right = true;

		// progressText (components)
		new PreloadText(progressText);
		const progressTextAlign = new Align(progressText);
		progressTextAlign.middle = true;
		progressTextAlign.center = true;

		this.mainLayer = mainLayer;
		this.uiLayer = uiLayer;
		this.bodyCopyText = bodyCopyText;
		this.alignTest = alignTest;
		this.alignTest_1 = alignTest_1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	mainLayer;
	/** @type {Phaser.GameObjects.Layer} */
	uiLayer;
	/** @type {Phaser.GameObjects.Text} */
	bodyCopyText;
	/** @type {Phaser.GameObjects.Text} */
	alignTest;
	/** @type {Phaser.GameObjects.Text} */
	alignTest_1;

	/* START-USER-CODE */

	loaded = false;

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
		this.cameras.main.setName('main');

	// UI
		this.UICam = this.cameras.add(0, 0, this.cameras.main.width, this.cameras.main.height);
		this.UICam.setName('UICam');
		this.UICam.ignore(this.mainLayer.getChildren());
		this.UICam.preRender(1);
			// Must prerender for Align component to have up-to-date scale data for initial 
			// adjustment.

	// // debug: distinguish cameras
	// 	if (this.registry.get('debug'))
	// 	{
	// 		this.UICam.setAlpha(.5);
	// 		console.log('alpha');
	// 	}
	}

	resize()
	{

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
