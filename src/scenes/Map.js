
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
		const mapTemp = this.add.image(784, 1401, "map");
		mapTemp.scaleX = 4.567640778523811;
		mapTemp.scaleY = 4.567640778523811;
		mapContainer.add(mapTemp);

		// occupancyHeatmap
		const occupancyHeatmap = this.add.image(784, 1401, "heatmap-1");
		occupancyHeatmap.scaleX = 4.567640778523811;
		occupancyHeatmap.scaleY = 4.567640778523811;
		occupancyHeatmap.visible = false;
		mapContainer.add(occupancyHeatmap);

		// turnoverHeatmap
		const turnoverHeatmap = this.add.image(784, 1401, "heatmap-2");
		turnoverHeatmap.scaleX = 4.567640778523811;
		turnoverHeatmap.scaleY = 4.567640778523811;
		turnoverHeatmap.visible = false;
		mapContainer.add(turnoverHeatmap);

		// lotTest
		const lotTest = this.add.polygon(-1139.0662034334496, -311.47521513579414, "178.1652839272125 894.4735106476622 -57.489419124444794 105.30427252118207 293.25246448732423 -18.003420936080488 506.985799813246 647.8581237331372");
		lotTest.setOrigin(0, 0);
		lotTest.visible = false;
		lotTest.isFilled = true;
		lotTest.fillColor = 15854442;
		lotTest.fillAlpha = 0.5;
		lotTest.isStroked = true;
		lotTest.strokeColor = 15854442;
		lotTest.lineWidth = 8;
		mapContainer.add(lotTest);

		// lotTest_1
		const lotTest_1 = this.add.polygon(-1243, 651, "-26.6735314398436 228.21026272784377 -57.489419124444794 105.30427252118207 293.25246448732423 -18.003420936080488 652.8888680579587 -297.9025626898097 683.0307486808451 -155.41367247252856 567.9435681207334 -10.184611289530494");
		lotTest_1.setOrigin(0, 0);
		lotTest_1.visible = false;
		lotTest_1.isFilled = true;
		lotTest_1.fillColor = 15854442;
		lotTest_1.fillAlpha = 0.5;
		lotTest_1.isStroked = true;
		lotTest_1.strokeColor = 15854442;
		mapContainer.add(lotTest_1);

		// lotTest_2
		const lotTest_2 = this.add.polygon(-431, -544, "62.5138356935276 503.8142899924124 -57.489419124444794 105.30427252118207 431.2369848238679 -42.269361251256214 554.9225981397416 333.45486033092607");
		lotTest_2.setOrigin(0, 0);
		lotTest_2.visible = false;
		lotTest_2.isFilled = true;
		lotTest_2.fillColor = 15854442;
		lotTest_2.fillAlpha = 0.5;
		lotTest_2.isStroked = true;
		lotTest_2.strokeColor = 15854442;
		lotTest_2.lineWidth = 8;
		mapContainer.add(lotTest_2);

		// lotTest_3
		const lotTest_3 = this.add.polygon(-721, -454, "-4.496893840099233 324.44306612165053 -57.489419124444794 105.30427252118207 179.8646807250709 25.730641509729253 249.87540524349004 224.09436097858324");
		lotTest_3.setOrigin(0, 0);
		lotTest_3.visible = false;
		lotTest_3.isFilled = true;
		lotTest_3.fillColor = 15854442;
		lotTest_3.fillAlpha = 0.5;
		lotTest_3.isStroked = true;
		lotTest_3.strokeColor = 15854442;
		lotTest_3.lineWidth = 8;
		mapContainer.add(lotTest_3);

		// lotTest_4
		const lotTest_4 = this.add.polygon(-208.78660583496094, 878.7864379882812, "-25.37873330182188 763.0579066229473 -130.39482007945043 392.00106667532623 198.65558515711908 326.65772379146847 294.3369086656251 651.0407473934767");
		lotTest_4.setOrigin(0, 0);
		lotTest_4.visible = false;
		lotTest_4.isFilled = true;
		lotTest_4.fillColor = 15854442;
		lotTest_4.fillAlpha = 0.5;
		lotTest_4.isStroked = true;
		lotTest_4.strokeColor = 15854442;
		lotTest_4.lineWidth = 8;
		mapContainer.add(lotTest_4);

		// lotTest_5
		const lotTest_5 = this.add.polygon(868, -920, "-4.496893840099233 324.44306612165053 -57.489419124444794 105.30427252118207 179.8646807250709 25.730641509729253 249.87540524349004 224.09436097858324");
		lotTest_5.setOrigin(0, 0);
		lotTest_5.visible = false;
		lotTest_5.isFilled = true;
		lotTest_5.fillColor = 15854442;
		lotTest_5.fillAlpha = 0.5;
		lotTest_5.isStroked = true;
		lotTest_5.strokeColor = 15854442;
		lotTest_5.lineWidth = 8;
		mapContainer.add(lotTest_5);

		// lotTest_6
		const lotTest_6 = this.add.polygon(770, -1309, "42.01066343436344 400.9902418546145 -57.489419124444794 105.30427252118207 179.8646807250709 25.730641509729253 278.1515365603568 325.8545094963439");
		lotTest_6.setOrigin(0, 0);
		lotTest_6.visible = false;
		lotTest_6.isFilled = true;
		lotTest_6.fillColor = 15854442;
		lotTest_6.fillAlpha = 0.5;
		lotTest_6.isStroked = true;
		lotTest_6.strokeColor = 15854442;
		lotTest_6.lineWidth = 8;
		mapContainer.add(lotTest_6);

		// lotTest_7
		const lotTest_7 = this.add.polygon(34, -1080, "42.01066343436344 400.9902418546145 -57.489419124444794 105.30427252118207 179.8646807250709 25.730641509729253 278.1515365603568 325.8545094963439");
		lotTest_7.setOrigin(0, 0);
		lotTest_7.visible = false;
		lotTest_7.isFilled = true;
		lotTest_7.fillColor = 15854442;
		lotTest_7.fillAlpha = 0.5;
		lotTest_7.isStroked = true;
		lotTest_7.strokeColor = 15854442;
		lotTest_7.lineWidth = 8;
		mapContainer.add(lotTest_7);

		// lotTest_8
		const lotTest_8 = this.add.polygon(-50, -198, "30.80816333989305 356.9403195983069 -57.489419124444794 105.30427252118207 179.8646807250709 25.730641509729253 255.3392064371975 278.66344218823747");
		lotTest_8.setOrigin(0, 0);
		lotTest_8.visible = false;
		lotTest_8.isFilled = true;
		lotTest_8.fillColor = 15854442;
		lotTest_8.fillAlpha = 0.5;
		lotTest_8.isStroked = true;
		lotTest_8.strokeColor = 15854442;
		lotTest_8.lineWidth = 8;
		mapContainer.add(lotTest_8);

		// lotTest_9
		const lotTest_9 = this.add.polygon(1494, 829, "-48.674027317745185 725.5871337730171 -130.39482007945043 392.00106667532623 198.65558515711908 326.65772379146847 292.0890122508374 621.5880242942937");
		lotTest_9.setOrigin(0, 0);
		lotTest_9.visible = false;
		lotTest_9.isFilled = true;
		lotTest_9.fillColor = 15854442;
		lotTest_9.fillAlpha = 0.5;
		lotTest_9.isStroked = true;
		lotTest_9.strokeColor = 15854442;
		lotTest_9.lineWidth = 8;
		mapContainer.add(lotTest_9);

		// lotTest_10
		const lotTest_10 = this.add.polygon(1018, 986, "-48.674027317745185 725.5871337730171 -130.39482007945043 392.00106667532623 198.65558515711908 326.65772379146847 292.0890122508374 621.5880242942937");
		lotTest_10.setOrigin(0, 0);
		lotTest_10.visible = false;
		lotTest_10.isFilled = true;
		lotTest_10.fillColor = 15854442;
		lotTest_10.fillAlpha = 0.5;
		lotTest_10.isStroked = true;
		lotTest_10.strokeColor = 15854442;
		lotTest_10.lineWidth = 8;
		mapContainer.add(lotTest_10);

		// lotTest_11
		const lotTest_11 = this.add.polygon(208, 436, "294.0758885427109 847.1904289730971 117.69001065997304 767.6438565946075 41.60198490663515 487.50157995731786 -127.63345028381859 522.5015781689235 -224.7061052300475 113.97854444093184 107.3143707845179 41.34906531274561 292.0890122508374 621.5880242942937");
		lotTest_11.setOrigin(0, 0);
		lotTest_11.visible = false;
		lotTest_11.isFilled = true;
		lotTest_11.fillColor = 15854442;
		lotTest_11.fillAlpha = 0.5;
		lotTest_11.isStroked = true;
		lotTest_11.strokeColor = 15854442;
		lotTest_11.lineWidth = 8;
		mapContainer.add(lotTest_11);

		// lotTest_12
		const lotTest_12 = this.add.polygon(45, 107, "128.15608385590755 308.6740466554497 49.717892764442084 54.344154328576735 179.8646807250709 25.730641509729253 255.3392064371975 278.66344218823747");
		lotTest_12.setOrigin(0, 0);
		lotTest_12.visible = false;
		lotTest_12.isFilled = true;
		lotTest_12.fillColor = 15854442;
		lotTest_12.fillAlpha = 0.5;
		lotTest_12.isStroked = true;
		lotTest_12.strokeColor = 15854442;
		lotTest_12.lineWidth = 8;
		mapContainer.add(lotTest_12);

		// lotTest_13
		const lotTest_13 = this.add.polygon(-334, 470, "-25.37873330182188 763.0579066229473 -222.0717596096456 147.4614127012684 32.543527777651775 -116.24727780700385 318.0763857762638 696.7029612081526");
		lotTest_13.setOrigin(0, 0);
		lotTest_13.visible = false;
		lotTest_13.isFilled = true;
		lotTest_13.fillColor = 15854442;
		lotTest_13.fillAlpha = 0.5;
		lotTest_13.isStroked = true;
		lotTest_13.strokeColor = 15854442;
		lotTest_13.lineWidth = 8;
		mapContainer.add(lotTest_13);

		// uiLayer
		const uiLayer = this.add.layer();

		// viewDescBar
		const viewDescBar = this.add.rectangle(-163, 2086, 128, 128);
		viewDescBar.scaleX = 30;
		viewDescBar.scaleY = 2.6478738721845354;
		viewDescBar.setOrigin(0.5, 1);
		viewDescBar.visible = false;
		viewDescBar.isFilled = true;
		viewDescBar.fillColor = 3026478;
		uiLayer.add(viewDescBar);

		// viewLabel
		const viewLabel = this.add.text(652, 1785, "", {});
		viewLabel.setOrigin(0.5, 0.5);
		viewLabel.visible = false;
		viewLabel.text = "Occupancy view";
		viewLabel.setStyle({ "align": "center", "color": "#FFDD00", "fontFamily": "arial", "fontSize": "50px" });
		uiLayer.add(viewLabel);

		// viewDesc
		const viewDesc = this.add.text(672, 1842, "", {});
		viewDesc.setOrigin(0.5, 0.5);
		viewDesc.visible = false;
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
		dialogueText.setStyle({ "backgroundColor": "#4c4c4cff", "fontFamily": "arial", "fontSize": "64px" });
		dialogueText.setPadding({"left":50,"top":50,"right":50,"bottom":50});
		dialogueText.setWordWrapWidth(1000, true);
		uiLayer.add(dialogueText);

		// occupancy_graph
		const occupancy_graph = this.add.image(623, 1595, "occupancy-graph");
		occupancy_graph.flipY = true;
		occupancy_graph.visible = false;
		uiLayer.add(occupancy_graph);

		// turnover_graph
		const turnover_graph = this.add.image(704, 1686, "turnover-graph");
		turnover_graph.flipY = true;
		turnover_graph.visible = false;
		uiLayer.add(turnover_graph);

		// lists
		const lots = [lotTest, lotTest_13, lotTest_12, lotTest_11, lotTest_10, lotTest_9, lotTest_8, lotTest_7, lotTest_6, lotTest_5, lotTest_4, lotTest_3, lotTest_2, lotTest_1];

		// mapContainer (components)
		new MapDrag(mapContainer);

		// lotTest (components)
		const lotTestParkingLot = new ParkingLot(lotTest);
		lotTestParkingLot.totalSpots = 100;
		lotTestParkingLot.freeSpots = 9;
		lotTestParkingLot.peakOccupancy = "3:00pm";
		lotTestParkingLot.peakAvailability = "11:00pm";
		lotTestParkingLot.address = "Armoury St, Toronto, ON M5G 1R3";
		lotTestParkingLot.handicap = true;
		lotTestParkingLot.averageTurnover = "90 mins";
		lotTestParkingLot.greenP = true;
		lotTestParkingLot.cost = "15$ / hr";
		lotTestParkingLot.open = true;
		lotTestParkingLot.hours = "open 24/7";
		lotTestParkingLot.label = "Green P garage";

		// lotTest_1 (components)
		const lotTest_1ParkingLot = new ParkingLot(lotTest_1);
		lotTest_1ParkingLot.totalSpots = 100;
		lotTest_1ParkingLot.freeSpots = 33;
		lotTest_1ParkingLot.peakOccupancy = "1:00pm";
		lotTest_1ParkingLot.peakAvailability = "5:00pm";
		lotTest_1ParkingLot.address = "75 Elizabeth St, Toronto, ON M5G 1P4";
		lotTest_1ParkingLot.handicap = true;
		lotTest_1ParkingLot.averageTurnover = "60 mins";
		lotTest_1ParkingLot.hours = "construction";
		lotTest_1ParkingLot.label = "Public parking lot";

		// lotTest_2 (components)
		const lotTest_2ParkingLot = new ParkingLot(lotTest_2);
		lotTest_2ParkingLot.totalSpots = 120;
		lotTest_2ParkingLot.freeSpots = 28;
		lotTest_2ParkingLot.peakOccupancy = "12:30pm";
		lotTest_2ParkingLot.peakAvailability = "5:00pm";
		lotTest_2ParkingLot.address = "570 Bay St., Toronto, ON M5G 0B2";
		lotTest_2ParkingLot.handicap = true;
		lotTest_2ParkingLot.averageTurnover = "50 mins";
		lotTest_2ParkingLot.spotHero = true;
		lotTest_2ParkingLot.cost = "10$ / hr";
		lotTest_2ParkingLot.open = true;
		lotTest_2ParkingLot.hours = "closes 7:30pm";
		lotTest_2ParkingLot.label = "Public parking lot";

		// lotTest_3 (components)
		const lotTest_3ParkingLot = new ParkingLot(lotTest_3);
		lotTest_3ParkingLot.totalSpots = 50;
		lotTest_3ParkingLot.freeSpots = 11;
		lotTest_3ParkingLot.peakOccupancy = "11:00am";
		lotTest_3ParkingLot.peakAvailability = "7:00pm";
		lotTest_3ParkingLot.address = "Armoury St, Toronto, ON M5G 1R3";
		lotTest_3ParkingLot.handicap = true;
		lotTest_3ParkingLot.averageTurnover = "70 mins";
		lotTest_3ParkingLot.open = true;
		lotTest_3ParkingLot.hours = "open 24/7";
		lotTest_3ParkingLot.label = "Public parking lot";

		// lotTest_4 (components)
		const lotTest_4ParkingLot = new ParkingLot(lotTest_4);
		lotTest_4ParkingLot.totalSpots = 110;
		lotTest_4ParkingLot.freeSpots = 10;
		lotTest_4ParkingLot.peakOccupancy = "1:00pm";
		lotTest_4ParkingLot.peakAvailability = "5:00pm";
		lotTest_4ParkingLot.address = "75 Elizabeth St, Toronto, ON M5G 1P4";
		lotTest_4ParkingLot.averageTurnover = "50 mins";
		lotTest_4ParkingLot.greenP = true;
		lotTest_4ParkingLot.cost = "20$ / hr";
		lotTest_4ParkingLot.open = true;
		lotTest_4ParkingLot.hours = "closes 6:00pm";
		lotTest_4ParkingLot.label = "Public parking lot";

		// lotTest_5 (components)
		const lotTest_5ParkingLot = new ParkingLot(lotTest_5);
		lotTest_5ParkingLot.totalSpots = 25;
		lotTest_5ParkingLot.peakOccupancy = "3:00pm";
		lotTest_5ParkingLot.peakAvailability = "9:00am";
		lotTest_5ParkingLot.address = "306 Yonge St, Toronto, ON M5B 1R4";
		lotTest_5ParkingLot.averageTurnover = "75 mins";
		lotTest_5ParkingLot.spotHero = true;
		lotTest_5ParkingLot.cost = "10$ / hr";
		lotTest_5ParkingLot.open = true;
		lotTest_5ParkingLot.hours = "closes 7:00pm";
		lotTest_5ParkingLot.label = "Public parking lot";

		// lotTest_6 (components)
		const lotTest_6ParkingLot = new ParkingLot(lotTest_6);
		lotTest_6ParkingLot.totalSpots = 30;
		lotTest_6ParkingLot.freeSpots = 5;
		lotTest_6ParkingLot.peakOccupancy = "7:00pm";
		lotTest_6ParkingLot.peakAvailability = "11:00am";
		lotTest_6ParkingLot.address = "306 Yonge St, Toronto, ON M5B 1R4";
		lotTest_6ParkingLot.handicap = true;
		lotTest_6ParkingLot.averageTurnover = "30 mins";
		lotTest_6ParkingLot.open = true;
		lotTest_6ParkingLot.hours = "closes 9:00pm";
		lotTest_6ParkingLot.label = "Public parking lot";

		// lotTest_7 (components)
		const lotTest_7ParkingLot = new ParkingLot(lotTest_7);
		lotTest_7ParkingLot.totalSpots = 45;
		lotTest_7ParkingLot.freeSpots = 9;
		lotTest_7ParkingLot.peakOccupancy = "1:00pm";
		lotTest_7ParkingLot.peakAvailability = "5:00pm";
		lotTest_7ParkingLot.address = "306 Yonge St, Toronto, ON M5B 1R4";
		lotTest_7ParkingLot.averageTurnover = "55 mins";
		lotTest_7ParkingLot.hours = "holiday hours";
		lotTest_7ParkingLot.label = "Public parking lot";

		// lotTest_8 (components)
		const lotTest_8ParkingLot = new ParkingLot(lotTest_8);
		lotTest_8ParkingLot.totalSpots = 80;
		lotTest_8ParkingLot.freeSpots = 11;
		lotTest_8ParkingLot.peakOccupancy = "1:00pm";
		lotTest_8ParkingLot.peakAvailability = "5:00pm";
		lotTest_8ParkingLot.address = "570 Bay St., Toronto, ON M5G 0B2";
		lotTest_8ParkingLot.averageTurnover = "45 mins";
		lotTest_8ParkingLot.spotHero = true;
		lotTest_8ParkingLot.cost = "11$ / hr";
		lotTest_8ParkingLot.open = true;
		lotTest_8ParkingLot.hours = "open 24/7";
		lotTest_8ParkingLot.label = "Public parking lot";

		// lotTest_9 (components)
		const lotTest_9ParkingLot = new ParkingLot(lotTest_9);
		lotTest_9ParkingLot.totalSpots = 70;
		lotTest_9ParkingLot.peakOccupancy = "2:30pm";
		lotTest_9ParkingLot.peakAvailability = "11:00am";
		lotTest_9ParkingLot.address = "Simpson-Thomson, Toronto, ON M5H 3K5";
		lotTest_9ParkingLot.handicap = true;
		lotTest_9ParkingLot.averageTurnover = "80 mins";
		lotTest_9ParkingLot.greenP = true;
		lotTest_9ParkingLot.cost = "10$ / hr";
		lotTest_9ParkingLot.open = true;
		lotTest_9ParkingLot.hours = "closes 7:00pm";
		lotTest_9ParkingLot.label = "Public parking lot";

		// lotTest_10 (components)
		const lotTest_10ParkingLot = new ParkingLot(lotTest_10);
		lotTest_10ParkingLot.totalSpots = 80;
		lotTest_10ParkingLot.freeSpots = 4;
		lotTest_10ParkingLot.peakOccupancy = "3:00pm";
		lotTest_10ParkingLot.peakAvailability = "5:00pm";
		lotTest_10ParkingLot.address = "Simpson-Thomson, Toronto, ON M5H 3K5";
		lotTest_10ParkingLot.averageTurnover = "70 mins";
		lotTest_10ParkingLot.open = true;
		lotTest_10ParkingLot.hours = "open 24/7";
		lotTest_10ParkingLot.label = "Public parking lot";

		// lotTest_11 (components)
		const lotTest_11ParkingLot = new ParkingLot(lotTest_11);
		lotTest_11ParkingLot.totalSpots = 150;
		lotTest_11ParkingLot.freeSpots = 15;
		lotTest_11ParkingLot.peakOccupancy = "1:00pm";
		lotTest_11ParkingLot.peakAvailability = "4:00pm";
		lotTest_11ParkingLot.address = "75 Elizabeth St, Toronto, ON M5G 1P4";
		lotTest_11ParkingLot.handicap = true;
		lotTest_11ParkingLot.averageTurnover = "40 mins";
		lotTest_11ParkingLot.spotHero = true;
		lotTest_11ParkingLot.cost = "7$ / hr";
		lotTest_11ParkingLot.open = true;
		lotTest_11ParkingLot.hours = "open 24/7";
		lotTest_11ParkingLot.label = "Public parking lot";

		// lotTest_12 (components)
		const lotTest_12ParkingLot = new ParkingLot(lotTest_12);
		lotTest_12ParkingLot.totalSpots = 60;
		lotTest_12ParkingLot.freeSpots = 10;
		lotTest_12ParkingLot.peakOccupancy = "1:00pm";
		lotTest_12ParkingLot.peakAvailability = "6:00pm";
		lotTest_12ParkingLot.address = "570 Bay St., Toronto, ON M5G 0B2";
		lotTest_12ParkingLot.averageTurnover = "35 mins";
		lotTest_12ParkingLot.open = true;
		lotTest_12ParkingLot.hours = "closes 7:00pm";
		lotTest_12ParkingLot.label = "Public parking lot";

		// lotTest_13 (components)
		const lotTest_13ParkingLot = new ParkingLot(lotTest_13);
		lotTest_13ParkingLot.totalSpots = 10;
		lotTest_13ParkingLot.freeSpots = 2;
		lotTest_13ParkingLot.peakOccupancy = "7:00pm";
		lotTest_13ParkingLot.peakAvailability = "3:30pm";
		lotTest_13ParkingLot.address = "75 Elizabeth St, Toronto, ON M5G 1P4";
		lotTest_13ParkingLot.handicap = true;
		lotTest_13ParkingLot.averageTurnover = "15 mins";
		lotTest_13ParkingLot.spotHero = true;
		lotTest_13ParkingLot.cost = "10$ / hr";
		lotTest_13ParkingLot.open = true;
		lotTest_13ParkingLot.hours = "closes 10:30pm";
		lotTest_13ParkingLot.label = "Public parking lot";

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
		turnoverViewButtonAlign.verticalOffset = -1;

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
		occupancyViewButtonAlign.verticalOffset = -1;

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
		lotViewButtonAlign.verticalOffset = -1;

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

		// occupancy_graph (components)
		const occupancy_graphAlign = new Align(occupancy_graph);
		occupancy_graphAlign.down = true;
		occupancy_graphAlign.center = true;
		occupancy_graphAlign.verticalOffset = -354;

		// turnover_graph (components)
		const turnover_graphAlign = new Align(turnover_graph);
		turnover_graphAlign.down = true;
		turnover_graphAlign.center = true;
		turnover_graphAlign.verticalOffset = -354;

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
		this.occupancy_graph = occupancy_graph;
		this.turnover_graph = turnover_graph;
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
	/** @type {Phaser.GameObjects.Image} */
	occupancy_graph;
	/** @type {Phaser.GameObjects.Image} */
	turnover_graph;
	/** @type {Phaser.GameObjects.Polygon[]} */
	lots;

	/* START-USER-CODE */

	/**
	 * 'occupancy' 'turnover' 'lot' or 'normal'
	 */
	mapView = 'normal';
	occupancyTutorialDone = false;
	turnoverTutorialDone = false;
	lotTutorialDone = false;

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

		this.showDialogue('Welcome to the Spottr demonstration! This app lets you view data on parking areas throughout supported cities. You can drag to navigate the map, and zoom in or out with the buttons to the left side. Try tapping the buttons on the bottom to change the map view. Tap on this box to continue.');

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

		this.setLotInfo(false);

		this.setNormalView();

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

	showDialogue(dialogue)
	{
		console.log(dialogue)

		this.dialogueText.setText(dialogue);

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

	// graph visual
		this.turnover_graph.setVisible(false);
		this.occupancy_graph.setVisible(false);

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

	// graph visual
		this.turnover_graph.setVisible(false);
		this.occupancy_graph.setVisible(true);

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

	// tutorial
		if (!this.occupancyTutorialDone)
		{
			this.showDialogue('This is the occupancy view. This is a heatmap overlay which shows which areas are currently busy with lots of occupant parking spaces. It will be difficult to find parking in areas that are seen in red, and easy in areas seen in green.');	
			this.occupancyTutorialDone = true;
		}

	}

	setTurnoverView()
	{
		if (this.mapView == 'turnover')
		{
			return;
		}
		this.mapView = 'turnover'

	// graph visual
		this.turnover_graph.setVisible(true);
		this.occupancy_graph.setVisible(false);

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

	// tutorial
		if (!this.turnoverTutorialDone)
		{
			this.showDialogue('This is the heatmap view for "parking turnover," by which we mean how long on average people stay parked in an area. In areas seen in red, people tend to stay parked for longer. Drivers are more quickly in-and-out for areas in blue, which is often the case for gas stations, etc.');	
			this.turnoverTutorialDone = true;
		}
	}

	setLotView()
	{
		if (this.mapView == 'lot')
		{
			return;
		}
		this.mapView = 'lot'

	// graph visual
		this.turnover_graph.setVisible(false);
		this.occupancy_graph.setVisible(false);

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

	// tutorial
		if (!this.lotTutorialDone)
		{
			this.showDialogue('This is the lot view, highlighting individual public parking lots. Tap on one to view specific info, such as the occupancy, hours and more. From there you can open another navigation app to get directions, or reserve a parking spot through Green P or Spot Hero if covered by either.');
			this.lotTutorialDone = true;
		}
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
		this.cameras.main.setBackgroundColor(0xffffff);

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
