const init = function() {
    const injectElement = document.createElement('div');
    
    // créer un élement DIV
    injectElement.className = 'test-element';

    injectElement.innerHTML = 'djshfgskfhslvk';
    
    // ajout div dans body
    document.body.appendChild(injectElement);
    // faire naitre dans le body notre élément
}
init() // puis on appèle notre fonction