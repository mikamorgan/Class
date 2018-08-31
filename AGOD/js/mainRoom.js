var mainRoom = {
    
preload: function() {
    console.log('In Main Room');
    game.load.image('mainRoom','assets/mainRoom.jpg');
},

create: function() {
    //Create background
    this.bg = game.add.sprite(0,0,'mainRoom');
    this.bg.scale.setTo(2.75,2.7);

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