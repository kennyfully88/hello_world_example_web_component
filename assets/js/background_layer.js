'use strict';

class BackgroundLayer extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });

    this.root.innerHTML = `
    <style>
        :host {
            border: none;
            box-sizing: border-box;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            left: 0;
            position: fixed;
            top: 0;
            width: 100vw;
            height: 100%;
        }
    </style>`;
  }

  connectedCallback() {
    document.querySelector('body').insertAdjacentHTML(
      'beforebegin',
      `
        <style>
            * {
                border: none;
                box-sizing: border-box;
                font-family: Arial, Helvetica, sans-serif;
                margin: 0;
                padding: 0;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }

            body {
                background-color: #e5e5e5;
                height: 100%;
            }
        </style>`
    );
  }
}

// <background-layer></background-layer>
customElements.define('background-layer', BackgroundLayer);
