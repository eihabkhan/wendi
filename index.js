const cardsContainer = document.getElementById("cards-container")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const currentCardElement = document.getElementById("current")
const showBtn = document.getElementById("show")
const hideBtn = document.getElementById("hide")
const questionElement = document.getElementById("question")
const answerElement = document.getElementById("answer")
const addCardBtn = document.getElementById("add-card")
const clearBtn = document.getElementById("clear")
const addContainer = document.getElementById("add-container")

// Track Current Card
let currentActiveCard = 0;

// Store DOM Cards
const cardsElement = [];

// Store Card Data
const cardsData = [
    {
        question: "What is JS?",
        answer:"A Programming Language"
    },
    {
        question: "What is a variable?",
        answer:"container for a value"
    },
    {
        question: "What is a monkey?",
        answer:"An animal"
    },
];

// Create Cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index))
}

// Create Individual Card (DOM) 
function createCard(data, index) {
    const card = document.createElement("div")
    card.classList.add("card");
    if (index === 0) {
        card.classList.add("active")
    }
    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-rear">
                <p>${data.answer}</p>
            </div>
        </div>
    `;

    card.addEventListener("click", () => {
        card.classList.toggle("show-answer")
    })

    cardsElement.push(card)
    cardsContainer.appendChild(card);

    updateCurrentCard();
}


// Display Current Number of Card
function updateCurrentCard() {
    currentCardElement.innerText = `${currentActiveCard + 1} / ${cardsElement.length}`
}

createCards();

nextBtn.addEventListener("click", () => {
    cardsElement[currentActiveCard].className = "card left"
    currentActiveCard++;
    if(currentActiveCard > cardsElement.length - 2) {
        currentActiveCard = cardsElement.length - 1        
    }

    cardsElement[currentActiveCard].className = "card active"
    updateCurrentCard()
});

prevBtn.addEventListener("click", () => {
    cardsElement[currentActiveCard].className = "card right"
    currentActiveCard--;
    if(currentActiveCard < 0) {
        currentActiveCard = 0
    }

    cardsElement[currentActiveCard].className = "card active"
    updateCurrentCard()
})