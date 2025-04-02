const listE1 = document.getElementById("infi-list");

// Function to add items to the list
function addItems(count) {
    for (let i = 0; i < count; i++) {
        let li = document.createElement("li");
        li.textContent = `Item ${listE1.children.length + 1}`;
        listE1.appendChild(li);
    }
}

// Add initial 10 items
addItems(10);

// Event listener for infinite scrolling
window.addEventListener("scroll", () => {
    // Check if user has reached the bottom of the list
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        addItems(2); // Add 2 more items
    }
});

