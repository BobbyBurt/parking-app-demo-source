
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

		// dialogueText
		const dialogueText = this.add.text(576, 1245, "", {});
		dialogueText.setOrigin(0.5, 0.5);
		dialogueText.text = "This is a dialogue box. In the final app, it will guide the user through the app as a solution, as well as explain the problem, etc. It's a gameobject that can be made to appear by code, and disappears on pointer down.";
		dialogueText.setStyle({ "backgroundColor": "#52676cff", "fontFamily": "arial", "fontSize": "64px" });
		dialogueText.setPadding({"left":50,"top":50,"right":50,"bottom":50});
		dialogueText.setWordWrapWidth(1000, true);
		uiLayer.add(dialogueText);

		// alignTest
		const alignTest = this.add.text(20, 220, "", {});
		alignTest.setOrigin(0, 1);
		alignTest.text = "Bottom left corner";
		alignTest.setStyle({ "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(alignTest);

		// progressText
		const progressText = this.add.text(0, 0, "", {});
		progressText.setOrigin(0.5, 0.5);
		progressText.text = "0%";
		progressText.setStyle({ "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(progressText);

		// buttonTest
		const buttonTest = this.add.rectangle(1101, 62, 128, 128);
		buttonTest.scaleX = 2.8312995377072916;
		buttonTest.scaleY = 1.837431407936295;
		buttonTest.setOrigin(1, 0);
		buttonTest.isFilled = true;
		uiLayer.add(buttonTest);

		// button
		const button = this.add.image(500, 125, "button");
		button.scaleX = 2;
		button.scaleY = 2;
		uiLayer.add(button);

		// buttonText
		const buttonText = this.add.text(500, 123, "", {});
		buttonText.setOrigin(0.5, 0.5);
		buttonText.text = "Show text";
		buttonText.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(buttonText);

		// dialogueText (components)
		const dialogueTextButton = new Button(dialogueText);
		dialogueTextButton.eventToEmit = "textButton";

		// alignTest (components)
		const alignTestAlign = new Align(alignTest);
		alignTestAlign.down = true;
		alignTestAlign.left = true;

		// progressText (components)
		new PreloadText(progressText);
		const progressTextAlign = new Align(progressText);
		progressTextAlign.middle = true;
		progressTextAlign.center = true;

		// buttonTest (components)
		const buttonTestAlign = new Align(buttonTest);
		buttonTestAlign.up = true;
		buttonTestAlign.right = true;
		buttonTestAlign.horizontalOffset = -10;
		buttonTestAlign.verticalOffset = 10;
		const buttonTestButton = new Button(buttonTest);
		buttonTestButton.eventToEmit = "buttonTest2";

		// button (components)
		const buttonButton = new Button(button);
		buttonButton.eventToEmit = "showDialogue";

		this.mainLayer = mainLayer;
		this.uiLayer = uiLayer;
		this.dialogueText = dialogueText;
		this.alignTest = alignTest;
		this.buttonTest = buttonTest;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	mainLayer;
	/** @type {Phaser.GameObjects.Layer} */
	uiLayer;
	/** @type {Phaser.GameObjects.Text} */
	dialogueText;
	/** @type {Phaser.GameObjects.Text} */
	alignTest;
	/** @type {Phaser.GameObjects.Rectangle} */
	buttonTest;

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
		let _this = this

		this.dialogueText.originalY = this.dialogueText.y;

		this.events.on('showDialogue', function ()
		{
			_this.showDialogue();
		});

		this.events.on('textButton', function ()
		{
			_this.hideDialogue();
		});

	// SFX
		this.sound.add('select');
			// used by Button component
	}

	hideDialogue()
	{
		let _this = this;

		this.tweens.add
		({
			targets: this.dialogueText,
			onComplete: function ()
			{
				arguments[1][0].setY(arguments[1][0].originalY);
				arguments[1][0].setScale(1);
					// arguments[1][0] = dialogueText in this context
			},
			alpha: 0,
			scale: .9,
			duration: 700,
			ease: Phaser.Math.Easing.Quartic.Out
		});
	}

	showDialogue()
	{
		this.tweens.add
		({
			targets: this.dialogueText,
			y: this.dialogueText.originalY - 200,
			alpha: 1,
			duration: 700,
			ease: Phaser.Math.Easing.Quartic.Out
		});

		// Starting the appear tween before the disappear tween completes should be avoided. If
		// this is a possible edgecase in how show/hideDialogue are implimented I will fix it.
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
		this.adaptiveZoom = new AdaptiveZoom();

	// main
		this.cameras.main.ignore(this.uiLayer.getChildren());
		this.cameras.main.setName('main');

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
