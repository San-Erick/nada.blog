// Declare the uploadedComments array
let uploadedComments = [];

// Function to generate the character sections
function generateCharacterSections(characters) {
  // Your existing code for generating character sections
  // ...
}

// Function to generate the resume section
function generateResumeSection(resume) {
  // Your existing code for generating the resume section
  // ...
}

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

// Call the initial generation of comments section
generateCommentsSection();
