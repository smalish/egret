var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PlayerScene = (function (_super) {
    __extends(PlayerScene, _super);
    function PlayerScene() {
        return _super.call(this) || this;
    }
    PlayerScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayerScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backToMain, this);
    };
    PlayerScene.prototype.backToMain = function (e) {
        SceneManager.toMainScene();
    };
    return PlayerScene;
}(eui.Component));
__reflect(PlayerScene.prototype, "PlayerScene", ["eui.UIComponent", "egret.DisplayObject"]);
