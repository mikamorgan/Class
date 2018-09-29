/**
 * mainMenu: splash screen to start your game
 */
var char1 = {
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
           var logo = game.add.bitmapText(500, 250, 'mainFont', '', 120)
           logo.text = "The Professor";
           game.add.tween(logo).to({
               y: 230
           }, 500).to({
               y: 250
           }, 500).start().loop()
   
           //game.add.tween(label).delay(300).to({
           //}, 1000).start()
           // // Subtitle
           var label = game.add.bitmapText(270, 0, 'mainFont', '', 50);
           label.text = "This wise man seeks the key to knowledge, not to attack.";
           game.add.tween(label).to({
               y: 365
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label1 = game.add.bitmapText(455, 0, 'mainFont', '', 40);
           label1.text = "He knows the enemies are scared of the light, ";
           game.add.tween(label1).to({
               y: 440
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label2 = game.add.bitmapText(405, 0, 'mainFont', '', 40);
           label2.text = "and will not approach him with his handy flashlight on.";
           game.add.tween(label2).to({
               y: 496
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label3 = game.add.bitmapText(535, 0, 'mainFont', '', 40);
           label3.text = "So find the batteries quickly!";
           game.add.tween(label3).to({
               y: 552
           }, 1000, Phaser.Easing.Bounce.Out).start()
   
           var label4 = game.add.bitmapText(435, 0, 'mainFont', '', 40);
           label4.text = " Because the night is dark and full of terrors...";
           game.add.tween(label4).to({
               y: 608
           }, 1000, Phaser.Easing.Bounce.Out).start()

        // touch input
        game.input.onDown.add(this.listener)

    },

    listener: function () {
        game.state.start('mainRoom')
    }

};