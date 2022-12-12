
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

		// lotTest_2
		const lotTest_2 = this.add.polygon(-580, 956, "18.66017994061758 532.5989563943024 -40.168979296773045 254.64087785763388 631.6231217654316 47.83210126189667 725.9672771870842 304.8089745904525");
		lotTest_2.isFilled = true;
		lotTest_2.fillColor = 15854442;
		mapContainer.add(lotTest_2);

		// lotTest_3
		const lotTest_3 = this.add.polygon(864, 497, "18.66017994061758 532.5989563943024 -90.11305535640798 255.90731013755897 438.0334973630689 79.54802215952583 532.3121845915389 343.649652018609");
		lotTest_3.isFilled = true;
		lotTest_3.fillColor = 15854442;
		mapContainer.add(lotTest_3);

		// uiLayer
		const uiLayer = this.add.layer();

		// viewDescBar
		const viewDescBar = this.add.rectangle(-163, 2086, 128, 128);
		viewDescBar.scaleX = 30;
		viewDescBar.scaleY = 2.613718040817636;
		viewDescBar.setOrigin(0.5, 1);
		viewDescBar.isFilled = true;
		viewDescBar.fillColor = 3026478;
		uiLayer.add(viewDescBar);

		// viewLabel
		const viewLabel = this.add.text(652, 1785, "", {});
		viewLabel.setOrigin(0.5, 0.5);
		viewLabel.text = "Occupancy view";
		viewLabel.setStyle({ "align": "center", "color": "#FFDD00", "fontFamily": "arial", "fontSize": "50px" });
		uiLayer.add(viewLabel);

		// viewDesc
		const viewDesc = this.add.text(672, 1842, "", {});
		viewDesc.setOrigin(0.5, 0.5);
		viewDesc.text = "Which general areas are busy";
		viewDesc.setStyle({ "align": "center", "color": "#ffff", "fontFamily": "arial", "fontSize": "40px" });
		uiLayer.add(viewDesc);

		// bottomBar
		const bottomBar = this.add.rectangle(605, 1999, 128, 128);
		bottomBar.scaleX = 30;
		bottomBar.scaleY = 1.2007289492199529;
		bottomBar.setOrigin(0.5, 1);
		bottomBar.isFilled = true;
		bottomBar.fillColor = 3026478;
		bottomBar.isStroked = true;
		bottomBar.strokeColor = 7631988;
		bottomBar.lineWidth = 3;
		uiLayer.add(bottomBar);

		// button
		const button = this.add.image(-2419, 417, "button");
		button.scaleX = 2;
		button.scaleY = 2;
		uiLayer.add(button);

		// buttonText
		const buttonText = this.add.text(-2419, 415, "", {});
		buttonText.setOrigin(0.5, 0.5);
		buttonText.text = "Show text";
		buttonText.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "arial", "fontSize": "64px" });
		uiLayer.add(buttonText);

		// topBar
		const topBar = this.add.rectangle(0, 0, 128, 128);
		topBar.scaleX = 30;
		topBar.scaleY = 1.0181372105479631;
		topBar.setOrigin(0.5, 0);
		topBar.isFilled = true;
		topBar.fillColor = 3026478;
		uiLayer.add(topBar);

		// spottrLogo
		const spottrLogo = this.add.image(543, 69, "Spottr-logo");
		spottrLogo.scaleX = 0.4570156262809624;
		spottrLogo.scaleY = 0.4570156262809624;
		uiLayer.add(spottrLogo);

		// turnoverViewButton
		const turnoverViewButton = this.add.rectangle(290, 2022, 128, 128);
		turnoverViewButton.scaleX = 2.0471239809434234;
		turnoverViewButton.scaleY = 1.162895020111202;
		turnoverViewButton.setOrigin(0.5, 1);
		turnoverViewButton.isFilled = true;
		turnoverViewButton.fillColor = 3026478;
		turnoverViewButton.strokeColor = 16768256;
		turnoverViewButton.lineWidth = 3;
		uiLayer.add(turnoverViewButton);

		// turnover_view_icon
		const turnover_view_icon = this.add.image(474, 2031, "turnover-view-icon");
		turnover_view_icon.setOrigin(0.5, 1);
		uiLayer.add(turnover_view_icon);

		// occupancyViewButton
		const occupancyViewButton = this.add.rectangle(614, 2016, 128, 128);
		occupancyViewButton.scaleX = 2.0471239809434234;
		occupancyViewButton.scaleY = 1.162895020111202;
		occupancyViewButton.setOrigin(0.5, 1);
		occupancyViewButton.isFilled = true;
		occupancyViewButton.fillColor = 3026478;
		occupancyViewButton.strokeColor = 16768256;
		occupancyViewButton.lineWidth = 3;
		uiLayer.add(occupancyViewButton);

		// occupancy_view_icon
		const occupancy_view_icon = this.add.image(733, 2025, "occupancy-view-icon");
		occupancy_view_icon.setOrigin(0.5, 1);
		uiLayer.add(occupancy_view_icon);

		// lotViewButton
		const lotViewButton = this.add.rectangle(938, 2001, 128, 128);
		lotViewButton.scaleX = 2.0471239809434234;
		lotViewButton.scaleY = 1.162895020111202;
		lotViewButton.setOrigin(0.5, 1);
		lotViewButton.isFilled = true;
		lotViewButton.fillColor = 3026478;
		lotViewButton.strokeColor = 16768256;
		lotViewButton.lineWidth = 3;
		uiLayer.add(lotViewButton);

		// lot_info_view_icon
		const lot_info_view_icon = this.add.image(942, 1962, "lot-info-view-icon");
		lot_info_view_icon.setOrigin(0.5, 1);
		uiLayer.add(lot_info_view_icon);

		// lotInfoContainer
		const lotInfoContainer = this.add.container(2500, 1028);
		uiLayer.add(lotInfoContainer);

		// lotInfoBox
		const lotInfoBox = this.add.rectangle(0, -590, 1050, 1200);
		lotInfoBox.isFilled = true;
		lotInfoBox.fillColor = 4210752;
		lotInfoContainer.add(lotInfoBox);

		// lotInfoAddress
		const lotInfoAddress = this.add.text(0, -1049, "", {});
		lotInfoAddress.setOrigin(0.5, 0);
		lotInfoAddress.text = "107 Humber College Blvd, Etobicoke, ON M9V 4E4";
		lotInfoAddress.setStyle({ "color": "#cbcbcbff", "fixedWidth":900,"fixedHeight":100,"fontFamily": "arial", "fontSize": "40px" });
		lotInfoAddress.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoAddress);

		// lotInfoHeader
		const lotInfoHeader = this.add.text(-450, -1139, "", {});
		lotInfoHeader.text = "Public Parking lot";
		lotInfoHeader.setStyle({ "fixedWidth":800,"fontFamily": "arial", "fontSize": "60px" });
		lotInfoContainer.add(lotInfoHeader);

		// lotInfoHoursLabel
		const lotInfoHoursLabel = this.add.text(0, -912, "", {});
		lotInfoHoursLabel.setOrigin(0.5, 0);
		lotInfoHoursLabel.text = "Hours of operation";
		lotInfoHoursLabel.setStyle({ "color": "#cbcbcbff", "fixedWidth":900,"fixedHeight":50,"fontFamily": "arial", "fontSize": "40px" });
		lotInfoHoursLabel.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoHoursLabel);

		// lotInfoHours
		const lotInfoHours = this.add.text(0, -852, "", {});
		lotInfoHours.setOrigin(0.5, 0);
		lotInfoHours.text = "Open - closes 6:30pm";
		lotInfoHours.setStyle({ "color": "#ffffffff", "fixedWidth":700,"fixedHeight":70,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoHours.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoHours);

		// lotInfoSpotsLabel
		const lotInfoSpotsLabel = this.add.text(0, -730, "", {});
		lotInfoSpotsLabel.setOrigin(0.5, 0);
		lotInfoSpotsLabel.text = "Available parking spots";
		lotInfoSpotsLabel.setStyle({ "color": "#cbcbcbff", "fixedWidth":900,"fixedHeight":50,"fontFamily": "arial", "fontSize": "40px" });
		lotInfoSpotsLabel.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoSpotsLabel);

		// lotInfoSpots
		const lotInfoSpots = this.add.text(0, -671, "", {});
		lotInfoSpots.setOrigin(0.5, 0);
		lotInfoSpots.text = "5/30";
		lotInfoSpots.setStyle({ "color": "#ffffffff", "fixedWidth":700,"fixedHeight":70,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoSpots.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoSpots);

		// lotInfoOccupancyText
		const lotInfoOccupancyText = this.add.text(0, -497, "", {});
		lotInfoOccupancyText.setOrigin(0.5, 0);
		lotInfoOccupancyText.text = "12:30pm, 4:00pm";
		lotInfoOccupancyText.setStyle({ "color": "#ffffffff", "fixedWidth":700,"fixedHeight":70,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoOccupancyText.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoOccupancyText);

		// lotInfoOccupancyTextLabel
		const lotInfoOccupancyTextLabel = this.add.text(0, -556, "", {});
		lotInfoOccupancyTextLabel.setOrigin(0.5, 0);
		lotInfoOccupancyTextLabel.text = "Peak availability, occupancy";
		lotInfoOccupancyTextLabel.setStyle({ "color": "#cbcbcbff", "fixedWidth":900,"fixedHeight":50,"fontFamily": "arial", "fontSize": "40px" });
		lotInfoOccupancyTextLabel.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoOccupancyTextLabel);

		// lotInfoTurnoverTextLabel
		const lotInfoTurnoverTextLabel = this.add.text(0, -379, "", {});
		lotInfoTurnoverTextLabel.setOrigin(0.5, 0);
		lotInfoTurnoverTextLabel.text = "Average turnover time";
		lotInfoTurnoverTextLabel.setStyle({ "color": "#cbcbcbff", "fixedWidth":900,"fixedHeight":50,"fontFamily": "arial", "fontSize": "40px" });
		lotInfoTurnoverTextLabel.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoTurnoverTextLabel);

		// lotInfoTurnoverText
		const lotInfoTurnoverText = this.add.text(0, -320, "", {});
		lotInfoTurnoverText.setOrigin(0.5, 0);
		lotInfoTurnoverText.text = "30 mins";
		lotInfoTurnoverText.setStyle({ "color": "#ffffffff", "fixedWidth":700,"fixedHeight":70,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoTurnoverText.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoTurnoverText);

		// lotInfoDirectionsLabel
		const lotInfoDirectionsLabel = this.add.text(11, -200, "", {});
		lotInfoDirectionsLabel.setOrigin(0.5, 0);
		lotInfoDirectionsLabel.text = "Get directions from";
		lotInfoDirectionsLabel.setStyle({ "color": "#cbcbcbff", "fixedWidth":900,"fixedHeight":50,"fontFamily": "arial", "fontSize": "40px" });
		lotInfoDirectionsLabel.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoDirectionsLabel);

		// lotIntoReserveLabel
		const lotIntoReserveLabel = this.add.text(249, -200, "", {});
		lotIntoReserveLabel.setOrigin(0.5, 0);
		lotIntoReserveLabel.text = "Reserve from\n";
		lotIntoReserveLabel.setStyle({ "color": "#cbcbcbff", "fixedHeight":50,"fontFamily": "arial", "fontSize": "40px" });
		lotIntoReserveLabel.setWordWrapWidth(900);
		lotInfoContainer.add(lotIntoReserveLabel);

		// handicap_icon
		const handicap_icon = this.add.image(418, -1095, "handicap-icon");
		handicap_icon.scaleX = 0.8504718768044597;
		handicap_icon.scaleY = 0.8504718768044597;
		handicap_icon.tintTopLeft = 16777215;
		handicap_icon.tintTopRight = 16777215;
		handicap_icon.tintBottomLeft = 16777215;
		handicap_icon.tintBottomRight = 16777215;
		lotInfoContainer.add(handicap_icon);

		// hours_icon
		const hours_icon = this.add.image(-420, -822, "hours-icon");
		hours_icon.scaleX = 0.85;
		hours_icon.scaleY = 0.85;
		hours_icon.tintTopLeft = 16777215;
		hours_icon.tintTopRight = 16777215;
		hours_icon.tintBottomLeft = 16777215;
		hours_icon.tintBottomRight = 16777215;
		lotInfoContainer.add(hours_icon);

		// spots_icon
		const spots_icon = this.add.image(-420, -644, "spots-icon");
		spots_icon.scaleX = 0.85;
		spots_icon.scaleY = 0.85;
		lotInfoContainer.add(spots_icon);

		// peak_icon
		const peak_icon = this.add.image(-420, -468, "peak-icon");
		peak_icon.scaleX = 0.85;
		peak_icon.scaleY = 0.85;
		lotInfoContainer.add(peak_icon);

		// turnover_icon
		const turnover_icon = this.add.image(-420, -294, "turnover-icon");
		turnover_icon.scaleX = 0.85;
		turnover_icon.scaleY = 0.85;
		lotInfoContainer.add(turnover_icon);

		// lotInfoCostText
		const lotInfoCostText = this.add.text(242, -113, "", {});
		lotInfoCostText.text = "15$ / hr";
		lotInfoCostText.setStyle({ "color": "#ffffffff", "fixedWidth":250,"fixedHeight":70,"fontFamily": "arial", "fontSize": "50px" });
		lotInfoCostText.setWordWrapWidth(900);
		lotInfoContainer.add(lotInfoCostText);

		// applemaps_icon
		const applemaps_icon = this.add.image(-393, -86, "applemaps-icon");
		applemaps_icon.scaleX = 0.85;
		applemaps_icon.scaleY = 0.85;
		lotInfoContainer.add(applemaps_icon);

		// googlemaps_icon
		const googlemaps_icon = this.add.image(-259, -86, "googlemaps-icon");
		googlemaps_icon.scaleX = 0.85;
		googlemaps_icon.scaleY = 0.85;
		lotInfoContainer.add(googlemaps_icon);

		// waze_icon
		const waze_icon = this.add.image(-126, -86, "waze-icon");
		waze_icon.scaleX = 0.85;
		waze_icon.scaleY = 0.85;
		lotInfoContainer.add(waze_icon);

		// greenP_icon
		const greenP_icon = this.add.image(172, -86, "greenP-icon");
		greenP_icon.scaleX = 0.85;
		greenP_icon.scaleY = 0.85;
		lotInfoContainer.add(greenP_icon);

		// spothero_icon
		const spothero_icon = this.add.image(172, -86, "spothero-icon");
		spothero_icon.scaleX = 0.85;
		spothero_icon.scaleY = 0.85;
		lotInfoContainer.add(spothero_icon);

		// searchBarContainer
		const searchBarContainer = this.add.container(-1104, -157);
		uiLayer.add(searchBarContainer);

		// search_bar
		const search_bar = this.add.image(0, 0, "search-bar");
		search_bar.scaleX = 0.962677011416493;
		search_bar.scaleY = 0.962677011416493;
		searchBarContainer.add(search_bar);

		// searchText
		const searchText = this.add.text(49, 0, "", {});
		searchText.setOrigin(0.5, 0.5);
		searchText.text = "Search for your destination";
		searchText.setStyle({ "color": "#c6c6c6ff", "fixedWidth":900,"fontFamily": "arial", "fontSize": "60px" });
		searchBarContainer.add(searchText);

		// zoomButtonContainer
		const zoomButtonContainer = this.add.container(116, 621);
		uiLayer.add(zoomButtonContainer);

		// zoomInButton
		const zoomInButton = this.add.ellipse(-1, -166, 128, 128);
		zoomInButton.isFilled = true;
		zoomInButton.fillColor = 6645093;
		zoomInButton.isStroked = true;
		zoomInButton.lineWidth = 5;
		zoomButtonContainer.add(zoomInButton);

		// zoomOutButton
		const zoomOutButton = this.add.ellipse(-1, -3, 128, 128);
		zoomOutButton.isFilled = true;
		zoomOutButton.fillColor = 6645093;
		zoomOutButton.isStroked = true;
		zoomOutButton.lineWidth = 5;
		zoomButtonContainer.add(zoomOutButton);

		// text_1
		const text_1 = this.add.text(0, -165, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "+";
		text_1.setStyle({ "align": "center", "fontFamily": "arial", "fontSize": "80px" });
		zoomButtonContainer.add(text_1);

		// text
		const text = this.add.text(-2, -8, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "-";
		text.setStyle({ "align": "center", "fontFamily": "arial", "fontSize": "80px" });
		zoomButtonContainer.add(text);

		// dialogueText
		const dialogueText = this.add.text(576, 1245, "", {});
		dialogueText.setOrigin(0.5, 0.5);
		dialogueText.text = "This is a dialogue box. In the final app, it will guide the user through the app as a solution, as well as explain the problem, etc. It's a gameobject that can be made to appear by code, and disappears on pointer down.";
		dialogueText.setStyle({ "backgroundColor": "#52676cff", "fontFamily": "arial", "fontSize": "64px" });
		dialogueText.setPadding({"left":50,"top":50,"right":50,"bottom":50});
		dialogueText.setWordWrapWidth(1000, true);
		uiLayer.add(dialogueText);

		// lists
		const lots = [lotTest, lotTest_1, lotTest_2, lotTest_3];

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
		lotTestParkingLot.averageTurnover = "50 mins";
		lotTestParkingLot.open = true;
		lotTestParkingLot.hours = "open 24/7";
		lotTestParkingLot.label = "Public parking lot";

		// lotTest_1 (components)
		const lotTest_1ParkingLot = new ParkingLot(lotTest_1);
		lotTest_1ParkingLot.totalSpots = 22;
		lotTest_1ParkingLot.peakOccupancy = "2:00pm";
		lotTest_1ParkingLot.peakAvailability = "11:00am";
		lotTest_1ParkingLot.address = "413 Humber College Blvd, Etobicoke, ON M9V 4E4";
		lotTest_1ParkingLot.averageTurnover = "15 mins";
		lotTest_1ParkingLot.spotHero = true;
		lotTest_1ParkingLot.cost = "15$ / hr";
		lotTest_1ParkingLot.open = true;
		lotTest_1ParkingLot.hours = "closes 6:30pm";
		lotTest_1ParkingLot.label = "Green P Parking Garage";

		// lotTest_2 (components)
		const lotTest_2ParkingLot = new ParkingLot(lotTest_2);
		lotTest_2ParkingLot.totalSpots = 100;
		lotTest_2ParkingLot.peakOccupancy = "2:30pm";
		lotTest_2ParkingLot.peakAvailability = "11:30am";
		lotTest_2ParkingLot.address = "412 Humber College Blvd, Etobicoke, ON M9V 4E4";
		lotTest_2ParkingLot.averageTurnover = "2 hrs";
		lotTest_2ParkingLot.greenP = true;
		lotTest_2ParkingLot.cost = "16$ / hr";
		lotTest_2ParkingLot.hours = "closes 2:00pm";
		lotTest_2ParkingLot.label = "Spot Parking Garage";

		// lotTest_3 (components)
		const lotTest_3ParkingLot = new ParkingLot(lotTest_3);
		lotTest_3ParkingLot.totalSpots = 10;
		lotTest_3ParkingLot.freeSpots = 2;
		lotTest_3ParkingLot.peakOccupancy = "1:00pm";
		lotTest_3ParkingLot.peakAvailability = "5:00pm";
		lotTest_3ParkingLot.address = "106 Humber College Blvd, Etobicoke, ON M9V 4E4";
		lotTest_3ParkingLot.handicap = true;
		lotTest_3ParkingLot.averageTurnover = "50 mins";
		lotTest_3ParkingLot.hours = "open 24/7";
		lotTest_3ParkingLot.label = "Public parking lot";

		// viewDescBar (components)
		const viewDescBarAlign = new Align(viewDescBar);
		viewDescBarAlign.up = true;
		viewDescBarAlign.down = true;
		viewDescBarAlign.center = true;

		// viewLabel (components)
		const viewLabelAlign = new Align(viewLabel);
		viewLabelAlign.down = true;
		viewLabelAlign.center = true;
		viewLabelAlign.verticalOffset = -282;

		// viewDesc (components)
		const viewDescAlign = new Align(viewDesc);
		viewDescAlign.down = true;
		viewDescAlign.center = true;
		viewDescAlign.verticalOffset = -225;

		// bottomBar (components)
		const bottomBarAlign = new Align(bottomBar);
		bottomBarAlign.up = true;
		bottomBarAlign.down = true;
		bottomBarAlign.center = true;

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
		spottrLogoAlign.verticalOffset = 70;

		// turnoverViewButton (components)
		const turnoverViewButtonButton = new Button(turnoverViewButton);
		turnoverViewButtonButton.eventToEmit = "turnoverView";
		const turnoverViewButtonAlign = new Align(turnoverViewButton);
		turnoverViewButtonAlign.down = true;
		turnoverViewButtonAlign.center = true;
		turnoverViewButtonAlign.horizontalOffset = -300;

		// turnover_view_icon (components)
		const turnover_view_iconAlign = new Align(turnover_view_icon);
		turnover_view_iconAlign.down = true;
		turnover_view_iconAlign.center = true;
		turnover_view_iconAlign.horizontalOffset = -300;
		turnover_view_iconAlign.verticalOffset = -40;

		// occupancyViewButton (components)
		const occupancyViewButtonButton = new Button(occupancyViewButton);
		occupancyViewButtonButton.eventToEmit = "occupancyView";
		const occupancyViewButtonAlign = new Align(occupancyViewButton);
		occupancyViewButtonAlign.down = true;
		occupancyViewButtonAlign.center = true;

		// occupancy_view_icon (components)
		const occupancy_view_iconAlign = new Align(occupancy_view_icon);
		occupancy_view_iconAlign.down = true;
		occupancy_view_iconAlign.center = true;
		occupancy_view_iconAlign.verticalOffset = -40;

		// lotViewButton (components)
		const lotViewButtonButton = new Button(lotViewButton);
		lotViewButtonButton.eventToEmit = "lotView";
		const lotViewButtonAlign = new Align(lotViewButton);
		lotViewButtonAlign.down = true;
		lotViewButtonAlign.center = true;
		lotViewButtonAlign.horizontalOffset = 300;

		// lot_info_view_icon (components)
		const lot_info_view_iconAlign = new Align(lot_info_view_icon);
		lot_info_view_iconAlign.down = true;
		lot_info_view_iconAlign.center = true;
		lot_info_view_iconAlign.horizontalOffset = 300;
		lot_info_view_iconAlign.verticalOffset = -40;

		// lotInfoContainer (components)
		const lotInfoContainerAlign = new Align(lotInfoContainer);
		lotInfoContainerAlign.down = true;
		lotInfoContainerAlign.center = true;

		// searchBarContainer (components)
		const searchBarContainerAlign = new Align(searchBarContainer);
		searchBarContainerAlign.up = true;
		searchBarContainerAlign.center = true;
		searchBarContainerAlign.verticalOffset = 220;

		// zoomButtonContainer (components)
		const zoomButtonContainerAlign = new Align(zoomButtonContainer);
		zoomButtonContainerAlign.up = true;
		zoomButtonContainerAlign.left = true;
		zoomButtonContainerAlign.horizontalOffset = 115;
		zoomButtonContainerAlign.verticalOffset = 560;

		// zoomInButton (components)
		const zoomInButtonButton = new Button(zoomInButton);
		zoomInButtonButton.eventToEmit = "zoomIn";

		// zoomOutButton (components)
		const zoomOutButtonButton = new Button(zoomOutButton);
		zoomOutButtonButton.eventToEmit = "zoomOut";

		// dialogueText (components)
		const dialogueTextButton = new Button(dialogueText);
		dialogueTextButton.eventToEmit = "textButton";
		const dialogueTextAlign = new Align(dialogueText);
		dialogueTextAlign.middle = true;
		dialogueTextAlign.center = true;

		this.mainLayer = mainLayer;
		this.occupancyHeatmap = occupancyHeatmap;
		this.turnoverHeatmap = turnoverHeatmap;
		this.uiLayer = uiLayer;
		this.viewDescBar = viewDescBar;
		this.viewLabel = viewLabel;
		this.viewDesc = viewDesc;
		this.turnoverViewButton = turnoverViewButton;
		this.turnover_view_icon = turnover_view_icon;
		this.occupancyViewButton = occupancyViewButton;
		this.occupancy_view_icon = occupancy_view_icon;
		this.lotViewButton = lotViewButton;
		this.lot_info_view_icon = lot_info_view_icon;
		this.lotInfoContainer = lotInfoContainer;
		this.lotInfoBox = lotInfoBox;
		this.lotInfoAddress = lotInfoAddress;
		this.lotInfoHeader = lotInfoHeader;
		this.lotInfoHoursLabel = lotInfoHoursLabel;
		this.lotInfoHours = lotInfoHours;
		this.lotInfoSpotsLabel = lotInfoSpotsLabel;
		this.lotInfoSpots = lotInfoSpots;
		this.lotInfoOccupancyText = lotInfoOccupancyText;
		this.lotInfoOccupancyTextLabel = lotInfoOccupancyTextLabel;
		this.lotInfoTurnoverTextLabel = lotInfoTurnoverTextLabel;
		this.lotInfoTurnoverText = lotInfoTurnoverText;
		this.lotInfoDirectionsLabel = lotInfoDirectionsLabel;
		this.lotIntoReserveLabel = lotIntoReserveLabel;
		this.handicap_icon = handicap_icon;
		this.hours_icon = hours_icon;
		this.spots_icon = spots_icon;
		this.lotInfoCostText = lotInfoCostText;
		this.greenP_icon = greenP_icon;
		this.spothero_icon = spothero_icon;
		this.searchBarContainer = searchBarContainer;
		this.searchText = searchText;
		this.dialogueText = dialogueText;
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
	/** @type {Phaser.GameObjects.Rectangle} */
	viewDescBar;
	/** @type {Phaser.GameObjects.Text} */
	viewLabel;
	/** @type {Phaser.GameObjects.Text} */
	viewDesc;
	/** @type {Phaser.GameObjects.Rectangle} */
	turnoverViewButton;
	/** @type {Phaser.GameObjects.Image} */
	turnover_view_icon;
	/** @type {Phaser.GameObjects.Rectangle} */
	occupancyViewButton;
	/** @type {Phaser.GameObjects.Image} */
	occupancy_view_icon;
	/** @type {Phaser.GameObjects.Rectangle} */
	lotViewButton;
	/** @type {Phaser.GameObjects.Image} */
	lot_info_view_icon;
	/** @type {Phaser.GameObjects.Container} */
	lotInfoContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	lotInfoBox;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoAddress;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoHeader;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoHoursLabel;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoHours;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoSpotsLabel;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoSpots;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoOccupancyText;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoOccupancyTextLabel;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoTurnoverTextLabel;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoTurnoverText;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoDirectionsLabel;
	/** @type {Phaser.GameObjects.Text} */
	lotIntoReserveLabel;
	/** @type {Phaser.GameObjects.Image} */
	handicap_icon;
	/** @type {Phaser.GameObjects.Image} */
	hours_icon;
	/** @type {Phaser.GameObjects.Image} */
	spots_icon;
	/** @type {Phaser.GameObjects.Text} */
	lotInfoCostText;
	/** @type {Phaser.GameObjects.Image} */
	greenP_icon;
	/** @type {Phaser.GameObjects.Image} */
	spothero_icon;
	/** @type {Phaser.GameObjects.Container} */
	searchBarContainer;
	/** @type {Phaser.GameObjects.Text} */
	searchText;
	/** @type {Phaser.GameObjects.Text} */
	dialogueText;
	/** @type {Phaser.GameObjects.Polygon[]} */
	lots;

	/* START-USER-CODE */

	/**
	 * 'occupancy' 'turnover' 'lot' or 'normal'
	 */
	mapView = 'normal'

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
			if (_this.mapView != 'occupancy')
			{
				_this.setOccupancyView();
			}
			else
			{
				_this.setNormalView();
			}
		});

		this.events.on('turnoverView', function ()
		{
			if (_this.mapView != 'turnover')
			{
				_this.setTurnoverView();
			}
			else
			{
				_this.setNormalView();
			}
		});

		this.events.on('lotView', function ()
		{
			if (_this.mapView != 'lot')
			{
				_this.setLotView();
			}
			else
			{
				_this.setNormalView();
			}
		});

		this.events.on('zoomOut', function ()
		{
			_this.cameras.main.zoomTo(_this.cameras.main.zoom * .7, 300, 'Sine.easeInOut');
		});
		this.events.on('zoomIn', function ()
		{
			_this.cameras.main.zoomTo(_this.cameras.main.zoom / .7, 300, 'Sine.easeInOut');
		});
			// TODO: add min & max zoom
			// TODO: decide where these buttons should go, add Aligh component

		this.lotInfoContainer.setName('lotInfoContainer');
		this.lotInfoContainer.setSize(1000, 1100);
		this.lotInfoContainer.setInteractive();

		this.input.on('pointerdown', function (pointer, gameObject)
		{
			// console.log(gameObject[0].name)
			if (gameObject[0].name !== 'lotInfoContainer')
			{
				_this.setLotInfo(false);
			}
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

	setNormalView()
	{
		if (this.mapView == 'normal')
		{
			return;
		}
		this.mapView = 'normal';

	// button visual
		this.lot_info_view_icon.setTint(0xffffff);
		this.turnover_view_icon.setTint(0xffffff);
		this.occupancy_view_icon.setTint(0xffffff);

	// views' object visibility
		this.occupancyHeatmap.visible = false;
		this.turnoverHeatmap.visible = false;
		this.setLotVisibility(false);
		this.lotInfoContainer.setVisible(false);		

		this.setViewLabel(false);

		this.searchBarContainer.setVisible(true);
	}

	setOccupancyView()
	{
		if (this.mapView == 'occupancy')
		{
			return;
		}
		this.mapView = 'occupancy'

	// button visual
		this.lot_info_view_icon.setTint(0xffffff);
		this.turnover_view_icon.setTint(0xffffff);
		this.occupancy_view_icon.setTint(0xFFDD00);

	// views' object visibility
		this.occupancyHeatmap.visible = true;
		this.turnoverHeatmap.visible = false;
		this.setLotVisibility(false);
		this.lotInfoContainer.setVisible(false);

		this.setViewLabel(true, 'Occupancy view', 'Which areas have parking occupancy right now');
			// TODO: think of a better way to word this

		this.searchBarContainer.setVisible(false);

	}

	setTurnoverView()
	{
		if (this.mapView == 'turnover')
		{
			return;
		}
		this.mapView = 'turnover'

	// button visual
		this.lot_info_view_icon.setTint(0xffffff);
		this.turnover_view_icon.setTint(0xFFDD00);
		this.occupancy_view_icon.setTint(0xffffff);

	// views' object visibility
		this.turnoverHeatmap.visible = true;
		this.occupancyHeatmap.visible = false;
		this.setLotVisibility(false);
		this.lotInfoContainer.setVisible(false);

		this.setViewLabel(true, 'Turnover view', 'Which areas do people park in for longer');

		this.searchBarContainer.setVisible(false);
	}

	setLotView()
	{
		if (this.mapView == 'lot')
		{
			return;
		}
		this.mapView = 'lot'

	// button visual
		this.lot_info_view_icon.setTint(0xFFDD00);
		this.turnover_view_icon.setTint(0xffffff);
		this.occupancy_view_icon.setTint(0xffffff);

	// views' object visibility
		this.setLotVisibility(true);
		this.turnoverHeatmap.visible = false;
		this.occupancyHeatmap.visible = false;

		this.setViewLabel(true, 'Lot view', 'Get info on individual parking lots');

		this.searchBarContainer.setVisible(false);
	}

	setViewLabel(visible, label, description)
	{
		this.viewLabel.setVisible(visible);
		this.viewDesc.setVisible(visible);
		this.viewDescBar.setVisible(visible);

		if (!visible)
		{
			return;
		}

		this.viewLabel.setText(label);
		this.viewDesc.setText(description);
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

		this.lotInfoHeader.setText(lotInfo.label);

		this.lotInfoAddress.setText(lotInfo.address);

		this.lotInfoSpots.setText(lotInfo.freeSpots + '/' + lotInfo.totalSpots);
		this.spots_icon.setTint((lotInfo.freeSpots != 0 ? '0x95fa80' : '0xfa8080'));

		// this.lotInfoAvailabilityText.setText('Peak availability: ' + lotInfo.peakAvailability);
		this.lotInfoOccupancyText.setText(lotInfo.peakAvailability + ', ' + lotInfo.peakOccupancy);

		this.lotInfoTurnoverText.setText(lotInfo.averageTurnover);

		this.lotInfoHours.setText((lotInfo.open ? 'open' : 'closed') + ' - ' + lotInfo.hours);
		this.hours_icon.setTint((lotInfo.open ? '0x95fa80' : '0xfa8080'));

		this.lotInfoCostText.setText(lotInfo.cost);
		this.greenP_icon.setVisible(lotInfo.greenP);
		this.spothero_icon.setVisible(lotInfo.spotHero);
		this.lotIntoReserveLabel.setVisible(lotInfo.spotHero || lotInfo.greenP)

		this.handicap_icon.setVisible(lotInfo.handicap)

	// // TEST: image colour change test
	// 	this.colourTest.tint = 16768256;
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

		this.adaptiveZoom.setAdaptiveZoom(this.UICam, 1170, 2000);

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
