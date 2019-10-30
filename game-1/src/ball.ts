class ball extends eui.Component implements  eui.UIComponent {

    // 按钮
    public btn_start:eui.Button;
    // 足球
    public img_ball:eui.Image;
    // win图片
    public win_top:eui.Image;
    public win_bottom:eui.Image;

    public i: number = 1
    public tw: egret.Tween
    // 随机数
    random: number

    public constructor() {
        super();
        this.skinName = "resource/gameSkins/ball.exml"
    }

    // protected partAdded(partName:string,instance:any):void
	// {
	// 	super.partAdded(partName,instance);
	// }

    

    protected childrenCreated():void{
        
        super.childrenCreated()
        this.btn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this)
    }

    // 点击按钮事件
    private onButtonClick(e: egret.TouchEvent){
        console.log('onButtonClick')
        switch(this.i){
            case 1://开始游戏
                this.ballTween()
                this.i++;
                this.btn_start.currentState = "pause"
                break;
            case 2://暂停游戏
                this.tw.setPaused(true)
                this.btn_start.currentState = "resume"
                this.i++;
                break;
            case 3://继续游戏
                this.tw.setPaused(false)
                this.btn_start.currentState = "pause"
                this.i = 2
                break;
            case 4://重新开始
                this.win_top.visible = false
                this.win_bottom.visible = false
                this.img_ball.x = this.stage.width/2
                this.img_ball.y = this.stage.height/2
                this.i = 1
                this.btn_start.currentState = "up"
                break;
        }
    }

    // 球运动
    private ballTween(){
        this.random = Math.random()
        if(this.random < 0.5){
            this.tw = egret.Tween.get(this.img_ball)
            this.tw.to({y: 1000}, 250).to({y: 120}, 500)
                    .to({y: 1000}, 500).to({y: 120}, 500)
                    .to({y: 1000}, 500).to({y: 120}, 500).call(() => {
                        this.win_bottom.visible = true
                        this.btn_start.currentState = "reset"
                        this.i = 4
                    })
        }else{
            this.tw = egret.Tween.get(this.img_ball)
            this.tw.to({y: 1000}, 250).to({y: 120}, 500)
                    .to({y: 1000}, 500).to({y: 120}, 500)
                    .to({y: 1000}, 500).call(() => {
                        this.win_top.visible = true
                        this.btn_start.currentState = "reset"
                        this.i = 4
                    })
        }
    }

   
}