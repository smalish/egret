class SceneManager {

	private _stage:egret.DisplayObjectContainer //设置所有场景所在的舞台
	private mainScene:MainScene //主场景
	private playerScene:PlayerScene //玩家场景


	public constructor() {
		this.mainScene = new MainScene()
		this.playerScene = new PlayerScene()
	}

	// 获取实例
	static SceneManager:SceneManager
	static get instance(){
		if(!this.SceneManager){
			this.SceneManager = new SceneManager()
		}
		return this.SceneManager
	}

	// 设置根场景
	public setStage(s: egret.DisplayObjectContainer){
		this._stage = s
	}

	// 切换到主场景
	static toMainScene(){
		let stage:egret.DisplayObjectContainer = this.instance._stage
		let mainScene = SceneManager.instance.mainScene

		// 判断主场景是否有父级，如果有说明已经被添加到了主场景中
		if(!mainScene.parent){
			stage.addChild(mainScene)
		}

		// 判断玩家场景是否有父级,如果有，就是移除玩家场景，显示主场景
		if(SceneManager.instance.playerScene.parent){
			mainScene.removeChild(SceneManager.instance.playerScene)
		}
	
	}

	// 切换到玩家场景
	static toPlayerScene(){
		let stage:egret.DisplayObjectContainer = this.instance._stage
		this.instance.mainScene.addChild(this.instance.playerScene)
	}


}