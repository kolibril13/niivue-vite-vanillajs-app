// Your existing app container in the HTML
const appContainer = document.querySelector('#app');

// Apply styles to the app container for the grid layout
appContainer.style.display = 'grid';
appContainer.style.gridTemplateColumns = '1fr 1fr'; // two columns
appContainer.style.gridGap = '10px'; // space between the divs

// Function to create a div with the specified content
const createDiv = (content) => {
  const newDiv = document.createElement('div');
  newDiv.textContent = content;
  newDiv.style.border = '1px solid orange'; // border color as per the image
  newDiv.style.height = '150px'; // assuming a fixed height for each div
  newDiv.style.display = 'flex';
  newDiv.style.alignItems = 'center'; // center content vertically
  newDiv.style.justifyContent = 'center'; // center content horizontally
  return newDiv;
};

// Manually add each div element
const div1 = createDiv('div1');
const div2 = createDiv('div2');
const div3 = createDiv('div3');
const div4 = createDiv('div4');

// Append the divs to the app container
appContainer.appendChild(div1);
appContainer.appendChild(div2);
appContainer.appendChild(div3);
appContainer.appendChild(div4);
