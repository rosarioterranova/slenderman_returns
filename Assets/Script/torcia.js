#pragma strict
var lucetorcia : GameObject;
var luceAccesa : boolean;

function Start () {
	lucetorcia = GameObject.Find("lucetorcia");
	luceAccesa = true;
}

function Update () {
	if (Input.GetMouseButtonUp(1) && luceAccesa == true){
    	audio.Play();
    	luceAccesa = false;
    	lucetorcia.SetActive(false);
    }
    else if (Input.GetMouseButtonUp(1) && luceAccesa == false){
    	audio.Play();
    	luceAccesa = true;
    	lucetorcia.SetActive(true);
    }
}