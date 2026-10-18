// Write your code here!
async function fetchPosts() {
    try {
        const response = await fetch (
           " https://jsonplaceholder.typicode.com "
        );

if (!response.ok) {
    throw new error ("failed to fetch posts");
}

const posts = await response.json();

displayPosts(posts);
    }
catch (error) {
    console.error("error fetching posts;", error);
}
    }
    

function displayPosts(posts) {
    const postList = document.getElementById ("post-list");

    posts.forEach (function(post){
        const li = document.createElement("li");

        const h1 = document.createElement("h1");
        h1.textContent = post.title;

        const p = document.createElement("p");
        p.textContent = post.body;

        li.appendChild(h1);
        li.appendChild(p);

           postList.appendChild(li);
    });
}
   
fetchPosts();