import React from "react";
import './contactForm.css'
import { IContactFormProps, obj_created } from "./icontactForm";
import { IContactFormState } from "./icontactForm";
import { Navigate } from "react-router-dom"
class ContactForm extends React.Component<IContactFormProps,IContactFormState>{
    constructor(props:IContactFormProps){
        super(props)
        this.state={
            contact_name:"",
            contact_email: "",
            contact_mobile:"",
            contact_landline:"",
            contact_website:"",
            contact_address:"",
            name_error:false,
            email_error:false,
            phone_error:false,
            landline_error:false,
            website_error:false,
            address_error:false,
            redirect:false,
            contacts:JSON.parse(sessionStorage.getItem('addbook') as string),
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    componentDidMount(): void {
        if(this.props.contactId!==undefined){
            let contact=this.state.contacts.filter((contact)=>contact.contact_id===Number(this.props.contactId))[0]
            this.setState({
                contact_name:contact.contact_name_field,
                contact_email:contact.contact_email_field,
                contact_mobile:contact.contact_mobile_field,
                contact_landline:contact.contact_landline_field,
                contact_website:contact.contact_website_field,
                contact_address:contact.contact_address_field
            })
        }
    }
   validate=(e:any)=>{
   let alphabets=/[^a-zA-Z\s]/gi;
   let name_reg=/^[a-zA-Z\s]*$/;
   let email_reg=/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   let phone_reg=/^\+?[1-9][0-9]{9,14}$/;
   let landline_reg=/\d{5}([- ]*)\d{6}/;
   let digits=/[^0-9]/gi;
   let website_reg=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
        switch(e.target.id)
        {
            case 'contact_name_field':{
                this.setState({contact_name:e.target.value})
                if(e.target.value==="")
                {
                    this.setState({name_error:true})
                }
               else if(!name_reg.test(e.target.value))
            {
                e.target.value=e.target.value.replace(alphabets,"");
                console.log(e.target.value)
                this.setState({contact_name:e.target.value})
                this.setState({name_error:true})
            }
            else{
                this.setState({name_error:false})
            }
            break;
        }
            case 'contact_email_field':{
                this.setState({
                    contact_email:e.target.value
                })
                //if(e.target.value=="")
                //{
                  // this.setState({email_error:true})
                //}
                  if(!email_reg.test(e.target.value)){
                   this.setState({email_error:true})
                 }
                 else{
                    this.setState({email_error:false})
                 }
                 break;
            }
            case 'contact_mobile_field':{
                this.setState({
                    contact_mobile:e.target.value,
                })
                if(e.target.value==="")
                {
                    this.setState({phone_error:true})
                }
                else if(!phone_reg.test(e.target.value))
                {
                e.target.value=e.target.value.replace(digits,"");
                this.setState({contact_mobile:e.target.value})
                this.setState({phone_error:true})
                }
                else{
                    this.setState({phone_error:false})
                }
                break;
            }
            case 'contact_landline_field':{
                this.setState({
                    contact_landline:e.target.value
                })
                if(e.target.value==="")
                {
                    this.setState({landline_error:true})
                }
                   else if(!landline_reg.test(e.target.value)){
                     
                      e.target.value=e.target.value.replace(digits,"");
                      this.setState({contact_landline:e.target.value})
                      this.setState({landline_error:true})
                }
                   else{
                    this.setState({landline_error:false})
                }
                break;
            }
            case 'contact_website_field':{
                this.setState({
                    contact_website:e.target.value
                })
                if(e.target.value==="")
                   {
                    this.setState({website_error:true})
                   }
                      else if(!website_reg.test(e.target.value)){
                        this.setState({website_error:true})
                   }
                      else{
                        this.setState({website_error:false})
                   }
                break;
            }
            case 'contact_address_field':{
                this.setState({
                    contact_address:e.target.value
                })
                if(e.target.value==="")
                {
                    this.setState({address_error:true})
                }
                else{
                    this.setState({address_error:false})
                }
                break;
            }
        }
    }
    render(): React.ReactNode {
        return(
                <div className="address_book_form_field">
                <form id="address_book_form">
                    <div className="input_data">
                        <label htmlFor="contact_name_field">Name</label><span className="required"> *</span>
                        <input autoComplete="off" type="text" id="contact_name_field" name="contact_name_field" className="input_textbox" value={this.state.contact_name} onChange={(e)=>{this.validate(e)}}/>
                         <span id="contact_name_error" className="val_error" style={{visibility:(this.state.name_error)?'visible':'hidden'}}>{this.state.contact_name===''?"Name Required":"Cannot enter numbers in this field."}</span>
                    </div>
                    <div className="input_data">
                        <label htmlFor="contact_email_field">Email</label><span className="required"> *</span>
                        <input autoComplete="off" type="text" id="contact_email_field" name="contact_email_field" className="input_textbox" value={this.state.contact_email} onChange={(e)=>{this.validate(e)}}/>
                        <span id="contact_email_error" className="val_error" style={{visibility:(this.state.email_error)?'visible':'hidden'}}>{this.state.contact_email===''?"Email Required":"Invalid Email"}</span>
                    </div>
                    <div className="input_data">
                        <div className="mobile_input_data">
                            <label htmlFor="contact_mobile_field">Mobile</label><span className="required"> *</span>
                            <input autoComplete="off" type="text" id="contact_mobile_field" name="contact_mobile_field" className="input_textbox"value={this.state.contact_mobile} onChange={(e)=>{this.validate(e)}}/>
                            <span id="contact_mobile_error" className="val_error" style={{visibility:(this.state.phone_error)?'visible':'hidden'}}>{this.state.contact_mobile===''?"Mobile Number Required":"Invalid Mobile Number "}</span>
                        </div>
                        <div className="landline_input_data">
                            <label htmlFor="contact_landline_field">Landline</label><span className="required"> *</span>
                            <input autoComplete="off" type="text" id="contact_landline_field" name="contact_landline_field" className="input_textbox" value={this.state.contact_landline} onChange={(e)=>{this.validate(e)}}/>
                            <span id="contact_landline_error" className="val_error" style={{visibility:(this.state.landline_error)?'visible':'hidden'}}>{this.state.contact_landline===''?"Landline Number Required":"Invalid Landline Number"}</span>
                        </div>   
                    </div>
                    <div className="input_data">
                        <label htmlFor="contact_website_field">Website</label><span className="required"> *</span>
                        <input autoComplete="off" type="text" id="contact_website_field" name="contact_website_field" className="input_textbox" value={this.state.contact_website} onChange={(e)=>{this.validate(e)}}/>
                        <span id="contact_website_error" className="val_error" style={{visibility:(this.state.website_error)?'visible':'hidden'}}>{this.state.contact_website===''?"Website Required":"Invalid Website"}</span>
                    </div>
                    <div className="input_data">
                        <label htmlFor="contact_address_field">Address</label><span className="required"> *</span>
                        <textarea autoComplete="off" id="contact_address_field" name="contact_address_field" className="input_textbox" rows={4} value={this.state.contact_address} onChange={(e)=>{this.validate(e)}}></textarea> 
                        <span id="contact_address_error" className="val_error" style={{visibility:(this.state.address_error)?'visible':'hidden'}}>{this.state.contact_address===''?"Address Required":"Invalid Address"}</span>
                    </div>
                    <div className="action_buttons">
                    <input type="button" className="add_btn" id="add_btn" value={(this.props.contactId===undefined)?"Add":"Save"} onClick={(this.props.contactId===undefined)?(e)=>this.handleSubmit(e):(e)=>this.updateContact(e)}/>
                    {(this.props.contactId!=undefined)&&<input type="button" className="cancel_btn" id="cancel_btn" value="Cancel" onClick={()=>{if(this.props.closeForm){this.props.closeForm()}}}/>}
                    {this.state.redirect &&<Navigate to='/' replace={true}/>}
                    </div>
                    </form>
            </div>
        )
    }
    handleSubmit(e:React.FormEvent): void {
        if(this.state.name_error===false&&this.state.email_error===false&&this.state.phone_error===false&&this.state.landline_error===false&&this.state.website_error===false&&this.state.address_error===false&&this.state.contact_name!=''&&this.state.contact_email!==''&&this.state.contact_mobile!==''&&this.state.contact_landline!==''&&this.state.contact_website!==''&&this.state.contact_address!==''){
            let id=JSON.parse(sessionStorage.getItem('id') as string)
            let contactObj:obj_created={"contact_name_field":this.state.contact_name,"contact_email_field":this.state.contact_email,"contact_mobile_field":this.state.contact_mobile,"contact_landline_field":this.state.contact_landline,"contact_website_field":this.state.contact_website,"contact_address_field":this.state.contact_address,"contact_id":id[0]};
            let contacts=this.state.contacts;
            contacts.push(contactObj)
            id[0]=id[0]+1;
            sessionStorage['addbook']=JSON.stringify(contacts);
            sessionStorage['id']=JSON.stringify(id)
            this.setState({redirect:true}) 
            alert('Contact Added Successfully!')
            }
        else{
            alert('Please fill all the fields')
        }
    }
    updateContact(e:React.FormEvent): void {
        if(this.state.name_error===false&&this.state.email_error===false&&this.state.phone_error===false&&this.state.landline_error===false&&this.state.website_error===false&&this.state.address_error===false&&this.state.contact_email!==''&&this.state.contact_mobile!==''&&this.state.contact_landline!==''&&this.state.contact_website!==''&&this.state.contact_address!==''){
            let contactObj:obj_created={"contact_name_field":this.state.contact_name,"contact_email_field":this.state.contact_email,"contact_mobile_field":this.state.contact_mobile,"contact_landline_field":this.state.contact_landline,"contact_website_field":this.state.contact_website,"contact_address_field":this.state.contact_address,"contact_id":Number(this.props.contactId)};
            let contacts=this.state.contacts;
            contacts.map((contact)=>{if(contact.contact_id!==Number(this.props.contactId)){return contactObj}return contact})
            console.log(this.props.contactId)
            for(let i=0;i<contacts.length;i++){
                if(contacts[i].contact_id===Number(this.props.contactId)){
                contacts.splice(i,1);
                }
            }
            contacts.push(contactObj);
            sessionStorage['addbook']=JSON.stringify(contacts);
            alert('Contact Updated Successfully!') 
            window.location.reload();
        }
        else{
            alert('Please fill all the fields')
        }
    }
}
export default ContactForm
