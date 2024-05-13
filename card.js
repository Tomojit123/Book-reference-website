const cardContainer = document.getElementById('card-container');
const cardContainerOne = document.getElementById('card-container-one');
const cardContainerTwo = document.getElementById('card-container-two');
const cardContainerThree = document.getElementById('card-container-three');
const cardContainerFour = document.getElementById('card-container-four');
let data = {}



// Function to create star rating
function createStar(ratings) {
    const starContainer = document.createElement('h3');
    ratings = Math.min(ratings, 5);
    for (let i = 0; i < ratings; i++) {
        const starSpan = document.createElement('span');
        starSpan.textContent = "⭐";
        starContainer.appendChild(starSpan);
    }
    return starContainer;
}

// Function to create a single card
function createCard(card) {
    const div = document.createElement('div');
    div.classList.add('card');
    
    div.innerHTML = `
    <img src=${card.imageUrl}>
    <h4>${card.title}</h4>
    <p>${card.writer}</p>
    <p>${card.details}</p>
    <h3></h3>
    <h3>₹ ${card.price}</h3>
        <button data-card-id=${card.id}>Add to cart</button>
    `;
    
    const starContainer = div.querySelector('h3');
    starContainer.appendChild(createStar(card.ratings));

    return div;
}

// Function to create a single card
function createCard(card) {
    const div = document.createElement('div');
    div.classList.add('card');
    
    div.innerHTML = `
    <img src=${card.imageUrl}>
    <h4>${card.title}</h4>
    <p>${card.writer}</p>
    <p>${card.details}</p>
    <h3></h3>
    <h3>₹ ${card.price}</h3>
    <button data-card-id=${card.id}>Add to cart</button>
    `;
    
    const starContainer = div.querySelector('h3');
    starContainer.appendChild(createStar(card.ratings));
    
    return div;
}

let filteredCards = []; 

// Fetch JSON files and populate card containers
async function fetchDataAndPopulateContainers() {
    try {
        const responseData = await Promise.all([
            fetch('http://127.0.0.1:3000/Frontend/data.json').then(response => response.json()),
        ]);
        
        [data] = responseData;
        
        data.cards.forEach(card => {
            const createCards = createCard(card);
            cardContainer.appendChild(createCards);
        });
        
        data.bestAuthors.forEach(card => {
            const createCards = createCard(card);
            cardContainerOne.appendChild(createCards);
        });
        
        data.motivation.forEach(card => {
            const createCards = createCard(card);
            cardContainerTwo.appendChild(createCards);
        });

        data.programming.forEach(card => {
            const createCards = createCard(card);
            cardContainerThree.appendChild(createCards);
        });
        
        data.recipes.forEach(card => {
            const createCards = createCard(card);
            cardContainerFour.appendChild(createCards);
        });
        
        filteredCards = data.cards;

        addEventListeners();
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to add event listeners to buttons
function addEventListeners() {
    document.querySelectorAll('.card button').forEach(button => {
        button.addEventListener('click', function () {
            const cardId = this.dataset.cardId;
            const loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
            addToCart(cardId, loggedInUserEmail);
        });
    });
}

// Function to add card to cart
async function addToCart(cardId, email) {
    fetch("http://localhost:5000/add-cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ card_Id: cardId, email: email }),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to add to cart");
            }
            return response.json();
        })
        .then(data => {
            if (data.success && data.message === "exist") {
                const title = 'this book is already exist to your card';
                const result = 'error';
                color='red'
                showSuccessToast(title,result,color);

            }
            else if (data.success) {
                const title = "Book is added to cart "
                const result = 'success';
                const color = 'green'
                showSuccessToast(title,result,color);
            } else {
                alert("Failed to add to cart");
            }
        })
        .catch(error => {
            console.error("Error adding to cart:", error);
            alert("Internal server error");
        });
    }
    
    
    
    document.getElementById('search-button').addEventListener('click', function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('search-input').value.trim().toLowerCase();
        if (searchInput !== '') {
            
            filteredCards = data.cards.filter(card => {
                document.getElementById('search-input').value = "";
                return card.title.toLowerCase().includes(searchInput);
        });
        
        cardContainer.innerHTML = '';
        cardContainerOne.innerHTML = '';
        cardContainerTwo.innerHTML = '';
        cardContainerThree.innerHTML = '';
        cardContainerFour.innerHTML = '';

        filteredCards.forEach(card => {
            const createCards = createCard(card);
            cardContainer.appendChild(createCards);
        });
    } else {
        fetchDataAndPopulateContainers();
    }
});

fetchDataAndPopulateContainers();

const showSuccessToast = (title,result,color) => {
    Swal.fire({
        icon: result,
        title: title,
        toast: true,
        iconColor:color,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true
    })
};