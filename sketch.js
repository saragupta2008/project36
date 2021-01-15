//Create variables here
var dog,dogImg,dogImg2,  database, foodS, foodStock,lastFed,fedTime,foodObj;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  dogImg2=loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas( 500, 500);
  database=firebase.database();
  dog=createSprite(300,300);
  dog.addImage(dogImg);
  dog.scale=0.2

  foodObj = new Food(200,20)

  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  /*addFood.createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  */
  
  
  
}


function draw() {  
background(46, 139, 87)

foodObj.display();

fedTime=database.ref('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
})
  drawSprites();
  //add styles here
  
textSize(20)
  text("Note:Press UP Arrow key to feed Drago milk!",70,90)

  fill(255,255,254); 
  textSize(15);

  if(lastFed>=12) {
  text("Last Feed : "+ lastFed%12 + "PM", 350,30);
   }
  else if(lastFed==0){
  text("Last Feed : 12 AM", 350, 30);
  }
  else{
  text("Last Feed: "+ lastFed + "AM", 350,30);

}
}

function feedDog(){
  dog.addImage(dogImg2);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    food:foodObj.getFoodStock(),
    FeedTime:hour ()
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    food:foodS
  })
}

