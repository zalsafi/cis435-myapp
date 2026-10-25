import ContactItem from './ContactItem'
function ContactList({ contacts, onDeleteContact, filter }) {
  const table = <table className="table">

          <thead>
          <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact}/>
          ))}
          </tbody>
        </table>
        
  return (
    <div>
        <h2>Contact List</h2>
        {contacts.length===0 ? filter ? 'No matches found for &"{filter}"' :"No contacts yet. Add one above!": table}
        </div>
  )
}
export default ContactList 