phina.define("Helicopter", {
    superClass: "DisplayElement",
    init: function() {
      this.superInit();

        this.x = SCREEN_WIDTH + 200;
        this.y = 80;

        this.tag = "harinezumi";

        this.width = 100;
        this.height = 100;
        this.scaleX = 0.8;
        this.scaleY = 0.8;
        this.rotation = -30;
        this.sprite = Sprite('helicopter').addChildTo(this);


        var min = 10;
        var max = 30;

        var rund = Math.floor( Math.random() * (max + 1 - min) ) + min ;



        this.vx = -rund;


        this.timer = 20;


    },

    update: function(app) {
      this.x += this.vx;
      if(this.timer < 0){

        var spaceman = SpaceMan(this.x,this.y).addChildTo(ObjectGroup);
        this.timer = 20;

      }
      this.timer--;


    },



    





});
