
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
		mapContainer.add(mapTemp);

		// occupancyHeatmap
		const occupancyHeatmap = this.add.image(784, 1401, "heatmap-temp-1");
		occupancyHeatmap.scaleX = 4.567640778523811;
		occupancyHeatmap.scaleY = 4.567640778523811;
		mapContainer.add(occupancyHeatmap);

		// turnoverHeatmap
		const turnoverHeatmap = this.add.image(784, 1401, "heatmap-temp-2");
		turnoverHeatmap.scaleX = 4.567640778523811;
		turnoverHeatmap.scaleY = 4.567640778523811;
		turnoverHeatmap.visible = false;
		mapContainer.add(turnoverHeatmap);

		// lotTest
		const lotTest = this.add.polygon(579, 584, "-104.7876519667015 391.5391632256992 238.16718935698958 283.76400946988 385.9383326189543 34.29731145142708 546.9859399499417 104.97420649501294 573.1438341196051 267.5103910176194 419.3449142564517 437.7845628766732 -100.83685264730366 555.5133876523623");
		lotTest.isFilled = true;
		lotTest.fillColor = 15854442;
		mapContainer.add(lotTest);

		// uiLayer
		const uiLayer = this.add.layer();

		// bottomBar
		const bottomBar = this.add.rectangle(605, 2546, 128, 128);
		bottomBar.scaleX = 30;
		bottomBar.scaleY = 1.3916874920778723;
		bottomBar.setOrigin(0.5, 1);
		bottomBar.isFilled = true;
		bottomBar.fillColor = 3026478;
		uiLayer.add(bottomBar);

		// dialogueText
		const dialogueText = this.add.text(576, 1245, "", {});
		dialogueText.setOrigin(0.5, 0.5);
		dialogueText.text = "This is a dialogue box. In the final app, it will guide the user through the app as a solution, as well as explain the problem, etc. It's a gameobject that can be made to appear by code, and disappears on pointer down.";
		dialogueText.setStyle({ "backgroundColor": "#52676cff", "fontFamily": "arial", "fontSize": "64px" });
		dialogueText.setPadding({"left":50,"top":50,"right":50,"bottom":50});
		dialogueText.setWordWrapWidth(1000, true);
		uiLayer.add(dialogueText);

		// turnoverViewButton
		const turnoverViewButton = this.add.rectangle(290, 2540, 128, 128);
		turnoverViewButton.scaleX = 2.0471239809434234;
		turnoverViewButton.scaleY = 1.2020153222993333;
		turnoverViewButton.setOrigin(0.5, 1);
		turnoverViewButton.isFilled = true;
		turnoverViewButton.fillColor = 5131854;
		uiLayer.add(turnoverViewButton);

		// button
		const button = this.add.image(298, 417, "button");
		button.scaleX = 2;
		button.scaleY = 2;
		uiLayer.add(button);

		// buttonText
		const buttonText = this.add.text(298, 415, "", {});
		buttonText.setOrigin(0.5, 0.5);
		buttonText.text = "Show text";
		buttonText.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(buttonText);

		// topBar
		const topBar = this.add.rectangle(0, 0, 128, 128);
		topBar.scaleX = 30;
		topBar.scaleY = 1.3916874920778723;
		topBar.setOrigin(0.5, 0);
		topBar.isFilled = true;
		topBar.fillColor = 3026478;
		uiLayer.add(topBar);

		// spottrLogo
		const spottrLogo = this.add.image(543, 87, "Spottr-logo");
		spottrLogo.scaleX = 0.5372422073766504;
		spottrLogo.scaleY = 0.5372422073766504;
		uiLayer.add(spottrLogo);

		// occupancyViewButton_1
		const occupancyViewButton_1 = this.add.rectangle(614, 2534, 128, 128);
		occupancyViewButton_1.scaleX = 2.0471239809434234;
		occupancyViewButton_1.scaleY = 1.2020153222993333;
		occupancyViewButton_1.setOrigin(0.5, 1);
		occupancyViewButton_1.isFilled = true;
		occupancyViewButton_1.fillColor = 5131854;
		uiLayer.add(occupancyViewButton_1);

		// lotViewButton
		const lotViewButton = this.add.rectangle(913, 2530, 128, 128);
		lotViewButton.scaleX = 2.0471239809434234;
		lotViewButton.scaleY = 1.2020153222993333;
		lotViewButton.setOrigin(0.5, 1);
		lotViewButton.isFilled = true;
		lotViewButton.fillColor = 5131854;
		uiLayer.add(lotViewButton);

		// mapContainer (components)
		new MapDrag(mapContainer);

		// lotTest (components)
		new ParkingLot(lotTest);

		// bottomBar (components)
		const bottomBarAlign = new Align(bottomBar);
		bottomBarAlign.up = true;
		bottomBarAlign.down = true;
		bottomBarAlign.center = true;

		// dialogueText (components)
		const dialogueTextButton = new Button(dialogueText);
		dialogueTextButton.eventToEmit = "textButton";

		// turnoverViewButton (components)
		const turnoverViewButtonButton = new Button(turnoverViewButton);
		turnoverViewButtonButton.eventToEmit = "turnoverView";
		const turnoverViewButtonAlign = new Align(turnoverViewButton);
		turnoverViewButtonAlign.down = true;
		turnoverViewButtonAlign.center = true;
		turnoverViewButtonAlign.horizontalOffset = -300;

		// button (components)
		const buttonButton = new Button(button);
		buttonButton.eventToEmit = "showDialogue";

		// topBar (components)
		const topBarAlign = new Align(topBar);
		topBarAlign.up = true;
		topBarAlign.center = true;

		// spottrLogo (components)
		const spottrLogoAlign = new Align(spottrLogo);
		spottrLogoAlign.up = true;
		spottrLogoAlign.center = true;
		spottrLogoAlign.verticalOffset = 90;

		// occupancyViewButton_1 (components)
		const occupancyViewButton_1Button = new Button(occupancyViewButton_1);
		occupancyViewButton_1Button.eventToEmit = "occupancyView";
		const occupancyViewButton_1Align = new Align(occupancyViewButton_1);
		occupancyViewButton_1Align.down = true;
		occupancyViewButton_1Align.center = true;

		// lotViewButton (components)
		const lotViewButtonButton = new Button(lotViewButton);
		lotViewButtonButton.eventToEmit = "lotView";
		const lotViewButtonAlign = new Align(lotViewButton);
		lotViewButtonAlign.down = true;
		lotViewButtonAlign.center = true;
		lotViewButtonAlign.horizontalOffset = 300;

		this.mainLayer = mainLayer;
		this.occupancyHeatmap = occupancyHeatmap;
		this.turnoverHeatmap = turnoverHeatmap;
		this.uiLayer = uiLayer;
		this.dialogueText = dialogueText;
		this.turnoverViewButton = turnoverViewButton;
		this.occupancyViewButton_1 = occupancyViewButton_1;
		this.lotViewButton = lotViewButton;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Layer} */
	mainLayer;
	/** @type {Phaser.GameObjects.Image} */
	occupancyHeatmap;
	/** @type {Phaser.GameObjects.Image} */
	turnoverHeatmap;
	/** @type {Phaser.GameObjects.Layer} */
	uiLayer;
	/** @type {Phaser.GameObjects.Text} */
	dialogueText;
	/** @type {Phaser.GameObjects.Rectangle} */
	turnoverViewButton;
	/** @type {Phaser.GameObjects.Rectangle} */
	occupancyViewButton_1;
	/** @type {Phaser.GameObjects.Rectangle} */
	lotViewButton;

	/* START-USER-CODE */

	/**
	 * 'occupancy' 'turnover' or 'lot'
	 */
	mapView = 'occupancy'

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

		this.events.on('occupancyView', function ()
		{
			_this.setOccupancyView();
		});

		this.events.on('turnoverView', function ()
		{
			_this.setTurnoverView();
		});

		this.events.on('lotView', function ()
		{
			_this.setLotView();
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

	setOccupancyView()
	{
		if (this.mapView == 'occupancy')
		{
			return;
		}
		this.mapView = 'occupancy'

		this.occupancyHeatmap.visible = true;
		this.turnoverHeatmap.visible = false;
		// hide lots
	}

	setTurnoverView()
	{
		if (this.mapView == 'turnover')
		{
			return;
		}
		this.mapView = 'turnover'

		this.turnoverHeatmap.visible = true;
		this.occupancyHeatmap.visible = false;
		// hide lots
	}

	setTurnoverView()
	{
		if (this.mapView == 'lot')
		{
			return;
		}
		this.mapView = 'lot'

		// show lots
		this.turnoverHeatmap.visible = false;
		this.occupancyHeatmap.visible = false;
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
