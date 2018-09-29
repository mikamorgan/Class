var room4 = {
preload: function() {
    console.log('In Room 4');
    game.load.image('room4','assets/room4.jpg');

    game.load.audio('portalSound', 'assets/portalSound.wav');
    game.load.audio('bg', 'assets/MONSTER4.WAV');
    game.load.audio('dragonDeath', 'assets/dragonDeath.mp3');
    game.load.audio('smokeSound', 'assets/smokeSound.wav');

    game.load.spritesheet('trinkets','assets/trinkets.png', 32, 32);
    game.load.spritesheet('smoke','assets/smoke.png', 128, 128);
    game.load.spritesheet('enemy2','assets/dragon.png',96,64)

    //For Clay's character
    game.load.spritesheet('battery','assets/battery.png',75,156);
    game.load.spritesheet('H&E','assets/batteryhealth.png',333,100);

    //Load the four character spritesheets
    game.load.spritesheet('char1', 'assets/CharacterV2.png', 64, 64); //Clay is character 1
    game.load.spritesheet('char2', 'assets/player.png', 32, 64);      //Jacob is character 2
    game.load.spritesheet('char3', 'assets/thing.png', 32, 32);       //Ally is character 3
    game.load.spritesheet('char4', 'assets/bird.png', 95, 96);       //Coltin is character 4
    game.load.spritesheet('firebreath','assets/firebreath.png',73,73)
},
    
create: function() {
    this.bg = game.add.sprite(0,0,'room4');
    this.bg.scale.setTo(.47,.37);

    //Play background music
    this.music = game.add.audio('bg');
    this.music.play('', 0, 0.1, true);

    this.portalSound = game.add.audio('portalSound');
    this.portalSound.volume = .1;

    this.dragonDeath = game.add.audio('dragonDeath');
    this.dragonDeath.volume = .1;

    this.smokeSound = game.add.audio('smokeSound');
    this.smokeSound.volume = .1;

    this.crystal_ball = game.add.sprite(420, 125, 'trinkets');
    this.crystal_ball.animations.add('glow', [88,89,76,77,78,79],7,true);
    this.crystal_ball.play('glow');

    this.smoke = game.add.sprite(655, 335, 'smoke');
    this.smoke.scale.setTo(2);
    this.smoke.animations.add('explode', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],25,false);
    this.smoke.alpha = 0;

    //Flag so animation only plays once
    this.smokeFlag = true;
    this.dragonS = true;

    this.key = game.add.sprite(1145, 425, 'trinkets');
    this.key.scale.setTo(1.2);
    this.key.animations.add('key', [55]);
    this.key.play('key');
    game.physics.arcade.enable(this.key);

    //Create players
    //Create Clay's character
    if(game.global.char1){
        this.light = false;
        this.direction = 0;

        //Create battery
        this.battery1 = game.add.sprite(Math.random() * 1500,Math.random() * 850, 'battery');
        this.battery1.animations.add('bounce',[0,1,2,3,4,5,6,7],10,true);
        this.battery1.animations.play('bounce');
        game.physics.arcade.enable(this.battery1);
        this.battery1.scale.setTo(.3);

        //Create shadows
        this.shadowTexture = this.game.add.bitmapData(this.game.width, this.game.height);   

        // Create an object that will use the bitmap as a texture
        this.lightSprite = this.game.add.image(this.game.camera.x, this.game.camera.y, this.shadowTexture);    
        // Set the blend mode to MULTIPLY. This will darken the colors of everything below this sprite.    
        this.lightSprite.blendMode = Phaser.blendModes.MULTIPLY;
    
        this.player = game.add.sprite(90, 410, 'char1');
        this.player.scale.setTo(1.5);
        this.player.animations.add('idle',[54]);
        this.player.animations.add('walkR',[64,65,66,67,68,69,70,71],15,true);
        this.player.animations.add('walkL',[46,47,48,49,50,51,52,53],15,true);
        this.player.animations.add('walkU',[37,38,39,40,41,42,43,44],15,true);
        this.player.animations.add('walkD',[55,56,57,58,59,60,61,62],15,true);
        this.player.animations.add('idleU',[36],12,true);
        this.player.animations.add('idleD',[54],12,true);
        this.player.animations.add('idleL',[45],12,true);
        this.player.animations.add('idleR',[63],12,true);

        this.player.animations.add('walkL2',[10,11,12,13,14,15,16,17],15,true);
        this.player.animations.add('walkR2',[28,29,30,31,32,33,34,35],15,true);
        this.player.animations.add('walkU2',[1,2,3,4,5,6,7,8],15,true);
        this.player.animations.add('walkD2',[19,20,21,22,23,24,25,26],15,true);
        this.player.animations.add('idleU2',[0],12,true);
        this.player.animations.add('idleD2',[18],12,true);
        this.player.animations.add('idleL2',[9],12,true);
        this.player.animations.add('idleR2',[27],12,true);

        this.player.animations.play('idle');

        // this.healthB = game.add.sprite(100,10,'H&E');
        // this.healthB.scale.setTo(.50);
        // this.healthB.animations.add('life0',[13],1,true);
        // this.healthB.animations.add('life1',[12],10,true);
        // this.healthB.animations.add('life2',[11],10,true);
        // this.healthB.animations.add('life3',[10],10,true);
        // this.healthB.animations.add('life4',[9],10,true);
        // this.healthB.animations.add('life5',[8],10,true);
        // this.healthB.animations.add('life6',[7],10,true);
        // this.healthB.animations.play('life6');

        // this.batteryB = game.add.sprite(250,10,'H&E');
        // this.batteryB.scale.setTo(.50);
        // this.batteryB.animations.add('charge0',[6],10,true);
        // this.batteryB.animations.add('charge1',[5],10,true);
        // this.batteryB.animations.add('charge2',[4],10,true);
        // this.batteryB.animations.add('charge3',[3],10,true);
        // this.batteryB.animations.add('charge4',[2],10,true);
        // this.batteryB.animations.add('charge5',[1],10,true);
        // this.batteryB.animations.add('charge6',[0],10,true);
        // this.batteryB.animations.play('charge0');
        }

        //Create Jacob's character
        else if(game.global.char2){
        this.player = game.add.sprite(90, 410, 'char2');
        this.player.scale.setTo(2,2)
        this.player.animations.add('idle',[0],10,true)
        this.player.animations.play('idle')
        this.player.animations.add('right',[14,15],10,true)
        this.player.animations.add('left',[19,18],10,true)
        this.player.animations.add('up',[1,5],10,true)
        this.player.animations.add('down',[28,33],10,true)
        this.player.animations.add('Rattack',[12],10,true)
        this.player.animations.add('Lattack',[23],10,true)
        this.player.animations.add('Dattack',[28])
        this.player.animations.add('Uattack',[28])
        }

        //Create Ally's character
        else if(game.global.char3){
        this.player = game.add.sprite(90, 410, 'char3');
        this.player.scale.setTo(2);
        this.player.animations.add('Died', [56,56,56,56,56,56], 10, false);
        //Player animations
        this.player.animations.add('moveUp', [0, 1, 2,], 10, false);
        this.player.animations.add('moveDown', [36, 37, 38], 10, false);
        this.player.animations.add('moveRight', [24, 25, 26], 10, false);
        this.player.animations.add('moveLeft', [12, 13, 14], 10, false);
        this.player.animations.add('hitDown', [3, 4, 5], 15, false);
        this.player.animations.add('hitUp', [39, 40, 41], 15, false);
        this.player.animations.add('hitRight', [27, 28, 29], 15, false);
        this.player.animations.add('hitLeft', [15, 16, 17], 15, false); 
        // Player zombie animations
        this.player.animations.add('zombieMoveLeft', [60, 61, 62], 10, false);
        this.player.animations.add('zombieMoveUp', [84, 85, 86], 10, false);
        this.player.animations.add('zombieMoveDown', [48, 49, 50], 10, false);
        this.player.animations.add('zombieMoveRight', [72, 73, 74], 10, false);
        this.player.animations.add('zombieHitLeft', [63, 64, 65], 25, false);
        this.player.animations.add('zombieHitUp', [87, 88, 89], 25, false);
        this.player.animations.add('zombieHitDown', [51, 52, 53], 25, false);
        this.player.animations.add('zombieHitRight', [75, 76, 77], 25, false);
        // Player skeleton animations
        this.player.animations.add('skeletonMoveLeft', [18, 19, 20], 10, false);
        this.player.animations.add('skeletonMoveUp', [42, 43, 44], 10, false);
        this.player.animations.add('skeletonMoveDown', [6, 7, 8], 10, false);
        this.player.animations.add('skeletonMoveRight', [30, 31, 32], 10, false);
        this.player.animations.add('skeletonHitLeft', [21, 22, 23], 40, false);
        this.player.animations.add('skeletonHitUp', [45, 46, 47], 40, false);
        this.player.animations.add('skeletonHitDown', [9, 10, 11], 40, false);
        this.player.animations.add('skeletonHitRight', [33, 34, 35], 40, false);
        }

        //Create Coltin's character
        else{
        this.direction = 0;

        this.player = game.add.sprite(90, 410, 'char4');
        this.player.animations.add('flydown',[0,1,2,1],8,true)
        this.player.animations.add('flyup',[9,10,11,10],8,true)
        this.player.animations.add('flyright',[6,7,8,7],8,true)
        this.player.animations.add('flyleft',[3,4,5,4],8,true)
        game.physics.arcade.enable(this.player);

        //Create fire breath
        this.fire = game.add.sprite(this.player.body.x,this.player.body.y,'firebreath')
        game.physics.arcade.enable(this.fire)
        this.fire.animations.add('fireright',[6,6,6,7,7,7,8,8,8,7,8,7,8],10,false)
        this.fire.animations.add('fireleft',[3,3,3,4,4,4,5,5,5,4,5,4,5],10,false)
        this.fire.animations.add('firedown',[0,0,0,1,1,1,2,2,2,1,2,1,2],10,false)
        this.fire.animations.add('fireup',[9,9,9,10,10,10,11,11,11,10,11,10,11],10,false)
        }
    
        game.physics.arcade.enable(this.player);
        this.player.body.setSize(16,48,0,0);
        this.player.body.collideWorldBounds = true;
        this.player.anchor.x = .5;
        this.player.anchor.y = .5;

        //Create the enemy
        this.enemy2 =game.add.sprite(680,340, 'enemy2')
        this.enemy2.scale.setTo(2.6);
        this.enemy2.animations.add('flydown',[0,1,2,1],7,true)
        this.enemy2.animations.add('flyup',[9,10,11,10],7,true)
        this.enemy2.animations.add('flyright',[6,7,8,7],7,true)
        this.enemy2.animations.add('flyleft',[3,4,5,4],7,true)
        this.enemy2.play('flyleft')
        game.physics.arcade.enable(this.enemy2)
        this.enemy2.body.collideWorldBounds = true
        this.enemy2.alpha = 0
        this.enemy2.health = 200

        //Give the enemy fire breath
        this.fire2 = game.add.sprite(this.enemy2.body.x,this.enemy2.body.y,'firebreath')
        game.physics.arcade.enable(this.fire2)
        this.fire2.animations.add('fire2right',[6,6,6,7,7,7,8,8,8,7,8,7,8],10,false)
        this.fire2.animations.add('fire2left',[3,3,3,4,4,4,5,5,5,4,5,4,5],10,false)
        this.fire2.animations.add('fire2down',[0,0,0,1,1,1,2,2,2,1,2,1,2],10,false)
        this.fire2.animations.add('fire2up',[9,9,9,10,10,10,11,11,11,10,11,10,11],10,false)
        this.fire2.scale.setTo(1,2);
        this.fire2.alpha = 0;
        this.fire2d = 0;

        //Set up for keyboard input
        k = game.input.keyboard;
    },
    
    update: function() {

    //Enemy movement
    if(!this.light){
        if((this.player.body.x <= this.enemy2.body.x) && (Math.abs(this.player.body.y - this.enemy2.body.y) < 250)){
            this.enemy2.body.x -= .5
            this.enemy2.play('flyleft')
            this.fire2d = 3;
        }
        else if (Math.abs(this.player.body.y - this.enemy2.body.y) < 250){
            this.enemy2.body.x += .5
            this.enemy2.play('flyright')
            this.fire2d = 4;
        }
        else if((this.player.body.y <= this.enemy2.body.y) && (Math.abs(this.player.body.x - this.enemy2.body.x) < 250)){
            this.enemy2.body.y -= .5
            this.enemy2.play('flyup')
            this.fire2d = 1;
        }
        else if ((Math.abs(this.player.body.x - this.enemy2.body.x) < 250)){
            this.enemy2.body.y += .5
            this.enemy2.play('flydown')
            this.fire2d = 2;
        }  
    }
    else{
        if(this.player.body.x > this.enemy2.body.x){
            this.enemy2.body.x -= .5
            this.enemy2.play('flyleft')
        }
        else{
            this.enemy2.body.x += .5
            this.enemy2.play('flyright')
        }
        if(this.player.body.y > this.enemy2.body.y){
            this.enemy2.body.y -= .5
            this.enemy2.play('flyup')
        }
        else{
            this.enemy2.body.y += .5
            this.enemy2.play('flydown')
        }
    }

    if(this.enemy2.alpha == 1){
        //Enemy attack
    if((Math.abs(this.player.body.x - this.enemy2.body.x) + (Math.abs(this.player.body.y - this.enemy2.body.y) < 200))){
        console.log(this.player.body.x - this.enemy2.body.x)
        console.log(this.player.body.y - this.enemy2.body.y)
        this.fire2.alpha = 1;
        if(this.fire2d == 1){
            this.fire2.play('fire2up')
            this.fire2.body.x = this.enemy2.body.x + 88;
            this.fire2.body.y = this.enemy2.body.y - 110;
        }
        if(this.fire2d == 2){
            this.fire2.play('fire2down')
            this.fire2.body.x = this.enemy2.body.x + 90;
            this.fire2.body.y = this.enemy2.body.y + 150;
        }
        if(this.fire2d == 3){
             this.fire2.play('fire2left')
             this.fire2.body.x = this.enemy2.body.x - 75;
             this.fire2.body.y = this.enemy2.body.y - 32;
            }
        if(this.fire2d == 4){
            this.fire2.play('fire2right')
            this.fire2.body.x = this.enemy2.body.x + 228;
            this.fire2.body.y = this.enemy2.body.y - 32;
        }
    }
    else{
        this.fire2.alpha = 0
    }
    }

   //Player movement
   if(game.global.char1){
    //Shadow
    this.lightSprite.reset(this.game.camera.x, this.game.camera.y);
    this.updateShadowTexture();

        this.move1();

        //Action when collect battery
        game.physics.arcade.overlap(this.player,this.battery1,this.lightOn, null, this)
    }
    else if(game.global.char2){
        this.move2();
    }
    else if(game.global.char3){
        this.move3();
    }
    else{
        this.move4();
        if(k.isDown(Phaser.Keyboard.F)){
            this.fire.alpha = 1
           
            if(this.direction == 1){
                this.fire.play('fireup')
                this.fire.body.x = this.player.body.x - 28;
                this.fire.body.y = this.player.body.y - 74;
            }
            if(this.direction == 2){
                this.fire.play('firedown')
                this.fire.body.x = this.player.body.x - 28;
                this.fire.body.y = this.player.body.y + 22;
            }
            if(this.direction == 3){
                 this.fire.play('fireleft')
                 this.fire.body.x = this.player.body.x - 102;
                 this.fire.body.y = this.player.body.y - 30;
                }
            if(this.direction == 4){
                this.fire.play('fireright')
                this.fire.body.x = this.player.body.x + 45;
                this.fire.body.y = this.player.body.y - 30;
            }
        }
        else{
            this.fire.alpha = 0
        }

        game.physics.arcade.overlap(this.fire, this.enemy2, this.fireAttack, null, this)
    }

    if(this.player.body.x > 400 && this.smokeFlag){
        this.smokeFlag = false;
        this.smoke.alpha = 1;
        this.smoke.animations.play('explode');
        this.smokeSound.play();
        this.smoke.animations.currentAnim.onComplete.add(this.hideSmoke, this);
    }

    game.physics.arcade.overlap(this.player, this.key, this.teleport, null, this);

    if(this.enemy2.health <= 0){
        this.enemy2.kill();
        this.fire2.kill();

        if(this.dragonS){
        this.dragonDeath.play();}
        this.dragonS = false;
    }
},

