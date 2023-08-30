import { LitElement, html } from "lit-element";

export class Nav extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/assets/Css/styles.css"
        </style>
        <header>
            <i class="bx bx-menu"></i>
            <i class="bx bxs-user"></i>
        </header>
        `
    }
}

customElements.define('my-header', Nav)