function createTileCards(tileDataOne, tileDataTwo) {
    const sectionOne = document.getElementById('tiles-section-one');
    const sectionTwo = document.getElementById('tiles-section-two')

    tileDataOne.forEach(tile => {
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
        sectionOne.appendChild(tileDiv);
    });

    tileDataTwo.forEach(tile => {
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
        sectionTwo.appendChild(tileDiv);
    });





}

// Example data for tiles
const tileDataOne = [
    { size: 'Terrazo', pdfLink: 'link1.pdf', thumbnail: '../images/Four Cards/SectionOne/Terrazo.jpg' },
    { size: 'Wooden Planks', pdfLink: 'link2.pdf', thumbnail: '../images/Four Cards/SectionOne/Wooden Planks.jpg' },
    { size: 'Super White', pdfLink: 'link3.pdf', thumbnail: '../images/Four Cards/SectionOne/Super White.jpg' },
    { size: 'Endless Tiles', pdfLink: 'link4.pdf', thumbnail: '../images/Four Cards/SectionOne/Endless Tiles.png' }
];

const tileDataTwo = [
    { size: 'Inky Series', pdfLink: 'link1.pdf', thumbnail: '../images/Four Cards/SectionTwo/Inky Series.jpg' },
    { size: 'Matt Series', pdfLink: 'link4.pdf', thumbnail: '../images/Four Cards/SectionTwo/Matt Series.jpg' },
    { size: 'Hi Depth Elevation', pdfLink: 'link2.pdf', thumbnail: '../images/Four Cards/SectionTwo/High Depth Elevation.png' },
    { size: 'Hi Gloss Endless Collection', pdfLink: 'link3.pdf', thumbnail: '../images/Four Cards/SectionTwo/Hi-Gloss-Endless-Collection.jpg' }

];

// Trigger the creation of tiles
createTileCards(tileDataOne, tileDataTwo);

// Animation on scroll
window.addEventListener('scroll', function() {
    const section = document.getElementById('tiles-section-one');
    const rect = section.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
        section.classList.add('animate-slide-in');
    }
});
window.addEventListener('scroll', function() {
    const section = document.getElementById('tiles-section-two');
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
