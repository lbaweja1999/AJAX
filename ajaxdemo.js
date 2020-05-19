function ajaxcall(){
    var input=document.querySelector("#searchinput");
    var searchstring=input.value;
    var div=document.querySelector("#imageframe");
   var url =`http://api.giphy.com/v1/gifs/search?q=${searchstring}&api_key=7baM78Zfu4Fs0NSfMEECZNbBWWyAVFo2&limit=20`;
    var promise=fetch(url);
promise.then(response=>{
    response.json().then(images=>{
        images.data.forEach(image => {
            let img=document.createElement('img');
            img.src=image.images.original.url;
            div.appendChild(img);
            
        });
    
    
}).catch(err=>{
    console.log("Not in JSON format",err);
})
}).catch(err=>{
    console.log("Server Error",err);
});
}