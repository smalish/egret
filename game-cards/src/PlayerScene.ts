class PlayerScene extends eui.Component implements  eui.UIComponent {

	public btn_back: eui.Button
	public btn_goods : eui.Button
	public btn_strong: eui.Button
	

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

		this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToMain, this)

	}

	private backToMain(e: egret.TouchEvent){
		SceneManager.toMainScene()
	}
	
}