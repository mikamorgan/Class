var winGame = {
    preload: function() {
        console.log('In Game Over');
        game.load.image('BG','assets/GO.png');
    },
    
    create: function() {
        //Create background
        this.bg = game.add.sprite(0,0,'BG');
        this.bg.scale.setTo(2);
    },
    
    update: function() {
    }
};