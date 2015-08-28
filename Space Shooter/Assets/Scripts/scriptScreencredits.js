#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){

//GUI.Box(Rect(0,0,Screen.width,Screen.height),backgroundTexture);
	
	GUI.BeginGroup(Rect(Screen.width/2-140,Screen.height/2-140,280,200));		//create a group
	
	GUI.Box(Rect(0,0,280,200),"Credits");									//creates a box
	
	GUI.Label(Rect(10,30,260,30),"Artist							Chinmay Gangurde");
	GUI.Label(Rect(10,70,260,30),"Designer					Chinmay Gangurde");
	GUI.Label(Rect(10,110,260,30),"Programmer				Chinmay Gangurde");
	
	if(GUI.Button(Rect(90,150,100,30),"Back")){
		Application.LoadLevel("sceneMainMenu");
	}
	
	
	GUI.EndGroup();	
}