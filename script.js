var obj1 = {name: "ferrari", model: "f50", color: "red"};
var jsn1 = JSON.stringify(obj1);
localStorage.setItem("car1", jsn1);

function findCarByName(name) {
    jsn = localStorage.getItem(name);
    obj = JSON.parse(jsn);

    return obj;
} 