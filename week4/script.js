 // Validate Form
  function validateForm() {
    //alert ("validateForm called");
    var firstname = document.getElementById("fname");
    var lastname = document.getElementById("lname");
    var password = document.getElementById("password");

    if (firstname.value =="" && lastname.value =="" && password.value == "") {
      alert ("Please Fill in All Entries on The Form");
    }
    else if (firstname.value =="" && lastname.value =="") {
      alert ("Please Enter All Required Information");
    }
    else if (lastname.value =="" && password.value == "") {
      alert ("Please Enter All Required Information");
    }
    else if (password.value == "" && firstname.value =="") {
      alert ("Please Enter All Required Information");
    }
    else if (firstname.value =="") {
      alert ("Please Enter Your First Name");    
    }
    else if (lastname.value =="") {
      alert ("Please Enter Your Last Name");
    }
    else if (password.value =="") {
      alert ("Please Enter Your Password");
    }
    else if (!validatePassword(password.value)) {
      alert ("Enter a Valid Password");
    } else {
      alert ("Success!")
    }



  } 
  // Validate Password
  function validatePassword(password) {
    const validLowerChars = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
    const validUpperChars = validLowerChars.toUpperCase(validLowerChars.split(","));
    //console.log(password);
    if (password.length < 8) {
        return false;
    }
    let foundUppercaseChar = false;
    let foundLowercaseChar = false;
    for (let i = 0; i < password.length; i++) {
        let passwordChar = password[i];
        //console.log(passwordChar);
        if (validUpperChars.includes(passwordChar)) {
            foundUppercaseChar = true;
            //console.log("uppercase char:" + passwordChar);
        } 
        else if (validLowerChars.includes(passwordChar)) {
            foundLowercaseChar = true;
            //console.log("lowercase char:" + passwordChar);
        }
    }
    if (!foundUppercaseChar || !foundLowercaseChar) {
        return false;
    }

    return true;
}