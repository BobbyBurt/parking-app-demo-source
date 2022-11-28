 
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class Align extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__Align"] = this;

		/* START-USER-CTR-CODE */

		this.scene = this.gameObject.scene;

		/* END-USER-CTR-CODE */
	}

	/** @returns {Align} */
	static getComponent(gameObject) {
		return gameObject["__Align"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;
	/** @type {boolean} */
	up = false;
	/** @type {boolean} */
	middle = false;
	/** @type {boolean} */
	down = false;
	/** @type {boolean} */
	left = false;
	/** @type {boolean} */
	center = false;
	/** @type {boolean} */
	right = false;
	/** @type {number} */
	horizontalOffset = 0;
	/** @type {number} */
	verticalOffset = 0;

	/* START-USER-CODE */

	awake()
	{
	// test
		this.scene.cameras

	// add component to scene array
		if (typeof this.scene.alignGroup === 'undefined')
		{
			this.scene.alignGroup = [];
			// this.scene.alignGroup = this.scene.add.group();
		}
		this.scene.alignGroup.push(this);
		// this.scene.alignGroup.add(this);

	// set scroll factor
		if (this.left || this.center || this.right)
		{
			// this.gameObject.setScrollFactor(0);
		}
		if (this.up || this.middle || this.down)
		{
			// this.gameObject.scrollFactorY = 0;
		}
			// TODO: 0 scrollfactor breaks this whole thing.
			// I dealt with this before, but I don't recall my solution
	}

	destroy()
	{
		//	TODO: this needs to be removed from scene array on destroy
		//	possible solution:
		//	https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
	}

	/**
	 * 
	 * @param {Phaser.Cameras.worldView} worldView pass in worldview of camera
	 */
	align(worldView)
	{
		if (this.up)
		{
			this.gameObject.setY(worldView.top + this.verticalOffset);
		}
		if (this.middle)
		{
			this.gameObject.setY(worldView.centerY + this.verticalOffset);
		}
		if (this.down)
		{
			this.gameObject.setY(worldView.bottom + this.verticalOffset);
		}
		if (this.left)
		{
			this.gameObject.setX(worldView.left + this.horizontalOffset);
		}
		if (this.center)
		{
			this.gameObject.setX(worldView.centerX + this.horizontalOffset);
		}
		if (this.right)
		{
			this.gameObject.setX(worldView.right + this.horizontalOffset);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
