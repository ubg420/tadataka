phina.globalize();

var SCREEN_WIDTH    = 1280;
var SCREEN_HEIGHT   = 720;
var Group;
var ObjectGroup;
var LightGroup;
var BlockGroup;
var HouseGroup;
var House2Group;
var DenchuGroup;
var BillGroup;

var OjisanGroup;


var ColisionGroup;

var GameMain;

var LIGHTMAX = 155;

var SPEED;

var ASSETS = {
  image: {


    'bg':'img/bg_hell_jigoku.jpg',
    'tabako':'img/building_tabako.png',
    'tadataka':'img/ino_tadataka.png',
    'harinezumi':'img/animal_harinezumi.png',
    'siokuri':'img/shiokuri_fuutou.png',
    'helicopter':'img/war_helicopter_woman.png',
    'helicopter':'img/war_helicopter_woman.png',
    'spaceman':'img/sushi_tamago.png',
    'dansi':'img/seifuku_bad3_blazer.png',
    'bread':'img/bread_syokupan.png',

    'Logo':'img/logo.png',
    'Retry':'img/Retry.png',
    'Tweet':'img/Tweet.png',

    'utyo':'img/utyo.png',
    

  },
  spritesheet: {

  },

  sound:{

  },




};

phina.main(function() {
  var app = GameApp({
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    assets: ASSETS,
  });
  app.replaceScene(SceneSequence());
  app.run();
});

// SceneSequenceクラス
phina.define("SceneSequence", {
  superClass: "phina.game.ManagerScene",

  // 初期化
  init: function() {
    this.superInit({
      scenes: [

        {
          label: "Loading", // ラベル。参照用
          className: "LoadingScene", // シーンAのクラス名
          nextLabel:"Title",
        },

        {
          label: "Title", // ラベル。参照用
          className: "TitleScene", // シーンAのクラス名
          nextLabel:"Main",
        },

        {
          label: "Main",
          className: "MainScene",
          nextLabel:"End",

        },

        {
          label: "End",
          className: "EndScene",
        },

        {
          label: "TrueEnd",
          className: "TrueEndScene",
        }

      ]
    });
  }
});

phina.define("LoadingScene", {
  superClass: "phina.game.LoadingScene",

  init: function(params) {
    this.superInit({
      assets: ASSETS,
      exitType: "auto",

    });

  }

});

phina.define('ResultScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit();
  },
});
