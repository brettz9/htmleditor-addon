/*globals exports, require, console */
/*jslint vars:true, todo:true */
(function () {'use strict';

function l (msg) {
	console.log(msg);
}

var actionButton,
	_ = require('sdk/l10n').get,
    ui = require('sdk/ui'),
    tabs = require('sdk/tabs'),
    self = require('sdk/self');
	
exports.main = function () {

    actionButton = ui.ActionButton({
        id: 'htmleditor',
        label: _("HTMLEditor"),
        icon: {
            '32': './htmleditor32.png',
            '64': './htmleditor64.png'
        },
        onClick: function (state) {
            tabs.open(self.data.url('bower_components/htmleditor/index.html'));
        }
    });

};


exports.onUnload = function () { // reason
    if (actionButton) {
        actionButton.destroy();
    }
};


}());
