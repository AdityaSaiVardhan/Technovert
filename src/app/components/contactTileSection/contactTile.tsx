import React from 'react';
import './contactTile.css'
import { IContactTileState , IContactTileProps } from './IcontactTile';
class ContactTile extends React.Component<IContactTileProps,IContactTileState>{
        constructor(props:IContactTileProps){
            super(props)
            
            this.handleClick=this.handleClick.bind(this)   
        }
        handleClick(){
            this.props.onClick();
        }
        render(){
        return (
            <div className={(this.props.isClicked)?'contact_preview active':'contact_preview'} onClick={this.handleClick}>
                <div><span className="name">{this.props.contactName}</span></div>
                <div className="details">
                <div><span className="email">{this.props.contactEmail}</span></div>
                <div><span className="mobile">{this.props.contactNumber}</span></div>
                </div>
            </div>
        )

    }
}
export default ContactTile;