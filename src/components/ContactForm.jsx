function ContactForm() {
    return (
        <form>
            <h2> Add Contact</h2>
            
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name" required/>

             <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Email" required/> 

            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="tel" placeholder="Phone" />

            <button type="submit">Add Contact</button>
        </form>

// the code for the required in the react way, I asked in google search//
) 
}

export default ContactForm