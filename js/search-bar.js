var searchBtn = document.getElementById("btn-onclick");

var searchInput = document.getElementById("search-input");

var flag = 0;
searchInput.onclick = function(){
    if (flag === 0) {
        searchInput.value = '';
        flag = 1;
    }
}

searchBtn.onclick = function(){
    alert(`You are trying to search ${searchInput.value}`);
}