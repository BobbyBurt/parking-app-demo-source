
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class MapDrag extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__MapDrag"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {MapDrag} */
	static getComponent(gameObject) {
		return gameObject["__MapDrag"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	/**
	 * setup
	 */
	start()
	{
	// containter drag
		this.gameObject.setSize(9999, 9999);
			// for a container to be set interactive & draggable, it needs a size
			// TODO:  determine the size of the image
		this.gameObject.setInteractive();
		this.scene.input.setDraggable(this.gameObject);

	// worldView, update on resize
		this.scene.events.on('resize', this.resize, this);
		this.worldView = this.gameObject.scene.cameras.getCamera('main').worldView;

	// input events
		let _this = this
		this.scene.input.on('drag', function (pointer, gameObject, dragX, dragY)
		{
			gameObject.x = dragX;
			gameObject.y = dragY;

			// TODO: velocity of drag remains when user lets go
			// this is low priority, since it's just a nice touch that will be tough to impliment

		// bounds
			this.bounds = _this.gameObject.getBounds();
			if (this.bounds.right < _this.worldView.right)
			{
				gameObject.x = -2195;
				console.log('OOB right @ ' + gameObject.x);
			}
			if (this.bounds.left > _this.worldView.left)
			{
				gameObject.x = 1797;
				console.log('OOB left @ ' + gameObject.x);
			}
			if (this.bounds.top > _this.worldView.top)
			{
				gameObject.y = 412;
				console.log('OOB up @ ' + gameObject.y);
			}
			if (this.bounds.bottom < _this.worldView.bottom)
			{
				gameObject.y = -685;
				console.log('OOB down @ ' + gameObject.y);
			}
				// TODO: Outside of regular test of iphone dimensions on chrome, bottom bound 
				// suddenly moves map up. fix this.
					// Coordinates seem to change at different resolutions or something? If so 
					// then this bug is a fault of having hardcoded bounds.

				// When using a different (bigger) map image, I will need to update these 
				// hardcoded positions to reset to. Just couldn't figure out how to get them 
				// dynamically. To find the resent point, comment-out the line that sets the 
				// object's position, and slowly drag the object past the image. The first print of
				// the object's position, rounded toward origin, is the reset point.
		});
	}

	destroy()
	{
		this.scene.events.off('resize', this.resize, this);
	}

	resize()
	{
	// keep worldview updated
		this.worldView = this.gameObject.scene.cameras.getCamera('main').worldView;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
