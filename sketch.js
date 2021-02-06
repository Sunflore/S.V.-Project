var bA, bB,bC,bD, next;
var bAI, bBI, bCI,bDI;
var bg2, bg3, bg4;
var bg2I, bg3I, bg4I;
var fI, nextI;
var gameState="Q1";

function preload()
{
   bAI=loadImage("Images/bA.jpg");
   bBI=loadImage("Images/bB.jpg");
   bCI=loadImage("Images/bC.jpg");
   bDI=loadImage("Images/bD.jpg");

   bg2I=loadImage("Images/backgroundB.jpg");
   bg3I=loadImage("Images/GameOver.png");
   bg4I=loadImage("Images/Next.jpg");

   fI=loadImage("Images/END.jpg");
   nextI=loadImage("Images/Next.jpg");
}

function setup()
{
   var canvas=createCanvas(displayWidth - 30 ,displayHeight - 95);

    next=createSprite(50,50,200,100);
    next.addImage(nextI);
    next.scale-0.22;

    bA=createSprite(330,590,100,50);
    bA.addImage(bAI);
    bA.scale=0.22;
    bB=createSprite(330,420,100,50);
    bB.addImage(bBI);
    bB.scale=0.22;
    bC=createSprite(1015,590,100,50);
    bC.addImage(bCI);
    bC.scale=0.22;
    bD=createSprite(1015,420,100,50)
    bD.addImage(bDI);
    bD.scale=0.22;
}

function draw()
{
    background(bg2);

    drawSprites();

    if(gameState==="Q1")
    {
        //next.visible=false;
        
        if(mousePressedOver(bA)||mousePressedOver(bB)||mousePressedOver(bD))
        {
            background(bg3I);
        }

        /*if(mousePressedOver(bC))
        {
            next.visible=true;
                
        }

        if(mousePressedOver(next))
        {
            gameState="Q2";
        }*/

        
        //Q.
        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        let a = "What are Mars' two moons called?";
        text(a,displayWidth/2 - 350,displayHeight/3-100);

        //bA
        textSize(20);
        let b = "Callisto and Titan";
        text(b,253,600);

         //bB
        let c = "Europa and Io";
        text(c,253,430);

        //bC
        let d= "Phobos and Deimos";
        text(d,930,590);

        //bD
        let e= "Venus and Mercury";
        text(e,930,430);
    }
    
    if(gameState==="Q2")
    {
        //next.visible=false;

        if(mousePressedOver(bA)||mousePressedOver(bC)||mousePressedOver(bD))
        {
            background(bg3I);
        }

        /*if(mousePressedOver(bB))
        {
            next.visible=true;
                
        }

       if(mousePressedOver(next))
       {
           gameState="Q3";
       }*/


        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("How many Newton's Law of Motion are there?",displayWidth/2-450,displayHeight/3-100);
        
        //bA
        text("1",315,605);

        //bB
        text("3",315,430);

        //bC
        text("4",1000,600);

        //bD
        text("2",1000,430);
    }

    if(gameState==="Q3")
    {
        //n.visible=false;

        if(mousePressedOver(bA)||mousePressedOver(bC)||mousePressedOver(bB))
        {
            background(bg3I);
        }

        /*if(mousePressedOver(bD))
        {
            next.visible=true;
                
        }

        if(mousePressedOver(next))
        {
            gameState="Q4";
        }*/


        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("What is H20?",displayWidth/2-175,displayHeight/3-100);

         //bA
         text("Bismuth",250,605);

         //bB
         text("Oxygen",250,430);
 
         //bC
         text("Colbalt",940,600);
 
         //bD
         text("Water",945,430);
    }

    if(gameState==="Q4")
    {
        //next.visible=false;

        if(mousePressedOver(bB)||mousePressedOver(bC)||mousePressedOver(bD))
        {
            background(bg3I);
        }

        /*if(mousePressedOver(bA))
        {
            next.visible=true;
                
        }
        
        if(mousePressedOver(next))
        {
            gameState="END"
        }*/


        textSize(50);
        textFont("Times New Roman");
        fill("black")
        stroke(5);
        text("What is the only liquid metal in room temperture?",displayWidth/2-450,displayHeight/3-100);
        
        //bA
        text("Mercury",250,605);

        //bB
        text("Iron",290,430);

        //bC
        text("Nickle",945,600);

        //bD
        text("Gold",965,430);
    }

    if(gameState==="END")
    {
        background(fI);
    }
}