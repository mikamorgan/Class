var mainRoom = {
    
preload: function() {
    console.log('In Main Room');
},

create: function() {

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