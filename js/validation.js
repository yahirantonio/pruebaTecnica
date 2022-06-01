const email = /^[\w]+@{1}[\w]+\.+[a-z]{2,3}$/;
const fullName = /^([A-Za-z]{1}[a-zñáéíóú]+[\s]*)+$/;
const dd_mm_yyyy = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[0-2])\1\d{4}$/;
const yyyy_mm_dd = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const phoneNumber = /^\(\+\d{2,3}\)\d{10}$/;
const text = /[a-zA-Z]/;
const rol = ['Rol1','Rol2','Rol3'];

const url = 'file:///C:/Users/yahir/Escritorio/pruebaTecnica/index.html'

const globaLabels = [
   'fullName',
   'phoneNumber',
   'email',
   'birthDate',
   'registerDate',
   'responsabilities'
]

const globalRegexs = [
   fullName,
   phoneNumber,
   email,
   yyyy_mm_dd,
   yyyy_mm_dd,
   text,
]

const data = document.querySelectorAll("input")
const selectData = document.querySelector("#inputGroupSelect01")

const send = document.querySelector(".ts-send")

send.addEventListener('click',(e)=>{
   e.preventDefault()
   validaciones(data, selectData)
})

const validaciones = (data, selectData) =>{
   let validations = {
      0:false,
      1:false,
      2:false,
      3:false,
      4:false,
      5:false,
      6:false
    };

   data.forEach((value,index)=>{
      if(globaLabels.includes(value.ariaLabel) && value.value.length > 0){
         const indice = globaLabels.indexOf(value.ariaLabel)
         regexValidation(value.value, globalRegexs[indice], validations, index)
      }
   })

   selectValidation(selectData, validations)

   console.log(validations)

   if(!Object.values(validations).includes(false)){
      window.location.replace(url)
   }

}

const regexValidation = (text, regex, validations, index) =>{
   const flag = regex.test(text)
   console.log(text)
   validations[index] = flag;
}

const selectValidation = (selectData, validations) =>{
   console.log(selectData.value)
   if(rol.includes(selectData.value)){
      validations[6] = true
   }
}