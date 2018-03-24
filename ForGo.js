// JavaScript Document
var imgHoverReplaceSrc = {
    init: function (sel) {
        this.sel = sel || "img";
        this.imgList = document.querySelectorAll(sel);
        this.work();
    };
    work: function () {
        var _this = this;
        this.imgList.forEach(function (item) {
            item.addEventListener("mouseenter", function () {
                _this.changeSrc(item);
                item.className = "left";
            });
            item.addEventListener("mouseleave", function () {
                _this.changeSrc(item);
                item.className = "right";
            });
        });
    },
    changeSrc: function (item) {
        if (item.getAttribute('data-src')) {
            var tmpSrc = item.src;
            item.src = item.getAttribute('data-src');
            item.setAttribute('data-src', tmpSrc);
        }
    }
}
imgHoverReplaceSrc.init("");