window.addEventListener('load', () => {
  document.querySelector('.scrimmage-widget-container .scrimmage-widget-fab')
    .addEventListener('click', (event) => {
      event.target.closest('.scrimmage-widget-container').classList.toggle('open');
    });
});
