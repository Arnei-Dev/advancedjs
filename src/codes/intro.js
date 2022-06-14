/*
 - boolean
 - string
 - tuple
 - enum
*/
//tuple
var title;
title: ["1", "Título"];
//enum {chave: valor}
var color;
(function (color) {
    color["white"] = "#fff";
    color["red"] = "#f00";
    color["blue"] = "#00f";
})(color || (color = {}));
