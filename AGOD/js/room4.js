var room4 = {
    preload: function() {
        console.log('In Room 4');
        game.load.image('room4','assets/room4.jpg');
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room4');
        this.bg.scale.setTo(.47,.37);
    },
    
    update: function() {
    }
};