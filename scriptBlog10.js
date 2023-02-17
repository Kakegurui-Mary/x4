/* // get the "Blog" tab and the pop-up window
const blogTab = document.querySelector('[data-tab-target="#blog"]');
const createPostModal = document.querySelector('#create-post-modal');

// add an event listener to the "Blog" tab that opens the pop-up window
blogTab.addEventListener('click', (event) => {
  // prevent the default tab switching behavior
  event.preventDefault();

  // show the pop-up window
  createPostModal.style.display = 'block';
});

// add event listeners for closing the modal
const closeButton = createPostModal.querySelector('.close');
closeButton.addEventListener('click', () => {
  createPostModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === createPostModal) {
    createPostModal.style.display = 'none';
  }
});

// add event listener to the "Create Post" button
const createPostButton = document.getElementById('new-post-button');
const createPostForm = document.getElementById('create-post-form');

createPostButton.addEventListener('click', () => {
  createPostModal.style.display = 'block';
});

// add upload button event listener
const uploadButton = document.getElementById('upload-button');

uploadButton.addEventListener('click', () => {
  const title = postTitle.value;
  const text = postText.value;
  const image = postImage.files[0];
  if (title && text && image) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgSrc = event.target.result;
      const post = createPostElement(title, text, imgSrc, image.lastModified);
      blogPosts.insertBefore(post, blogPosts.firstChild);
      createPostModal.style.display = 'none';
    };
    reader.readAsDataURL(image);
  }
});

// add create post element function
function createPostElement(title, text, imgSrc, timestamp) {
  const post = document.createElement('div');
  post.className = 'post';
  const postTitle = document.createElement('h2');
  postTitle.textContent = title;
  post.appendChild(postTitle);
  const postImage = document.createElement('img');
  postImage.src = imgSrc;
  post.appendChild(postImage);
  const postText = document.createElement('p');
  postText.textContent = text;
  post.appendChild(postText);
  const postTimestamp = document.createElement('div');
  postTimestamp.className = 'timestamp';
  postTimestamp.textContent = formatDate(new Date(timestamp));
  post.appendChild(postTimestamp);
  return post;
}

// add format date function
function formatDate(date) {
  // Format a given date as a string in the format "YYYY-MM-DD HH:MM:SS"
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Get the modal element
var modal = document.getElementById("create-post-modal");

// Get the button that opens the modal
var btn = document.getElementById("new-post-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Neuer Code:
function createPost() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  function submitPost(event) {
    event.preventDefault(); // prevent the form from submitting
    var title = document.getElementById("title").value;
    var picture = document.getElementById("picture").value;
    var text = document.getElementById("text").value;
  
    // TODO: handle post submission, e.g. send data to server, update UI, etc.
  
    closeModal(); // close the pop-up window
  } */
  
  // get the "Blog" tab and the pop-up window
const blogTab = document.querySelector('[data-tab-target="#blog"]');
const createPostModal = document.querySelector('#create-post-modal');

// add an event listener to the "Blog" tab that opens the pop-up window
blogTab.addEventListener('click', (event) => {
  // prevent the default tab switching behavior
  event.preventDefault();

  // show the pop-up window
  createPostModal.style.display = 'block';
});

// add event listeners for closing the modal
const closeButton = createPostModal.querySelector('.close');
closeButton.addEventListener('click', () => {
  createPostModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === createPostModal) {
    createPostModal.style.display = 'none';
  }
});

// add event listener to the "Create Post" button
// get the "Create Post" button element
const createPostButton = document.getElementById('create-post-button');
createPostButton.addEventListener('click', createPost);

// add event listener to the "Create Post" button
createPostButton.addEventListener('click', () => {
  createPostModal.style.display = 'block';
});


// add upload button event listener
const uploadButton = document.getElementById('upload-button');

uploadButton.addEventListener('click', () => {
  const title = postTitle.value;
  const text = postText.value;
  const image = postImage.files[0];
  if (title && text && image) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imgSrc = event.target.result;
      const post = createPostElement(title, text, imgSrc, image.lastModified);
      blogPosts.insertBefore(post, blogPosts.firstChild);
      createPostModal.style.display = 'none';
    };
    reader.readAsDataURL(image);
  }
});

// add create post element function
function createPostElement(title, text, imgSrc, timestamp) {
  const post = document.createElement('div');
  post.className = 'post';
  const postTitle = document.createElement('h2');
  postTitle.textContent = title;
  post.appendChild(postTitle);
  const postImage = document.createElement('img');
  postImage.src = imgSrc;
  post.appendChild(postImage);
  const postText = document.createElement('p');
  postText.textContent = text;
  post.appendChild(postText);
  const postTimestamp = document.createElement('div');
  postTimestamp.className = 'timestamp';
  postTimestamp.textContent = formatDate(new Date(timestamp));
  post.appendChild(postTimestamp);
  return post;
}

// add format date function
function formatDate(date) {
  // Format a given date as a string in the format "YYYY-MM-DD HH:MM:SS"
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }

  function createPost() {
    createPostModal.style.display = 'block';
  }
  
  
  function closeModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
  }
  
  function submitPost(event) {
    event.preventDefault(); // prevent the form from submitting
    var title = document.getElementById("title").value;
    var picture = document.getElementById("picture").value;
    var text = document.getElementById("text").value;
  
    // TODO: handle post submission, e.g. send data to server, update UI, etc.
  
    closeModal(); // close the pop-up window
  }
  

  function createPost() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "block";
  }
  
  function closeModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
  }
  

