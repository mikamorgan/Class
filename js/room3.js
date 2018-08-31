var room3 = {
    preload: function() {
        console.log('In Room 3');
        game.load.image('room3','assets/room3.png');
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room3');
        this.bg.scale.setTo(2.75,2.7);
    },
    
    update: function() {
    }
};