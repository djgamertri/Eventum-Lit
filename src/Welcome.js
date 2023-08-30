import { LitElement, html} from "lit-element";

export class Welcome extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/assets/Css/styles.css"
        </style>
        <section class="Welcome">
            <div class="WelcomeImg">
                <img src="https://tse3.mm.bing.net/th/id/OIP.RgW9IRmJPgsNV6r_0BFkNQHaFj?pid=ImgDet&rs=1" alt="">
            </div>
            <div class="WelcomeText">
                <h1>Lorem, ipsum dolor.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa soluta reiciendis, porro provident quae assumenda ex. Totam maxime culpa perferendis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga nihil mollitia quo nulla nostrum atque iste? Neque, similique nulla?</p>
            </div>
        </section>
        `
    }
}

customElements.define('my-welcome', Welcome)