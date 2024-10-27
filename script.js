const soundMap = {};

function createSoundButton(name, filename) {
  const container = document.createElement('div');
  container.classList.add('sound-container');

  const button = document.createElement('button');
  button.textContent = name;
  button.classList.add('button');
  button.onclick = () => playSound(name);

  const volumeControl = document.createElement('input');
  volumeControl.type = 'range';
  volumeControl.min = 0;
  volumeControl.max = 1;
  volumeControl.step = 0.01;
  volumeControl.value = 1;
  volumeControl.classList.add('volume-control');
  volumeControl.oninput = (e) => setVolume(name, e.target.value);

  container.appendChild(button);
  container.appendChild(volumeControl);

  const buttonsContainer = document.getElementById('buttons-container');
  buttonsContainer.appendChild(container);

  createSound(name, filename);
}

function createSound(name, filename) {
  const audio = new Audio(`sounds/${filename}`);
  soundMap[name] = audio;
  return audio;
}

function playSound(name) {
  const sound = soundMap[name];
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  } else {
    console.error(`Sonido no encontrado: ${name}`);
  }
}

function setVolume(name, volume) {
  const sound = soundMap[name];
  if (sound) {
    sound.volume = volume;
  } else {
    console.error(`Sonido no encontrado: ${name}`);
  }
}

// Ejemplo de cómo añadir botones, puedes personalizar estos según tus necesidades
createSoundButton('ENTRADA DE LOS MINIONS', 'INTROMINIONS.mp3');
createSoundButton('INICIO DE LA HISTORIA', 'INICIOHISTORIA.mp3');
createSoundButton('INICIO DEL CONCURSO', 'INICIOCONCURSO.mp3');
createSoundButton('APLAUSOS DEL PUBLICO', 'APLAUSOS.mp3');
createSoundButton('CAMPANA', 'CAMPANA.mp3');
createSoundButton('GUITARRA', 'GUITARRA.mp3');
createSoundButton('SOLDADO ENTRADA', 'SOLDADOENTRADA.mp3');
createSoundButton('IPHONE', 'APHONE.mp3');
createSoundButton('MARIO', 'MARIO.mp3');
createSoundButton('APPLE WATCH', 'APPLEWATCH.mp3');
createSoundButton('JESSI', 'JESSI.mp3');
createSoundButton('RISA BURLONA LANITAS', 'RISABURLONA.mp3');
createSoundButton('TRISTEZA LANITAS', 'LANITASTRISTE.mp3');
createSoundButton('PATO', 'PATO.mp3');
createSoundButton('ENTRADA BUZZ', 'ENTRADABUZZ.mp3');
createSoundButton('COLOCAR LASER', 'COLOCARLASER.mp3');
createSoundButton('LASER 1', 'LASER1.mp3');
createSoundButton('LASER 2', 'LASER2.mp3');
createSoundButton('EXPLOSION LASER', 'EXPLOSIONLASER.mp3');
createSoundButton('BATERIA', 'BATERIA.mp3');
createSoundButton('ENTRADA CONEJOS', 'ENTRADACONEJOS.mp3');
createSoundButton('PILAS', 'PILAS.mp3');
createSoundButton('CORRIENTE', 'DESCARGAELECTRICA.mp3');
createSoundButton('EXPLOSION CORRIENTE', 'EXPLOSIONELECTRICIDAD.mp3');
createSoundButton('FALLA CONEJOS', 'CONEJOSFALLA.mp3');
createSoundButton('ENTRA ELSE', 'ELSEENTRADA.mp3');
createSoundButton('APAGADA ELSE', 'ELSEAPAGANDOSE.mp3');
createSoundButton('CUERDA ELSE', 'DARCUERDA.mp3');
createSoundButton('SOLDADO HERIDO', 'SOLDADOHERIDO.mp3');
createSoundButton('ENTRADA CREADOR', 'CREADOR.mp3');
createSoundButton('SOLDADO TRISTE', 'SANACIONSOLDADO.mp3');
createSoundButton('REPARACION SOLDADO', 'REPARACIONSOLDADO.mp3');
createSoundButton('FINAL CONCURSO', 'FINALCONCURSO.mp3');
createSoundButton('MAR', 'MAR.mp3');
createSoundButton('SUSPENSO', 'MIEDOSALVAR.mp3');
createSoundButton('SALPICADURA', 'SALPIDACURA.mp3');
createSoundButton('MINIONS 1', 'HABLAMINION.mp3');
createSoundButton('MINIONS 2', 'HABLAMINION2.mp3');
createSoundButton('RISA MINIONS', 'RISAMINION.mp3');
createSoundButton('COREOGRAFIA', 'COREOGRAFIA.mp3');
