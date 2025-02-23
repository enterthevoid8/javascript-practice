function submit() {
  const form = document.forms[0];
  if (form.checkValidity()) {
    form.submit();
  } else {
    alert("Please fill out the required fields.");
  }
}
