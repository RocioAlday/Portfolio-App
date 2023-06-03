export function validation(input) {
    let errors= {};

    if(!input.firstname) {
        errors.firstname= 'Please complete with your Firstname'
    } else if (!/^[\s\S]{3,20}$/.test(input.firstname)) {
        errors.firstname = 'Firstname requires 3 - 20 characters';
    }

    if(!input.lastname) {
        errors.lastname= 'Please complete with your Lastname'
    } else if (!/^[\s\S]{3,20}$/.test(input.firstname)) {
        errors.lastname = 'Lastname requires 3 - 20 characters';
    }

    if(!input.email) {
        errors.email= 'Please complete with your Email'
    } else if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(input.email)) {
        errors.email= 'Please insert a valid email'
    }
    
    if(!input.message) {
        errors.message = "Message is required";
    } else if(!/^[\s\S]{10,500}$/.test(input.message)) { //entre 10-500 caracteres
      errors.message = "Message is too short";
    }

    return errors;
}