// 模擬文章資料（可手動更新或未來連動後端）
const postsData = [
  {
    id: 2,
    content: "這是我的第二篇文章！",
    image: "https://via.placeholder.com/600x300",
    date: "2025-06-15"
  },
  {
    id: 1,
    content: "這是我的第一篇文章，歡迎留言！",
    image: "https://via.placeholder.com/600x300",
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
      <div class="post-date">${post.date}</div>
      <div class="giscus" data-giscus-post-id="${post.id}"></div>
    `;
    postsContainer.appendChild(postElement);
  });
}

// 取得訪客 IP 並顯示為留言匿名名稱（使用 ipify API）
async function setAnonymousName() {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    // 這裡假設 Giscus 支援自訂顯示名稱，實際需前端處理
    console.log(`訪客 IP: ${data.ip}`); // 可進一步自訂顯示
  } catch (error) {
    console.error('無法取得 IP:', error);
  }
}

window.onload = () => {
  renderPosts();
  setAnonymousName();
};
