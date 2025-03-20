function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log(data);
    var draggedElement = document.getElementById(data);
    var dropzone = event.target.closest(".dropzone");

    if (!dropzone) return;

    var targetCategory = dropzone.getAttribute("data-target");
    var draggedCategory = draggedElement.getAttribute("data-category");

    if (targetCategory === draggedCategory) {
        draggedElement.style.color = "green";
        draggedElement.style.border = "2px solid green";
    } else {
        draggedElement.style.color = "red";
        draggedElement.style.border = "2px solid red";
    }

    dropzone.appendChild(draggedElement);
}


