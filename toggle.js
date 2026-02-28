
document.getElementById("do_active_create_student").addEventListener("click",()=>{
    document.querySelector(".update_form_sec").classList.add("hidden")
  document.querySelector(".create_form_sec").classList.remove("hidden")
})

document.getElementById("do_active_update_student").addEventListener("click",()=>{
    document.querySelector(".update_form_sec").classList.remove("hidden")
  document.querySelector(".create_form_sec").classList.add("hidden")
})