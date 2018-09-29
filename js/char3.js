var char3 = {
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
           var logo = game.add.bitmapText(605, 275, 'mainFont', '', 100)
           logo.text = "The Miner";
           game.add.tween(logo).to({
               y: 255
           }, 500).to({
               y: 275
           }, 500).start().loop()
   
           //game.add.tween(label).delay(300).to({
           //}, 1000).start()
           // // Subtitle
           var label = game.add.bitmapText(410, 0, 'mainFont', '', 40);
           label.text = "Use the arrow keys to move and a, s, w, d to attack";
           game.add.tween(label).to({
               y: 390
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label1 = game.add.bitmapText(388, 0, 'mainFont', '', 40);
           label1.text = "You will become a zombie and skeleton as you lose health";
           game.add.tween(label1).to({
               y: 440
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label2 = game.add.bitmapText(400, 0, 'mainFont', '', 40);
           label2.text = "Be careful! Some undead enemies are immune to attacks";
           game.add.tween(label2).to({
               y: 496
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label3 = game.add.bitmapText(535, 0, 'mainFont', '', 40);
           label3.text = "Luckily, those enemies are shy...";
           game.add.tween(label3).to({
               y: 552
           }, 1000, Phaser.Easing.Bounce.Out).start()


        // touch input
        game.input.onDown.add(this.listener)

    },

    listener: function () {
        game.state.start('mainRoom')
    }

};
        
 