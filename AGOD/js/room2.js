var room2 = {
    preload: function() {
        console.log('In Room 2');
        game.load.image('room2','assets/room2.jpg');
        game.load.spritesheet('player','assets/player.png', 32,64);
        game.load.spritesheet('ghost','assets/ghost.png',46,48)
        game.load.spritesheet('dead','assets/dead.png',45,30)
        game.load.spritesheet('portal','assets/portals.png', 80,80)
    },
    
    create: function() {
        //Create Player
        this.bg = game.add.sprite(0,0,'room2');
        this.bg.scale.setTo(3.8, 2.8);
        this.player =game.add.sprite(420,800,'player')
        this.player.scale.setTo(2,2)
        game.physics.arcade.enable(this.player)
        this.player.body.collideWorldBounds=true
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
        this.player.health = 100;
        
      
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
        this.frameRate = 0;
      
        //Portal to exit
        this.portal1 = game.add.sprite(1400,390, 'portal')
        game.physics.arcade.enable(this.portal1)
        this.portal1.animations.add('spin',[3,4,5],15,true)
        this.portal1.animations.play('spin')
        this.portal1.scale.setTo(1.5,1.5)
        this.portal1.alpha = 0
        
        //Set up for keyboard input
        k = game.input.keyboard;
    },    
    
        
        update: function() {
        this.frameRate++;    

        if(this.ghost1.health ==0){
            this.ghost1.destroy()
            this.ghostflag = false}

        if(this.ghost2.health ==0){
            this.ghost2.destroy()
            this.ghostflag2 = false}

           //Player and Ghost Movement
           if(this.ghostflag){
            if(this.player.body.x < this.ghost1.body.x)
                this.ghost1.body.x -= 2
            else
            this.ghost1.body.x += 2
            if(this.player.body.y < this.ghost1.body.y)
                this.ghost1.body.y -= 2
            else
                this.ghost1.body.y += 2
           
            
                //Ghost Attack 
            if(Math.abs(this.player.body.y - this.ghost1.body.y <30)&&(this.player.body.x - this.ghost1.body.x <30)&&(this.ghost1.body.x<this.player.body.x)){
               this.ghost1.play('attackright')
           }
            if(Math.abs(this.player.body.y - this.ghost1.body.y <30)&&(this.player.body.x - this.ghost1.body.x <30)&&(this.player.body.y<this.ghost1.body.y)){
                    this.ghost1.play('attackleft')
            }
             this.ghost1.alpha = this.ghost1.health/100
           
            
            if(this.frameRate % 10 == 0){
                game.physics.arcade.overlap(this.ghost1,this.player, this.hurt1,null,this)
            }
              //Attacks
            if(k.isDown(Phaser.Keyboard.W)){
                this.player.play('Uattack')
                if(Math.abs(this.player.body.y - this.ghost1.body.y) <50){
                if(Math.abs(this.player.body.x - this.ghost1.body.x) <30){
                    if(this.frameRate % 5 == 0)
                        this.ghost1.health -= 5;
                }   
                }
            }
            if(k.isDown(Phaser.Keyboard.S)){
                this.player.play('Dattack')
                if(Math.abs(this.ghost1.body.y - this.player.body.y) <50){
                    if(Math.abs(this.player.body.x - this.ghost1.body.x) <30){
                        if(this.frameRate % 5 == 0)
                             this.ghost1.health -= 5;
                    }   
                    }
            }
            if(k.isDown(Phaser.Keyboard.D)){
                this.player.play('Rattack')
                if(Math.abs(this.player.body.y - this.ghost1.body.y) <30){
                if(Math.abs(this.ghost1.body.x - this.player.body.x) < 50){
                    if(this.frameRate % 5 == 0)
                        this.ghost1.health -= 5;
                    }   
                    }
                }  
            if(k.isDown(Phaser.Keyboard.A)){
                this.player.play('Lattack')
                if(Math.abs(this.player.body.y - this.ghost1.body.y) <30){
                    if(Math.abs(this.player.body.x - this.ghost1.body.x) <50){
                        if(this.frameRate % 5 == 0)
                        this.ghost1.health -= 5;
                    }   
                    }
            }
        }
            //Ghost 2
            if(this.ghostflag2){
            if(this.player.body.x < this.ghost2.body.x)
                this.ghost2.body.x -= 2
            else
            this.ghost2.body.x += 2
            if(this.player.body.y < this.ghost2.body.y)
                this.ghost2.body.y -= 2
            else
                this.ghost2.body.y += 2     
           
            
            //Ghost Attacks  
            if(Math.abs(this.player.body.y - this.ghost2.body.y <30)&&(this.player.body.x - this.ghost2.body.x <30)&&(this.ghost2.body.x<this.player.body.x)){
            this.ghost2.play('attackright')
            }
            if(Math.abs(this.player.body.y - this.ghost2.body.y <30)&&(this.player.body.x - this.ghost2.body.x <30)&&(this.player.body.y<this.ghost2.body.y)){
             this.ghost2.play('attackleft')
        }    
            this.ghost2.alpha = this.ghost2.health/100
    
            if(this.frameRate % 10 == 0){
            game.physics.arcade.overlap(this.ghost2,this.player, this.hurt1,null,this)
        }
     
        //Attacks
            if(k.isDown(Phaser.Keyboard.W)){
            this.player.play('Uattack')
            if(Math.abs(this.player.body.y - this.ghost2.body.y) <50){
            if(Math.abs(this.player.body.x - this.ghost2.body.x) <30){
            if(this.frameRate % 5 == 0)
                    this.ghost2.health -= 5;
            }
        }
    }
            if(k.isDown(Phaser.Keyboard.S)){
            this.player.play('Dattack')
            if(Math.abs(this.ghost2.body.y - this.player.body.y) <50){
                if(Math.abs(this.player.body.x - this.ghost2.body.x) <30){
                    if(this.frameRate % 5 == 0)
                         this.ghost2.health -= 5;
                }   
                }
    }
            if(k.isDown(Phaser.Keyboard.D)){
            this.player.play('Rattack')
            if(Math.abs(this.player.body.y - this.ghost2.body.y) <30){
                if(Math.abs(this.ghost2.body.x - this.player.body.x) < 50){
                    if(this.frameRate % 5 == 0)
                        this.ghost2.health -= 5;
                    }   
                    }
        }  
            if(k.isDown(Phaser.Keyboard.A)){
            this.player.play('Lattack')
            if(Math.abs(this.player.body.y - this.ghost2.body.y) <30){
                if(Math.abs(this.player.body.x - this.ghost2.body.x) <50){
                    if(this.frameRate % 5 == 0)
                    this.ghost2.health -= 5;
                }   
                }
    }
}        
        //Player
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

            if(game.global.health <= 0){
                this.player.destroy();
                game.state.start('gameOver')
            }
           
            if(this.ghost1.health == 0&&this.ghost2.health ==0){
                this.portal1.alpha =1
                game.physics.arcade.overlap(this.player,this.portal1, this.teleport1,null,this)
            }

        },
            hurt1: function(player,ghost) {
            game.global.health--
            console.log(game.global.health)
            },
            
            teleport1: function(player,room) {
                game.state.start('mainRoom')
                },
            };  
            
        
 