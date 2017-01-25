#pragma strict
var PauseGUI : GUIText;
var PagineGUI : GUIText;
var paused : boolean = false;
var luce : GameObject;
var luceAttiva : boolean;

function Start () {
	PauseGUI=GameObject.Find("pausaGUI").guiText;
	PagineGUI=GameObject.Find("GUI pagine").guiText;
	PauseGUI.enabled = false;
	PagineGUI.enabled = false;
	Screen.showCursor = false;
	luce = GameObject.Find("luce");
	luce.SetActive(false);
	luceAttiva = false;
}

function Update () {
 		if (Input.GetKeyDown(KeyCode.Escape) && paused == false)
        {
                paused = true;
                Time.timeScale = 0;
                PauseGUI.enabled = true;
                PagineGUI.enabled = true;
                Screen.showCursor = true;
        }
        else if (Input.GetKeyDown(KeyCode.Escape) && paused == true)
        {
                paused = false;
                Time.timeScale = 1;
                PauseGUI.enabled = false;
                PagineGUI.enabled = false;
                Screen.showCursor = false;
        }
        
		else if (Input.GetKeyDown(KeyCode.X)){
			paused = false;
            Time.timeScale = 1;
            PauseGUI.enabled = false;
            PagineGUI.enabled = false;
            Screen.showCursor = true;
         	Application.LoadLevel("menu");
     	} 
    
    
    //Trucco luce
    if (Input.GetKeyDown(KeyCode.L) && luceAttiva == false){
    	luce.SetActive(true);
    	luceAttiva = true;
    }

    else if (Input.GetKeyDown(KeyCode.L) && luceAttiva == true){
    	luce.SetActive(false);
    	luceAttiva = false;
    }
}