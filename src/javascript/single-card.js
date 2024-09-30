// Function to inject card into a container
function createTileCard(containerId, imageSrc, title, description, pdfLink) {
    const container = document.getElementById(containerId);

    const cardHTML = `
        <div class="tile-card h-screen flex justify-center items-center m-6 gap-6 p-6 w-full bg-white shadow-md hover:scale-105 transition-transform duration-500 opacity-0">
            <div class="w-2/3 h-full">
                <img src="${imageSrc}" alt="desc" class="rounded-2xl h-full"/>
            </div>
            <div class="flex flex-col justify-center gap-6 p-6 w-1/2">
                <h1 class="text-4xl">${title}</h1>
                <p>${description}</p>
                <a href="${pdfLink}" target="_blank" class="text-black hover:underline">
                    <button class="border-2 border-gray-600 rounded-2xl p-2 hover:scale-105 hover:bg-black hover:text-white transition-transform duration-500">
    View Catalogue
</button>

                </a>
            </div>
        </div>
    `;

    container.innerHTML += cardHTML;
}

// Function to add slide-in animation on scroll
function applyScrollAnimation() {
    const elements = document.querySelectorAll('.tile-card');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);  // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Add CSS styles dynamically to the document head
function addStyles() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideIn {
            from { transform: translateX(-100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        .animate-slide-in {
            animation: slideIn 2s ease-out forwards;
        }

        .opacity-0 {
            opacity: 0;
        }

        /* Set the card to take up the full view height */
        .h-screen {
            height: 100vh;
        }

        .tile-card {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 24px;
            padding: 24px;
            background-color: white;
            border-radius: 16px;
            box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
            width: 100%;
            transition: transform 0.5s ease;
        }

        .tile-card:hover {
            transform: scale(1.05);
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything
function init() {
    addStyles();
    createTileCard('onyx-section-one', '../images/Single Card/Flora Wave Series.jpg', 'Flora Wave Series', 'The Flora Wave Series offers elegant marble tiles featuring natural wave-like patterns inspired by flowing flora. Perfect for adding a touch of sophistication to any space, these tiles combine durability with aesthetic beauty, making them ideal for both modern and classic interiors. Enhance your space with timeless, nature-inspired design.', 'https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf');
    createTileCard('onyx-section-two', '../images/Single Card/Full Body 16mm Jumbo Tiles.jpg', 'Full Body 16mm Jumbo Tiles', 'The Full Body 16mm Jumbo Tiles are designed for strength and style, offering a seamless, uniform appearance throughout. These durable, large-format tiles are perfect for high-traffic areas, combining resilience with a sleek, modern look. Ideal for creating expansive, elegant surfaces with minimal grout lines, they offer both beauty and longevity.', 'https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf');
    applyScrollAnimation();
}

// Call the initialization function
init();
