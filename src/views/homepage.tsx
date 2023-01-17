import React from "react";
import { HighlightSpanKind } from "typescript";
import { ContactDetails } from "../app/components/contactDetailsSection/contactDetail";
import ContactForm from "../app/components/contactForm/contactForm";
import { ContactsSection } from "../app/components/contactTileSection/contactsSection";
import {IHomeProps , IHomeState , Contact} from './IHomePage'
export class Homepage extends React.Component<IHomeProps,IHomeState>{
    constructor(props:IHomeProps){
        super(props)
        this.state={
            highlightedContactId:'',
            contactToBeDisplayed:undefined,
            contacts:JSON.parse(sessionStorage.getItem('addbook') as string),
            isEditClicked:false
        }
        this.handleClick=this.handleClick.bind(this)
        this.deleteContact=this.deleteContact.bind(this)
        this.editContact=this.editContact.bind(this)
        this.closeEditForm=this.closeEditForm.bind(this)
    }
    componentDidMount(): void {
        if(this.state.contacts.length!=0){
            this.setState({
                highlightedContactId:this.state.contacts[0].contact_id,
                contactToBeDisplayed:this.state.contacts[0]
            }
            )
        }
    }
    handleClick(id:string){
        let contactSelected:Contact|undefined;
        if(this.state.contacts!=null){
        for(let i=0;i<this.state.contacts.length;i++){
            if(this.state.contacts[i].contact_id===id){
                contactSelected=this.state.contacts[i];
                break;
            }
        }
    }
        this.setState({
            highlightedContactId:id,
            contactToBeDisplayed:contactSelected,   
        })
    }

    closeEditForm(){
        this.setState({
            isEditClicked:false
        })
    }
    editContact(id:string){
        this.setState({
            isEditClicked:true,
            highlightedContactId:id
        })
    }
    deleteContact(){
        this.setState({
            highlightedContactId:'',
            contactToBeDisplayed:undefined,
            contacts:JSON.parse(sessionStorage.getItem('addbook') as string)
        })
    }
    render(): React.ReactNode {
        let details=<></>;
        if(this.state.contactToBeDisplayed!==undefined){
            details=<ContactDetails contact={this.state.contactToBeDisplayed} onDelete={this.deleteContact} onEdit={this.editContact}/>
        }
        return(
            <div className="container">
            <ContactsSection onContactTileClick={(id)=>{this.handleClick(id)}}/>
            {(this.state.isEditClicked)?<ContactForm contactId={this.state.highlightedContactId} closeForm={this.closeEditForm}/>:details}
           </div>
        )
    }
}

