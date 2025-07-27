phina.define('MainScene', {
  superClass: 'DisplayScene',

  init: function() {
    this.superInit({
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    });
    this.backgroundColor = '#FFF';

    SPEED = 15;

    GameMain = this;
    this.score = 0;

    this.GameOverFLG = false;

    var BackGroup =  DisplayElement().addChildTo(this);
    
    LightGroup = DisplayElement().addChildTo(this);
    
    var Sora = Sprite("bg").addChildTo(BackGroup);
    Sora.setSize(SCREEN_WIDTH,SCREEN_HEIGHT)
    Sora.setPosition(this.gridX.center(),this.gridY.center());


    this.tabako = Sprite('tabako').addChildTo(this);
    this.tabako.setPosition(this.gridX.center(6),this.gridY.center(0));
    

    this.tabakoColision = RectangleShape().addChildTo(this);

    this.tabakoColision.x = this.tabako.x;
    this.tabakoColision.y = this.tabako.y;

    this.tabakoColision.width = 250;
    this.tabakoColision.height = 250;
    this.tabakoColision.alpha = 0;




    this.player = Player().addChildTo(this);


    ObjectGroup = DisplayElement().addChildTo(this);

    this.tabako.scaleX = 0.8;
    this.tabako.scaleY = 0.8;



    this.nextHarinezumi = 40;
    this.nextHeri = 150;
    this.nextLevel = 230;

    this.harinezumiTimer = 30;

    this.heriTimer = 350;


    this.LevelTimer = this.nextLevel ;



    this.timer = 60000;

    this.timerlabel = Label('Time:').addChildTo(this);
    this.timerlabel.setPosition(this.gridX.center(6.2),this.gridY.center(-6));
    this.timerlabel.fill = "white"; // 色を変更
    this.timerlabel.strokeWidth = 8;
    this.timerlabel.fontSize = 64; // フォントサイズを変更


    this.GameOverFLG = false;


  },

  update: function(app){

    if(!this.GameOverFLG){



  
      if(this.harinezumiTimer < 0){
        this.harinezumiTimer = this.nextHarinezumi;
        var harinezumi = HariNezumi().addChildTo(ObjectGroup);
      }
      if(this.heriTimer < 0){
        this.heriTimer = this.nextHeri;
        var heli = Helicopter().addChildTo(ObjectGroup);
      }
  
  
      if(this.LevelTimer < 0){
  
        this.nextHarinezumi-= 5;
        this.nextHeri -=  25;
  
        if(this.nextHarinezumi < 10){
          this.nextHarinezumi = 10;
        }
        if(this.nextHeri < 100){
          this.nextHeri = 100;
        }
        this.LevelTimer = this.nextLevel ;
  
        console.log("LevelUp,"+ this.nextHarinezumi);
      }
  
      this.harinezumiTimer--;
      this.heriTimer--;
      this.LevelTimer--;

      this.timer -= app.deltaTime;
      this.timerlabel.text = Math.floor(this.timer / 1000);  
      if(this.timer < 0){
        this.timer = 0;
        this.GameOver();
        this.GameOverFLG = true;        
      }
    }

  },

  siokuri: function(){
    var siokuri = Siokuri().addChildTo(ObjectGroup);
    var siokuri2 = Siokuri().addChildTo(ObjectGroup);
    var siokuri3 = Siokuri().addChildTo(ObjectGroup);

  },

  GameOver: function(){

    var self = this;
    this.player.tweener
    .clear()
    .by({y:230}, 500,"easeOutBack")
    .call(function(){
      self.player.remove();
    })


    this.timerlabel.text = "";  

    var pan = Sprite("bread").addChildTo(this);
    pan.setPosition(this.gridX.center(),this.gridY.center(-20));
    pan.scaleX = 1.3;
    pan.scaleY = 1.3;

    pan.tweener
    .clear()
    .to({y:SCREEN_HEIGHT/2 + 33}, 300)




    var label = Label('そこまでだァァ～!!').addChildTo(this);
    label.setPosition(this.gridX.center(),this.gridY.center());
    label.fill = "black"; // 色を変更
    label.strokeWidth = 8;
    label.fontSize = 80; // フォントサイズを変更
    label.scaleX = 0;
    label.scaleY = 0;

    label.tweener
    .clear()
    .by({scaleX:1,scaleY:1}, 2000,"easeOutBack")
    .to({alpha:0},300)
    .call(function(){
      var result = Result().addChildTo(self);

    })

  },






});
