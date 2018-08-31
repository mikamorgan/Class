var room2 = {
    preload: function() {
        console.log('In Room 2');
        game.load.image('room2','assets/room2.jpg');
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room2');
        this.bg.scale.setTo(3.8, 2.8);
    },
    
    update: function() {
    }
};