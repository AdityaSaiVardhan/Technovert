export interface IContactTileState{
    
}
export interface IContactTileProps{
    contactName: string;
    contactEmail: string;
    contactNumber: string;
    onClick:()=>void
    isClicked:boolean
}
export interface IContactSectionProps{
    onContactTileClick:(id:string)=>void
}
export interface IContactSectionState{
    contacts:IContact[]
    highlightedContact:string
}
interface IContact {
    contact_name_field:string
    contact_email_field:string
    contact_mobile_field:string
    contact_landline_field:string
    contact_website_field:string
    contact_address_field:string
    contact_id:string
}