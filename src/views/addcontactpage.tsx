import React from 'react'
import ContactForm from '../app/components/contactForm/contactForm'
import { ContactsSection } from '../app/components/contactTileSection/contactsSection'
import { IAddContactPageProps,IAddContactPageState } from './IAddContactPage'
class AddContact extends React.Component{
    render(): React.ReactNode {
        return(
            <div className='container'>
            <ContactsSection onContactTileClick={(id)=>{}} />
            <ContactForm />
            </div>
        )
    }
}
export default AddContact