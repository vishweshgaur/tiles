function createTileCards(tileData) {
    const section = document.getElementById('tiles-section');

    tileData.forEach(tile => {
        const tileDiv = document.createElement('div');
        // Each tile will take 50% of the width (w-1/2) and adjust the height
        tileDiv.className = 'w-1/2 h-1/2 p-8 box-border';

        // Card content
        tileDiv.innerHTML = `
      <div class="relative overflow-hidden bg-white shadow-md hover:scale-105 transition-transform duration-500 rounded-lg h-full">
        <a href="${tile.pdfLink}" target="_blank">
          <img src="${tile.thumbnail}" alt="Tile Image" class="w-full h-3/4 object-cover" />
        </a>
        <div class="p-4">
          <h3 class="text-lg font-semibold">${tile.size}</h3>
          <a href="${tile.pdfLink}" target="_blank" class="text-blue-500 hover:underline">
            See Catalogue &rarr;
          </a>
        </div>
      </div>
    `;
        section.appendChild(tileDiv);
    });
}

// Example data for tiles
const tileData = [
    { size: '8inch x 8inch', pdfLink: 'link1.pdf', thumbnail: 'https://www.lavishceramics.com/wp-content/webp-express/webp-images/uploads/2023/04/Margo-Onyx-Blue-60x120-PREVIEW1.jpg-e1682078261326.jpg.webp' },
    { size: '6inch x 6inch', pdfLink: 'link2.pdf', thumbnail: 'https://www.lavishceramics.com/wp-content/webp-express/webp-images/uploads/2023/04/Margo-Onyx-Blue-60x120-PREVIEW1.jpg-e1682078261326.jpg.webp' },
    { size: '12inch x 12inch', pdfLink: 'link3.pdf', thumbnail: 'https://www.lavishceramics.com/wp-content/webp-express/webp-images/uploads/2023/04/Margo-Onyx-Blue-60x120-PREVIEW1.jpg-e1682078261326.jpg.webp' },
    { size: '10inch x 10inch', pdfLink: 'link4.pdf', thumbnail: 'https://www.lavishceramics.com/wp-content/webp-express/webp-images/uploads/2023/04/Margo-Onyx-Blue-60x120-PREVIEW1.jpg-e1682078261326.jpg.webp' }
];

// Trigger the creation of tiles
createTileCards(tileData);

// Animation on scroll
window.addEventListener('scroll', function() {
    const section = document.getElementById('tiles-section');
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
        section.classList.add('animate-slide-in');
    }
});

// Add animation CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  .animate-slide-in {
    animation: slideIn 2s ease-out forwards;
  }
`;
document.head.appendChild(style);
