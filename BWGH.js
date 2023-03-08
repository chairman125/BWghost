const form = document.createElement('form');
form.action = 'https://www.google.com/search';
form.method = 'get';

const label = document.createElement('label');
label.textContent = 'Search:';
label.htmlFor = 'search-input';

const input = document.createElement('input');
input.type = 'text';
input.id = 'search-input';
input.name = 'q';
input.placeholder = 'Enter search term...';

const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Search';

form.appendChild(label);
form.appendChild(input);
form.appendChild(button);

document.body.appendChild(form);
