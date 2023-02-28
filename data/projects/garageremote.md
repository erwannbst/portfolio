---
date: 2019-12-09 21:11:00 +0530
slug: garageremote
title: "Garage remote"
tech: ["Raspberry", "Python", "Electronic"]
icon: "/images/work/show/garageremote_icon.png"
index: 3

---

I rent a garage in a building with a door controlled by a radio remote. I wanted to be able to open the door from my phone.
I first started by looking at the remote and the receiver. I wanted to copy the signal from the remote but I figured out that it was a rolling code system so it was not possible that easy.

![GarageRemote](/images/work/show/garage_remote.jpg)

I decided to keep the original emitter and to control it with a Raspberry. The Raspberry would receive the instruction from my phone and would trigger the emitter through an optocoupler.

![RemoteCircuit](/images/work/show/remote_circuit.png)

This is the circuit I ended up with.

I then added a Siri shortcut so that I can now open the door without even touching my phone.