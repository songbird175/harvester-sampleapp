# Baby Harvester: Timebox Sample App (jQuery)

This is a sample timebox app written in jQuery that demonstrates the capabilities of a Baby Harvester tool. To learn more about the Baby Harvester, read the wiki for [this repo](https://github.com/HALtheWise/baby-harvester). Specific information on writing your own sample app can be found on [this page](https://github.com/HALtheWise/baby-harvester/wiki/Writing-Apps-that-run-on-Harvesters) of the wiki.

This sample app implements a "timebox" functionality, where a user can request that a countdown timebox of a specified duration be displayed on the Baby Harvester screen. The interface for the user to make this request is contained in `controller.html` and `controller.js`, and includes requesting the authentication token from the user and using it for authentication to the API.

`timer.html` and `timer.js` are loaded by the Baby Harvester itself, and retrieve the desired timebox duration, harvester name, and token from URI parameters. They are then responsible for displaying the requested countdown, and trigger a final request  to the Harvester API to print "Time's Up!" when the timer finishes.