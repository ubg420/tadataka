phina.define("HariNezumi", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit();

        this.x = 0;
        this.y = 80;

        this.tag = "harinezumi";

        this.width = 100;
        this.height = 100;

        this.sprite = Sprite('harinezumi').addChildTo(this);
        this.sprite.scaleX = 0.4;
        this.sprite.scaleY = 0.4;



        this.Colision = RectangleShape().addChildTo(this);
        this.Colision.width = this.width ;
        this.Colision.height = this.height;
        this.Colision.alpha = 0;


        var min = 10;
        var max = 30;

        var rund = Math.floor( Math.random() * (max + 1 - min) ) + min ;


        this.vx = rund;
        this.vy = 10;
        this.g = 0.9;


    },

    update: function(app) {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.g;

      this.sprite.rotation += (this.vx / 2);


      if(this.y > SCREEN_HEIGHT + this.height){
        this.remove();
      }


      if(this.hitTestElement(GameMain.tabakoColision)){
        GameMain.siokuri();
        this.remove();
      }
      


    },

    Hit: function() {
      this.vy = -21;

    },

    





});
