class Card extends HTMLElement {
   constructor(){
      super()
      
      this.image = this.getAttribute('image')
      this.name = this.getAttribute('name')
      this.body = this.getAttribute('body')
      this.rol = this.getAttribute('rol')
      this.modal = this.getAttribute('modal')

   }

   template(){
      const template = document.createElement('template');
      template.innerHTML = `<div class="container-fluid bg-light mb-3" role='button'>
      <div class="row">
         <div class="col p-0">
            <div class="card style-card w-100 ts-modal" data-bs-toggle="modal" data-bs-target="#${this.modal}">
               <img src="${this.image}" class="card-img-top w-50 m-auto mt-5 rounded-circle"
                  alt="profile picture">
               <div class="card-body p-0 text-center">
                  <h5 class="card-title mt-4">${this.name}</h5>
                  <p class="card-text">${this.body}</p>
                  <p class="card-text text-success d-inline fw-bold style-rol p-1">${this.rol}</p>
                  <div class="container-fluid mt-5">
                     <div class="row">
                        <div
                           class="col p-2 border-top border-end border-2 d-flex justify-content-evenly align-items-center">
                           <i class="fa-solid fa-envelope m-2 text-secondary"></i>
                           <p class="card-text text-secondary">Email</p>
                        </div>
                        <div class="col border-top border-2 d-flex justify-content-evenly align-items-center">
                           <i class="fa-solid fa-phone text-secondary"></i>
                           <p class="card-text text-secondary">Call</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>`

      return template;
   }

   render(){
      this.appendChild(this.template().content.cloneNode(true))
   }

   connectedCallback(){
      this.render()
   }
}

customElements.define('cs-card',Card)