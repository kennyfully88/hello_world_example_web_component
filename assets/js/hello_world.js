'use strict';

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'closed' });

    this.root.innerHTML = `
    <style>
        h2 {
            left: calc(50vw);
            margin: 0;
            outline: none;
            padding: 0;
            position: fixed;
            text-wrap: nowrap;
            top: calc(50vh);
            -webkit-transform: translate(-50%,-50%);
            transform: translate(-50%,-50%);
        }

        h2 span {
            color: hsl(0, 0%, 40%);
            transition: all 150ms ease;
        }

        h2 span:hover {
            color: hsl(0, 0%, 0%);
            cursor: pointer;
        }

        [contenteditable]:focus {
            outline: none;
            color: hsl(249, 100%, 50%);
        }
    </style>
    <h2>こんにちは、<span class="name" contenteditable="plaintext-only">世界</span>！</h2>`;
  }

  connectedCallback() {
    this.root.querySelector('.name').addEventListener('focus', (e) => {
      if (e.target.innerText === '世界') {
        e.target.innerText = '　　';
        e.target.focus();
      }

      e.target.style.color = 'hsl(249, 100%, 50%)';
    });

    this.root.querySelector('.name').addEventListener('focusout', (e) => {
      e.target.innerText = e.target.innerText.trim();
      if (e.target.innerText.length === 0) {
        e.target.innerText = '世界';
      }

      if (e.target.innerText.length > 8) {
        e.target.innerText = e.target.innerText.substring(0, 8);
      }

      e.target.style.color = 'hsl(0, 0%, 40%)';
    });

    this.root.querySelector('.name').addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }

      if (e.target.innerText.includes('　　')) {
        e.target.innerText = e.target.innerText.trim();
      }
    });

    this.root.querySelector('.name').addEventListener('keydown', (e) => {
      if (e.target.innerText.length > 8) {
        e.target.style.color = 'red';
      } else {
        e.target.style.color = 'hsl(249, 100%, 50%)';
      }
    });
  }
}

customElements.define('hello-world', HelloWorld);
