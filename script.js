function searchGoogle() {
    let searchInput = document.getElementById("userInput").value;
    alert(`You searched for: ${searchInput}`)
    window.location.href = "https://www.google.com/search?q=" + searchInput;
    alert("Try again")
}
