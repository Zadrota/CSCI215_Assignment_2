function emailCheck() {
    //this is supposed to be the pattern to validate against.
    var validate = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$';
    email = document.getElementsByName('email');
    //This should compare the validation criteria with the e-mail given by the user.
    result = validate.match(email);

    //troubleshooting...
    console.log(result);

    //determines successful validation. currently only returns a frown because the validate.match doesn't kick off correctly.
    if(result){
        document.getElementById("output").innerHTML = ':)';
    }else{
        document.getElementById("output").innerHTML = ':(';
    }

}