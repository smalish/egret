var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.mainScene = new MainScene();
        this.playerScene = new PlayerScene();
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.SceneManager) {
                this.SceneManager = new SceneManager();
            }
            return this.SceneManager;
        },
        enumerable: true,
        configurable: true
    });
    // 设置根场景
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    // 切换到主场景
    SceneManager.toMainScene = function () {
        var stage = this.instance._stage;
        var mainScene = SceneManager.instance.mainScene;
        // 判断主场景是否有父级，如果有说明已经被添加到了主场景中
        if (!mainScene.parent) {
            stage.addChild(mainScene);
        }
        // 判断玩家场景是否有父级,如果有，就是移除玩家场景，显示主场景
        if (SceneManager.instance.playerScene.parent) {
            mainScene.removeChild(SceneManager.instance.playerScene);
        }
    };
    // 切换到玩家场景
    SceneManager.toPlayerScene = function () {
        var stage = this.instance._stage;
        this.instance.mainScene.addChild(this.instance.playerScene);
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
