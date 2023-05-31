window.addEventListener('load', async () => {
  document.querySelector('.scrimmage-widget-container .scrimmage-widget-fab')
    .addEventListener('click', (event) => {
      event.target.closest('.scrimmage-widget-container').classList.toggle('open');
    });
  await setWidgetLink();
});

const setWidgetLink = async () => {
  const backendUrl = 'https://us-central1-bright-practice-331514.cloudfunctions.net/requestGenerateAuthInfo';
  const { token } = await fetch(backendUrl).then((response) => response.json());
  const iframe = document.querySelector('.scrimmage-widget-container iframe');
  iframe.src = `https://coinflip.apps.scrimmage.co/?token=${token}`;
}
