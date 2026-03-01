
// It toggle the form from Update form to Create Form 
document.getElementById("do_active_create_student").addEventListener("click",()=>{
    document.querySelector(".update_form_sec").classList.add("hidden")
  document.querySelector(".create_form_sec").classList.remove("hidden")
})


// It toggle the form from Create form to Update Form
document.getElementById("do_active_update_student").addEventListener("click",()=>{
    document.querySelector(".update_form_sec").classList.remove("hidden")
  document.querySelector(".create_form_sec").classList.add("hidden")
})