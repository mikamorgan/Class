var room4 = {
    preload: function() {
        console.log('In Room 4');
        game.load.image('room4','assets/room4.jpg');

        game.load.spritesheet('trinkets','assets/trinkets.png', 32, 32);
        game.load.spritesheet('smoke','assets/smoke.png', 128, 128);

<<<<<<< HEAD
        //For Clay's character
        game.load.spritesheet('battery','assets/battery.png',75,156);
        game.load.spritesheet('H&E','assets/batteryhealth.png',333,100);

=======
>>>>>>> 4074e874bcd6fa95ed3a59f2c83e3f4601e62dba
        //Load the four character spritesheets
        game.load.spritesheet('char1', 'assets/CharacterV2.png', 64, 64); //Clay is character 1
        game.load.spritesheet('char2', 'assets/player.png', 32, 64);      //Jacob is character 2
        game.load.spritesheet('char3', 'assets/thing.png', 32, 32);       //Ally is character 3
        game.load.spritesheet('char4', 'assets/bird.png', 95, 96);       //Coltin is character 4
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room4');
        this.bg.scale.setTo(.47,.37);

        this.crystal_ball = game.add.sprite(420, 125, 'trinkets');
        this.crystal_ball.animations.add('glow', [88,89,76,77,78,79],7,true);
        this.crystal_ball.play('glow');

        this.smoke = game.add.sprite(655, 335, 'smoke');
        this.smoke.scale.setTo(2);
        this.smoke.animations.add('explode', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],8,false);
        this.smoke.alpha = 0;
        //Flag so animation only plays once
        this.smokeFlag = true;

        this.key = game.add.sprite(1145, 425, 'trinkets');
        this.key.scale.setTo(1.2);
        this.key.animations.add('key', [55]);
        this.key.play('key');
        game.physics.arcade.enable(this.key);

        //Create player
        this.player = game.add.sprite(100, 415, 'player');
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

    if(this.player.body.x > 400 && this.smokeFlag){
        this.smokeFlag = false;
        this.smoke.alpha = 1;
        this.smoke.animations.play('explode');
        this.smoke.animations.currentAnim.onComplete.add(this.hideSmoke, this);
    }

    game.physics.arcade.overlap(this.player, this.key, this.teleport, null, this);
    },

    hideSmoke: function () {
        this.smoke.alpha = 0;
    },

    teleport: function (player, room) {
        game.state.start('mainRoom');
    },

           
};