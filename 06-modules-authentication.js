export function validateLoginData(email, password){
    const emailValidator = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const passwordValidator = new RegExp(/[A-Za-z\d\!\@\#\$\%\^\&\*]{8,}/);

    if(emailValidator.test(email)){
        if(passwordValidator.test(password)){
            return "Welcome to the jungle";
        }else{
            return "tolong masukkan password sesuai ketentuan";
        }
    }else{
        return "tolong masukkan email yang valid";
    }
}