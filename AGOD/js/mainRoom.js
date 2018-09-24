var mainRoom = {
    
preload: function() {
    console.log('In Main Room');
    game.load.image('mainRoom','assets/mainRoom.jpg');
    game.load.spritesheet('portal', 'assets/portals.jpg', 80, 80);

    //Load the four character spritesheets
    game.load.spritesheet('char1', 'assets/CharacterV2.png', 64, 64); //Clay is character 1
    game.load.spritesheet('char2', 'assets/player.png', 32, 64);      //Jacob is character 2
    game.load.spritesheet('char3', 'assets/thing.png', 32, 32);       //Ally is character 3
    game.load.spritesheet('char4', 'assets/bird.png', 95, 96);       //Coltin is character 4
    
},

create: function() {

    //Create background
    this.bg = game.add.sprite(0,0,'mainRoom');
    this.bg.scale.setTo(2.75,2.7);

    //Create first portal
    this.portal1 = game.add.sprite(400, 380, 'portal');
    game.physics.arcade.enable(this.portal1);
    this.portal1.animations.add('spin', [0, 1, 2], 30, true);
    this.portal1.animations.play('spin');
    

    //Create second portal
    this.portal2 = game.add.sprite(400, 550, 'portal');
    game.physics.arcade.enable(this.portal2);
    this.portal2.animations.add('spin', [3, 4, 5], 30, true);
    this.portal2.animations.play('spin');

     //Create third portal
     this.portal3 = game.add.sprite(1050, 380, 'portal');
     game.physics.arcade.enable(this.portal3);
     this.portal3.animations.add('spin', [6, 7, 8], 30, true);
     this.portal3.animations.play('spin');
 
     //Create fourth portal
     this.portal4 = game.add.sprite(1050, 550, 'portal');
     game.physics.arcade.enable(this.portal4);
     this.portal4.animations.add('spin', [9, 10, 11], 30, true);
     this.portal4.animations.play('spin');

     //Create players

     //Create Clay's character
     if(game.global.char1){
        this.light = false;
        this.direction = 0;

        this.player = game.add.sprite(800, 400, 'char1');
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
     }

     //Create Jacob's character
     else if(game.global.char2){
        this.player = game.add.sprite(800, 400, 'char2');
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
        this.player = game.add.sprite(800, 400, 'char3');
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
        this.player = game.add.sprite(800, 400, 'char4');
        this.player.animations.add('flydown',[0,1,2,1],8,true)
        this.player.animations.add('flyup',[9,10,11,10],8,true)
        this.player.animations.add('flyright',[6,7,8,7],8,true)
        this.player.animations.add('flyleft',[3,4,5,4],8,true)
     }

     game.physics.arcade.enable(this.player);
     this.player.body.setSize(16,48,0,0);
     this.player.body.collideWorldBounds = true;
     this.player.anchor.x = .5;
     this.player.anchor.y = .5;

    //Set up for keyboard input
    k = game.input.keyboard;

    if(game.global.char1){
    //Create shadows
    this.shadowTexture = this.game.add.bitmapData(this.game.width, this.game.height);   

    // Create an object that will use the bitmap as a texture
    this.lightSprite = this.game.add.image(this.game.camera.x, this.game.camera.y, this.shadowTexture);    
    // Set the blend mode to MULTIPLY. This will darken the colors of everything below this sprite.    
    this.lightSprite.blendMode = Phaser.blendModes.MULTIPLY;
    }

},

update: function() {

    //Player movement
   if(game.global.char1){
    //Shadow
    this.lightSprite.reset(this.game.camera.x, this.game.camera.y);
    this.updateShadowTexture();

       this.move1();
   }
   else if(game.global.char2){
       this.move2();
   }
   else if(game.global.char3){
       this.move3();
   }
   else
        this.move4();

    //To show/hide Coltin's fire breath
    // if(k.isDown(Phaser.Keyboard.SPACEBAR)){
    //     this.player.alpha = 1;
    // }
    // else{
    //     this.player.alpha = 0;
    // }

    //Check if enter a portal    
    game.physics.arcade.overlap(this.player, this.portal1, this.teleport1, null, this);
    game.physics.arcade.overlap(this.player, this.portal2, this.teleport2, null, this);
    game.physics.arcade.overlap(this.player, this.portal3, this.teleport3, null, this);
    game.physics.arcade.overlap(this.player, this.portal4, this.teleport4, null, this);
    
},

teleport1: function (player, room) {
    game.state.start('room1');
},

teleport2: function (player, room) {
    game.state.start('room2');
},

teleport3: function (player, room) {
    game.state.start('room3');
},

teleport4: function (player, room) {
    game.state.start('room4');
},

move1: function () {
if(this.light){
    if(k.isDown(Phaser.Keyboard.W) && !k.isDown(Phaser.Keyboard.A)&& !k.isDown(Phaser.Keyboard.D)){
        this.player.body.y -= 4;
        this.player.animations.play('walkU2');
        this.direction = 1;}
    if(k.isDown(Phaser.Keyboard.S) && !k.isDown(Phaser.Keyboard.A)&& !k.isDown(Phaser.Keyboard.D)){
        this.player.body.y += 4;
        this.player.animations.play('walkD2');
        this.direction = 2;}
    if(k.isDown(Phaser.Keyboard.A) && !k.isDown(Phaser.Keyboard.W)&& !k.isDown(Phaser.Keyboard.S)){
        this.player.body.x -= 4;
        this.player.animations.play('walkL2');
        this.direction = 3;}
    if(k.isDown(Phaser.Keyboard.D) && !k.isDown(Phaser.Keyboard.W)&& !k.isDown(Phaser.Keyboard.S)){
        this.player.body.x += 4;
        this.player.animations.play('walkR2');
        this.direction = 4;}
    if(k.isDown(Phaser.Keyboard.W) && k.isDown(Phaser.Keyboard.A)){
        this.player.body.y -= 4;
        this.player.body.x -= 4;
        this.player.animations.play('walkL2');
        this.direction = 3;}
    if(k.isDown(Phaser.Keyboard.W) && k.isDown(Phaser.Keyboard.D)){
        this.player.body.y -= 4;
        this.player.body.x += 4;
        this.player.animations.play('walkR2');
        this.direction = 4;}
    if(k.isDown(Phaser.Keyboard.S) && k.isDown(Phaser.Keyboard.A)){
        this.player.body.y += 4;
        this.player.body.x -= 4;
        this.player.animations.play('walkL2');
        this.direction = 3;}
    if(k.isDown(Phaser.Keyboard.S) && k.isDown(Phaser.Keyboard.D)){
        this.player.body.y += 4;
        this.player.body.x += 4;
        this.player.animations.play('walkR2');
        this.direction = 4;}
    if((!k.isDown(Phaser.Keyboard.W)) && !(k.isDown(Phaser.Keyboard.S)) && !(k.isDown(Phaser.Keyboard.A)) && !(k.isDown(Phaser.Keyboard.D)))
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
    if(k.isDown(Phaser.Keyboard.W) && !k.isDown(Phaser.Keyboard.A)&& !k.isDown(Phaser.Keyboard.D)){
        this.player.body.y -= 4;
        this.player.animations.play('walkU');
        this.direction = 1;
        }
    if(k.isDown(Phaser.Keyboard.S) && !k.isDown(Phaser.Keyboard.A)&& !k.isDown(Phaser.Keyboard.D)){
        this.player.body.y += 4;
        this.player.animations.play('walkD');
        this.direction = 2;
        }

    if(k.isDown(Phaser.Keyboard.A) && !k.isDown(Phaser.Keyboard.W)&& !k.isDown(Phaser.Keyboard.S)){
        this.player.body.x -= 4;
        this.player.animations.play('walkL');
        this.direction = 3;}
    if(k.isDown(Phaser.Keyboard.D) && !k.isDown(Phaser.Keyboard.W)&& !k.isDown(Phaser.Keyboard.S)){
        this.player.body.x += 4;
        this.player.animations.play('walkR');
        this.direction = 4;}

    if(k.isDown(Phaser.Keyboard.W) && k.isDown(Phaser.Keyboard.A)){
        this.player.body.y -= 4;
        this.player.body.x -= 4;
        this.player.animations.play('walkL');
        this.direction = 3;}
    if(k.isDown(Phaser.Keyboard.W) && k.isDown(Phaser.Keyboard.D)){
        this.player.body.y -= 4;
        this.player.body.x += 4;
        this.player.animations.play('walkR');
        this.direction = 3;}
    if(k.isDown(Phaser.Keyboard.S) && k.isDown(Phaser.Keyboard.A)){
        this.player.body.y += 4;
        this.player.body.x -= 4;
        this.player.animations.play('walkL');
        this.direction = 3;}
    if(k.isDown(Phaser.Keyboard.S) && k.isDown(Phaser.Keyboard.D)){
        this.player.body.y += 4;
        this.player.body.x += 4;
        this.player.animations.play('walkR');
        this.direction = 3;}
    if((!k.isDown(Phaser.Keyboard.W)) && !(k.isDown(Phaser.Keyboard.S)) && !(k.isDown(Phaser.Keyboard.A)) && !(k.isDown(Phaser.Keyboard.D))){
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
        }
},

move4: function () {
    if(k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.RIGHT)){
        this.player.body.y-=5
        this.player.animations.play('flyup')
     }
     if(k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.RIGHT)){
        this.player.body.y+=5
        this.player.animations.play('flydown')
     }
     if(k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.UP) && !k.isDown(Phaser.Keyboard.RIGHT)){
        this.player.body.x-=5
        this.player.animations.play('flyleft')
     }
     if(k.isDown(Phaser.Keyboard.RIGHT) && !k.isDown(Phaser.Keyboard.DOWN) && !k.isDown(Phaser.Keyboard.LEFT) && !k.isDown(Phaser.Keyboard.UP)){
        this.player.body.x+=5
        this.player.animations.play('flyright')
     }
},

updateShadowTexture: function(){
    // Draw shadow
    this.shadowTexture.context.fillStyle = 'rgb(10, 10, 10)';
    this.shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);
    
        // Randomly change the radius each frame
        var radius = 100 + this.game.rnd.integerInRange(1,10);
    
        // Draw circle of light with a soft edge
        var gradient =
            this.shadowTexture.context.createRadialGradient(
                this.player.x - this.game.camera.x, this.player.y - this.game.camera.y,100 * 0.75,
                this.player.x - this.game.camera.x, this.player.y - this.game.camera.y, radius);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');
    
        this.shadowTexture.context.beginPath();
        this.shadowTexture.context.fillStyle = gradient;
        this.shadowTexture.context.arc(this.player.x - this.game.camera.x, this.player.y - this.game.camera.y, radius, 0, Math.PI*2, false);
        this.shadowTexture.context.fill();
    
    // This just tells the engine it should update the texture cache
    this.shadowTexture.dirty = true;
    },

};
