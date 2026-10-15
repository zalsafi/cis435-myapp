function ContactForm() {
    return (
        <>
            <label htmlFor="name">Name:</label>
            <input type="text" placeholder="Name" />
             <label htmlFor="email">Email:</label>
            <input type="email" placeholder="Email" /> 
            <label htmlFor="phone">Phone:</label>
            <input type="tel" placeholder="Phone" />
        </>

// this code for the required field I asked in google search//
) 
const emailInput = document.getElementById('email');
emailInput.required = true;

const nameInput = document.getElementById('name');
nameInput.required = true;
}

export default ContactForm