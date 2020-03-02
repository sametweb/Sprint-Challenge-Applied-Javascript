// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topics = document.querySelector(".topics");

let getData = axios.get("https://lambda-times-backend.herokuapp.com/topics");

getData
  .then(response =>
    response.data.topics.forEach(item => topics.appendChild(createTab(item)))
  )
  .catch(err => console.log("Could not fetch data:", err));

const createTab = tabText => {
  let tab = document.createElement("div");

  tab.classList.add("tab");
  tab.textContent = tabText;
  tab.setAttribute("data-category", tabText);

  tab.addEventListener("click", event => {
    let cards = document.querySelectorAll(".cards-container .card");

    cards.forEach(card => {
      event.target
        .getAttribute("data-category")
        .includes(card.getAttribute("data-category"))
        ? (card.style.display = "flex")
        : (card.style.display = "none");
    });
  });

  return tab;
};
