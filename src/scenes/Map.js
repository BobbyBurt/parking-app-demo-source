
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
		occupancyHeatmap.visible = false;
		mapContainer.add(occupancyHeatmap);

		// turnoverHeatmap
		const turnoverHeatmap = this.add.image(784, 1401, "heatmap-temp-2");
		turnoverHeatmap.scaleX = 4.567640778523811;
		turnoverHeatmap.scaleY = 4.567640778523811;
		turnoverHeatmap.visible = false;
		mapContainer.add(turnoverHeatmap);

		// lotTest
		const lotTest = this.add.polygon(232, 717, "18.66017994061758 532.5989563943024 -90.11305535640798 255.90731013755897 438.0334973630689 79.54802215952583 532.3121845915389 343.649652018609");
		lotTest.isFilled = true;
		lotTest.fillColor = 15854442;
		mapContainer.add(lotTest);

		// lotTest_1
		const lotTest_1 = this.add.polygon(-682, 618, "18.66017994061758 532.5989563943024 -40.168979296773045 254.64087785763388 631.6231217654316 47.83210126189667 725.9672771870842 304.8089745904525");
		lotTest_1.isFilled = true;
		lotTest_1.fillColor = 15854442;
		mapContainer.add(lotTest_1);

		// uiLayer
		const uiLayer = this.add.layer();

		// viewDescBar
		const viewDescBar = this.add.rectangle(-163, 2551, 128, 128);
		viewDescBar.scaleX = 30;
		viewDescBar.scaleY = 2.613718040817636;
		viewDescBar.setOrigin(0.5, 1);
		viewDescBar.isFilled = true;
		viewDescBar.fillColor = 3026478;
		uiLayer.add(viewDescBar);

		// bottomBar
		const bottomBar = this.add.rectangle(605, 2546, 128, 128);
		bottomBar.scaleX = 30;
		bottomBar.scaleY = 1.3916874920778723;
		bottomBar.setOrigin(0.5, 1);
		bottomBar.isFilled = true;
		bottomBar.fillColor = 3026478;
		bottomBar.isStroked = true;
		bottomBar.strokeColor = 7631988;
		bottomBar.lineWidth = 3;
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

		// lotInfoContainer
		const lotInfoContainer = this.add.container(0, 0);
		lotInfoContainer.visible = false;
		uiLayer.add(lotInfoContainer);

		// lotInfoBox
		const lotInfoBox = this.add.rectangle(577, 1420, 128, 128);
		lotInfoBox.scaleX = 8.078620791835995;
		lotInfoBox.scaleY = 9.069518661883569;
		lotInfoBox.isFilled = true;
		lotInfoBox.fillColor = 4210752;
		lotInfoContainer.add(lotInfoBox);

		// lotInfoAddress
		const lotInfoAddress = this.add.text(574, 902, "", {});
		lotInfoAddress.setOrigin(0.5, 0);
		lotInfoAddress.text = "107 Humber College Blvd, Etobicoke, ON M9V 4E4";
		lotInfoAddress.setStyle({ "color": "#cbcbcbff", "fixedWidth":950,"fixedHeight":100,"fontFamily": "arial", "fontSize": "40px" });
		lotInfoAddress.setWordWrapWidth(950);
		lotInfoContainer.add(lotInfoAddress);

		// rectangle_1
		const rectangle_1 = this.add.rectangle(578, 1205, 128, 128);
		rectangle_1.scaleX = 7.737948387382009;
		rectangle_1.scaleY = 2.482453812100876;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 6184542;
		lotInfoContainer.add(rectangle_1);

		// lotInfoSpots
		const lotInfoSpots = this.add.text(580, 1494, "", {});
		lotInfoSpots.setOrigin(0.5, 0);
		lotInfoSpots.text = "Free spots: x/y";
		lotInfoSpots.setStyle({ "color": "#ffffffff", "fixedWidth":950,"fixedHeight":100,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoSpots.setWordWrapWidth(950);
		lotInfoContainer.add(lotInfoSpots);

		// lotInfoTurnoverText
		const lotInfoTurnoverText = this.add.text(576, 1563, "", {});
		lotInfoTurnoverText.setOrigin(0.5, 0);
		lotInfoTurnoverText.text = "Average turnover rate: 1 hr";
		lotInfoTurnoverText.setStyle({ "color": "#ffffffff", "fixedWidth":950,"fixedHeight":100,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoTurnoverText.setWordWrapWidth(950);
		lotInfoContainer.add(lotInfoTurnoverText);

		// lotInfoOccupancyText
		const lotInfoOccupancyText = this.add.text(575, 1639, "", {});
		lotInfoOccupancyText.setOrigin(0.5, 0);
		lotInfoOccupancyText.text = "Peak occupancy: 1:00pm";
		lotInfoOccupancyText.setStyle({ "color": "#ffffffff", "fixedWidth":950,"fixedHeight":100,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoOccupancyText.setWordWrapWidth(950);
		lotInfoContainer.add(lotInfoOccupancyText);

		// lotInfoAvailabilityText
		const lotInfoAvailabilityText = this.add.text(573, 1705, "", {});
		lotInfoAvailabilityText.setOrigin(0.5, 0);
		lotInfoAvailabilityText.text = "Peak availability: 5:00pm";
		lotInfoAvailabilityText.setStyle({ "color": "#ffffffff", "fixedWidth":950,"fixedHeight":100,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoAvailabilityText.setWordWrapWidth(950);
		lotInfoContainer.add(lotInfoAvailabilityText);

		// rectangle
		const rectangle = this.add.rectangle(582, 1872, 128, 128);
		rectangle.scaleX = 7.737948387382009;
		rectangle.scaleY = 1.0472114846743532;
		rectangle.isFilled = true;
		rectangle.fillColor = 6184542;
		lotInfoContainer.add(rectangle);

		// lotInfoHeader
		const lotInfoHeader = this.add.text(601, 1070, "", {});
		lotInfoHeader.setOrigin(0.5, 0);
		lotInfoHeader.text = "Public Parking lot";
		lotInfoHeader.setStyle({ "fixedWidth":800,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoContainer.add(lotInfoHeader);

		// lotInfoIcon
		const lotInfoIcon = this.add.ellipse(131, 1092, 128, 128);
		lotInfoIcon.scaleX = 0.38636524889129314;
		lotInfoIcon.scaleY = 0.38636524889129314;
		lotInfoIcon.isFilled = true;
		lotInfoIcon.fillColor = 16578573;
		lotInfoContainer.add(lotInfoIcon);

		// viewLabel
		const viewLabel = this.add.text(652, 2250, "", {});
		viewLabel.setOrigin(0.5, 0.5);
		viewLabel.text = "Occupancy view";
		viewLabel.setStyle({ "align": "center", "color": "#FFDD00", "fontFamily": "arial", "fontSize": "50px" });
		uiLayer.add(viewLabel);

		// viewDesc
		const viewDesc = this.add.text(672, 2307, "", {});
		viewDesc.setOrigin(0.5, 0.5);
		viewDesc.text = "Which general areas are busy";
		viewDesc.setStyle({ "align": "center", "color": "#ffff", "fontFamily": "arial", "fontSize": "40px" });
		uiLayer.add(viewDesc);

		// lists
		const lots = [lotTest, lotTest_1];

		// mapContainer (components)
		new MapDrag(mapContainer);

		// lotTest (components)
		const lotTestParkingLot = new ParkingLot(lotTest);
		lotTestParkingLot.totalSpots = 10;
		lotTestParkingLot.freeSpots = 2;
		lotTestParkingLot.peakOccupancy = "1:00pm";
		lotTestParkingLot.peakAvailability = "5:00pm";
		lotTestParkingLot.address = "106 Humber College Blvd, Etobicoke, ON M9V 4E4";
		lotTestParkingLot.handicap = true;
		lotTestParkingLot.averageTurnover = "50 min";

		// lotTest_1 (components)
		const lotTest_1ParkingLot = new ParkingLot(lotTest_1);
		lotTest_1ParkingLot.totalSpots = 22;
		lotTest_1ParkingLot.freeSpots = 6;
		lotTest_1ParkingLot.peakOccupancy = "2:00pm";
		lotTest_1ParkingLot.peakAvailability = "11:00am";
		lotTest_1ParkingLot.address = "413 Humber College Blvd, Etobicoke, ON M9V 4E4";
		lotTest_1ParkingLot.averageTurnover = "15 min";

		// viewDescBar (components)
		const viewDescBarAlign = new Align(viewDescBar);
		viewDescBarAlign.up = true;
		viewDescBarAlign.down = true;
		viewDescBarAlign.center = true;

		// bottomBar (components)
		const bottomBarAlign = new Align(bottomBar);
		bottomBarAlign.up = true;
		bottomBarAlign.down = true;
		bottomBarAlign.center = true;

		// dialogueText (components)
		const dialogueTextButton = new Button(dialogueText);
		dialogueTextButton.eventToEmit = "textButton";
		const dialogueTextAlign = new Align(dialogueText);
		dialogueTextAlign.center = true;

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

		// lotInfoBox (components)
		const lotInfoBoxAlign = new Align(lotInfoBox);
		lotInfoBoxAlign.center = true;

		// lotInfoAddress (components)
		const lotInfoAddressAlign = new Align(lotInfoAddress);
		lotInfoAddressAlign.center = true;

		// rectangle_1 (components)
		const rectangle_1Align = new Align(rectangle_1);
		rectangle_1Align.center = true;

		// lotInfoSpots (components)
		const lotInfoSpotsAlign = new Align(lotInfoSpots);
		lotInfoSpotsAlign.center = true;

		// lotInfoTurnoverText (components)
		const lotInfoTurnoverTextAlign = new Align(lotInfoTurnoverText);
		lotInfoTurnoverTextAlign.center = true;

		// lotInfoOccupancyText (components)
		const lotInfoOccupancyTextAlign = new Align(lotInfoOccupancyText);
		lotInfoOccupancyTextAlign.center = true;

		// lotInfoAvailabilityText (components)
		const lotInfoAvailabilityTextAlign = new Align(lotInfoAvailabilityText);
		lotInfoAvailabilityTextAlign.center = true;

		// rectangle (components)
		const rectangleAlign = new Align(rectangle);
		rectangleAlign.center = true;

		// lotInfoHeader (components)
		const lotInfoHeaderAlign = new Align(lotInfoHeader);
		lotInfoHeaderAlign.center = true;

		// viewLabel (components)
		const viewLabelAlign = new Align(viewLabel);
		viewLabelAlign.center = true;

		// viewDesc (components)
		const viewDescAlign = new Align(viewDesc);
		viewDescAlign.center = true;

		this.mainLayer = mainLayer;
		this.occupancyHeatmap = occupancyHeatmap;
		this.turnoverHeatmap = turnoverHeatmap;
		this.uiLayer = uiLayer;
		this.dialogueText = dialogueText;
		this.turnoverViewButton = turnoverViewButton;
		this.occupancyViewButton_1 = occupancyViewButton_1;
		this.lotViewButton = lotViewButton;
		this.lotInfoContainer = lotInfoContainer;
		this.lotInfoBox = lotInfoBox;
		this.lotInfoAddress = lotInfoAddress;
		this.rectangle_1 = rectangle_1;
		this.lotInfoSpots = lotInfoSpots;
		this.lotInfoTurnoverText = lotInfoTurnoverText;
		this.lotInfoOccupancyText = lotInfoOccupancyText;
		this.lotInfoAvailabilityText = lotInfoAvailabilityText;
		this.rectangle = rectangle;
		this.lotInfoHeader = lotInfoHeader;
		this.lotInfoIcon = lotInfoIcon;
		this.viewLabel = viewLabel;
		this.viewDesc = viewDesc;
		this.lots = lots;

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
	/** @type {Phaser.GameObjects.Container} */
	lotInfoContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	lotInfoBox;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoAddress;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle_1;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoSpots;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoTurnoverText;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoOccupancyText;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoAvailabilityText;
	/** @type {Phaser.GameObjects.Rectangle} */
	rectangle;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoHeader;
	/** @type {Phaser.GameObjects.Ellipse} */
	lotInfoIcon;
	/** @type {Phaser.GameObjects.Text} */
	viewLabel;
	/** @type {Phaser.GameObjects.Text} */
	viewDesc;
	/** @type {Phaser.GameObjects.Polygon[]} */
	lots;

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

	// TEST: lots
		this.setLotVisibility(false);

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
		this.setLotVisibility(false);
		this.lotInfoContainer.setVisible(false);

		this.viewLabel.setText('Occupancy view');
		this.viewDesc.setText('Which areas have parking occupancy');
			// TODO: think of a better way to word this
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
		this.setLotVisibility(false);
		this.lotInfoContainer.setVisible(false);

		this.viewLabel.setText('Turnover view');
		this.viewDesc.setText('Which areas have a longer turnover rate');
	}

	setLotView()
	{
		if (this.mapView == 'lot')
		{
			return;
		}
		this.mapView = 'lot'

		// show lots
		this.setLotVisibility(true);
		this.turnoverHeatmap.visible = false;
		this.occupancyHeatmap.visible = false;

		this.viewLabel.setText('Lot view');
		this.viewDesc.setText('Get info on individual parking lots');
	}

	setLotVisibility(visible)
	{
		this.lots.forEach(function (object, index)
		{
			object.setVisible(visible);
			object.setActive(visible);
		});
	}

	/**
	 * show lot info UI, update info for given parking lot
	 * @param {Boolean} visible if false, lotInfo ignored
	 * @param {*} lotInfo An object containing all parking lot component data
	 */
	setLotInfo(visible, lotInfo)
	{
		this.lotInfoContainer.setVisible(visible);
		// TODO: appear animation

		if (!visible)
		{
			return;
		}

		this.lotInfoSpots.setText('Free spots: ' + lotInfo.freeSpots + '/' + lotInfo.totalSpots);
		this.lotInfoAddress.setText(lotInfo.address);
		this.lotInfoAvailabilityText.setText('Peak availability: ' + lotInfo.peakAvailability);
		this.lotInfoOccupancyText.setText('Peak occupancy: ' + lotInfo.peakOccupancy);
		this.lotInfoTurnoverText.setText('Average turnover rate: ' + lotInfo.averageTurnover);
	}
		// TODO: call this to hide lot info on pointer down around UI


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
