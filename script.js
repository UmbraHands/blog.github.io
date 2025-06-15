// 模擬文章資料（可手動更新或未來連動後端）
const postsData = [
  {
    id: 2,
    content: "這是我的第二篇文章！包含一首歌：", // 文章內容，可自訂
    image: "https://via.placeholder.com/600x300", // 圖片 URL，可設為 "your-image.jpg"
    youtube: "dQw4w9WgXcQ", // YouTube 影片 ID，可設為 "n1b9V5vQ8lQ"
    date: "2025-06-15" // 發布日期，可設為 "2025-06-16"
  },
  {
    id: 1,
    content: "這是我的第一篇文章，歡迎留言！", // 文章內容，可自訂
    image: "https://via.placeholder.com/600x300", // 圖片 URL，可設為 "your-image.jpg"
    youtube: "n1b9V5vQ8lQ", // YouTube 影片 ID，可設為 "dQw4w9WgXcQ"
    date: "2025-06-14" // 發布日期，可設為 "2025-06-15"
  }
];

// 渲染文章函數
function renderPosts() {
  const postsContainer = document.getElementById('posts'); // 獲取貼文容器元素
  postsContainer.innerHTML = ''; // 清空容器內容
  postsData.forEach(post => { // 遍歷每篇貼文數據
    const postElement = document.createElement('div'); // 創建新 div 元素
    postElement.className = 'post'; // 設定類名
    postElement.innerHTML = `
      <div class="post-content">${post.content}</div> <!-- 顯示文章內容 -->
      ${post.image ? `<img src="${post.image}" alt="Post image">` : ''} <!-- 條件顯示圖片 -->
      ${post.youtube ? `
        <div class="post-video">
          <iframe src="https://www.youtube.com/embed/${post.youtube}" 
                  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen></iframe>
        </div>
      ` : ''} <!-- 條件顯示 YouTube 影片 -->
      <div class="post-date">${post.date}</div> <!-- 顯示發布日期 -->
      <div class="giscus" data-giscus-post-id="${post.id}"></div> <!-- 留言系統區塊 -->
    `;
    postsContainer.appendChild(postElement); // 添加到容器
  });
}

// 取得訪客 IP 並顯示為留言匿名名稱
async function setAnonymousName() {
  try {
    const response = await fetch('https://api.ipify.org?format=json'); // 發送 API 請求
    const data = await response.json(); // 解析回應數據
    console.log(`訪客 IP: ${data.ip}`); // 輸出 IP 至控制台，可改為顯示在頁面
  } catch (error) {
    console.error('無法取得 IP:', error); // 處理錯誤
  }
}

// 頁面載入時執行
window.onload = () => {
  renderPosts(); // 渲染貼文
  setAnonymousName(); // 獲取 IP
};
