document.addEventListener('DOMContentLoaded', function () {
    const mainbar = document.querySelector('.mainbar');
    let page = 1; 
    let isLoading = false;

   
    const API_KEY = 'J04czehx-0Zqt4G6A6fNiJ_ee50ngRwS4nddRcTEEcM';

    
    const fetchPosts = async () => {
        if (isLoading) return; 
        isLoading = true;

        try {
            
            const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`);
            const posts = await postsResponse.json();

            
            const imagesResponse = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=5&client_id=${API_KEY}`);
            const images = await imagesResponse.json();

            
            console.log('Posts:', posts);
            console.log('Images:', images);

            
            if (posts.length === 0 || images.length === 0) return;

            
            posts.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                
                const imageUrl = images[index] ? images[index].urls.small : '';
                console.log('Image URL for post', post.id, ':', imageUrl); 

                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
                    ${imageUrl ? `<img src="${imageUrl}" alt="Post Image" class="post-image" />` : ''}
                `;

                mainbar.appendChild(postElement);
            });

            page++; 
        } catch (error) {
            console.error('Ошибка при загрузке постов:', error);
        } finally {
            isLoading = false;
        }
    };

    
    mainbar.addEventListener('scroll', () => {
        
        if (mainbar.scrollTop + mainbar.clientHeight >= mainbar.scrollHeight) {
            fetchPosts(); 
        }
    });

    
    fetchPosts();
});
