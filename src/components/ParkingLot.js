
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ParkingLot extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ParkingLot"] = this;

		/* START-USER-CTR-CODE */

		/** @type {Phaser.Scene} */
		this.scene = this.gameObject.scene;

		/* END-USER-CTR-CODE */
	}

	/** @returns {ParkingLot} */
	static getComponent(gameObject) {
		return gameObject["__ParkingLot"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {number} */
	totalSpots = 0;
	/** @type {number} */
	freeSpots = 0;
	/** @type {string} */
	peakOccupancy = "";
	/** @type {string} */
	peakAvailability = "";
	/** @type {string} */
	address = "";
	/** @type {boolean} */
	handicap = false;
	/** @type {string} */
	averageTurnover = "";

	/* START-USER-CODE */

	start()
	{
		this.lotInfo = 
		{
			totalSpots: this.totalSpots,
			freeSpots: this.freeSpots,
			peakOccupancy: this.peakOccupancy,
			peakAvailability: this.peakAvailability,
			address: this.address,
			handicap: this.handicap,
			averageTurnover: this.averageTurnover
		}

		this.gameObject.setInteractive(this.gameObject.geom, Phaser.Geom.Polygon.Contains);

		let _this = this;
		this.gameObject.on('pointerdown', function (pointer, gameObject) 
		{
			_this.scene.events.emit(_this.eventToEmit);

			_this.gameObject.setAlpha(.7);

			_this.scene.sound.play('select', {volume: .3});
		});

		this.gameObject.on('pointerout', function (pointer, gameObject)
			// also catches 'pointerup'
		{
			_this.gameObject.setAlpha(1);
		});

		this.gameObject.on('pointerup', function (pointer, gameObject)
		{
			// display lot info
			_this.scene.setLotInfo(true, _this.lotInfo)
		});
			// The existance of pointer events on these objects means user can't drag the whole 
			// container when pointerdown over these objects.
			// TODO: fix this
				// Don't know how, so despite having a significant impact on useability, this is 
				// low priority.
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
