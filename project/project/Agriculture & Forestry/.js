let schools = document.getElementsByClassName('schools')
let heart = document.getElementById('heart')
heart.addEventListener('click', function(){
    schools.remove(heart)
})