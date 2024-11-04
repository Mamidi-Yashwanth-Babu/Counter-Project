let count = 0;

function updateCounter() {
  document.getElementById('counter').innerText = count;
}

function showErrorMessage(message) {
  const errorMessage = document.getElementById('error-message');
  errorMessage.innerText = message;
  errorMessage.style.display = 'block';
  
  // Hide the message after 3 seconds
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 3000);
}

function increment() {
  if (count < 25) {
    count++;
    updateCounter();
  } else {
    showErrorMessage("Maximum limit of 25 reached!");
  }
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  } else {
    showErrorMessage("Minimum limit of 0 reached!");
  }
}

function resetCounter() {
  count = 0;
  updateCounter();
}
