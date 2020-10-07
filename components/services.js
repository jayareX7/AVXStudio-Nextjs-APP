function Services({ serviceThumbnail, serviceDescription, title, }) {
    return (
      <div className="container">
      
          <h2>{title}</h2>
        {serviceThumbnail}
        {serviceDescription}
       
        
      </div>
    )
  }
  
  export default Services