var room3 = {
    preload: function() {
        console.log('In Room 3');
        game.load.image('room3','assets/room3.png');

        game.load.spritesheet('enemy', 'assets/skeleton.png',65.6, 72.5);
        game.load.spritesheet('portal', 'assets/unnamed.png', 80, 80);

        //Load the four character spritesheets
        game.load.spritesheet('char1', 'assets/CharacterV2.png', 64, 64); //Clay is character 1
        game.load.spritesheet('char2', 'assets/player.png', 32, 64);      //Jacob is character 2
        game.load.spritesheet('char3', 'assets/thing.png', 32, 32);       //Ally is character 3
        game.load.spritesheet('char4', 'assets/bird.png', 95, 96);       //Coltin is character 4
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room3');
        this.bg.scale.setTo(2.75,2.7);
        console.log('done')
//create player
    this.player = game.add.sprite(800, 400, 'player');
    this.player.scale.setTo(2);
    this.player.animations.add('Died', [56,56,56,56,56,56], 10, false);
    console.log('done2')
//create enemy
    this.enemy = game.add.sprite(100, 445, 'enemy');
    this.enemy.scale.setTo(1.5);
    this.enemy.health =200;
    this.enemyflag = true;
    console.log('done3')
//Portal
this.portal = game.add.sprite( 604, 200, 'portal');
game.physics.arcade.enable(this.portal);
this.portal.animations.add('spin', [0, 1, 2], 11, true);
this.portal.animations.play('spin');
this.portal.alpha =0; 
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
//Enemy
  //Create Enemy Movements
  console.log('done')
    this.enemy.animations.add('moveDown', [0, 1, 2, 3], 10, false);
    this.enemy.animations.add('moveLeft', [12, 13, 14, 15], 10, false);
    this.enemy.animations.add('moveRight', [24, 25, 26, 27], 10, false);
    this.enemy.animations.add('moveUp', [36, 37, 38, 39], 10, false);
  //Create Enemy Attacks
    this.enemy.animations.add('hitDown', [4, 5, 6, 7], 20, false);
    this.enemy.animations.add('hitUp', [40, 41, 42, 43], 20, false);
    this.enemy.animations.add('hitLeft', [16, 17, 18, 19], 20, false);
    this.enemy.animations.add('hitRight', [28, 29, 30, 31], 20, false);
  //Create Enemy Death
    this.enemy.animations.add('death', [8, 9, 10, 11], 5, false);


    //Player Physics
    game.physics.arcade.enable(this.player);
    console.log('done')
    this.player.body.collideWorldBounds = true;
    //Enemy Physics
    game.physics.arcade.enable(this.enemy);
    this.enemy.body.collideWorldBounds = true;   
    
    k = game.input.keyboard;

    },
    
    update: function() {
      //Enemy Hit Down
if(this.enemyflag){
    console.log(this.player.body.x)
    if((Math.abs(this.player.body.x - this.enemy.body.x) <30)&&(Math.abs(this.player.body.y - this.enemy.body.y) <50)&&(this.enemy.body.y<this.player.body.y)){
        this.enemy.play('hitDown')
        this.player.health -= 5;
    }
else if((Math.abs(this.player.body.x - this.enemy.body.x) <30)&&(Math.abs(this.player.body.y - this.enemy.body.y) <50)&&(this.player.body.y<this.enemy.body.y)){
    console.log('up')
    this.enemy.play('hitUp')  
    this.player.health -= 5;      
     }
    //Enemy Hit Left
else if((Math.abs(this.player.body.y - this.enemy.body.y) <30)&&(Math.abs(this.player.body.x - this.enemy.body.x) <50)&&(this.enemy.body.x<this.player.body.x)){
    console.log('Right')   
    this.player.health -= 5;   
    this.enemy.play('hitRight')
    }
else if((Math.abs(this.player.body.y - this.enemy.body.y) <30)&&(Math.abs(this.player.body.x - this.enemy.body.x) <50)&&(this.player.body.x<this.enemy.body.x)){
             this.enemy.play('hitLeft')
             this.player.health -= 5;
             console.log('left')  
     }
//Enemy Movements
else if(this.player.body.x < this.enemy.body.x){
this.enemy.play('moveLeft');
this.enemy.body.x -= 2;}
else if(this.player.body.x > this.enemy.body.x){
this.enemy.play('moveRight');
this.enemy.body.x += 2;}
else if(this.player.body.y < this.enemy.body.y){
this.enemy.play('moveUp');
this.enemy.body.y -= 2;}
else if(this.player.body.y > this.enemy.body.y){
this.enemy.play('moveDown');
this.enemy.body.y += 2;}}
//skeleton functions
   if(game.global.health <= 10){
//Skeleton Movements
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
if(this.enemyflag){

    if (k.isDown(Phaser.Keyboard.S)){
           this.player.play('skeletonHitDown');
        if(this.enemy.body.y - this.player.body.y <100)
        if(this.player.body.x - this.enemy.body.x <30)
           this.enemy.health -= 10;
        }   
    if(k.isDown(Phaser.Keyboard.A)){
           this.player.play('skeletonHitLeft');
        if(this.enemy.body.y - this.player.body.y <30)
        if(this.player.body.x - this.enemy.body.x <100)
           this.enemy.health -= 10;
        }
    if(k.isDown(Phaser.Keyboard.D)){
           this.player.play('skeletonHitRight');
        if(this.player.body.y - this.enemy.body.y <150)
        if(this.enemy.body.x - this.player.body.x < 100)
           this.enemy.health -= 10;
        }
             
    if(k.isDown(Phaser.Keyboard.W)){
           this.player.play('skeletonHitUp');
        if(this.player.body.y - this.enemy.body.y <100)
        if(this.player.body.x - this.enemy.body.x <150)
           this.enemy.health -= 10;
            }}
}
//Zombie Functions
     else if(game.global.health <= 50){
//Zombie Movements
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
if(this.enemyflag){
        if (k.isDown(Phaser.Keyboard.S)){
               this.player.play('zombieHitDown');
            if(this.enemy.body.y - this.player.body.y <100)
            if(this.player.body.x - this.enemy.body.x <30)
               this.enemy.health -= 1;
        }   
        if(k.isDown(Phaser.Keyboard.A)){
               this.player.play('zombieHitLeft');
            if(this.enemy.body.y - this.player.body.y <30)
            if(this.player.body.x - this.enemy.body.x <100)
               this.enemy.health -= 1;
        }
        if(k.isDown(Phaser.Keyboard.D)){
               this.player.play('zombieHitRight');
            if(this.player.body.y - this.enemy.body.y <150)
            if(this.enemy.body.x - this.player.body.x < 100)
               this.enemy.health -= 1;
        }       
        if(k.isDown(Phaser.Keyboard.W)){
                this.player.play('zombieHitUp');
             if(this.player.body.y - this.enemy.body.y <100)
             if(this.player.body.x - this.enemy.body.x <150)
                this.enemy.health -= 1;
            }}
}

//Human functions
    else{
//Normal Movements

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
if(this.enemyflag){
    if (k.isDown(Phaser.Keyboard.S)){
           this.player.play('hitDown');
        if(this.enemy.body.y - this.player.body.y <100)
        if(this.player.body.x - this.enemy.body.x <30)
           this.enemy.health -= 2;
        }   
        if(k.isDown(Phaser.Keyboard.A)){
               this.player.play('hitLeft');
            if(this.enemy.body.y - this.player.body.y <30)
            if(this.player.body.x - this.enemy.body.x <100)
               this.enemy.health -= 2;
        }
        if(k.isDown(Phaser.Keyboard.D)){
                 this.player.play('hitRight');
            if(this.player.body.y - this.enemy.body.y <150)
            if(this.enemy.body.x - this.player.body.x < 100)
                this.enemy.health -= 2;
        }
        if(k.isDown(Phaser.Keyboard.W)){
           this.player.play('hitUp');
        if(this.player.body.y - this.enemy.body.y <100)
        if(this.player.body.x - this.enemy.body.x <150)
           this.enemy.health -= 2;
        }}
    }

if(this.enemy.health <= 0){
this.enemyflag = false;
this.enemy.play('death')
this.enemy.animations.currentAnim.onComplete.add(this.endgame, this);
game.physics.arcade.overlap(this.player, this.portal, this.teleport, null, this);

}
if(this.player.health == 0){
    this.player.play('Died');
}

if(game.global.health <= 0){
    this.player.destroy();
    game.state.start('gameOver')
}

},
teleport:function(player, room)
{
    game.state.start('mainRoom')
},
endgame:function()
{
    console.log('got this far')
  
    this.enemy.kill();
    this.portal.alpha =1
},
};