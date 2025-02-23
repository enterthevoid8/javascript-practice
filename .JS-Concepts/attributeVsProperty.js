<input type="checkbox" id="myCheckbox" checked>

const checkbox = document.getElementById('myCheckbox');

// Attribute
console.log(checkbox.getAttribute('checked')); // "checked" (attribute exists)

// Property
console.log(checkbox.checked); // true (reflects current state)

// Modify the property
checkbox.checked = false;
console.log(checkbox.getAttribute('checked')); // "checked" (attribute doesn't change)
console.log(checkbox.checked); // false (property reflects the new state)

// Modify the attribute
checkbox.setAttribute('checked', 'checked');
console.log(checkbox.getAttribute('checked')); // "checked"
console.log(checkbox.checked); // true (property is also updated)
