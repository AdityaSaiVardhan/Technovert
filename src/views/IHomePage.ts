export interface IHomeProps{

}
export interface IHomeState{
    highlightedContactId:string
    contactToBeDisplayed:Contact|undefined
    contacts:Contact[]
    isEditClicked:boolean
}
export interface Contact{
    contact_name_field:string
    contact_email_field:string
    contact_mobile_field:string
    contact_landline_field:string
    contact_website_field:string
    contact_address_field:string
    contact_id:string
}