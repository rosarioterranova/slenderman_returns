#pragma strict

function Start () {
	Screen.showCursor = true;
}

function Update () {
	if (Input.GetKeyDown(KeyCode.X)){
         	Application.LoadLevel("menu");
         } 
}