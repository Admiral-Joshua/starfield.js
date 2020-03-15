Starfield.JS
=======

Quick-and-dirty, customizable JavaScript plugin for creation of a starfield, particle based background.
-----------

A quick-and-dirty JavaScript library that uses Canvas (Hardware Acceleration enabled) rendering methods to create coloured particles that swarm outward from the centre of the intended area.

I primarily built this as I'm a big fan of Particles.JS library, however it does not provide functionality to spawn particles in the center outward. Due to this, I felt it would be a fun challenge to try to write my own, smaller plugin that could do this.

Installation Instructions:

 1. Add JS file to your website
 ```html
<script type="text/javascript" src="<PATH_TO_FILE/starfield.js"></script>
```

 2. Create your container:
 ```html
 <div id="starfieldContainer"></div>
 ```

 3. Initialise with proposed configuration options:
 ```html
 <script type="text/javascript">
     var debrisEffect = new SpaceDebris('debrisContainer');
 </script>
 ```

 4. Customise to your liking.
 Currently implementation support the following customisation options to get you started, with plenty more in development!
| Parameter        | Type           | Default  |
| ------------- |:-------------:| -----:|
| width      | number | window.innerWidth (full window width) |
| height      | number | window.innerHeight (full window height) |
| speed      | number | 1.5 |
| maxRadius      | number | 3 |
| particleCount      | number      |   500 |
 
NOTE: This plugin is still in development, so if there's an additional feature you'd like to have asked, feel free to raise the issue and I'll try to get on that or get back to you as soon as I can!