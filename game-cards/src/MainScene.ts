class MainScene extends eui.Component implements  eui.UIComponent {

	public Group_mbtn: eui.Group

	public mBtnPlayer: eui.ToggleButton
	public mBtnHero: eui.ToggleButton
	public mBtnProduct: eui.ToggleButton
	public mBtnAbout: eui.ToggleButton

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

		// 让group可点击
		this.Group_mbtn.touchEnabled = true
		// 点击事件委托在group上
		this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSkin, this)
	}

	private changeSkin(e: egret.TouchEvent){
		let curBtn = <eui.ToggleButton>e.target

		if(curBtn.selected && curBtn.selected != undefined){
			this.toggleBtn(curBtn)
		}else{
			// 当selected为false
			curBtn.selected = true
		}
	}

	private toggleBtn(btn: eui.ToggleButton){
		// 遍历所以按钮，
		for(let i = 0; i < this.Group_mbtn.numChildren; i++){
			let _btn = <eui.ToggleButton>this.Group_mbtn.getChildAt(i)
			_btn.selected = false
		}

		btn.selected = true

		let index = this.Group_mbtn.getChildIndex(btn)

		switch(index){
			case 0:
				SceneManager.toPlayerScene()

				// 讲按钮层级提升
				this.setChildIndex(this.Group_mbtn, this.numChildren)
				break;
		}
	}
	
}