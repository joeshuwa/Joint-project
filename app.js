
const moonIcon =document.querySelector('.fa-moon')
const dark = document.getElementById('darkToggle');
const sunIcon = document.querySelector('.fa-sun');
const copied = document.querySelector('.copied')

//Disables the display of Sun icon initially.
sunIcon.style.display = "none"

//Changes light theme to dark theme when Moon Icon is clicked.

dark.addEventListener('click', ()=>{
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        
    }
})

//Revert the Dark theme to Light Theme when Sun icon is clicked

sunIcon.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline-block';
    });

//Removes the placeholders on SearchInput when typing

const searchInput = document.querySelector('.search')
searchInput.addEventListener('input', ()=>{
    const searchIcon = document.querySelector('.search-icon');
    if (searchInput.value !==""){
        searchIcon.style.display ="none";
        searchInput.style.padding =" 0.5rem 0.5rem 0.5rem 0.5rem"
    } else {
        searchIcon.style.display ="inline-block";
        searchInput.style.padding =" 0.5rem 0.5rem 0.5rem 1.8rem"
    }

})

//Copies the input field to the clipboard when the copy icon is clicked.

function copyClick () {
    const shareInput = document.querySelector('.share-input');
    navigator.clipboard.writeText(shareInput.value)
    .then(()=>{
        console.log("copied")
        copied.style.display ="block";

        setTimeout(()=>{
            copied.style.display ="none"
        },1000)

    })
    .catch(()=>{
        console.error("Can't copy")
    })
    
}

