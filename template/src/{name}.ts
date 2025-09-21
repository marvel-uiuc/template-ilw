import { LitElement, html, unsafeCSS } from "lit";
// @ts-ignore
import styles from './<%= name %>.styles.css?inline';
import './<%= name %>.css';
import { customElement, property } from "lit/decorators.js";

@customElement("<%= name %>")
export default class <%= _.upperFirst(_.camelCase(name.slice(4))) %> extends LitElement {

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
        "<%= name %>": <%= _.upperFirst(_.camelCase(name.slice(4))) %>;
    }
}
