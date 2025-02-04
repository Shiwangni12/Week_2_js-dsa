
function addElement() {
    let content = document.getElementById("contentInput").value;
    let elementType = document.getElementById("elementType").value;
    
    if (content.trim() === "") {
        alert("Please enter some content");
        return;
    }
    
    let newElement = document.createElement(elementType);
    newElement.innerText = content;
    
    if (elementType === "button") {
        newElement.onclick = () => alert(`Button clicked: ${content}`);
    }
    
    document.getElementById("website").appendChild(newElement);
    document.getElementById("contentInput").value = "";
}