hideSmoke: function () {
    this.smoke.alpha = 0;
    this.enemy2.alpha = 1;
},

fireAttack: function () {
    this.enemy2.health--;
},

teleport: function () {
    this.music.stop();
    this.portalSound.play();
    game.state.start('mainRoom');
    game.global.r4CLEAR = true;
},
move1: function () {
    if(this.light){
        if(k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.LEFT)&& !k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y -= 4;
            this.player.animations.play('walkU2');
            this.direction = 1;}
        if(k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.LEFT)&& !k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y += 4;
            this.player.animations.play('walkD2');
            this.direction = 2;}
        if(k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.UP)&& !k.isDown(Phaser.Keyboard.DOWN)){
            this.player.body.x -= 4;
            this.player.animations.play('walkL2');
            this.direction = 3;}
        if(k.isDown(Phaser.Keyboard.RIGHT) && !k.isDown(Phaser.Keyboard.UP)&& !k.isDown(Phaser.Keyboard.DOWN)){
            this.player.body.x += 4;
            this.player.animations.play('walkR2');
            this.direction = 4;}
        if(k.isDown(Phaser.Keyboard.UP) && k.isDown(Phaser.Keyboard.LEFT)){
            this.player.body.y -= 4;
            this.player.body.x -= 4;
            this.player.animations.play('walkL2');
            this.direction = 3;}
        if(k.isDown(Phaser.Keyboard.UP) && k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y -= 4;
            this.player.body.x += 4;
            this.player.animations.play('walkR2');
            this.direction = 4;}
        if(k.isDown(Phaser.Keyboard.DOWN) && k.isDown(Phaser.Keyboard.LEFT)){
            this.player.body.y += 4;
            this.player.body.x -= 4;
            this.player.animations.play('walkL2');
            this.direction = 3;}
        if(k.isDown(Phaser.Keyboard.DOWN) && k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y += 4;
            this.player.body.x += 4;
            this.player.animations.play('walkR2');
            this.direction = 4;}
        if((!k.isDown(Phaser.Keyboard.UP)) && !(k.isDown(Phaser.Keyboard.DOWN)) && !(k.isDown(Phaser.Keyboard.LEFT)) && !(k.isDown(Phaser.Keyboard.RIGHT)))
        {
            if(this.direction == 1)
            this.player.animations.play('idleU2');
            if(this.direction == 2)
            this.player.animations.play('idleD2');
            if(this.direction == 3)
            this.player.animations.play('idleL2');
            if(this.direction == 4)
            this.player.animations.play('idleR2');}
        }
    else {
        if(k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.LEFT)&& !k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y -= 4;
            this.player.animations.play('walkU');
            this.direction = 1;
            }
        if(k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.LEFT)&& !k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y += 4;
            this.player.animations.play('walkD');
            this.direction = 2;
            }
        if(k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.UP)&& !k.isDown(Phaser.Keyboard.DOWN)){
            this.player.body.x -= 4;
            this.player.animations.play('walkL');
            this.direction = 3;}
        if(k.isDown(Phaser.Keyboard.RIGHT) && !k.isDown(Phaser.Keyboard.UP)&& !k.isDown(Phaser.Keyboard.DOWN)){
            this.player.body.x += 4;
            this.player.animations.play('walkR');
            this.direction = 4;}
        if(k.isDown(Phaser.Keyboard.UP) && k.isDown(Phaser.Keyboard.LEFT)){
            this.player.body.y -= 4;
            this.player.body.x -= 4;
            this.player.animations.play('walkL');
            this.direction = 3;}
        if(k.isDown(Phaser.Keyboard.UP) && k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y -= 4;
            this.player.body.x += 4;
            this.player.animations.play('walkR');
            this.direction = 3;}
        if(k.isDown(Phaser.Keyboard.DOWN) && k.isDown(Phaser.Keyboard.LEFT)){
            this.player.body.y += 4;
            this.player.body.x -= 4;
            this.player.animations.play('walkL');
            this.direction = 3;}
        if(k.isDown(Phaser.Keyboard.DOWN) && k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y += 4;
            this.player.body.x += 4;
            this.player.animations.play('walkR');
            this.direction = 3;}
        if((!k.isDown(Phaser.Keyboard.UP)) && !(k.isDown(Phaser.Keyboard.DOWN)) && !(k.isDown(Phaser.Keyboard.LEFT)) && !(k.isDown(Phaser.Keyboard.RIGHT))){
            if(this.direction == 1)
            this.player.animations.play('idleU');
            if(this.direction == 2)
            this.player.animations.play('idleD');
            if(this.direction == 3)
            this.player.animations.play('idleL');
            if(this.direction == 4)
            this.player.animations.play('idleR');}
        }
    },
    
    move2: function () {
        if(k.isDown(Phaser.Keyboard.UP)){
            this.player.body.y-= 5
            this.player.play('up')
        }
        if(k.isDown(Phaser.Keyboard.DOWN)){
            this.player.body.y+=5
            this.player.play('down')
        }
        if(k.isDown(Phaser.Keyboard.LEFT)){
            this.player.body.x-=5
            this.player.play('left')} 
        if(k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.x+=5
            this.player.play('right')}
    
        if(!(k.isDown(Phaser.Keyboard.UP))&&!(k.isDown(Phaser.Keyboard.DOWN))&&!(k.isDown(Phaser.Keyboard.LEFT))&&!(k.isDown(Phaser.Keyboard.RIGHT))){
            this.player.play('idle')
            if(k.isDown(Phaser.Keyboard.W)){
                this.player.play('Uattack')
                console.log('Up attack')}
            if(k.isDown(Phaser.Keyboard.S)){
                this.player.play('Dattack')}
                if(k.isDown(Phaser.Keyboard.D)){
                this.player.play('Rattack')}
            if(k.isDown(Phaser.Keyboard.A)){
                this.player.play('Lattack')}
            }
    },
    
    move3: function (){
        //Skeleton Movements
        if(game.global.health <= 10){
            if(k.isDown(Phaser.Keyboard.UP)){
                this.player.play('skeletonMoveUp');
                this.player.body.y -=5;}
            else if (k.isDown(Phaser.Keyboard.DOWN)){
                this.player.play('skeletonMoveDown');
                this.player.body.y +=5;}
            else if(k.isDown(Phaser.Keyboard.LEFT)){
                this.player.play('skeletonMoveLeft');
                this.player.body.x -=5;}
            else if(k.isDown(Phaser.Keyboard.RIGHT)){
                this.player.play('skeletonMoveRight');
                this.player.body.x +=5;}
    
        //Skeleton Attacks
            if (k.isDown(Phaser.Keyboard.S)){
                this.player.play('skeletonHitDown');}   
            if(k.isDown(Phaser.Keyboard.A)){
                this.player.play('skeletonHitLeft');}
            if(k.isDown(Phaser.Keyboard.D)){
                this.player.play('skeletonHitRight');}  
            if(k.isDown(Phaser.Keyboard.W)){
                this.player.play('skeletonHitUp');}
        }
        //Zombie Movements
        else if(game.global.health <= 50){
            if(k.isDown(Phaser.Keyboard.UP)){
                this.player.play('zombieMoveUp');
                this.player.body.y -=5;}
            else if (k.isDown(Phaser.Keyboard.DOWN)){
                this.player.play('zombieMoveDown');
                this.player.body.y +=5;}
            else if(k.isDown(Phaser.Keyboard.LEFT)){
                this.player.play('zombieMoveLeft');
                this.player.body.x -=5;}
            else if(k.isDown(Phaser.Keyboard.RIGHT)){
                this.player.play('zombieMoveRight');
                    this.player.body.x +=5;}
    
        //Zombie Attacks
            if (k.isDown(Phaser.Keyboard.S)){
                this.player.play('zombieHitDown');}   
            if(k.isDown(Phaser.Keyboard.A)){
                this.player.play('zombieHitLeft');}
            if(k.isDown(Phaser.Keyboard.D)){
                this.player.play('zombieHitRight');}  
            if(k.isDown(Phaser.Keyboard.W)){
                this.player.play('zombieHitUp');}
        }
        //Normal Movements
        else{   
            if(k.isDown(Phaser.Keyboard.UP)){
                this.player.play('moveDown');
                this.player.body.y -=5;}
            else if (k.isDown(Phaser.Keyboard.DOWN)){
                this.player.play('moveUp');
                this.player.body.y +=5;}
            else if(k.isDown(Phaser.Keyboard.LEFT)){
                this.player.play('moveLeft');
                this.player.body.x -=5;}
            else if(k.isDown(Phaser.Keyboard.RIGHT)){
                this.player.play('moveRight');
                this.player.body.x +=5;}
            
        //Normal Attacks
            if (k.isDown(Phaser.Keyboard.S)){
                this.player.play('hitDown');}   
            if(k.isDown(Phaser.Keyboard.A)){
                this.player.play('hitLeft');}
            if(k.isDown(Phaser.Keyboard.D)){
                this.player.play('hitRight');}  
            if(k.isDown(Phaser.Keyboard.W)){
                this.player.play('hitUp');}
            }
    },
    
    move4: function () {
        if(k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y-=5
            this.player.animations.play('flyup')
            this.direction = 1;
            }
            if(k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.y+=5
            this.player.animations.play('flydown')
            this.direction = 2;
            }
            if(k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.RIGHT)){
            this.player.body.x-=5
            this.player.animations.play('flyleft')
            this.direction = 3;
            }
            if(k.isDown(Phaser.Keyboard.RIGHT) && !k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.UP)){
            this.player.body.x+=5
            this.player.animations.play('flyright')
            this.direction = 4;
            }
    },
    
    lightOn: function(){
        this.battery1.kill();
        this.light = true;
        //this.battery = 6;
    },
    
    updateShadowTexture: function(){
        // Draw shadow
        this.shadowTexture.context.fillStyle = 'rgb(10, 10, 10)';
        this.shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);
        
        if(this.light){
            // Randomly change the radius each frame
            var radius = 300 + this.game.rnd.integerInRange(1,10);
        
            // Draw circle of light with a soft edge
            var gradient =
                this.shadowTexture.context.createRadialGradient(
                    this.player.x - this.game.camera.x, this.player.y - this.game.camera.y,100 * 0.75,
                    this.player.x - this.game.camera.x, this.player.y - this.game.camera.y, radius);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
        }
        else{
            // Randomly change the radius each frame
            var radius = 80 + this.game.rnd.integerInRange(1,5);
        
            // Draw circle of light with a soft edge
            var gradient =
                this.shadowTexture.context.createRadialGradient(
                    this.player.x - this.game.camera.x, this.player.y - this.game.camera.y,100 * 0.75,
                    this.player.x - this.game.camera.x, this.player.y - this.game.camera.y, radius);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
        }
        
            this.shadowTexture.context.beginPath();
            this.shadowTexture.context.fillStyle = gradient;
            this.shadowTexture.context.arc(this.player.x - this.game.camera.x, this.player.y - this.game.camera.y, radius, 0, Math.PI*2, false);
            this.shadowTexture.context.fill();
        
        // This just tells the engine it should update the texture cache
        this.shadowTexture.dirty = true;
    },
           
};