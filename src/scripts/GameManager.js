export default class GameManager {
	constructor(oScene) {
		this.nNextLevelTime = 4; // 4
		this.nTilePositionY = 10; // 10
		this.nBlockVelocityY = 100; // 100
		this.nCoinArrival = 10; // 10
		this.nBossPower = 50; // 50
		this.nTarget = 80; // 80
		this.nAddGlobal = 1 // 1
		this.oLevels = {
			1: {
				sPlayer: "player",
				nTarget: this.nTarget + (0 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 2,
				nColumn: 4,
				nTotalBullets: 1,
				sBoss: "boss_1", sBossParticles: "particle_3", nBossPower: this.nBossPower + (0 * 20),
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 5, nInsectArrival: 15, nMaxInsects: 0,
			},
			2: {
				sPlayer: "player",
				nTarget: this.nTarget + (1 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 3,
				nColumn: 6,
				nTotalBullets: 1,
				sBoss: "boss_2", sBossParticles: "particle_6", nBossPower: this.nBossPower + (1 * 20),
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 6, nInsectArrival: 13, nMaxInsects: 0,
			},
			3: {
				sPlayer: "player",
				nTarget: this.nTarget + (2 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 3,
				nColumn: 7,
				nTotalBullets: 2,
				sBoss: "boss_3", sBossParticles: "particle_5", nBossPower: this.nBossPower + (2 * 20),
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 8, nInsectArrival: 11, nMaxInsects: 1,
			},
			4: {
				sPlayer: "player",
				nTarget: this.nTarget + (3 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 2,
				sBoss: "boss_4", sBossParticles: "particle_10", nBossPower: this.nBossPower + (3 * 20),
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 12, nInsectArrival: 9, nMaxInsects: 1,
			},
			5: {
				sPlayer: "player",
				nTarget: this.nTarget + (4 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 2,
				sBoss: "boss_5", sBossParticles: "particle_0", nBossPower: this.nBossPower + (4 * 20),
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 17, nInsectArrival: 7, nMaxInsects: 2,
			},
			6: {
				sPlayer: "player",
				nTarget: this.nTarget + (5 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 3,
				sBoss: "boss_6", sBossParticles: "particle_1", nBossPower: this.nBossPower + (5 * 20),
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 22, nInsectArrival: 7, nMaxInsects: 2,
			},
			7: {
				sPlayer: "player",
				nTarget: this.nTarget + (6 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 3,
				sBoss: "boss_7", sBossParticles: "particle_3", nBossPower: this.nBossPower + (6 * 20),
				sInsect: "insects_2", sInsectParticle: "particle_4", nInsectHealth: 28, nInsectArrival: 7, nMaxInsects: 3,
			},
			8: {
				sPlayer: "player",
				nTarget: this.nTarget + (7 * 50),
				nDamage: 1,
				nAdd: this.nAddGlobal,
				nRow: 4,
				nColumn: 7,
				nTotalBullets: 3,
				sBoss: "boss_2", sBossParticles: "particle_6", nBossPower: this.nBossPower + (7 * 20),
				sInsect: "insects_1", sInsectParticle: "particle_5", nInsectHealth: 32, nInsectArrival: 7, nMaxInsects: 4,
			},
		}
	}
}