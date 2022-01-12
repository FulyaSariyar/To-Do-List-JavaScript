function addTodoList() {


    // Getting box and ul by selecting id; 
    var item = document.getElementById("box");
    var list_item = document.getElementById("list_item");

    if (item.value != "") {

        // Creating element and adding value to it 
        let createLiNode = document.createElement("li");
        createLiNode.appendChild(document.createTextNode(item.value));

        // Adding li to ul 
        list_item.appendChild(createLiNode);

        // Reset the value of box 
        item.value = ""

        // Delete a li item on click  
        createLiNode.onclick = function() {
            this.parentNode.removeChild(this);
        }

    } else {

        // Alert msg when value of box is "" empty. 
        alert("Please enter an activity");
    }

}