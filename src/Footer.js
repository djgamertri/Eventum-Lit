import { LitElement, html } from "lit-element";

export class Footer extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/assets/Css/styles.css"
        </style>
        <footer>
            <img src="https://eventumortho.com/wp-content/uploads/2021/05/Eventum_logo.png" alt="">
        </footer>
        `
    }
}

customElements.define('my-footer', Footer)