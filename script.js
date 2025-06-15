// 模擬文章資料（可手動更新或未來連動後端）
const postsData = [
  {
    id: 2,
    content: "這是我的第二篇文章！包含一首歌：",
    image: "https://via.placeholder.com/600x300",
    youtube: "dQw4w9WgXcQ",
    date: "2025-06-15"
  },
  {
    id: 1,
    content: "這是我的第一篇文章，歡迎留言！",
    image: "https://via.placeholder.com/600x300",
    youtube: "n1b9V5vQ8lQ",
    date: "2025-06-14"
  }
];

// 渲染文章
function renderPosts() {
  const postsContainer = document.getElementById('posts');
  postsContainer.innerHTML = '';
  postsData.forEach(post => {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
      <div class="post-content">${post.content}</div>
      ${post.image ? `<img src="${post.image}" alt="Post image">` : ''}
      ${post.youtube ? `
        <div class="post-video">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${post.youtube}" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
        </div>
      ` : ''}
      <div class="post-date">${post.date}</div>
      <div class="giscus" data-giscus-post-id="${post.id}"></div>
    `;
    postsContainer.appendChild(postElement);
  });
}

// 取得訪客 IP 並顯示為留言匿名名稱
async function setAnonymousName() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    console.log(`訪客 IP: ${data.ip}`);
  } catch (error) {
    console.error('無法取得 IP:', error);
  }
}

window.onload = () => {
  renderPosts();
  setAnonymousName();
};
