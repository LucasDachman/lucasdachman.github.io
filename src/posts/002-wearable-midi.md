---
title: "Wearable Midi Controller"
path: "/wearable-midi"
media:
    hero: "../images/wearable-midi/final-top.png"
    images: 
        - "../images/wearable-midi/final-top.png"
        - "../images/wearable-midi/final-side.png"
        - "../images/wearable-midi/final-top-open.png"
        - "../images/wearable-midi/assembly.png"
brief: "A wearable device that detects distance and sends the data to any music software"
---

This is a distance sensing midi controller that is worn around the ankle. It uses ultrasonic sensors to detect distance from the ankle in two directions. Ultrasonic sensors use the echo time from high frequency sound waves – basically, this device is quietly screaming all the time.

### Materials
- Sparkfun Arduino Pro Micro
- Sparkfun Ultrasonic Sensor (2x)
- proto board
- PLA plastic
- Velcro strap

I used the Arduino MIDIUSB Library to allow the arduino to act as a USB device and send midi messages to any software that can receive midi. To interface with the distance sensors, I used code from this instructable. Each direction corresponds to one of two standard midi control changes. I found the sensor values to have a lot of noise so I implemented a smoothing algorithm that involves finding the median of several sensor samples. I printed the enclosure in 3 parts to allow the sensors to stick out the sides.

<div class='detail-buttons'>
    <a href='https://vimeo.com/306710929' class='button'>Video</a>
    <a href='https://github.com/LucasDachman/Wearable-Midi' class='button'>Code<a>
<div>