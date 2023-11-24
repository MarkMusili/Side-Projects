let btn = document.getElementById("lsenterbuttonid");
btn.addEventListener('click', short);

function short(){
    let longurl = document.getElementById("lsinputid").value;
    console.log(longurl);
}