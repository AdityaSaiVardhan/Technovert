import React from 'react';
import './contactsSection.css'
import ContactTile from './contactTile';
import { IContactSectionProps, IContactSectionState } from './IcontactTile';
export class ContactsSection extends React.Component<IContactSectionProps,IContactSectionState>{
    constructor(props:IContactSectionProps){
        super(props)
        this.state={
        contacts:JSON.parse(window.sessionStorage.getItem("addbook") as string),
        highlightedContact:''
        }
    }       
    componentDidMount(): void {
        if(this.state.contacts.length)
        this.setState({
            highlightedContact:this.state.contacts[0].contact_id
        })
    }
    static getDerivedStateFromProps(props:IContactSectionProps,state:IContactSectionState){
        if(state.contacts!==JSON.parse(window.sessionStorage.getItem("addbook") as string)){
            return {
                contacts:JSON.parse(window.sessionStorage.getItem("addbook") as string)
            }
        }
    }
    render(): React.ReactNode {
        
        let contactTiles:JSX.Element[]=[];
        if(this.state.contacts!=null){
        for(let i=0;i<this.state.contacts.length;i++){
            contactTiles.push(<li><ContactTile key={this.state.contacts[i].contact_id} contactName={this.state.contacts[i].contact_name_field} contactEmail={this.state.contacts[i].contact_email_field} contactNumber={this.state.contacts[i].contact_mobile_field} onClick={()=>{this.setState({highlightedContact: this.state.contacts[i].contact_id}); this.props.onContactTileClick(this.state.contacts[i].contact_id)}} isClicked={(this.state.contacts[i].contact_id==this.state.highlightedContact)?true:false}/></li>)
        }
        }
        return(
           <div className="address_book_information" id="address_book_information">
                {(contactTiles.length>0)?<h4>CONTACTS</h4>:<div id="empty_directory">No contacts to be displayed.Please add a contact.</div>}
              <ul className='contactPreview' id="contactPreview">{contactTiles}</ul>
            </div>
        )
    }
}