#pragma strict

function Start () {

}

function Update () {

}

function OnGUI(){
	
	GUI.BeginGroup(Rect(Screen.width/2-100,Screen.height/2-100,200,150));		//create a group
	
	GUI.Box(Rect(0,0,200,150),"You Win!");									//creates a box
	
	GUI.Label(Rect(10,30,180,30),"Score:	"+PlayerPrefs.GetInt("SCORE"));
	
	if(GUI.Button(Rect(50,70,100,30),"Play Again")){
		Application.LoadLevel("scene1");
	}
	
	if(GUI.Button(Rect(50,110,100,30),"Main Menu")){
		Application.LoadLevel("sceneMainMenu");
	}
		
	GUI.EndGroup();															//close a group
}