#pragma strict
//

var astroidSpeed : float;
var topAstroidLimit : float = 7.0;
var leftAstroidLimit : float = -6.5;
var rightAstroidLimit : float = 6.5; 

var explosion : Transform;

var sceneManager : GameObject;

var explosionSound : AudioClip;
var hurtSound : AudioClip;

var x : int=1;
var y : int=2;

function Start () {
	astroidSpeed=Random.Range(5.0,13.0);
	Time.timeScale=1.0;
}

function Update () {
	
	transform.Translate(0,-astroidSpeed * Time.deltaTime,0);	//can also use (vector3.down * astroidSpeed * time.deltatime)
	
	if(transform.position.y <= -6.5)
	{
		resetAstroid();
	}
	
	y=Time.time-1;
	
	if(x==y)
	{
		Time.timeScale=1.0;
	}
}

function OnTriggerEnter(other : Collider){
	
	if(other.gameObject.tag=="Player"){
		x=Time.time;
		Time.timeScale=0.2;
		if(other.GetComponent(scriptplayer).playerLives >0){
			other.GetComponent(scriptplayer).playerLives -=1;				//subtracting player life
			sceneManager.transform.GetComponent(scriptscenemanager).subLives(); 
			}			
		
		
		
		Instantiate(explosion,transform.position,transform.rotation);
		audio.clip=explosionSound;
		audio.Play();
		resetAstroid();
	}
	
	if(other.gameObject.tag=="shield"){
		Instantiate(explosion,transform.position,transform.rotation);
		audio.clip=hurtSound;
		audio.Play();
		
		resetAstroid();
	}
}

function resetAstroid(){
	astroidSpeed=Random.Range(5.0,13.0);
	transform.position.y = topAstroidLimit;
	transform.position.x = Random.Range(leftAstroidLimit,rightAstroidLimit);
}