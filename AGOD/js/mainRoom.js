var mainRoom = {
    
preload: function() {
    console.log('In Main Room');
    game.load.image('mainRoom','assets/mainRoom.jpg');
    game.load.image('player','assets/player.png');
    game.load.spritesheet('portal', 'assets/portals.jpg', 80, 80);
},

create: function() {

    game.physics.startSystem(Phaser.Physics.ARCADE);

    //Create background
    this.bg = game.add.sprite(0,0,'mainRoom');
    this.bg.scale.setTo(2.75,2.7);

    //Create shadows
    this.shadowTexture = this.game.add.bitmapData(this.game.width, this.game.height);   

    // Create an object that will use the bitmap as a texture
    this.lightSprite = this.game.add.image(this.game.camera.x, this.game.camera.y, this.shadowTexture);    
    // Set the blend mode to MULTIPLY. This will darken the colors of everything below this sprite.    
    this.lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

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

     //Create player
     this.player = game.add.sprite(800, 400, 'player');
     this.player.scale.setTo(.2);
     game.physics.arcade.enable(this.player);
     this.player.body.collideWorldBounds = true;
     //this.player.anchor.x = .5;
     //this.player.anchor.y = .5;


    //Set up for keyboard input
    k = game.input.keyboard;
},

update: function() {
    //Shadow
    this.lightSprite.reset(this.game.camera.x, this.game.camera.y);
    this.updateShadowTexture();

    //Player movement
    if(k.isDown(Phaser.Keyboard.UP))
        this.player.body.y -= 10;
    if(k.isDown(Phaser.Keyboard.DOWN))
        this.player.body.y += 10;
    if(k.isDown(Phaser.Keyboard.LEFT))
        this.player.body.x -= 10;
    if(k.isDown(Phaser.Keyboard.RIGHT))
        this.player.body.x += 10;

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