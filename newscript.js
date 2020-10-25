
var form = document.getElementById("form-container");
var input = document.getElementById("form-input");
if(!localStorage.getItem("data")){
    localStorage.setItem("data", JSON.stringify([]));
}
var list = document.getElementById("todo-list");
function refresh(){
    list.innerHTML = "";
    var data = JSON.parse(localStorage.getItem("data"))
    for(let i = 0; i < data.length; i++){
        var newdiv = document.createElement("div");
        newdiv.innerText = data[i];
        newdiv.className = "list-data";
        list.appendChild(newdiv);
        reassign();
    }
}
refresh()

form.onsubmit = function(e){
    e.preventDefault()
    var data = JSON.parse(localStorage.getItem("data"))
    data.push(input.value)
    localStorage.setItem("data", JSON.stringify(data));
    input.value = "";
    refresh()
}

function reassign(){
    var listData = document.getElementsByClassName("list-data");
    for(let i = 0; i < listData.length; i++){
        listData[i].onclick = function(e){
            var data = JSON.parse(localStorage.getItem("data"))
            for(let j = 0; j < data.length; j++){
                if(data[i] == listData[i].innerText){
                    data.splice(i, 1)
                    localStorage.setItem("data", JSON.stringify(data))
                    refresh()
                    break;
                }
            }
        }
    }
}