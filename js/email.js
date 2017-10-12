function emailCheck() {
    var validate = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
    email = document.getElementsByName('email');
    result = validate.match(email);
    console.log(result);
    if(result){
        document.getElementById("output").innerHTML = ':)';
    }else{
        document.getElementById("output").innerHTML = ':(';
    }

}