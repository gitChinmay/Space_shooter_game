#pragma strict

//var backgroundTexture : Texture;

function Start () {

}

function Update () {

}

function OnGUI(){
	
	//GUI.Box(Rect(0,0,Screen.width,Screen.height),backgroundTexture);
	
	GUI.BeginGroup(Rect(Screen.width/2-75,Screen.height/2-75,150,150));		//create a group
	
	GUI.Box(Rect(0,0,150,150),"Main Menu");									//creates a box
	
	if(GUI.Button(Rect(25,35,100,30),"Start Game")){							//creates a button
		Application.LoadLevel("sceneLoad");									//loads a scene
	}
	if(GUI.Button(Rect(25,75,100,30),"Credits")){
		Application.LoadLevel("sceneCredits");
	}
	if(GUI.Button(Rect(25,115,100,30),"Exit")){
		Application.Quit();												//exit the game
	}
	GUI.EndGroup();															//close a group
}