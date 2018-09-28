var room2 = {
    preload: function() {
        console.log('In Room 2');
        game.load.image('room2','assets/room2.jpg');

        game.load.audio('portalSound', 'assets/portalSound.wav');
        game.load.audio('water', 'assets/9_49.wav');
        game.load.audio('ghostSound', 'assets/MONSTER.WAV');

        game.load.spritesheet('ghost','assets/ghost.png',46,48);
        game.load.spritesheet('portal','assets/portals.jpg', 80,80);
        game.load.spritesheet('trinkets','assets/trinkets.png', 32, 32);

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
    this.bg = game.add.sprite(0,0,'room2');
    this.bg.scale.setTo(3.8, 2.8);

    //Play background music
    this.music = game.add.audio('water');
    this.music.play('', 0, 0.1, true);

    this.ghostSound = game.add.audio('ghostSound');
    this.ghostSound.volume = .3;

    this.portalSound = game.add.audio('portalSound');
    this.portalSound.volume = .1;  

    //Create players
     //Create Clay's character
     if(game.global.char1){
        this.light = false;
        this.direction = 0;

        //Create key
        this.key = game.add.sprite(430, 160, 'trinkets');
        this.key.scale.setTo(2);
        this.key.animations.add('key', [53]);
        this.key.play('key');
        game.physics.arcade.enable(this.key);

        //Create battery
        this.battery1 = game.add.sprite(700,500, 'battery');
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

        this.player = game.add.sprite(420, 800, 'char1');
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
        this.player = game.add.sprite(420, 800, 'char2');
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
        this.player = game.add.sprite(420, 800, 'char3');
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

        this.player = game.add.sprite(420, 800, 'char4');
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
        
      
    //Create Ghost
    this.ghost1 = game.add.sprite(1400,500,'ghost')
    this.ghost1.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(this.ghost1)
    this.ghost1.body.collideWorldBounds=true
    this.ghost1.animations.add('walkright',[6,7,8],10,true)
    this.ghost1.animations.add('walkleft',[6,7,8],10,true)
    this.ghost1.animations.add('idle',[0,1,2],10,true)
    this.ghost1.animations.add('attackleft',[15,14,13],10,true)
    this.ghost1.animations.add('attackright',[10,11],10,true)
    this.ghost1.animations.play('idle');
    this.ghost1.health = 100
    this.ghostflag = true
    
    //Ghost 2
    this.ghost2 = game.add.sprite(700,200,'ghost')
    this.ghost2.scale.setTo(1.5,1.5)
    game.physics.arcade.enable(this.ghost2)
    this.ghost2.body.collideWorldBounds=true
    this.ghost2.animations.add('walkright',[6,7,8],10,true)
    this.ghost2.animations.add('walkleft',[6,7,8],10,true)
    this.ghost2.animations.add('idle',[0,1,2],10,true)
    this.ghost2.animations.add('attackleft',[15,14,13],10,true)
    this.ghost2.animations.add('attackright',[10,11],10,true)
    this.ghost2.animations.play('idle');
    this.ghost2.health = 100
    this.ghostflag2 = true
    
    //Portal to exit
    this.portal1 = game.add.sprite(1400,390, 'portal')
    game.physics.arcade.enable(this.portal1)
    this.portal1.animations.add('spin',[3,4,5],15,true)
    this.portal1.animations.play('spin')
    this.portal1.scale.setTo(1.5,1.5)
    this.portal1.alpha = 0
        
    //Set up for keyboard input
    k = game.input.keyboard;

    this.frameRate = 0;
},    
    
        
update: function() {
    this.frameRate++;    

    if(this.ghost1.health <=0){
        this.ghost1.destroy()
        this.ghostflag = false
        this.ghostSound.play();
    }
    if(this.ghost2.health <=0){
        this.ghost2.destroy()
        this.ghostflag2 = false
        this.ghostSound.play();
    }

//Ghost functions
    //Ghost one functions
    if(this.ghostflag){
        //Ghost one movement
        //Ghost will chase Professor if lights are off
        if(!this.light){
        if(this.player.body.x < this.ghost1.body.x)
            this.ghost1.body.x -= 2
        else
            this.ghost1.body.x += 2
        if(this.player.body.y < this.ghost1.body.y)
            this.ghost1.body.y -= 2
        else
            this.ghost1.body.y += 2  
        }
        else{
            if(this.player.body.x > this.ghost1.body.x)
                this.ghost1.body.x -= .5
            else
                this.ghost1.body.x += .5
            if(this.player.body.y > this.ghost1.body.y)
                this.ghost1.body.y -= .5
            else
                this.ghost1.body.y += .5  
        }

        //Ghost one animations
        if(Math.abs(this.player.body.y - this.ghost1.body.y <30)&&(this.player.body.x - this.ghost1.body.x <30)&&(this.ghost1.body.x<this.player.body.x)){
            this.ghost1.play('attackright')
        }
        if(Math.abs(this.player.body.y - this.ghost1.body.y <30)&&(this.player.body.x - this.ghost1.body.x <30)&&(this.player.body.y<this.ghost1.body.y)){
            this.ghost1.play('attackleft')
        }
        
        this.ghost1.alpha = this.ghost1.health/100

        //Ghost attacks player
        if(this.frameRate % 10 == 0)
            game.physics.arcade.overlap(this.ghost1,this.player, this.hurt1,null,this)
    
        //Player attacks ghost one
        if(k.isDown(Phaser.Keyboard.W)){
            if(Math.abs(this.player.body.y - this.ghost1.body.y) <50){
            if(Math.abs(this.player.body.x - this.ghost1.body.x) <30){
                if(this.frameRate % 5 == 0)
                    this.ghost1.health -= 5;
                }   
                }
            }
        if(k.isDown(Phaser.Keyboard.S)){
            if(Math.abs(this.ghost1.body.y - this.player.body.y) <50){
                if(Math.abs(this.player.body.x - this.ghost1.body.x) <30){
                    if(this.frameRate % 5 == 0)
                            this.ghost1.health -= 5;
                }   
                }
            }
        if(k.isDown(Phaser.Keyboard.D)){
            if(Math.abs(this.player.body.y - this.ghost1.body.y) <30){
            if(Math.abs(this.ghost1.body.x - this.player.body.x) < 50){
                if(this.frameRate % 5 == 0)
                    this.ghost1.health -= 5;
                }   
                }
            }  
        if(k.isDown(Phaser.Keyboard.A)){
            if(Math.abs(this.player.body.y - this.ghost1.body.y) <30){
                if(Math.abs(this.player.body.x - this.ghost1.body.x) <50){
                    if(this.frameRate % 5 == 0)
                    this.ghost1.health -= 5;
                }   
                }
            }  
    }

    //Ghost two functions
    if(this.ghostflag2){
        //Ghost two movement
        if(!this.light){
            if(this.player.body.x < this.ghost2.body.x)
                this.ghost2.body.x -= 2
            else
            this.ghost2.body.x += 2
            if(this.player.body.y < this.ghost2.body.y)
                this.ghost2.body.y -= 2
            else
                this.ghost2.body.y += 2  
        }
        else{
            if(this.player.body.x > this.ghost2.body.x)
                this.ghost2.body.x -= .5
            else
                this.ghost2.body.x += .5
            if(this.player.body.y > this.ghost2.body.y)
                this.ghost2.body.y -= .5
            else
                this.ghost2.body.y += .5
        }
        //Ghost two animations  
        if(Math.abs(this.player.body.y - this.ghost2.body.y <30)&&(this.player.body.x - this.ghost2.body.x <30)&&(this.ghost2.body.x<this.player.body.x)){
            this.ghost2.play('attackright')
            }
        if(Math.abs(this.player.body.y - this.ghost2.body.y <30)&&(this.player.body.x - this.ghost2.body.x <30)&&(this.player.body.y<this.ghost2.body.y)){
            this.ghost2.play('attackleft')
            }     

        this.ghost2.alpha = this.ghost2.health/100
    
        //Ghost attacks player
        if(this.frameRate % 10 == 0){
            game.physics.arcade.overlap(this.ghost2,this.player, this.hurt1,null,this)
        }
  
        //Player attacks ghost two
        if(k.isDown(Phaser.Keyboard.W)){
            if(Math.abs(this.player.body.y - this.ghost2.body.y) <50){
                if(Math.abs(this.player.body.x - this.ghost2.body.x) <30){
                    if(this.frameRate % 5 == 0)
                    this.ghost2.health -= 5;
                }
            }
        }
        if(k.isDown(Phaser.Keyboard.S)){
            if(Math.abs(this.ghost2.body.y - this.player.body.y) <50){
                if(Math.abs(this.player.body.x - this.ghost2.body.x) <30){
                    if(this.frameRate % 5 == 0)
                    this.ghost2.health -= 5;
                }   
            }
        }
        if(k.isDown(Phaser.Keyboard.D)){
            if(Math.abs(this.player.body.y - this.ghost2.body.y) <30){
                if(Math.abs(this.ghost2.body.x - this.player.body.x) < 50){
                    if(this.frameRate % 5 == 0)
                    this.ghost2.health -= 5;
                }   
            }
        }  
        if(k.isDown(Phaser.Keyboard.A)){
            if(Math.abs(this.player.body.y - this.ghost2.body.y) <30){
                if(Math.abs(this.player.body.x - this.ghost2.body.x) <50){
                    if(this.frameRate % 5 == 0)
                    this.ghost2.health -= 5;
                }   
            }
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

        game.physics.arcade.overlap(this.player,this.key, this.leave,null,this)
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

        game.physics.arcade.overlap(this.fire, this.ghost1, this.fireAttack, null, this)
        game.physics.arcade.overlap(this.fire, this.ghost2, this.fireAttack2, null, this)
    }

    if(game.global.health <= 0){
        this.player.destroy();
        game.state.start('gameOver')
    }
    
    if(!game.global.char1){
        if(this.ghost1.health == 0 && this.ghost2.health ==0){
            this.portal1.alpha =1
        }
    }

    if(this.portal1.alpha == 1){
        game.physics.arcade.overlap(this.player,this.portal1, this.teleport1,null,this)
    }
},

leave: function () {
    this.key.destroy();
    this.portal1.alpha = 1;
},

fireAttack: function () {
    this.ghost1.health -= .5;
},

fireAttack2: function () {
    this.ghost2.health -= .5;
},

hurt1: function () {
    game.global.health -= .5
    console.log(game.global.health)
    },
    
teleport1: function() {
    this.music.stop();
    this.portalSound.play();
    game.global.r2CLEAR = true;
    game.state.start('mainRoom')
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
            this.player.play('Uattack')}
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
            
        
 