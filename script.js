var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () {

    this.load.image('player', './assets/ship.png');
    this.load.image('star', './assets/star2.png');
    this.load.image('baddie', './assets/space-baddie.png');
    this.load.atlas('lazer', './assets/laser.png', './assets/laser.json');

}

var stars;
var baddies;
var lazers;
var player;
var cursors;
var fireButton;
var bulletTime = 0;
var frameTime = 0;
var frames;
var prevCamX = 0;

function create(){}

function update(){}