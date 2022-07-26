require('./style.css');
require("../assets/sounds/clap.wav");
require("../assets/sounds/crash.wav");
require("../assets/sounds/hihat.wav");
require("../assets/sounds/kick.wav");
require("../assets/sounds/openhat.wav");
require("../assets/sounds/Perc.wav");
require("../assets/sounds/ride.wav");
require("../assets/sounds/shaker.wav");
require("../assets/sounds/snare.wav");
require("../assets/sounds/tom.wav");

;(function () {
  'use strict'

  const get = function (target) {
    return document.querySelector(target)
  }

  const getAll = function (target) {
    return document.querySelectorAll(target)
  }

  const keys = Array.from(getAll('.key'))
  const soundsRoot = './sounds/'
  const drumSounds = [
    { key: 81, sound: 'clap.wav' },
    { key: 87, sound: 'crash.wav' },
    { key: 69, sound: 'hihat.wav' },
    { key: 65, sound: 'kick.wav' },
    { key: 83, sound: 'openhat.wav' },
    { key: 68, sound: 'ride.wav' },
    { key: 90, sound: 'shaker.wav' },
    { key: 88, sound: 'snare.wav' },
    { key: 67, sound: 'tom.wav' },
  ]

  const getAudioElement = (index) => {
    const audio = document.createElement('audio')
    audio.dataset.key = drumSounds[index].key
    audio.src = soundsRoot + drumSounds[index].sound
    return audio
  }

  const onTransitionEnd = (e) => {
    if (e.propertyName === 'transform') {
      e.target.classList.remove('playing')
    }
  }

  const onMouseDown = (e) => {
    const keycode = e.target.getAttribute('data-key')
    playSound(keycode)
  }

  const onKeyDown = (e) => {
    const keycode = e.keyCode
    playSound(keycode)
  }

  const playSound = (keycode) => {
    const $audio = get(`audio[data-key="${keycode}"]`)
    const $key = get(`div[data-key="${keycode}"]`)
    if ($key && $audio) {
      $key.classList.add('playing')
      $audio.currentTime = 0
      $audio.play()
    }
  }

  const init = () => {
    window.addEventListener('keydown', onKeyDown)
    keys.forEach((key, index) => {
      const audio = getAudioElement(index)
      key.appendChild(audio)
      key.addEventListener('transitionend', onTransitionEnd)
      key.addEventListener('mousedown', onMouseDown)
      key.dataset.key = drumSounds[index].key
    })
  }

  init()
})()
