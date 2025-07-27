phina.define('TitleScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });

    var Sora = Sprite("bg").addChildTo(this);
    Sora.setSize(SCREEN_WIDTH,SCREEN_HEIGHT)
    Sora.setPosition(this.gridX.center(),this.gridY.center());


    this.sprite = Sprite('tadataka').addChildTo(this);
    this.sprite.scaleX = 0.7;
    this.sprite.scaleY = 0.7;
    this.sprite.y = 590;
    this.sprite.x = SCREEN_WIDTH/2;


    this.tabako = Sprite('tabako').addChildTo(this);
    this.tabako.setPosition(this.gridX.center(6),this.gridY.center(0));
    this.tabako.scaleX = 0.8;
    this.tabako.scaleY = 0.8;
    var startlabel;
    startlabel = Label('スタート').addChildTo(this);
    startlabel.setPosition(this.gridX.center(),this.gridY.center(1));
    startlabel.strokeWidth = 8;
    startlabel.fontSize = 58; // フォントサイズを変更
    startlabel.fill= "white"; // フォントサイズを変更
    startlabel.fontFamily = "def"; // フォントサイズを変更    
    startlabel.tweener
    .clear()
    .to({alpha:1,scaleX:1,scaleY:1}, 700,"easeOutSine")
    .wait(400)
    .to({alpha:0,scaleX:0.8,scaleY:0.8}, 700,"easeInSine")
    .setLoop(true);




    var label = Label('頭突け！忠敬!').addChildTo(this);
    label.setPosition(this.gridX.center(),this.gridY.center(-4));
    label.fill = "white"; // 色を変更
    label.strokeWidth = 8;
    label.fontSize = 160; // フォントサイズを変更


  },

  update: function(app){

  },

  onpointend: function(){

    if(!this.StartFLG){
      

      this.exit();
    }
  },


});

