// Your Challenge:

// 	1.	Fetch and display the player’s current inventory.
// 	2.	Add a new item to the inventory (e.g., “Health Potion”).
// 	3.	Delete an item from the inventory by ID.

// Here’s the fictive API URL you can use:
// https://example-gameapi.com/inventory

// challenge one

const url = "https://example-gameapi.com/inventory";

fetch (url)
.then(response => response.json()) // convert the response to JSON
.then(data => {
    let playerInventory = document.querySelector('#inventory'); // find the inventory element on the page
    
    // clear the inventory list (if needed)
    playerInventory.innerHTML = "";

    data.forEach(item => {
        playerInventory.innerHTML += `<li>${item.name} (ID: ${item.id})</li>}`;
        
    });
})
.catch (error => {
console.error("Error fetching inventory", error);
});

// challenge two

fetch (url, {
    method: "POST", // specify the HTTP method
    headers: {
        "Content-type": "application/json" // content type for JSON
},
}) {

   
},
body: JSON.stringify({
    name: "Health Potion"
})
.then(response => response.JSON())
.then(data => {
    console.log("Health Potion was added to the inventory!", data);
})
}
