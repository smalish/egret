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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // 让group可点击
        this.Group_mbtn.touchEnabled = true;
        // 点击事件委托在group上
        this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.changeSkin, this);
    };
    MainScene.prototype.changeSkin = function (e) {
        var curBtn = e.target;
        if (curBtn.selected && curBtn.selected != undefined) {
            this.toggleBtn(curBtn);
        }
        else {
            // 当selected为false
            curBtn.selected = true;
        }
    };
    MainScene.prototype.toggleBtn = function (btn) {
        // 遍历所以按钮，
        for (var i = 0; i < this.Group_mbtn.numChildren; i++) {
            var _btn = this.Group_mbtn.getChildAt(i);
            _btn.selected = false;
        }
        btn.selected = true;
        var index = this.Group_mbtn.getChildIndex(btn);
        switch (index) {
            case 0:
                SceneManager.toPlayerScene();
                // 讲按钮层级提升
                this.setChildIndex(this.Group_mbtn, this.numChildren);
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
