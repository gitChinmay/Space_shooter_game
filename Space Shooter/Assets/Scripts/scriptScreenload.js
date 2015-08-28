#pragma strict

var waitTime : float = 4.0;

function Start () {

}

function Update () {
	if(Input.GetKeyDown("space")){
		Application.LoadLevel("scene1");
	}
	else
		waitingTime();
}

function OnGUI(){
	
	//GUI.Box(Rect(0,0,Screen.width,Screen.height),backgroundTexture);
	
	GUI.BeginGroup(Rect(Screen.width/2-100,Screen.height/2-100,200,200));		//create a group
	
	GUI.Box(Rect(0,0,200,200),"Instructions");									//creates a box
	
	GUI.Label(Rect(10,30,180,30),"        Arrow keys to move");
	GUI.Label(Rect(10,70,180,30),"        Spacebar to shoot");
	GUI.Label(Rect(10,110,180,30),"        Right Control for Shield");
	
	GUI.EndGroup();															//close a group
}

function waitingTime(){

yield WaitForSeconds(waitTime);
Application.LoadLevel("scene1");
}