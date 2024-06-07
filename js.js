const ProductivityImgMoudleEL = document.getElementById("ProductivityImgMoudle")
const img = document.getElementById("img")
const callback=(entries , observer) =>{
    const entry =entries[0]
    const space =ProductivityImgMoudleEL.getBoundingClientRect().top
    // observer.unobserve(entry)
  
    if(entry.isIntersecting && space>0) {
        entry.target.classList.add("active")
        // entry.target.classList.remove("ProductivityImgMoudleELNotActive")
        


   
        console.log( entry.target);
    }
    if(!entry.isIntersecting && space>0){
   
        // entry.target.classList.add("ProductivityImgMoudleELNotActive")
        entry.target.classList.remove("active")
 
    }
    

    }
    
const options ={
    root:null ,
 
    threshold:0.3

}
const observer =new IntersectionObserver(callback , options);
observer.observe(ProductivityImgMoudleEL)