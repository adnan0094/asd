document.getElementById("adForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById("adTitle").value;
    let description = document.getElementById("adDescription").value;

    if (title.trim() === "" || description.trim() === "") {
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    let adItem = document.createElement("li");
    adItem.innerHTML = `<strong>${title}</strong><p>${description}</p>`;

    document.getElementById("adsList").appendChild(adItem);

    document.getElementById("adForm").reset();
});

