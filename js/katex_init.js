var elements=document.getElementsByTagName('script')Array.prototype.forEach.call(elements,function(a){if(a.type.indexOf('math/tex')!=-1){var c=a.innerText||a.textContent;var b=document.createElement('span');if(a.type.indexOf('mode=display')!=-1){b.className+="math-display";c='\\displaystyle {'+c+'}'}else{b.className+="math-inline"}katex.render(c,b);a.parentNode.insertBefore(b,a)}});