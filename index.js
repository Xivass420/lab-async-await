//Select the UL element from the DOM
const postList = document.getElementById('post-list')

//function to display post
function displayPosts(posts) {
    //loop through the array of posts
    posts.forEach(post => {
        //create an li element
        const li = document.createElement('li');

        //create h1 element
        const h1 = document.createElement('h1');

        //set the title as the h1 text content
        h1.textContent = post.title;

        //create a p element
        const p = document.createElement('p');

        //set the body as the p text content
        p.textContent = post.body;

        //append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);
        
        //append li to ul
        postList.appendChild(li);
    });
}

// an asynchronous function to fetch posts
async function fetchPosts() {
    //fetch posts from the external API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    //convert the response into JSON
    const posts = await response.json();

    //Display the retrieved posts
    displayPosts(posts);

    // try {
    //     // Fetch posts from the external API
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    //     // Check whether the request was successful
    //     if (!response.ok) {
    //         throw new Error(`HTTP Error: ${response.status}`);
    //     }

    //     // Convert the response into JSON
    //     const posts = await response.json();

    //     // Display the retrieved posts
    //     displayPosts(posts);

    // } catch (error) {
    //     console.error('Error fetching posts:', error);
    // }

}


//call fetchPosts Func
fetchPosts();
