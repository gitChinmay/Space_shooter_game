#pragma strict

var time 	: int = 60;				//game timer
static var score 	: int = 0;		//game score
static var lives 	: int = 3;		//player lives
static var shield	: int = 3;

function Start () {
	InvokeRepeating("countdown",1.0,1.0);			//function which repeatedly calls a func
}

function Update () {
	if(lives <=0){
		Application.LoadLevel("sceneLose");
		lives=3;
		PlayerPrefs.SetInt("SCORE",score);
		score=0;
		shield=3;
	}
	if(time <=0){
		Application.LoadLevel("sceneWin");
		lives=3;
		PlayerPrefs.SetInt("SCORE",score);
		score=0;
		shield=3;
	}
}

function addScore(){
	score +=1;
}

function subLives(){
	lives -=1;
}

function subShield(){
	shield -=1;
	//if(shield==0){
	//	shield=3;
	//}
}

//function resetShield(){
//	shield=3;
//}

function countdown(){
	if(--time==0){
		CancelInvoke("countdown");					//functions which cancels the repeated calling effect
	}
}



function OnGUI(){
	
	GUI.Label(Rect(10,10,100,20),"Score	: "+ score);
	GUI.Label(Rect(10,25,100,20),"Lives		: "+ lives);
	GUI.Label(Rect(10,40,100,20),"Shield	: "+ shield);
	GUI.Label(Rect(Screen.width-60,10,100,20),"Time: "+ time);
}