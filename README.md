# harvester-sampleapp

This repository implements a sample app written in client-side jQuery for the Baby Harvester system.
Full documentation for creating Baby Harvester apps is available [here](https://github.com/HALtheWise/baby-harvester/wiki/Writing-Apps-that-run-on-Harvesters), and more information about the project is [here](https://github.com/HALtheWise/baby-harvester/wiki)

This sample app implements a "timebox" functionality, where a user can request that a countdown timebox of a specified duration be displayed on the Baby Harvester screen. The interface for the user to make this request is contained in `controller.html` and `controller.js`, and includes requesting the authentication token from the user and using it for authentication to the API.

`timer.html` and `timer.js` are loaded by the Baby Harvester itself, and retrieve the desired timebox duration, harvester name, and token from URI parameters. They are then responsible for displaying the requested countdown, and trigger a final request  to the Harvester API to print "Time's Up!" when the timer finishes.
