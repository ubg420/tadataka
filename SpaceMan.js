phina.define("SpaceMan", {
    superClass: "DisplayElement",
    init: function(x,y) {
      this.superInit();

        this.x = x - 30;
        this.y = y + 80;

        this.tag = "spaceman";

        this.width = 230;
        this.height = 200;
        this.scaleX = 0.4;
        this.scaleY = 0.4;
        this.sprite = Sprite('spaceman').addChildTo(this);


        this.Colision = RectangleShape().addChildTo(this);
        this.Colision.width = this.width;
        this.Colision.height = this.height;
        this.Colision.alpha = 0;
        this.Colision.tag = "obj";




        this.vx = 0;
        this.vy = 25;


    },

    update: function(app) {
      this.x += this.vx;
      this.y += this.vy;

      if(this.y > SCREEN_HEIGHT){

        this.remove();
      }


    },



    





});
