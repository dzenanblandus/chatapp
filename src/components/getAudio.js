export async function getAudio(setAudioData, message) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message.data),
  };
  fetch('http://localhost:5000/tts', requestOptions)
    .then((response) => response.blob())
    .then((data) => {
      setAudioData(data);
      // const objectURL = URL.createObjectURL(data);
      // new Audio(objectURL).play();
    });
}
