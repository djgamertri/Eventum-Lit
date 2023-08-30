import { LitElement, html } from "lit-element";

export class Banner extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/assets/Css/styles.css"
        </style>
        <section>
            <div style="background-color: #cfcfcf;width: 50%;">
                <img src="https://eventumortho.com/wp-content/uploads/2021/05/Eventum_logo.png" alt="" height="200px" width="600px">
                <h1>Crea, sueña, realiza</h1>
                <a href="">Conocenos</a>
            </div>
            <div>
                <h1>¿Ya eres cliente?</h1>
                <a href="">Conocenos</a>
            </div>
        </section>
        `
    }
}

customElements.define('my-banner', Banner)