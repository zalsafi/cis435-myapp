function ContactItem({ contact }) {
return (
    <tr>
        <td> {contact.name} </td>
         <td> {contact.phone} </td>
         <td> {contact.email} </td>
         <td> <button>Delete</button></td>
         </tr>  
)
}

export default ContactItem