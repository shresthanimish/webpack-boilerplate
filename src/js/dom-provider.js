/**
 * Provides variables and other things required for app
 */

/**
 * Exporting variable so that it can be imported by other js file using "import" function.
 *  You can specify what variables you want to import by saying: "import {secretButton , anotherVariable} from <relative-path>/<to>/<this>/<file>/dom-provider.js"
 */

export var secretButton = document.querySelector('#secret-button');
export var secretParagraph = document.querySelector('#secret-paragraph');