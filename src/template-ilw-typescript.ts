import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './template-ilw-typescript.styles.css?inline';
import './template-ilw-typescript.css';
import { customElement, property } from "lit/decorators.js";

@customElement("template-ilw-typescript")
export default class LateIlwTypescript extends LitElement {

    @property()
    theme = "";

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div>
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        "template-ilw-typescript": LateIlwTypescript;
    }
}
