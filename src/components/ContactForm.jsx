import {useState} from 'react'

function ContactForm({onAddContact}) {
    const [name, setName] =useState('')
    const [email, setEmail] =useState('')
    const [phone, setPhone] =useState('')
    const handleSubmit = (e)=> {
        e.preventDefault()
        if (!email.includes('@')){
            return
        }

        const newContact = {
            id: Date.now().toString(),
            name: name,
            email: email,
            phone: phone
        }
        onAddContact(newContact)
        setName('')
        setEmail('')
        setPhone('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2> Add Contact</h2>
            
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" placeholder="Name" required/>
            onChange={(e) => setName(e.target.value)}
            value={name}

             <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Email" required/> 
            onChange={(e) => setEmail(e.target.value)}
            value={email}

            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="tel" placeholder="Phone" />
            onChange= {(e) => setPhone(e.target.value)}
            value={phone}

            <button type="submit">Add Contact</button>
        </form>

// the code for the required in the react way, I asked in google search//
) 
}

export default ContactForm