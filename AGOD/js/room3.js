var room3 = {
    preload: function() {
        console.log('In Room 3');
        game.load.image('room3','assets/room3.png');
        game.load.spritesheet('trinkets','assets/trinkets.png', 32, 32);
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room3');
        this.bg.scale.setTo(2.75,2.7);

        this.plant = game.add.sprite(150, 300, 'trinkets');
        this.plant.animations.add('grow', [28,29,30,31,40,41,42,43],10,true);
        this.plant.play('grow');


    },
    
    update: function() {
    }
};