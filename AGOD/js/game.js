var game = new Phaser.Game(1535, 885, Phaser.AUTO, 'game');

console.log('In Game');

game.global = {
	r1KEY: false,
	r2KEY: false,
    r3KEY: false,
    r4KEY: false,
    health: 100,
    char1: false,
    char2: false,
    char3: false,
    char4: false
}

game.state.add('mainRoom', mainRoom)
game.state.add('mainMenu', mainMenu)
game.state.add('room1', room1)
game.state.add('room2', room2)
game.state.add('room3', room3)
game.state.add('room4', room4)
game.state.add('gameOver', gameOver)
game.state.start('mainMenu')
