const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

function toggleMenu() {
    navLinks.classList.toggle("active");
}

document.addEventListener("click", e => {
    if (!navbar.contains(e.target)) navLinks.classList.remove("active");
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) navLinks.classList.remove("active");
});

const reviews = [
    { name: "Ravi Kumar", rating: 5, text: "Absolutely divine! The croissants are buttery perfection and the sourdough bread is the best I've had outside of Paris. The staff is always friendly and welcoming.", date: "2 weeks ago", helpful: 24 },
    { name: "Harsh Sharma", rating: 5, text: "I come here every Sunday for their cinnamon rolls. They're worth every calorie! The atmosphere is cozy and the coffee is excellent too.", date: "1 month ago", helpful: 180 },
    { name: "Arshnoor Singh", rating: 4, text: "Great selection of pastries and breads. The chocolate cake is incredible! Only wish they were open later in the evenings.", date: "3 weeks ago", helpful: 50 },
    { name: "Rishi Bhardwaj", rating: 5, text: "Best bakery in town, hands down! Everything is made fresh daily and you can taste the quality. The apple pie reminds me of my grandmother's recipe.", date: "1 week ago", helpful: 31 },
    { name: "Akshit Tomar", rating: 5, text: "The wedding cake they made for us was stunning and delicious! All our guests raved about it. Highly recommend for special occasions.", date: "2 months ago", helpful: 45 },
    { name: "Saurabh Airee", rating: 4, text: "Excellent bread and pastries. The prices are very reasonable for the quality. My favorite is the multigrain bread - perfect for sandwiches!", date: "1 month ago", helpful: 15 }
];

let liked = new Set();

const createStars = r => "★".repeat(r) + "☆".repeat(5 - r);
const getInitials = n => n.split(" ").map(i => i[0]).join("");


function renderReviews() {
    const grid = document.getElementById("reviewsGrid");
    let html = "";

    reviews.forEach((r, i) => {
        html += `
            <div class="review-card">
                <div class="review-header">
                    <div class="reviewer-avatar">${getInitials(r.name)}</div>
                    <div class="reviewer-info">
                        <h3>${r.name}</h3>
                        <div class="review-stars">${createStars(r.rating)}</div>
                        <div class="review-date">${r.date}</div>
                    </div>
                </div>
                <p class="review-text">${r.text}</p>
                <div class="review-footer">
                    <button class="helpful-btn" data-i="${i}">
                        👍 Like (${r.helpful + (liked.has(i) ? 1 : 0)})
                    </button>
                </div>
            </div>
        `;
    });

    grid.innerHTML = html;
}

renderReviews();
document.addEventListener("click", e => {
    if (e.target.classList.contains("helpful-btn")) {
        const i = e.target.dataset.i;

        if (liked.has(i)) {
            liked.delete(i);
            e.target.textContent = `👍 Like (${reviews[i].helpful})`;
            e.target.classList.remove("active");
        } else {
            liked.add(i);
            e.target.textContent = `👍 Liked (${reviews[i].helpful + 1})`;
            e.target.classList.add("active");
        }
    }
});
