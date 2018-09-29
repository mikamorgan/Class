var char4 = {
    preload: function () {
        game.load.image('mainRoom','assets/mainRoom.jpg');

        game.load.bitmapFont('mainFont', 'assets/ganonwhite/font.png', 'assets/ganonwhite/font.xml');

    },

    create: function () {
        console.log("mainMenu.js");
        
        //Create background
        this.bg = game.add.sprite(0,0,'mainRoom');
        this.bg.scale.setTo(2.75,2.7);


           // Title
           var logo = game.add.bitmapText(520, 285, 'mainFont', '', 120)
           logo.text = "The Phoenix";
           game.add.tween(logo).to({
               y: 265
           }, 500).to({
               y: 285
           }, 500).start().loop()
   
           //game.add.tween(label).delay(300).to({
           //}, 1000).start()
           // // Subtitle
           var label = game.add.bitmapText(480, 0, 'mainFont', '', 40);
           label.text = "Use the arrow keys to fly and f to attack";
           game.add.tween(label).to({
               y: 420
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label2 = game.add.bitmapText(400, 0, 'mainFont', '', 40);
           label2.text = "Be careful! Some undead enemies are immune to attacks";
           game.add.tween(label2).to({
               y: 476
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label3 = game.add.bitmapText(535, 0, 'mainFont', '', 40);
           label3.text = "Luckily, those enemies are shy...";
           game.add.tween(label3).to({
               y: 532
           }, 1000, Phaser.Easing.Bounce.Out).start()


        // touch input
        game.input.onDown.add(this.listener)

    },

    listener: function () {
        game.state.start('mainRoom')
    }

};
        
 