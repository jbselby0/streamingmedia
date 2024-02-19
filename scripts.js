// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
    // Select all text file containers
    var textContainers = document.querySelectorAll('.file.text');

    // Iterate over each text file container
    textContainers.forEach(function(container) {
        // Extract the URL of the text file from the download link
        var textFileUrl = container.querySelector('a').getAttribute('href');

        // Fetch the content of the text file
        fetch(textFileUrl)
            .then(response => response.text())
            .then(text => {
                // Create a new paragraph element to display the text content
                var textContentElement = document.createElement('p');
                textContentElement.textContent = text;

                // Append the text content to the text container
                container.querySelector('.text-content').appendChild(textContentElement);
            })
            .catch(error => console.error('Error fetching text file:', error));
    });
});
