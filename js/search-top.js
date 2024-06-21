const btn = document.querySelector('.search-top-btn'); // 加点表示选择类
const searchInput = document.querySelector('.search-top'); // 加点表示选择类

btn.addEventListener('click', function(){
    alert(`You are trying to search ${searchInput.value}`); // 改为 alert
})