import { LitElement, html } from "lit-element";

export class Experience extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        <style>
            @import "/src/assets/Css/styles.css"
        </style>
        <section class="Experience">
            <div class="Container-Card">
                <div class="Card-experience">
                    <div class="Content-Experience">
                        <div class="Img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumr-ynIsoOEzb29PmGsYo5Dfem9Yio8dC8Q&usqp=CAU" alt="">
                        </div>
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est, facilis blanditiis tempore in quasi mollitia! Quisquam architecto id est!</p>                </div>
                        </div>
                        </div>
                <div class="Card-experience">
                    <div class="Content-Experience">
                        <div class="Img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjHsLLn9kI96lYuAtvgOvqUxJUIKq28iXDgQ&usqp=CAU" alt="">
                        </div>
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est, facilis blanditiis tempore in quasi mollitia! Quisquam architecto id est!</p>                </div>
                        </div>
                        </div>
                <div class="Card-experience">
                    <div class="Content-Experience">
                        <div class="Img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvA32ZdcKnLjnCVcYGgqe98DJw7V9Fj0i6XQ&usqp=CAUnpm" alt="">
                        </div>
                        <div>
                            <h3>Lorem, ipsum.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est, facilis blanditiis tempore in quasi mollitia! Quisquam architecto id est!</p>                </div>
                        </div>
                </div>
            </div>
        </section>
        `
    }
}

customElements.define('my-experience', Experience)