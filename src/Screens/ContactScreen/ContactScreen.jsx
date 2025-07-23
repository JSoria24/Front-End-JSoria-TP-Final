import React, { useContext, useState } from 'react';
import ContactList from '../../Components/ContactList/ContactList';
import { getContactList } from '../../services/contactService';
import { ContactContext } from '../../Context/ContactContext';
import ICONS from '../../constants/Icons';




const ContactScreen = () => {
    const contacts = getContactList()
    const [contactsState, setContactsState] = useState(contacts);
    const valor = useContext(ContactContext)
	console.log('Este es el valor de mi contexto', valor)
    return (
        <div>
            <img src='/images/auto-rojo-2.jpg' width={100}/>
            <h1>Mis contactos: <ICONS.BiBus className='bondi'/> </h1>

            <ContactList contacts={contactsState} />
        </div>
    );
};

export default ContactScreen;

/* 
v1:
Hace un componente de React llamado ContactScreen, que tenga un estado con la lista de contactos, dicha lista debera renderizarse dentro del componente, por cada contacto quiero que crees un <div></div> con la informacion del contacto. Observa las propiedades de cada contacto para mostrarlas en la pantalla, necesito que dividas el renderizado de la lista en un componente aparte llamado ContactList que reciba el estado de la lista y cada ContactItem tambien sera un componente aparte. 
*/