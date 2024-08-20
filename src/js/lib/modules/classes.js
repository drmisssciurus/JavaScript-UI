import $ from "../core";

$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        //проверяем наличие класса у элемента не уверена что это верно
        // if (!this[i].classList.contains(...classNames)) {
        //     continue;
        // }
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClass = function(classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }

    return this;
};