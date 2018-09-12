var room4 = {
    preload: function() {
        console.log('In Room 4');
        game.load.image('room4','assets/room4.jpg');
        game.load.spritesheet('trinkets','assets/trinkets.png', 32, 32);
        game.load.spritesheet('smoke','assets/smoke.png', 128, 128);
    },
    
    create: function() {
        this.bg = game.add.sprite(0,0,'room4');
        this.bg.scale.setTo(.47,.37);

        this.crystal_ball = game.add.sprite(420, 125, 'trinkets');
        this.crystal_ball.animations.add('glow', [88,89,76,77,78,79],7,true);
        this.crystal_ball.play('glow');

        this.smoke = game.add.sprite(655, 335, 'smoke');
        this.smoke.scale.setTo(2);
        this.smoke.animations.add('explode', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35],8,false);
        this.smoke.animations.play('explode');
        this.smoke.animations.currentAnim.onComplete.add(this.hideSmoke, this);
    },
    
    update: function() {
    },

    hideSmoke: function () {
        this.smoke.alpha = 0;
    },

           
};