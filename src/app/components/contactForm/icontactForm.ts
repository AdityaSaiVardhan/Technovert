export interface IContactFormProps{
    contactId?:string
    closeForm?:()=>void
}
export interface obj_created{
    contact_name_field: string; 
    contact_email_field: string; 
    contact_mobile_field: string; 
    contact_landline_field: string;
    contact_website_field: string; 
    contact_address_field: string;
    contact_id:number;
};

export interface IContactFormState{
    contacts: obj_created[]
    contact_name:string
    contact_email:string
    contact_mobile:string
    contact_landline:string
    contact_website:string
    contact_address:string
    name_error:boolean
    email_error:boolean;
    phone_error:boolean;
    landline_error:boolean;
    website_error:boolean;
     address_error:boolean;
     redirect:boolean;
}