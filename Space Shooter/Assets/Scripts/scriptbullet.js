#pragma strict

//

var bulletSpeed : float = 15.0;
var topLimit : float = 8.0;

var explosion : Transform;

var sceneManager : GameObject;

var sound : AudioClip;

function Start () {

}

function Update (){
	
		transform.Translate(0,bulletSpeed * Time.deltaTime,0);
		
		if(transform.position.y >= topLimit)
			Destroy(gameObject);								//gameobject destruction	
}

function OnTriggerEnter(other : Collider){
		
		if(other.gameObject.tag=="astroid"){
			other.transform.position.y = 7.0;
			other.transform.position.x = Random.Range(-6.5,6.5);
			
			Instantiate(explosion,transform.position,transform.rotation);
			AudioSource.PlayClipAtPoint(sound,transform.position);
			
			sceneManager.transform.GetComponent(scriptscenemanager).addScore();
			
			Destroy(gameObject);
		}
}