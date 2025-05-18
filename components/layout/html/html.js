(function (Drupal) {
    Drupal.behaviors.compassHtml = {
        attach: function attach(context) {
            if (!this.called) {
                let components = document.querySelectorAll(
                    '[data-component-id="compass:html"]'
                );
                console.log('Replace me with the real JS behavior', components);
                this.called = true;
            }
        },
    };
})(Drupal);
