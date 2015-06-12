# htmleditor-addon

Firefox browser add-on to open the
[HTMLEditor](https://github.com/brettz9/htmleditor)
editor in new tabs.

# To-dos

# Possible to-dos

# Development

To build, run:

`npm install .`

The packaged XPI also then has a manual modification of the
Bower-auto-loaded minified jQuery distribution file in order to satisfy
validation requirements at AMO (which don't recognize the file as
it differs from the same version of the file as hosted on the jquery.com
site because it includes reference to a source map file). Since these
validation requirements requires replacing the file anyways, I've
also upped the jQuery file to use version 1.11.3 instead of the
version 1.11.1 targeted by split-pane.

After installing, use [jpm](https://github.com/mozilla/jpm)
with `run` to test the add-on code or `xpi` to build an XPI out of it.
