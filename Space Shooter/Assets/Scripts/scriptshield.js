#pragma strict

var hitCount : int = 2;

//var change: scriptplayer;
//public var shi_ : boolean;
function Start () {
	//shi_=false;
}

function Update () {
	if(!hitCount){
		Destroy(gameObject);
		//change=gameObject.GetComponent(scriptplayer);
		//change.changeValue(); 
	}
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "astroid"){
		hitCount -=1;
	}
}

