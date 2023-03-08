//This approach is myself try to fetch the datas from the free API
async function fetchPosts1() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        json=json.slice(0,10)
        for(let i=0;i<json.length;i++)
        {
            console.log(json[i].title+" "+json[i].body);
        }
      })
}

// This is solution from Coding Ninjas
async function fetchPosts2() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await res.json();
      posts = posts.slice(0, 10);
      for (const post of posts) {
        console.log(`Title: ${post.title}\nBody: ${post.body}`);
      }
    } catch (e) {
      console.log(e);
    }
}
  
fetchPosts2();