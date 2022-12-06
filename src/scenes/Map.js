
// You can write more code here

/* START OF COMPILED CODE */

class Map extends Phaser.Scene {

	constructor() {
		super("Map");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// mainLayer
		const mainLayer = this.add.layer();

		// mapContainer
		const mapContainer = this.add.container(0, 0);
		mainLayer.add(mapContainer);

		// mapTemp
		const mapTemp = this.add.image(784, 1401, "map-temp");
		mapTemp.scaleX = 4.567640778523811;
		mapTemp.scaleY = 4.567640778523811;
		mapTemp.alpha = 0.4;
		mapTemp.alphaTopLeft = 0.4;
		mapTemp.alphaTopRight = 0.4;
		mapTemp.alphaBottomLeft = 0.4;
		mapTemp.alphaBottomRight = 0.4;
		mapContainer.add(mapTemp);

		// lotTest
		const lotTest = this.add.polygon(579, 584, "-104.7876519667015 391.5391632256992 238.16718935698958 283.76400946988 385.9383326189543 34.29731145142708 546.9859399499417 104.97420649501294 573.1438341196051 267.5103910176194 419.3449142564517 437.7845628766732 -100.83685264730366 555.5133876523623");
		lotTest.isFilled = true;
		mapContainer.add(lotTest);

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

		// mapContainer (components)
		new MapDrag(mapContainer);

		// lotTest (components)
		new ParkingLot(lotTest);

		// dialogueText (components)
		const dialogueTextButton = new Button(dialogueText);
		dialogueTextButton.eventToEmit = "textButton";

		// alignTest (components)
		const alignTestAlign = new Align(alignTest);
		alignTestAlign.down = true;
		alignTestAlign.left = true;

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

	preload()
	{
		this.editorCreate();

		this.initCameras();

		this.resize();
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
		// call adaptive zoom
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
