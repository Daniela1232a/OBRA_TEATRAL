const soundMap = {};

function createSoundButton(name, filename, keyCombination = null) {
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

  const pauseButton = document.createElement('button');
  pauseButton.textContent = 'Pausa';
  pauseButton.classList.add('pause-button');
  pauseButton.onclick = () => pauseSound(name);

  container.appendChild(button);
  container.appendChild(pauseButton);
  container.appendChild(volumeControl);

  if (keyCombination) {
    const shortcutLabel = document.createElement('div');
    shortcutLabel.textContent = keyCombination.toUpperCase();
    shortcutLabel.classList.add('shortcut');
    container.appendChild(shortcutLabel);

    document.addEventListener('keydown', (e) => {
      if (e.key === keyCombination) {
        playSound(name);
      }
    });
  }

  const buttonsContainer = document.getElementById('buttons-container');
  buttonsContainer.appendChild(container);

  createSound(name, filename);
}

function createSound(name, filename) {
  const audio = new Audio(`sounds/${decodeURIComponent(filename)}`);
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

function pauseSound(name) {
  const sound = soundMap[name];
  if (sound) {
    sound.pause();
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
createSoundButton('APLAUSOS DEL PUBLICO', 'APLAUSOS.mp3', 'r');
createSoundButton('CAMPANA', 'CAMPANA.mp3', 't');
createSoundButton('GUITARRA', 'GUITARRA.mp3', 'y');
createSoundButton('SOLDADO ENTRADA', 'SOLDADOENTRADA.mp3', 'u');
createSoundButton('IPHONE', 'APHONE.mp3', 'i');
createSoundButton('MARIO', 'MARIO.mp3', 'o');
createSoundButton('APPLE WATCH', 'APPLEWATCH.mp3', 'p');
createSoundButton('JESSI', 'JESSI.mp3', 'a');
createSoundButton('RISA BURLONA LANITAS', 'RISABURLONA.mp3', 's');
createSoundButton('TRISTEZA LANITAS', 'LANITASTRISTE.mp3', 'd');
createSoundButton('PATO', 'PATO.mp3', 'f');
createSoundButton('ENTRADA BUZZ', 'ENTRADABUZZ.mp3', 'g');
createSoundButton('COLOCAR LASER', 'COLOCARLASER.mp3', 'h');
createSoundButton('LASER 1', 'LASER1.mp3', 'j');
createSoundButton('LASER 2', 'LASER2.mp3', 'k');
createSoundButton('EXPLOSION LASER', 'EXPLOSIONLASER.mp3', 'l');
createSoundButton('BATERIA', 'BATERIA.mp3', 'z');
createSoundButton('ENTRADA CONEJOS', 'ENTRADACONEJOS.mp3', 'x');
createSoundButton('PILAS', 'PILAS.mp3', 'c');
createSoundButton('CORRIENTE', 'DESCARGAELECTRICA.mp3', 'v');
createSoundButton('EXPLOSION CORRIENTE', 'EXPLOSIONELECTRICIDAD.mp3', 'b');
createSoundButton('FALLA CONEJOS', 'CONEJOSFALLA.mp3', 'n');
createSoundButton('ENTRA ELSE', 'ELSEENTRADA.mp3', 'm');
createSoundButton('APAGADA ELSE', 'ELSEAPAGANDOSE.mp3', '1');
createSoundButton('CUERDA ELSE', 'DARCUERDA.mp3', '2');
createSoundButton('SOLDADO HERIDO', 'SOLDADOHERIDO.mp3', '3');
createSoundButton('ENTRADA CREADOR', 'CREADOR.mp3', '4');
createSoundButton('SOLDADO TRISTE', 'SANACIONSOLDADO.mp3', '5');
createSoundButton('REPARACION SOLDADO', 'REPARACIONSOLDADO.mp3', '6');
createSoundButton('FINAL CONCURSO', 'FINALCONCURSO.mp3', '7');
createSoundButton('MAR', 'MAR.mp3', '8');
createSoundButton('SUSPENSO', 'MIEDOSALVAR.mp3', '9');
createSoundButton('SALPICADURA', 'SALPIDACURA.mp3', 'q');
createSoundButton('MINIONS 1', 'HABLAMINION.mp3', 'w');
createSoundButton('MINIONS 2', 'HABLAMINION2.mp3', 'e');
createSoundButton('RISA MINIONS', 'RISAMINION.mp3');
createSoundButton('COREOGRAFIA', 'COREOGRAFIA.mp3');
