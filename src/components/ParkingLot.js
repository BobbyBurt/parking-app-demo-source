
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

	/* START-USER-CODE */

	start()
	{
		this.gameObject.setInteractive(this.gameObject.geom, Phaser.Geom.Polygon.Contains);

		let _this = this;
		this.gameObject.on('pointerdown', function (pointer, gameObject) 
		{
			_this.scene.events.emit(_this.eventToEmit);
				// This could be extended by having arg component properties. Only issue is that 
				// those properties would be fixed in amount and type.

			_this.gameObject.setAlpha(.7);

			_this.scene.sound.play('select', {volume: .3});
		});

		this.gameObject.on('pointerup', function (pointer, gameObject)
		{
			_this.gameObject.setAlpha(1);
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
