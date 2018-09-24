var room1 = {
    preload: function() {
        console.log('In Room 1');
        game.load.image('room1','assets/room1.jpg');

        //Load the four character spritesheets
        game.load.spritesheet('char1', 'assets/CharacterV2.png', 64, 64); //Clay is character 1
        game.load.spritesheet('char2', 'assets/player.png', 32, 64);      //Jacob is character 2
        game.load.spritesheet('char3', 'assets/thing.png', 32, 32);       //Ally is character 3
        game.load.spritesheet('char4', 'assets/bird.png', 95, 96);       //Coltin is character 4
    },
    
    create: function() {
        this.bg = game.add.sprite(40,0,'room1');
        this.bg.scale.setTo(3,1.8); 
    },
    
    update: function() {
    }
};