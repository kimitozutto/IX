var Valid = {
    form: (formId) => {
        var count = 0;
        var elements = document.getElementById(formId).querySelectorAll("[required]");

        Valid.clear();

        for (var i = 0, len = elements.length; i < len; ++i) {

            if (elements[i].value != '') continue;
            var span = document.createElement('span'),
                msg = elements[i].getAttribute('data-msg');
            if (msg == null) msg = 'Please enter this field.';
            span.className = 'invalid-feedback pl-4 ml-3'
            span.innerHTML = msg;
            elements[i].classList.add("is-invalid");
            elements[i].parentElement.appendChild(span);
            count++;
        }

        var results = (count > 0) ? false : true;

        return results;
    },

    show: (name, msg = "Please enter this field.") => {
        var element = document.getElementsByName(name)[0]
        var span = document.createElement('span')
        span.className = 'invalid-feedback'
        span.innerHTML = msg
        element.classList.add("is-invalid")
        element.parentElement.appendChild(span)
    },

    clear: () => {
        var block = document.getElementsByClassName("invalid-feedback");
        for (var i = 0, len = block.length; i < len; i++) {
            block[0].remove();
        }

        var invalid = document.getElementsByClassName("is-invalid");
        for (var i = 0, len = invalid.length; i < len; i++) {
            invalid[0].classList.remove("is-invalid");
        }
    }

}
