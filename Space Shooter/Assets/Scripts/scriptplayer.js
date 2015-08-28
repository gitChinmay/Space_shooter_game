#pragma strict

//player movement script

var playerSpeed: float=10;

//player restriction variables
var xMin 	:float = -6.0;				
var xMax	:float = 6.0;
var yMin	:float = -4.5;
var yMax	:float = 4.5;

var bullets 	: Transform;
var bulletport 	: Transform;
 
var playerLives : int = 3;

var shield : Transform;
var shieldPress : KeyCode;
var shieldCount : int = 3;
var shieldActive : int = 0;

var sceneManager : GameObject;

//private var ss :scriptshield;

function Start () {
	Time.timeScale=1.0;
}

function Update () {
	//player movements
	var horizontalTranslation : float = Input.GetAxis("Horizontal") * playerSpeed;
	var verticalTranslation : float = Input.GetAxis("Vertical")	* playerSpeed;
	
	//actual movement
	transform.Translate(horizontalTranslation * Time.deltaTime,verticalTranslation * Time.deltaTime,0);
	//player movement restriction
	transform.position.x=Mathf.Clamp(transform.position.x,xMin,xMax);	//clamps between xmin and xmax
	transform.position.y=Mathf.Clamp(transform.position.y,yMin,yMax);	//clamps between ymin and ymax
	
	//creating bullets
	if(Input.GetKeyDown("space")){
		Instantiate(bullets,bulletport.position,bulletport.rotation);	// creates new instances od prefabs
		audio.Play();
	}
	
	if(Input.GetKeyDown(shieldPress)){
		if(shieldCount>0){
		//	shieldActive = 1;
			//ss.shi_ = true;
			shieldCount -= 1;
			sceneManager.transform.GetComponent(scriptscenemanager).subShield();
			var par = Instantiate(shield,transform.position,transform.rotation);
			par.transform.parent = gameObject.transform;
			
		}
	//	if(shieldCount<0){
			//shieldActive = true;
	//		sceneManager.transform.GetComponent(scriptscenemanager).resetShield();
	//	}
	//	if(shieldCount>0){
			//shieldActive = false;
		//}
	}
	
}

function OnTriggerEnter(other:Collider){
	if(other.gameObject.tag=="astroid"){
		//if(!shieldActive){
		transform.position.x=-0.004689932;
		transform.position.y=-3.241815;
		//}
	}
	
}

//function changeValue(){
//	shieldActive=0;
//}