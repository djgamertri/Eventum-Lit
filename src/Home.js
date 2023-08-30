import { LitElement, html } from "lit-element";

import "./assets/Css/styles.css"
import "./Nav"
import "./Banner";
import "./Cards-opinion";
import "./Welcome";
import "./Experience";
import "./Footer";

export class Home extends LitElement {
    createRenderRoot(){
        return this
    }
    render(){
        return html`
        
        <my-header></my-header>
        <my-banner></my-banner>
        <card-opinion></card-opinion>
        <my-welcome></my-welcome>
        <my-experience></my-experience>
        <my-footer></my-footer>
        `
    }
}

customElements.define('my-home', Home)