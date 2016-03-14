#pragma strict

function Start () {
	
}

function Update () {

	if (Input.GetKeyDown (KeyCode.Escape)) {
		GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(0);
	}

}

function ChangeScene () {

	switch (this.name) {
		case 'StartButton':
			GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(1);
			break;
		case 'CalcButton':
			GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(2);
			break;
		case 'MapButton':
			GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(4);
			break;
		case 'NotepadButton':
			GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(6);
			break;
		case 'NewsButton':
			GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(5);
			break;
		case 'BackButton':
			GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(1);
			break;
		case 'ShopButton':
			GetComponent.<UnityEngine.SceneManagement.SceneManager>().LoadScene(3);
		case 'QuitButton':
			Application.Quit();
			break;
		default:
			break;
	}
}