const requestUrl = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest(); // by this only we can recive and send our data
xhr.open('GET', requestUrl)

const button = document.querySelector('button'); 

button.addEventListener('click', () => { 
    console.log("button clicked");


xhr.onreadystatechange = function(){   // this for continously tracking
    console.log(xhr.readyState);
    
        if(xhr.readyState === 4) {
        
        const data = JSON.parse(this.responseText) // JSON.parse converted data into json // imp
        
        console.log(typeof data);
        // console.log(this.responseText); // this will be taught in Prototype later
        
        console.log(data.followers)
        console.log(data.public_repos)
        console.log(data.public_gists)
}
}

xhr.send(); // this is for sending data
    

});


     


