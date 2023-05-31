// Declare the uploadedComments array
let uploadedComments = [];

// Function to generate the comments section
function generateCommentsSection() {
  const commentsSection = document.getElementById('comments-list');
  commentsSection.innerHTML = ''; // Clear the existing comments

  const commentsContent = document.createElement('div');
  commentsContent.innerHTML = '<h2>Comentarios anteriores</h2>';

  // Iterate over uploadedComments array instead of comments array
  uploadedComments.forEach(comment => {
    const commentItem = document.createElement('div');
    commentItem.classList.add('comment');

    const commentUser = document.createElement('h3');
    commentUser.textContent = comment.user;
    commentItem.appendChild(commentUser);

    const commentText = document.createElement('p');
    commentText.textContent = comment.comment;
    commentItem.appendChild(commentText);

    // Add a button to hide the comment section
    const hideButton = document.createElement('button');
    hideButton.textContent = 'Hide';
    hideButton.addEventListener('click', () => {
      commentItem.style.display = 'none';
    });
    commentItem.appendChild(hideButton);

    commentsContent.appendChild(commentItem);
  });

  commentsSection.appendChild(commentsContent);
}

// Function to handle comment submission
function submitComment(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  const nameInput = document.getElementById('name');
  const commentInput = document.getElementById('comment');

  const userName = nameInput.value;
  const userComment = commentInput.value;

  if (userName && userComment) {
    const comment = {
      user: userName,
      comment: userComment
    };

    // Add the new comment to the comments array
    comments.push(comment);

    // Add the new comment to the uploadedComments array
    uploadedComments.push(comment);

    // Clear the form inputs
    nameInput.value = '';
    commentInput.value = '';

    // Regenerate the comments section to include the new comment
    generateCommentsSection();
  }
}

// Add event listener to the comment submission form
const commentForm = document.querySelector('form');
commentForm.addEventListener('submit', event => {
  submitComment(event);
  generateCommentsSection();
});

// Fetch the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const characters = data.characters;
    const comments = data.comments;
    const resume = data.resume;

    generateCharacterSections(characters);
    generateCommentsSection();
    generateResumeSection(resume);
  })
  .catch(error => {
    console.log('An error occurred while fetching the JSON data:', error);
  });
