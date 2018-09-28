var winGame = {
    preload: function() {
        console.log('In Win Game');
        game.load.image('BG','assets/mainRoom.jpg');

        game.load.audio('bg', 'assets/winSound.wav');

        game.load.bitmapFont('mainFont', 'assets/ganonwhite/font.png', 'assets/ganonwhite/font.xml');
    },
    
    create: function() {
        //Create background
        this.bg = game.add.sprite(0,0,'BG');
        this.bg.scale.setTo(2.7);

        this.winSound = game.add.audio('bg');
        this.winSound.volume = .1;
        this.winSound.play();

        // Title
        var logo = game.add.bitmapText(600, 250, 'mainFont', '', 120)
        logo.text = "YOU WIN!";
        game.add.tween(logo).to({
            y: 230
        }, 500).to({
            y: 250
        }, 500).start().loop()

        //game.add.tween(label).delay(300).to({
        //}, 1000).start()
        // // Subtitle
        var label = game.add.bitmapText(230, 0, 'mainFont', '', 50);
        label.text = "Game created by Mrs. Morgan's advanced programming class, 2018";
        game.add.tween(label).to({
            y: 365
        }, 1000, Phaser.Easing.Bounce.Out).start()

        var label1 = game.add.bitmapText(645, 0, 'mainFont', '', 40);
        label1.text = "Coltin Knobloch";
        game.add.tween(label1).to({
            y: 440
        }, 1000, Phaser.Easing.Bounce.Out).start()

        var label2 = game.add.bitmapText(645, 0, 'mainFont', '', 40);
        label2.text = "Clay McCasland";
        game.add.tween(label2).to({
            y: 496
        }, 1000, Phaser.Easing.Bounce.Out).start()

        var label3 = game.add.bitmapText(663, 0, 'mainFont', '', 40);
        label3.text = "Ally Warren";
        game.add.tween(label3).to({
            y: 552
        }, 1000, Phaser.Easing.Bounce.Out).start()

        var label4 = game.add.bitmapText(650, 0, 'mainFont', '', 40);
        label4.text = "Jacob Wilhelm";
        game.add.tween(label4).to({
            y: 608
        }, 1000, Phaser.Easing.Bounce.Out).start()
    },
    
    update: function() {
    }
};