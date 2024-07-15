const searchBtn = document.getElementById("btn-onclick");

const searchInput = document.getElementById("search-input");

var flag = 0;
// searchInput.onclick = function(){
//     if (flag === 0) {
//         searchInput.value = '';
//         flag = 1;
//     }
// }

searchInput.addEventListener('click', function(){
    if (flag === 0) {
        searchInput.value = '';
        flag = 1;
    }
});

// searchBtn.onclick = function(){
//     alert(`You are trying to search ${searchInput.value}`);
// }

// searchBtn.addEventListener('click', function(){
//     alert(`You are trying to search ${searchInput.value}`);
// });


//Implement throttling using vanilla JavaScript.
function inputValue(){
    console.log(`You are trying to search ${searchInput.value}`);
}

function debounceInput(fn, t){
    let timer;
    return function (){
        if(timer) clearTimeout(timer)
        timer = setTimeout(function(){fn()}, t)
    }
}

searchInput.addEventListener('input', debounceInput(inputValue, 1000));
searchBtn.addEventListener('click', function(){
    alert(`You are trying to search ${searchInput.value}`);
});