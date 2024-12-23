
// You can write more code here
import SoundManager from "../scripts/SoundManager";
import GameManager from "../scripts/GameManager";
/* START OF COMPILED CODE */

export default class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		this.add.image(540, 958, "home-bg");

		// container_fire_particles
		const container_fire_particles = this.add.container(0, 0);

		// btn_play
		const btn_play = this.add.image(532, 1518, "btn_play");
		btn_play.setOrigin(0.46, 0.42);

		// container_header
		const container_header = this.add.container(0, 0);

		// coinImage
		const coinImage = this.add.image(64, 64, "coin");
		coinImage.scaleX = 0.6;
		coinImage.scaleY = 0.6;
		coinImage.visible = false;
		container_header.add(coinImage);

		// txt_coins
		const txt_coins = this.add.text(107, 64, "", {});
		txt_coins.setOrigin(0, 0.5);
		txt_coins.visible = false;
		txt_coins.text = "0";
		txt_coins.setStyle({ "fontFamily": "LilitaOne", "fontSize": "66px" });
		container_header.add(txt_coins);

		// logo
		const logo = this.add.image(540, 800, "logo");
		container_header.add(logo);

		// container_fire
		const container_fire = this.add.container(0, 0);
		container_fire.visible = false;

		// fire2
		const fire2 = this.add.image(196, 877, "fire2");
		container_fire.add(fire2);

		// fire
		const fire = this.add.image(288, 835, "fire2");
		container_fire.add(fire);

		// fire_1
		const fire_1 = this.add.image(413, 810, "fire2");
		container_fire.add(fire_1);

		// fire_2
		const fire_2 = this.add.image(545, 700, "fire2");
		container_fire.add(fire_2);

		// fire_3
		const fire_3 = this.add.image(666, 820, "fire2");
		container_fire.add(fire_3);

		// fire_4
		const fire_4 = this.add.image(790, 838, "fire2");
		container_fire.add(fire_4);

		// fire_5
		const fire_5 = this.add.image(882, 907, "fire2");
		container_fire.add(fire_5);

		// info_btn
		const info_btn = this.add.image(155, 170, "info_btn");

		// soundOn_btn
		const soundOn_btn = this.add.image(950, 150, "sound_on");

		// container_info
		const container_info = this.add.container(0, 0);
		container_info.visible = false;

		// info_bg
		const info_bg = this.add.image(540, 900, "info_bg");
		container_info.add(info_bg);

		// info_ui_base
		const info_ui_base = this.add.image(540, 900, "info_ui_base");
		container_info.add(info_ui_base);

		// close_btn
		const close_btn = this.add.image(540, 1490, "close_btn");
		container_info.add(close_btn);

		// text_1
		const text_1 = this.add.text(540, 833, "", {});
		text_1.setOrigin(0.5, 0);
		text_1.text = "Drag the spaceship to destroy the obstacles while avoiding collisions with them.";
		text_1.setStyle({ "align": "center", "color": "#e8c768", "fixedWidth":420,"fontFamily": "LilitaOne", "fontSize": "50px" });
		text_1.setWordWrapWidth(420, true);
		container_info.add(text_1);

		this.container_fire_particles = container_fire_particles;
		this.btn_play = btn_play;
		this.coinImage = coinImage;
		this.txt_coins = txt_coins;
		this.container_header = container_header;
		this.container_fire = container_fire;
		this.info_btn = info_btn;
		this.soundOn_btn = soundOn_btn;
		this.close_btn = close_btn;
		this.container_info = container_info;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	container_fire_particles;
	/** @type {Phaser.GameObjects.Image} */
	btn_play;
	/** @type {Phaser.GameObjects.Image} */
	coinImage;
	/** @type {Phaser.GameObjects.Text} */
	txt_coins;
	/** @type {Phaser.GameObjects.Container} */
	container_header;
	/** @type {Phaser.GameObjects.Container} */
	container_fire;
	/** @type {Phaser.GameObjects.Image} */
	info_btn;
	/** @type {Phaser.GameObjects.Image} */
	soundOn_btn;
	/** @type {Phaser.GameObjects.Image} */
	close_btn;
	/** @type {Phaser.GameObjects.Container} */
	container_info;

	/* START-USER-CODE */
	toggleFullScreen(element) {
		if (!document.fullscreenElement &&    // standard
			!document.mozFullScreenElement && // Firefox
			!document.webkitFullscreenElement &&  // Chrome, Safari, and Opera
			!document.msFullscreenElement) {  // IE/Edge
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) {
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullScreen) {
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) {
				element.msRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	}
	logoFire = () => {
		const fireParticle = this.add.particles("fire2");
		this.container_fire_particles.add(fireParticle);
		this.container_fire.each(fire => {
			const fireEmitter = fireParticle.createEmitter({
				x: fire.x,
				y: fire.y,
				speed: { min: -90, max: 90 },
				angle: { min: 0, max: 360 },
				scale: { start: 0.8, end: 0 },
				blendMode: "ADD",
				lifespan: { min: 1200, max: 1600 },
				tint: 0x152345,
				gravityY: -280,
				frequency: 20,
			});
		})
	}
	btnParticles = (button) => {
		const fireParticle1 = this.add.particles("red");
		const fireParticle2 = this.add.particles("red-fire");
		this.container_fire_particles.add(fireParticle1);
		this.container_fire_particles.add(fireParticle2);

		const createEmitter = (particle, button) => {
			return particle.createEmitter({
				x: { min: button.x - 50, max: button.x + 50 },
				y: { min: button.y, max: button.y - 50 },
				speed: 150,
				scale: { start: 1, end: 0 },
				angle: { min: 0, max: 360 },
				speed: { min: -150, max: 150 },
				lifespan: { min: 1000, max: 1500 },
				gravityY: -380,
				frequency: 50,
				quantity: 5,
				on: false,
			});
		};

		button.fireEmitter1 = createEmitter(fireParticle1, button);
		button.fireEmitter2 = createEmitter(fireParticle2, button);
	}
	// pointerOver = (btn, scale) => {
	// 	this.input.setDefaultCursor('pointer');
	// 	btn.fireEmitter1.start();
	// 	btn.fireEmitter2.start();
	// 	this.tweens.add({
	// 		targets: btn,
	// 		scaleX: scale + 0.08,
	// 		scaleY: scale + 0.08,
	// 		duration: 100
	// 	});
	// }
	pointerOver = (btn, scale) => {
		this.input.setDefaultCursor('pointer');
	
		if (btn === this.info_btn) {
			btn.fireEmitter1.setTint(0x0000ff);
			btn.fireEmitter2.setTint(0x000ff0);
		} else if (btn === this.soundOn_btn) {
			btn.fireEmitter1.setTint(0xffff00);
			btn.fireEmitter2.setTint(0x00ffff);
		} else {
			btn.fireEmitter1.setTint(0xffffff);
			btn.fireEmitter2.setTint(0xffffff);
		}
	
		btn.fireEmitter1.start();
		btn.fireEmitter2.start();
		this.tweens.add({
			targets: btn,
			scaleX: scale + 0.08,
			scaleY: scale + 0.08,
			duration: 100
		});
	}
	pointerOut = (btn, scale) => {
		this.input.setDefaultCursor('default');
		btn.fireEmitter1.stop();
		btn.fireEmitter2.stop();
		this.tweens.add({
			targets: btn,
			scaleX: scale,
			scaleY: scale,
			duration: 100,
			onComplete: () => {
				btn.setScale(scale);
			}
		});
	}
	initializeSoundAndMusic(key, defaultValue) {
		if (localStorage.getItem(key) === null) {
			localStorage.setItem(key, defaultValue);
			return defaultValue;
		}
		return localStorage.getItem(key) === 'true';
	}

	create() {
		this.editorCreate();
		this.logoFire();

		// Set up particles for buttons
		this.btnParticles(this.btn_play);
		this.btnParticles(this.info_btn);
		this.btnParticles(this.soundOn_btn);
		this.btnParticles(this.close_btn);

		this.oGameManager = new GameManager(this);
		this.oSoundManager = new SoundManager(this);
		this.input.mouse.releasePointerLock();
		this.nCoins = parseInt(localStorage.getItem('dragon_coins')) || 0;
		this.txt_coins.setText(this.nCoins);

		this.soundOn = this.initializeSoundAndMusic('dragon-force-sound', true);
		this.soundOn_btn.setTexture(this.soundOn ? "sound_on" : "sound_off");

		// Helper function to set up interactive behavior
		const setupButtonParticles = (button) => {
			button.setInteractive().on('pointerover', () => this.pointerOver(button, 1));
			button.setInteractive().on('pointerout', () => this.pointerOut(button, 1));
		}

		// Setup interactive behavior for all buttons
		setupButtonParticles(this.btn_play);
		setupButtonParticles(this.info_btn);
		setupButtonParticles(this.soundOn_btn);
		setupButtonParticles(this.close_btn);

		this.btn_play.setInteractive().on('pointerdown', () => {
			if (this.soundOn) {
				this.oSoundManager.playSound(this.oSoundManager.buttonClickSound, false);
			}
			const gameContainer = document.getElementById('game-division');
			// this.toggleFullScreen(gameContainer);
			this.scene.stop("Home");
			this.scene.start("Level");
		});

		this.info_btn.setInteractive().on('pointerdown', () => {
			if (this.soundOn) {
				this.oSoundManager.playSound(this.oSoundManager.buttonClickSound, false);
			}
			this.btn_play.setVisible(false);
			this.info_btn.setVisible(false);
			this.soundOn_btn.setVisible(false);
			this.container_info.setVisible(true);
			this.close_btn.setInteractive().on('pointerdown', () => {
				if (this.soundOn) {
					this.oSoundManager.playSound(this.oSoundManager.buttonClickSound, false);
				}
				this.container_info.setVisible(false);
				this.btn_play.setVisible(true);
				this.info_btn.setVisible(true);
				this.soundOn_btn.setVisible(true);
			});
		});

		this.soundOn_btn.setInteractive().on('pointerdown', () => {
			this.oSoundManager.playSound(this.oSoundManager.buttonClickSound, false);
			this.soundOn = !this.soundOn;
			localStorage.setItem('dragon-force-sound', this.soundOn);

			if (this.soundOn) {
				this.oSoundManager.unmuteSound(this.oSoundManager.buttonClickSound);
			} else {
				this.oSoundManager.muteSound(this.oSoundManager.buttonClickSound);
			}

			this.soundOn_btn.setTexture(this.soundOn ? "sound_on" : "sound_off");
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
