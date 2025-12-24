const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

// Get a random color among the list of available colors
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

// Create a new card
function createCard() {
  // 1 - Random color for card
  const card = document.createElement('div');
  card.className = 'card';
  card.style.backgroundColor = randomColor();
  
  // 2 - Set card text
  const description = document.createElement('p');
  description.textContent = 'Description';
  
  // 3 - Set card footer
  const footer = document.createElement('div');
  footer.className = 'card-footer';
  
  // 4 - Manage footer button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove Card';
  removeBtn.addEventListener('click', () => {
      card.remove();
  });

  // 5 - Add card to containers
  footer.appendChild(removeBtn);
  card.appendChild(description);
  card.appendChild(footer);
  
  // Select the container from your HTML and add the card
  const container = document.querySelector('.container');
  container.appendChild(card);
}

//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);