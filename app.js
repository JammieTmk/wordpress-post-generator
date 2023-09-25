fetch('https://rtcamp.com/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.classList.add('post');
          postElement.innerHTML = `
            <h2>${post.title.rendered}</h2>
            <img src="${post.featured_image_url}" alt="${post.title.rendered}">
            <p>${post.excerpt.rendered}</p>
            <button><a href="${post.link}">Read More</a></button>
          `;
          document.getElementById('post-container').appendChild(postElement);
        });
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });