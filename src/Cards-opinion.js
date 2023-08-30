import { LitElement, html } from "lit-element";

export class CardOpinion extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/assets/Css/styles.css"
        </style>
        <section class="Opiniones">
            <h1>Expertos en eventos</h1>
            <div class="Container-Card">
                <div class="Card">
                    <div class="Content-card">
                        <h3>Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est, facilis blanditiis tempore in quasi mollitia! Quisquam architecto id est!</p>
                        <a href="">Mas info</a>
                    </div>
                </div>
                <div class="Card">
                    <div class="Content-card">
                        <h3>Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est, facilis blanditiis tempore in quasi mollitia! Quisquam architecto id est!</p>
                        <a href="">Mas info</a>
                    </div>
                </div>
                <div class="Card">
                    <div class="Content-card">
                        <h3>Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est, facilis blanditiis tempore in quasi mollitia! Quisquam architecto id est!</p>
                        <a href="">Mas info</a>
                    </div>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('card-opinion', CardOpinion)