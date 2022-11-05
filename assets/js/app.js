const postGrid = document.querySelector('.post-grid');


let postDetails = [
  {
    img: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam a cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam a cupiditate?'
  },
  {
    img: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam a cupiditate?'
  },
  {
    img: 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ipsam a cupiditate?'
  },
]

let generatePost = '';
postDetails.forEach(post => {
  generatePost += `<div class="post-card">
    <div class="post-preview">
      <img src="${post.img}" alt="" class="post-image">
    </div>
    <div class="post-details">
      <p>${post.details}</p>
    </div>
  <a class="post-view" href="">View More &rarr;</a>
  </div>`;
});


postGrid.innerHTML = generatePost;