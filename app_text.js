let result=confirm("Хотите поменять текст?");
//условная конструкция для проверки результата
if(result) {
    var something=prompt("Где вы хотите поменять текст?", "p");
    var newText=prompt("Введите ваш текст :)");
} else {
    //
}

function jQuery(selector, context = document) {
    this.elements = Array.from(context.querySelectorAll(selector));
    return this;
}

jQuery.prototype.each = function (fn){
    this.elements.forEach((element, index) => fn.call(element, element, index));
    return this;
}

jQuery.prototype.text = function (fn) {
    this.each(element => element.innerHTML=newText);
    return this;
}

const $ = (e) => new jQuery(e);

$(something).text()