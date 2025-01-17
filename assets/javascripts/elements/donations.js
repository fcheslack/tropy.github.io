import { createElement } from '../helpers/create-element.js'


export const Donations = createElement(
  'tpy-donations',

  class extends HTMLElement {
    static get observedAttributes() {
      return ['is-monthly']
    }

    connectedCallback() {
      this.template = `<slot></slot>`

      const slotted = this.innerHTML
      this.innerHTML = this.template
      this.querySelector('slot').parentElement.innerHTML = slotted
      this.frequencyRadios = this.querySelectorAll('.frequency input')
      this.oneTime = this.querySelector('.one-time')
      this.monthly = this.querySelector('.monthly')

      this.o = this.oneTime.cloneNode(true)
      this.oneTime.replaceWith(this.o)
      this.monthly.remove()

      this.frequencyRadios.forEach(radio => {
        radio.addEventListener('change', this.handleFrequencyChange)
      })
    }

    attributeChangedCallback(name, oldVal, newVal) {
      if (name == 'is-monthly') {
        if (this.isMonthly) {
          this.m = this.monthly.cloneNode(true)
          this.o.replaceWith(this.m)

        } else {
          this.o = this.oneTime.cloneNode(true)
          this.m.replaceWith(this.o)
        }
      }
    }

    handleFrequencyChange = (e) => {
      if (e.target.value == "monthly") {
        this.isMonthly = true
      } else {
        this.isMonthly = false
      }
    }
  }, {
    isMonthly: true
  }
)
