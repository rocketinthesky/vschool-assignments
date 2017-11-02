axios.get("https://api.vschool.io/neilwagner/todo").then(function(response){
  for (i = 0; i < response.data.length; i++)
    document.getElementById("todos").innerHTML += "<div>" +  response.data[i].title + "</div>";
});

function newTodo(title){
  document.getElementById("submit").addEventListener("click", (function(){
    var newTodo = {"title": document.getElementById("title").value}

  axios.post("https://api.vschool.io/neilwagner/todo", newTodo).then(function(response) {
    var newTodo = response.data;
    document.getElementById("todos").innerHTML += "<div>" +  response.data.title + "</div>";
  });
}))}
