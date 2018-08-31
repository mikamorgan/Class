var room1 = {
    preload: function() {
        console.log('In Room 1');
        game.load.image('room1','assets/room1.jpg');
    },
    
    create: function() {
        this.bg = game.add.sprite(40,0,'room1');
        this.bg.scale.setTo(3,1.8); 
    },
    
    update: function() {
    }
};