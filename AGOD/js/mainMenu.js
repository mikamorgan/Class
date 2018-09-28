/**
 * mainMenu: splash screen to start your game
 */
var mainMenu = {
    preload: function () {
        game.load.image('mainRoom','assets/mainRoom.jpg');
        game.load.spritesheet('button1', 'assets/CharacterV2.png', 64, 64); //Clay is room 1
        game.load.spritesheet('button2', 'assets/player.png', 32, 64);      //Jacob is room 2
        game.load.spritesheet('button3', 'assets/thing.png', 32, 32);       //Ally is room 3
        game.load.spritesheet('button4', 'assets/bird.png', 95, 96);       //Coltin is room 4

        game.load.bitmapFont('mainFont', 'assets/ganonwhite/font.png', 'assets/ganonwhite/font.xml');

        game.load.audio('bg', 'assets/GRAVEYRD.WAV');
    },

    create: function () {
        console.log("mainMenu.js");
        
        //Create background
        this.bg = game.add.sprite(0,0,'mainRoom');
        this.bg.scale.setTo(2.75,2.7);

        //Play background music
        this.music = game.add.audio('bg');
        this.music.play('', 0, 0.1, true);

        // Title
        var logo = game.add.bitmapText(450, 0, 'mainFont', '', 75)
        logo.text = "Adventure Game of Death";
        game.add.tween(logo).to({
            y: 350
        }, 1000, Phaser.Easing.Bounce.Out).start()

        // Subtitle
        var label = game.add.bitmapText(600, 450, 'mainFont', '', 40);
        label.text = "Choose your character";
        label.alpha = 0
        game.add.tween(label).delay(600).to({
            alpha: 1
        }, 1000).start()
        game.add.tween(label).to({
            y: 430
        }, 500).to({
            y: 450
        }, 500).start().loop()

        //Create buttons for character selection
        this.button1 = game.add.button(415, 500, 'button1', this.char1, this, 54, 55, 56); //Choose Clay's character
        this.button1.scale.setTo(2, 2);
        this.button2 = game.add.button(590, 500, 'button2', this.char2, this, 1, 0, 2); //Choose Jacob's character
        this.button2.scale.setTo(2, 2);
        this.button3 = game.add.button(740, 540, 'button3', this.char3, this, 0, 1, 2); //Choose Ally's character
        this.button3.scale.setTo(2, 2);
        this.button4 = game.add.button(890, 490, 'button4', this.char4, this, 0, 1, 2); //Choose Coltin's character
        this.button4.scale.setTo(2, 2);
    },

    char1: function () {
        this.music.stop();
        game.global.char1 = true;
        game.state.start("mainRoom");
        console.log(game.global.char1);
    },

    char2: function () {
        this.music.stop();
        game.global.char2 = true;
        game.state.start("mainRoom");
        console.log(game.global.char2);
    },

    char3: function () {
        this.music.stop();
        game.global.char3 = true;
        game.state.start("mainRoom");
        console.log(game.global.char3);
    },

    char4: function () {
        this.music.stop();
        game.global.char4 = true;
        game.state.start("mainRoom");
        console.log(game.global.char4);
    },

}