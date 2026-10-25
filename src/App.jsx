import { useState } from 'react'
import ContactForm from './components/ContactForm'
import SearchBar from './components/SearchBar'
import ContactList from './components/ContactList'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter]= useState('')

const filteredContacts = contacts.filter((contact)=>{
  const name = contact.name.toLowerCase()
  const email = contact.email.toLowerCase()
  const phone = contact.phone.toLowerCase()
  const search = filter.toLowerCase()

  return name.includes(search) || email.includes(search) || phone.includes(search)})
  const addContact = (contact) => {
    setContacts([...contacts, contact])
  }
const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }
  return (
    <>
      <section id="center">
        <div>
          <h1>Contacts</h1>
          <ContactForm onAddContact={addContact}/>
          <SearchBar onSearch={setFilter} />
          <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} filter={filter}/>

        </div>
      </section>
    </>
  )
}

export default App
