var mainRoom = {
    
preload: function() {
    console.log('In Main Room');
    game.load.image('mainRoom','assets/mainRoom.jpg');
    game.load.spritesheet('portal', 'assets/portals.jpg', 80, 80);
},

create: function() {
    //Create background
    this.bg = game.add.sprite(0,0,'mainRoom');
    this.bg.scale.setTo(2.75,2.7);

    //Create first portal
    this.portal1 = game.add.sprite(400, 380, 'portal');
    this.portal1.animations.add('spin', [0, 1, 2], 30, true);
    this.portal1.animations.play('spin');

    //Create second portal
    this.portal2 = game.add.sprite(400, 550, 'portal');
    this.portal2.animations.add('spin', [3, 4, 5], 30, true);
    this.portal2.animations.play('spin');

     //Create third portal
     this.portal3 = game.add.sprite(1050, 380, 'portal');
     this.portal3.animations.add('spin', [6, 7, 8], 30, true);
     this.portal3.animations.play('spin');
 
     //Create fourth portal
     this.portal4 = game.add.sprite(1050, 550, 'portal');
     this.portal4.animations.add('spin', [9, 10, 11], 30, true);
     this.portal4.animations.play('spin');


    //Set up for keyboard input
    k = game.input.keyboard;
},

update: function() {

    if(k.isDown(Phaser.Keyboard.UP))
        game.state.start('room1')
    if(k.isDown(Phaser.Keyboard.DOWN))
        game.state.start('room2')
    if(k.isDown(Phaser.Keyboard.LEFT))
        game.state.start('room3')
    if(k.isDown(Phaser.Keyboard.RIGHT))
        game.state.start('room4')
}
};