class Modal extends HTMLElement(){
   constructor(){
      super()

      this.attachShadow({mode:"open"})

      this.name = this.getAttribute('name')
      this.email = this.getAttribute('email')
      this.phone = this.getAttribute('phone')
      this.rol = this.getAttribute('rol')
      this.birthDay = this.getAttribute('birthDay')
      this.registrationDay = this.getAttribute('registrationDay')
      this.responsabilities = this.getAttribute('responsabilities')
   }

   template(){
      const template = document.createElement('template');
      template.innerHTML = `<div>hoola mundo</div>`

      return template;
   }

   render(){
      this.shadowRoot.appendChild(this.template().content.cloneNode(true))
   }

   connectedCallback(){
      this.render()
   }
}

customElements.define('cs-modal',Modal)