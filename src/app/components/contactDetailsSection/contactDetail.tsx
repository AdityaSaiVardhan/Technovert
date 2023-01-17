import React from "react";
import './contactDetail.css'
import { IContactDetailProps, IContactDetailState } from "./IContactDetail";
import editIcon from '../../../images/edit1.jpg'
import deleteIcon from '../../../images/delete1.png'
import { Navigate } from "react-router-dom";
import ContactForm from "../contactForm/contactForm";
export class ContactDetails extends React.Component<IContactDetailProps,IContactDetailState>{
    constructor(props:IContactDetailProps){
        super(props)
        this.state={
            isClicked:false
        }
        this.handleDelete=this.handleDelete.bind(this)
        this.handleEdit=this.handleEdit.bind(this)
    }
    render(): React.ReactNode {
        return(
            <>
            <div className="contact_information_preview">
                <div className="contact_details">
                    <div className="contact_name_details"><span id="contact_name">{this.props.contact.contact_name_field}</span></div>
                    <div><span id="contact_email">Email:{this.props.contact.contact_email_field}</span></div>
                    <div className="contact_numbers">
                        <div><span id="contact_mobile">Mobile:{this.props.contact.contact_mobile_field}</span></div>
                        <div><span id="contact_landline">Landline:{this.props.contact.contact_landline_field}</span></div>
                    </div>
                    <div className="website_details">
                        <div><span id="contact_website">Website:{this.props.contact.contact_website_field}</span></div>
                    </div>
                    <div><span id="contact_address"></span>Address:{this.props.contact.contact_address_field}</div>
                </div>
            </div>
            <div className="options">
                <div className="functionality" id="edit" onClick={this.handleEdit}>
                    <img src={editIcon}></img>
                </div>
                <span className="edit">EDIT</span>
                <div className="functionality" id="delete" onClick={this.handleDelete}>
                    <img src={deleteIcon}></img>
                </div>
                <span className="delete">DELETE</span>
            </div>
            </>
            
        )
    }
    handleDelete() {
        let response=window.confirm('Are you sure you want to delete the contact?')
        if(response){
        let id=this.props.contact.contact_id
        let contacts=JSON.parse(sessionStorage.addbook);
        for(let i=0;i<contacts.length;i++){
            if(contacts[i].contact_id===id){
                contacts.splice(i,1);
                break;
            }           
        }
        sessionStorage['addbook']=JSON.stringify(contacts);
        JSON.parse(sessionStorage.addbook);
        this.props.onDelete()
    }
}   
    handleEdit(){
        this.props.onEdit(this.props.contact.contact_id);
    }
}