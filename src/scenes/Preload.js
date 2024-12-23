
// You can write more code here
import PreloadText from "../components/PreloadText";
/* START OF COMPILED CODE */

export default class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// home_bg
		this.add.image(540, 958, "home-bg");

		// progress
		const progress = this.add.text(540, 1518, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.visible = false;
		progress.text = "0%";
		progress.setStyle({ "fontFamily": "LilitaOne", "fontSize": "100px" });

		// logo
		this.add.image(540, 800, "logo");

		// txt_progress
		const txt_progress = this.add.text(540, 1540, "", {});
		txt_progress.setOrigin(0.5, 0.5);
		txt_progress.text = "0%";
		txt_progress.setStyle({ "fontFamily": "LilitaOne", "fontSize": "100px" });

		// progress (components)
		new PreloadText(progress);

		this.txt_progress = txt_progress;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	txt_progress;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;

		this.fakeLoading();
		// this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Home"));

	}

	fakeLoading() {
		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});
		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;
		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressIncrement;
			this.txt_progress.setText((currentProgress * 100).toFixed(0) + '%');
			currentInterval++;
			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);
	}

	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			setTimeout(() => {
				this.scene.stop("Preload");
				this.scene.start("Home");
			}, 200);
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
