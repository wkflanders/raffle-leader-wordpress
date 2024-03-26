document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('insert-raffleleader-shortcode');
    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            var shortcode = '[raffleleader id="3"]';
            if (tinyMCE.activeEditor) {
                tinyMCE.activeEditor.execCommand('mceInsertContent', false, shortcode);
            } else {
                var textEditor = document.getElementById('content');
                if (textEditor) {
                    textEditor.value += shortcode;
                }
            }
        });
    }
});