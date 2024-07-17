const addEventOnElements = function (elements, eventType, callback){
    for(let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback)
    }
}
/**
 * Navbar toggler for mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglerNav = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}
addEventOnElements(navTogglers, "click" ,togglerNav );
/**
 * Header
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll" , function (){

    header.classList[window.scrollY > 100 ? "add" : "remove"]("active")
})


// show dropdown

const dropdownItems = document.querySelectorAll('.dropdown-item')

dropdownItems.forEach((item)=> {
    const dropdownButton = item.querySelector('.dropdown-button')
    
    dropdownButton.addEventListener('click', () =>{
        const showDropdown = document.querySelector('.show-dropdown')
        toggleItem(item)

        if(showDropdown && showDropdown != item){
            toggleItem(showDropdown)
        }
    })
});

const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown_container')

    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    } else{
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }
    
}