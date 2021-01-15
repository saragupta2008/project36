class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
    }

    getFoodStock(){
           foodStock=database.ref('food');
        foodStock.on("value",function(data){
            foodS= data.val()
        });
    }

    updateFoodStock(food){
        database.ref('food').update({
           foodS:food
        })
    }

    deductFood(x){
        if(x<=0){
            x=0
          }
          else{
            x=x-1
          }
         
          
    }

    display(){

        var x=80, y=100;
        
        imageMode(CENTER);
        image (this.image, 720,220,70,70);
        
        if(this.foodStock!=0){
        for (var i=0;i<this.foodStock; i++){
        if(i%10==0){
        x=80;
        y=y+50;
        
        }
        
        image(this.image,x,y,50,50); 
        x=x+30;
   }
  }
 }
}