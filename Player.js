phina.define("Player", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit();

        this.x = 230;
        this.y = 530;


        this.sprite = Sprite('tadataka').addChildTo(this);
        this.sprite.scaleX = 0.7;
        this.sprite.scaleY = 0.7;
        this.sprite.y = 60;
        this.sprite.x = -20;


        this.width = 120;
        this.height = 60;


        this.Colision = RectangleShape().addChildTo(this);
        this.Colision.width = this.width;
        this.Colision.height = this.height;
        this.Colision.alpha = 0;
        this.Colision.tag = "obj";

        this.state = "tadataka";

        this.dansitimer = 30;

    },

    update: function(app) {

      switch (this.state) {
        case "tadataka":
            this.x = app.pointer.x;
            this.HitCheck();
            
          break;

        case "dansi":
          if(this.dansitimer < 0){
            this.cure();
          }else{
            this.dansitimer--;
            this.HitCheck();

          }
          
        break;
        


        default:
          break;
      }



    },


  HitCheck: function(){
    //当たり判定
    var og = ObjectGroup.children;
    var self = this;
    og.each(function(Object) {
        if(self.hitTestElement(Object)){

          switch (Object.tag) {
            case "harinezumi":
              Object.Hit();

              break;


            case "siokuri":
              Object.Hit();
              self.addScore();

              break;


            case "spaceman":
              Object.remove();
              self.miss();

              break;


          }

        }

    });

  },



  addScore: function(){
    GameMain.score+= 100;

  },

  miss:function(){
    this.sprite.remove();
    this.sprite = Sprite('dansi').addChildTo(this);
    this.sprite.scaleX = 0.7;
    this.sprite.scaleY = 0.7;
    this.sprite.y = 60;
    this.sprite.x = -20;

    this.dansitimer = 30;
    this.state = "dansi";
  },

  cure:function(){
    this.state = "tadataka";

    this.sprite.remove();
    this.sprite = Sprite('tadataka').addChildTo(this);
    this.sprite.scaleX = 0.7;
    this.sprite.scaleY = 0.7;
    this.sprite.y = 60;
    this.sprite.x = -20;
  },


});
