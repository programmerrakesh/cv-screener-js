console.log('This is the app for cv screener');
const data = [
    {
        name: 'Rakesh Roy' ,
        age:34 ,
        city: 'dinajpur' ,
        language: 'javascript' ,
        framework: 'jquery' ,
        image: 'https://randomuser.me/api/portraits/men/76.jpg' 
    },

     {
        name: 'Liton Roy' ,
        age: 20 ,
        language: 'Go' ,
        framework: 'Empty' ,
        city: 'Rangpur' ,
        image: 'https://randomuser.me/api/portraits/men/75.jpg' 
    },

    {
        name: 'Sourov Roy' ,
        age: 25 ,
        city: 'Rajshahi' ,
        language: 'Pythone' ,
        framework: 'Django' ,
        image: 'https://randomuser.me/api/portraits/men/74.jpg' 
    }, 

    {
        name: 'Borun Roy' ,
        age: 34 ,
        city: 'Tangail' ,
        language: 'Pythone' ,
        framework: 'Flax' ,
        // image: './images/dmrakesh.jpg' ,
        image : ' https://randomuser.me/api/portraits/men/60.jpg' 
    },

    {
        name: 'Nitto Roy' ,
        age: 38 ,
        city: 'Gazipur' ,
        language: 'C++' ,
        framework: 'Framework' ,
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
    },

    {
        name: 'Anu Roy',
        age: 17 ,
        city: 'Dinajpur' ,
        language: 'javascript' ,
        framework: 'jquery' ,
        image: 'https://randomuser.me/api/portraits/women/76.jpg' 
    }
];



// cv iterator
function cvIterator(profiles){
    let nextIndex = 0 ;
    return {
        next : function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} :
            {done: true} ;
        }

    };

}

const candiDates = cvIterator(data);
nextCV();
// button listener for the next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    const currentCandidates = candiDates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');

    if(currentCandidates != undefined){ 
    image.innerHTML = `<img src = '${currentCandidates.image}'>`
    profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item"> Name : ${currentCandidates.name}</li>
    <li class="list-group-item">Age : ${currentCandidates.age}</li>
    <li class="list-group-item">Current City : ${currentCandidates.city}</li>
    <li class="list-group-item">Programming Language : ${currentCandidates.language}</li>
    <li class="list-group-item">Language Framework : ${currentCandidates.framework}</li>
    </ul>` ;
}
else{
    alert('end of candidate application');
    window.location.reload();
}
};