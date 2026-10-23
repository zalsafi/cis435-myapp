function ContactList({ contacts }) {
  const table = <table>
          <thead>
          <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
              <td> {contact.name}</td>
              <td> {contact.phone}</td>
              <td> {contact.email}</td>
              </tr>
          ))}
          </tbody>
        </table>
  return (
    <div>
        <h2>Contact List</h2>
        {contacts.length===0 ?"No contacts yet. Add one above!": table}

        </div>
  )
}
export default ContactList 