// JavaScript function to create a card with a custom thumbnail, tile name, and PDF download
function createTileCard(tileName, imagePath, pdfPath) {
    // Get the container where the cards will be added
    const cardContainer = document.getElementById('card-container');

    // Create the card div
    const card = document.createElement('div');
    card.classList.add('bg-white', 'shadow-md', 'rounded-lg', 'overflow-hidden', 'relative', 'group', 'hover:opacity-90', 'transition', 'duration-300');

    // Add the image to the card
    const thumbnail = document.createElement('img');
    thumbnail.src = imagePath;
    thumbnail.alt = tileName;
    thumbnail.classList.add('w-full', 'h-48', 'object-cover');
    card.appendChild(thumbnail);

    // Create a div for the tile name and download button
    const cardBody = document.createElement('div');
    cardBody.classList.add('p-4', 'text-center');

    // Add the tile name
    const tileTitle = document.createElement('h3');
    tileTitle.innerText = tileName;
    tileTitle.classList.add('text-lg', 'font-semibold', 'text-gray-800');
    cardBody.appendChild(tileTitle);

    // Add the download button
    const downloadButton = document.createElement('a');
    downloadButton.href = pdfPath;  // Path to the PDF file
    downloadButton.download = tileName;  // Name of the file when downloaded
    downloadButton.classList.add(
        'absolute', 'inset-0', 'flex', 'justify-center', 'items-center', 'bg-black',
        'bg-opacity-60', 'opacity-0', 'group-hover:opacity-100',
        'transition', 'duration-300'
    );
    downloadButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6" fill="white" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>`;

    // Add the download icon
    // const downloadIcon = document.createElement('svg');
    // downloadIcon.classList.add("fa", "fa-download");  // Font Awesome icon
    // downloadButton.appendChild(downloadIcon);

    // Append the download button and card body to the card
    card.appendChild(downloadButton);
    card.appendChild(cardBody);

    // Add the card to the container
    cardContainer.appendChild(card);
}

// Example usage


