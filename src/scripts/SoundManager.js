export default class SoundManager {
    constructor(oScene){
        this.oScene = oScene;
        this.bulletSound = this.oScene.sound.add("weapon-shoot");
        this.enemyKillSound = this.oScene.sound.add("bullet-kill");
        this.bossKillSound = this.oScene.sound.add("boss-kill");
        this.gameOverSound = this.oScene.sound.add("game-over");
        this.buttonClickSound = this.oScene.sound.add("tap");
    }

    playSound(key, loop){
        key.play();
        key.loop = loop;
    }
    
    stopSound(key, loop){
        key.stop();
        key.loop = loop;
    }

    setBgVolumn(volume){
        this.backgroundSound.volume = volume;
    }

    muteSound(){
        this.oScene.sound.mute = true;
    }

    unmuteSound(){
        this.oScene.sound.mute = false;
    }
}

