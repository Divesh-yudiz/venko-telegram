export default class ParticlesManager {
	constructor(oScene) {
		this.oScene = oScene;
	}
	fireParticles = (bullet) => {
		const fire = this.oScene.add.particles("fire");
		const fireParticles = fire.createEmitter({
			x: bullet.x,
			y: bullet.y,
			speed: { min: -500, max: 500 },
			// angle: { min: 0, max: 360 },
			// rotate: { min: 50, max: 100 },
			scale: { start: 0.35, end: 0 },
			lifespan: 80,
			// blendMode: "ERASE",
			// tint: 0xFFFFFF,
			frequency: 2,
			quantity: 1,
		});
		fireParticles.startFollow(bullet);
		fireParticles.flow(0, 1);
		bullet.emitter = fireParticles;
	}
	bossParticles = (bullet, boss, texture) => {
		const aParticles = [
			this.oScene.add.particles("particle_2").setDepth(1),
			this.oScene.add.particles(texture).setDepth(1),
			this.oScene.add.particles("fire").setDepth(1),
		];
		for (let i = 0; i < aParticles.length; i++) {
			const particle = aParticles[i];
			const emitter = particle.createEmitter({
				x: bullet.x,
				y: bullet.y - 85,
				total: 100,
				scale: { min: 0.15, max: 0.35 },
				alpha: { start: 0.7, end: 0 },
				lifespan: { min: 200, max: 250 },
				speed: { min: 1000, max: 2500 },
				frequency: 25,
			})
			setTimeout(() => {
				emitter.stop();
				emitter.remove();
			}, 400);
		}
	}
	blockParticles = (block, nX, nY) => {
		// this.blockParticles2(block, nX, nY);
		const aParticles = [
			this.oScene.add.particles("fire").setDepth(1),
			this.oScene.add.particles("particle_0").setDepth(1),
			this.oScene.add.particles("particle_1").setDepth(1),
		];
		for (let i = 0; i < aParticles.length; i++) {
			const particle = aParticles[i];
			const emitter = particle.createEmitter({
				x: nX,
				y: nY,
				total: 100,
				scale: { min: 0.15, max: 0.35 },
				alpha: { start: 0.7, end: 0 },
				lifespan: { min: 200, max: 250 },
				speed: { min: 1000, max: 2500 },
				frequency: 40,
				on: false,
			})
			emitter.startFollow(block);
			emitter.start();
			setTimeout(() => {
				emitter.stop();
				emitter.remove();
			}, 350);
		}
	}
	blockParticles2 = (block, nX, nY) => {
		const aParticles = [
			this.oScene.add.particles("particle_7").setDepth(1),
			this.oScene.add.particles("particle_8").setDepth(1),
			this.oScene.add.particles("particle_9").setDepth(1),
		];
		for (let i = 1; i < aParticles.length + 1; i++) {
			const particle = aParticles[i - 1];
			const emitter = particle.createEmitter({
				x: nX,
				y: nY,
				lifespan: 1500,
				// speed: { min: -200, max: 400 },
				speed: -500 + (500 * i),
				angle: { min: 0, max: 360 },
				// gravityY: 300,
				quantity: 1,
				scale: { start: 1, end: 0 },
				// blendMode: 'ADD'
			})
			emitter.startFollow(block);
			emitter.explode();
			setTimeout(() => {
				emitter.stop();
				emitter.remove();
			}, 350);
		}
	}
	insectParticles = (insect, nX, nY, texture) => {
		const aParticles = [
			this.oScene.add.particles("fire").setDepth(1),
			this.oScene.add.particles("particle_0").setDepth(1),
			this.oScene.add.particles(texture).setDepth(1),
		];
		for (let i = 0; i < aParticles.length; i++) {
			const particle = aParticles[i];
			const emitter = particle.createEmitter({
				x: nX,
				y: nY,
				total: 50,
				scale: { min: 0.15, max: 0.35 },
				alpha: { start: 0.7, end: 0 },
				lifespan: { min: 200, max: 250 },
				speed: { min: 1000, max: 2500 },
				frequency: 50,
			})
			emitter.startFollow(insect);
			setTimeout(() => {
				emitter.stop();
				emitter.remove();
			}, 400);
		}
	}
	ringParticle = (block, nX, nY) => {
		const emitter = this.oScene.ringEmitter.createEmitter({
			x: nX,
			y: nY,
			quantity: 1,
			scale: { start: 2, end: 5 },
			alpha: { start: 0.5, end: 0 },
			lifespan: 300,
			rotate: { min: 0, max: 360 },
			tint: 0xFFFFFF,
			maxParticles: 1,
		})
		emitter.startFollow(block);
		setTimeout(() => {
			emitter.stop();
			emitter.remove();
		}, 200);
	}
	flashEffect = (x, y) => {
		const flash = this.oScene.add.circle(x, y + 14, 44, 0xffffff).setOrigin(0.5, 0.5).setDepth(2).setAlpha(0.8);
		this.oScene.tweens.add({
			targets: flash,
			alpha: 0,
			duration: 90,
			onComplete: () => {
				flash.destroy();
			}
		});
	}
}