phina.define("Result", {
  superClass: "DisplayElement",
  init: function() {
    this.superInit({
      width: 0,
      height: 0,
    });

    this.x = 0;
    this.y = 0;

/*
    GameMain.Score.tweener
    .clear()
    .to({x:GameMain.gridX.center(),y:300,scaleX:3,scaleY:3}, 1300,"easeOutQuart");
*/

    var tweet = Sprite('Tweet').addChildTo(this);

    var url = "http://cachacacha.com/GAME/tadataka/";
    var score = 0;

    var Tweettxt = encodeURIComponent('☆ババアから' + GameMain.score  +  '万円せしめた☆ だが地獄でいくら稼いでもただ虚しさが募るばかりだ。ありがとう食パンこんな俺達を止めてくれて…　' + url + "  #頭突け忠敬 #かちゃコム");

    tweet.x = GameMain.gridX.center(2);
    tweet.y = GameMain.gridY.center(2);

    tweet.scaleX = 1.3;
    tweet.scaleY = 0;
    tweet.tweener
    .clear()
    .wait(500)
    .to({scaleY:1.3}, 500,"easeOutQuart");
    // タッチ判定を有効に
    tweet.setInteractive(true);
    // タッチ終了時に発火
    tweet.onclick = function() {
      // 自身を削除
      window.open("http://twitter.com/intent/tweet?text=" + Tweettxt);
    };

    var reload = Sprite('Retry').addChildTo(this);
    reload.x = GameMain.gridX.center(-2);
    reload.y = GameMain.gridY.center(2);

    reload.scaleX = 0;
    reload.scaleY = 0;

    reload.tweener
    .clear()
    .to({scaleX:1.3,scaleY:1.3}, 800,"easeOutQuart");


    // タッチ判定を有効に
    reload.setInteractive(true);
    // タッチ終了時に発火
    reload.onclick = function() {
      ObjectGroup.children.clear();

      GameMain.exit("Main");
    };





    this.Scoretext = Label(GameMain.score + "万円").addChildTo(this);
    this.Scoretext.fill = 'red'; // 色を変更
    this.Scoretext.fontSize = 124; // フォントサイズを変更
    this.Scoretext.scaleY = 0;
    this.Scoretext.x = GameMain.gridX.center();
    this.Scoretext.y = GameMain.gridY.center(-3);
    
    this.Scoretext.tweener.clear()
    .wait(300)
    .to({scaleY:1}, 500,"easeOutQuart");
    
    this.Scoretext = Label("せしめたカネ").addChildTo(this);
    this.Scoretext.fill = 'red'; // 色を変更
    this.Scoretext.fontSize = 54; // フォントサイズを変更
    this.Scoretext.scaleY = 0;
    this.Scoretext.x = GameMain.gridX.center();
    this.Scoretext.y = GameMain.gridY.center(-6);
    
    this.Scoretext.tweener.clear()
    .wait(300)
    .to({scaleY:1}, 500,"easeOutQuart");




    var back = Sprite('Logo').addChildTo(this);
    back.setPosition(GameMain.gridX.center(),GameMain.gridY.center(6));
    back.scaleY = 0;

    back.tweener
    .clear()
    .wait(800)
    .to({scaleX:1,scaleY:1}, 1000,"easeOutQuart");

    // タッチ判定を有効に
    back.setInteractive(true);
    // タッチ終了時に発火
    back.onclick = function() {
      window.open("http://cachacacha.com");
    };


    var utyo_icon = DisplayElement().addChildTo(this);
    utyo_icon.width = 230;
    utyo_icon.height = 80;
    utyo_icon.setPosition(GameMain.gridX.center(5.8),GameMain.gridY.center(7.2));
    utyo_icon.sprite = Sprite('utyo').addChildTo(utyo_icon);
    utyo_icon.sprite.width = 70;
    utyo_icon.sprite.height = 70;
    utyo_icon.sprite.x = -65;
    utyo_icon.name = Label('@utyo').addChildTo(utyo_icon);
    utyo_icon.name.fill = '#888888'; // 色を変更
    utyo_icon.name.fontSize = 34; // フォントサイズを変更
    utyo_icon.name.x = 34; // フォントサイズを変更
    utyo_icon.name = Label('@utyo').addChildTo(utyo_icon);
    utyo_icon.name.fill = '#1e90ff'; // 色を変更
    utyo_icon.name.fontSize = 34; // フォントサイズを変更
    utyo_icon.name.x = 34; // フォントサイズを変更
    
    // タッチ判定を有効に
    utyo_icon.setInteractive(true);
    // タッチ終了時に発火
    utyo_icon.onclick = function() {
        window.open("http://twitter.com/utyo");
    };

    utyo_icon.scaleY = 0; // フォントサイズを変更

    utyo_icon.tweener.clear()
    .wait(1000)
    .to({scaleY:1}, 500,"easeOutQuart");


/*
    var cachacacha = Sprite('cachacacha').addChildTo(this);
    cachacacha.x = GameMain.gridX.center(15);
    cachacacha.y = GameMain.gridY.center(4);
    cachacacha.scaleX = 1.5;
    cachacacha.scaleY = 1.5;

    cachacacha.tweener
    .clear()
    .wait(1700)
    .to({x:GameMain.gridX.center()}, 1300,"easeOutQuart");
    // タッチ判定を有効に
    cachacacha.setInteractive(true);
    // タッチ終了時に発火
    cachacacha.onclick = function() {
      // 自身を削除
      window.open("http://www.cachacacha.com/");
    };

*/




  },

  update: function(app) {

  },


});
