import './FeedBack.css'

const FeedBack = ({}) => {
    return (
      <div className='feedBack-page'>
       <form
       method='POST'
       action="https://docs.google.com/forms/d/1Th9T-tzadizkhUrV35lxtZGZS41dJb6XJhPDHQfnlKA/formResponse">
           
  <input 
   class="input"
   type="text"
   name='entry.2005620554' 
   placeholder="Name"
   />
  <textarea 
  class="input" 
  type="comment" 
  name='entry.839337160'
  placeholder="Comments" />
  <button class="button" type="submit" >
    Submit
  </button>
  

  
</form>
      </div>
    );
  };
  
  export default FeedBack;