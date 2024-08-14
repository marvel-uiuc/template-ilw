import { LitElement, html } from 'lit';
import styles from './<%= name %>.styles';
import './<%= name %>.css';

class <%= _.upperFirst(_.camelCase(name.slice(4))) %> extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('<%= name %>', <%= _.upperFirst(_.camelCase(name.slice(4))) %>);