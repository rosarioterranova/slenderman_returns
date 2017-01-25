#pragma strict

function Start () {
	Screen.showCursor = true;
}

function Update () {
         if (Input.GetKeyDown(KeyCode.R)){
         	Application.LoadLevel("livello 1");
         } 
         
         else if (Input.GetKeyDown(KeyCode.X)){
         	Application.LoadLevel("menu");
         } 
}