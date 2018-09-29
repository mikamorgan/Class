var gameOver = {
    preload: function() {
        console.log('In Game Over');
        game.load.image('BG','assets/GO.png');

        game.load.audio('loseSound', 'assets/loseSound.wav');
    },
    
    create: function() {
        //Create background
        this.bg = game.add.sprite(0,0,'BG');
        this.bg.scale.setTo(2);

        this.loseSound = game.add.audio('loseSound');
        this.loseSound.volume = .1;
        this.loseSound.play();
    },
    
    update: function() {
    }
};