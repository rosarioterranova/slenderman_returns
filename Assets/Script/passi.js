#pragma strict

function Start () {

}

function Update () {
	if (Input.GetButtonDown("Vertical"))
		audio.Play();
	else if (Input.GetButtonUp("Vertical"))
		audio.Stop();
}