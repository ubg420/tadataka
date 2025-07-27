phina.define("Siokuri", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit();

        this.x = GameMain.tabako.x;
        this.y = GameMain.tabako.y;

        this.tag = "siokuri";

        this.width = 100;
        this.height = 100;

        this.sprite = Sprite('siokuri').addChildTo(this);
        this.sprite.scaleX = 0.4;
        this.sprite.scaleY = 0.4;



        this.Colision = RectangleShape().addChildTo(this);
        this.Colision.width = this.width ;
        this.Colision.height = this.height;
        this.Colision.alpha = 0;


        var min = 10;
        var max = 30;
        var rund = Math.floor( Math.random() * (max + 1 - min) ) + min ;
        this.vx = -rund;

        min = 10;
        max = 30;
        rund = Math.floor( Math.random() * (max + 1 - min) ) + min ;


        this.vy = -rund;
        this.g = 1.5;


    },

    update: function(app) {
      this.x += this.vx;
      this.y += this.vy;
      this.vy += this.g;

      this.sprite.rotation += (this.vx / 2);


      if(this.y > SCREEN_HEIGHT + this.height){
        this.remove();
      }



    },

    Hit: function() {
      this.vx = 0;
      this.vy = 0;
      this.g = 0;

      this.tag = "youzumi";
      var self = this;

      this.tweener
      .clear()
      .by({y:-100,alpha:-1}, 400,"easeOutSine")
      .call(function(){
        self.remove();
      })

    },


});
