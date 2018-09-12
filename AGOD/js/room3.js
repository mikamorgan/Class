var room3 = {
    preload: function() {
        console.log('In Room 3');
        game.load.image('room3','assets/room3.png');
        game.load.image('player','assets/player.png');
        game.load.spritesheet('trinkets','assets/trinkets.png', 32, 32);
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room3');
        this.bg.scale.setTo(2.75,2.7);

        this.plant = game.add.sprite(150, 300, 'trinkets');
        this.plant.animations.add('grow', [28,29,30,31,40,41,42,43],10,true);
        this.plant.play('grow');

        this.key = game.add.sprite(1100, 500, 'trinkets');
        this.key.scale.setTo(1.2);
        this.key.animations.add('key', [52]);
        this.key.play('key');
        game.physics.arcade.enable(this.key);

        this.crystal_ball = game.add.sprite(500, 400, 'trinkets');
        this.crystal_ball.animations.add('glow', [88,89,76,77,78,79],7,true);
        this.crystal_ball.play('glow');

         //Create player
        this.player = game.add.sprite(400, 400, 'player');
        this.player.scale.setTo(.2);
        game.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;


        //Set up for keyboard input
        k = game.input.keyboard;


    },
    
    update: function() {

        //Player movement
    if(k.isDown(Phaser.Keyboard.UP))
        this.player.body.y -= 10;
    if(k.isDown(Phaser.Keyboard.DOWN))
        this.player.body.y += 10;
    if(k.isDown(Phaser.Keyboard.LEFT))
        this.player.body.x -= 10;
    if(k.isDown(Phaser.Keyboard.RIGHT))
        this.player.body.x += 10;

    game.physics.arcade.overlap(this.player, this.key, this.teleport, null, this);

    }
};