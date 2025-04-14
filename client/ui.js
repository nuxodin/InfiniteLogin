import { InfiniteLogin } from './infinite-login.js';
import { PROVIDERS } from '../providers.js';

export class InfiniteLoginUI extends InfiniteLogin {
    constructor(config, container) {
        super(config);
        this.container = container || document.createElement('div');
        this.container.classList.add('u2-flex');
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <style>
            .infinite-login-btn {
                display: inline-flex;
                align-items: center;
                gap: .5rem;
            }
            .infinite-login-btn svg {
                width: 1.2rem;
                height: 1.2rem;
            }
            </style>`;

        for (const [id, data] of Object.entries(PROVIDERS)) {
            if (!this.config[id]) continue;
            const btn = document.createElement('button');
            btn.className = 'infinite-login-btn';
            btn.innerHTML = `${data.svg}${data.label}`;
            btn.onclick = () => this.with(id);
            this.container.append(btn);
        }

        return this.container;
    }

    mount(target) {
        if (typeof target === 'string') {
            target = document.querySelector(target);
        }
        target.appendChild(this.container);
    }
}