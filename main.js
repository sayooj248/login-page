login=()=>{
    let username=unname.value
    let password=pawd.value
    console.log(username)
    if(!username || !password){
        alert("invalied credentials  login failed")
    }
    else{
        localStorage.setItem("username",username)
        console.log(`Username: ${username}, password: ${password}`);
        window.location="dash.html"
    }
}  