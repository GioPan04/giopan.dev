---
layout: '../../../layouts/Post.astro'
title: 'C@nnizz@Robot 2022'
pubDate: 2022-06-13
description: "In 2022 I participated in the C@nnizz@Robot, an event held in Catania (Italy) where students around Italy created a scaled down version of a robot that could save lifes in a possible eruption of the Etna Volcano"
tags: ['event']
---
Everything begun in February 2022 when one of my school teachers told me about the "C@nnizz@Robot" of Catania and suggested that I'd join.
The purpouse was to create a robot capable of saving people who couldn't escape a possible eruction of the Etna volcano. The robot had to be capable of recognizing the colors of the blocks and decide whatever to take or leave them.

The brown blocks were the volcanic rubble and had to be discarted, the blue blocks and yellow ones were worth respectively 4 and 5 points. The green blocks had to be taken to a different area and they were worth 3 points.

The field was divided into 4 areas, our strategy is shown below:
![image](https://user-images.githubusercontent.com/29762826/173364259-7dcf1414-507b-486d-bad8-db1d9782acdb.jpg)
> Because of the limitations that our hardware had, we decided to discard the last portion of the map.

## The robot
![image](https://user-images.githubusercontent.com/29762826/173403983-c79cf11c-4d2e-4bae-b283-c18e6cda9f85.jpg)
The robot was able to move thanks to 2 stepper motors set to 1/4 step, driven by 2 separated motor drivers (A4988).
The robot was equipped with 2 IR distance sensors which are analog sensors, and because we used a Raspberry Pi we had to use an ADC to convert its signal. Unfortunately the sensors had a limit of 4-30cm, so we couldn't collect the points in the last area, but this wasn't a problem because if all went right on the other areas we would have enough points.
At the front we mounted a programmable color sensor (Pixy) configurable with the aid of a computer.
We used a servomotor to drive an arm used to discard or take the blocks.
All the sensors and motors were attached to a Raspberry Pi 3B+ with a program written in Python by me. [The code is all open source](https://github.com/GioPan04/gv-robot-pi), it also contains some libraries that I wrote to integrate the code with our strategies.

## Problems encountered
We had to start again many times, initially we used an AlphaBot, but We immediately understood that it wasn't the right path because it used DC motors which were more complicated to control, so we decided to switch them with some steppers motors, that would grant us more control.

We encountered many issues with the color sensor, because it wasn't capable of adjusting itself on different ambient lights and it had to be reconfigured many times. We managed to solve most of the problem using a function in the sensor which allowed to automatically calibrate the white balance when it was powered on, but the problem persisted if the light changed during the execution of the program, so just a lamp with a different hue of the other could confuse the sensor.

## The competition
The competition took place on June 4, 2022 at the [I.T.I. S. Cannizzaro](http://cannizzaroct.edu.it/) school. Unfortunately during the quarter finals the ADC disconnected due to vibrations and confused the robot tricking it into thinking it was too close to the wall causing it to start spinning on itself. We still managed to achieve the **5th place out of 24 participants**. Overall it was an amazing expirience and I would totally come back.

![image](https://user-images.githubusercontent.com/29762826/174050569-1733b581-28e2-4d11-aa89-10a5f2f31164.jpg)
![image](https://user-images.githubusercontent.com/29762826/174050801-2efdbcf6-eea8-4d43-82bd-21738fb08b27.jpg)
![image](https://user-images.githubusercontent.com/29762826/174054016-e8118ac0-bc02-4057-b1e8-688588b6b49a.jpg)

## Read more
[I.S.I.S. Gobetti Volta](https://www.gobettivolta.edu.it/it2/2022/06/11/competizione-di-robotica-cnnizzrobot-di-catania/)
[Catania Today](https://www.cataniatoday.it/eventi/cannizzarobot-4-giugno-2022-gara-robot-catania.html)
[ITI S. Cannizzaro](http://cannizzaroct.edu.it/articolo/cnnizzrobot)
[C@nnizz@Robot](https://cannizzarobot.it/)