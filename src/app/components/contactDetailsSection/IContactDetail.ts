export interface IContactDetailProps{
    contact:Contact
    onDelete:()=>void
    onEdit:(id:string)=>void
}
export interface IContactDetailState{
    isClicked:boolean
}
interface Contact{
    contact_name_field:string
    contact_email_field:string
    contact_mobile_field:string
    contact_landline_field:string
    contact_website_field:string
    contact_address_field:string
    contact_id:string
}