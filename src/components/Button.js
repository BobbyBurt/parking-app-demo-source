
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Button extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Button"] = this;

		/* START-USER-CTR-CODE */

		/** @type {Phaser.Scene} */
		this.scene = this.gameObject.scene;

		/* END-USER-CTR-CODE */
	}

	/** @returns {Button} */
	static getComponent(gameObject) {
		return gameObject["__Button"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {string} */
	eventToEmit = "event";

	/* START-USER-CODE */

	start()
	{	
		this.gameObject.setInteractive();

		let _this = this;
		this.gameObject.on('pointerdown', function (pointer, gameObject) 
		{
			_this.gameObject.setAlpha(.7);

			_this.scene.sound.play('select', {volume: .3});
		});

		this.gameObject.on('pointerout', function (pointer, gameObject)
		{
			_this.gameObject.setAlpha(1);
		});

		this.gameObject.on('pointerup', function (pointer, gameObject)
		{
			_this.scene.events.emit(_this.eventToEmit);
			// This could be extended by having arg component properties. Only issue is that 
			// those properties would be fixed in amount and type.	
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
