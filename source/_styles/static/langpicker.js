/*
 * Language picker, like the ones of the website and of the plugins sites.
 *
 * Translations are separate Read the Docs projects, so their list is not known
 * at build time; the Read the Docs addons give it, with the URL of each one for
 * the version being read (master or develop). The picker stays hidden until
 * then, and on a local build, where that data never comes.
 *
 * The markup is a <details> disclosure: it opens and takes the keyboard on its
 * own, this only adds closing on Escape or a click elsewhere.
 */
(function () {
    /* Native name of a language, from the browser so that a new translation needs
       nothing here. A browser lacking the data of a language answers in another
       one (Chromium names Breton in the reader's language), so its answer is only
       taken when it resolved that very language; Read the Docs' English name else */
    var unknown = {
        /* Languages Chromium has no data for; a missing one still gets listed */
        'br': 'Brezhoneg',
        'si': 'සිංහල'
    };

    function name(language) {
        var code = language.code;
        if (unknown[code]) return unknown[code];
        try {
            var names = new Intl.DisplayNames([code], { type: 'language' });
            if (names.resolvedOptions().locale.split('-')[0] === code.split('-')[0]) {
                var native = names.of(code);
                return native.charAt(0).toLocaleUpperCase(code) + native.slice(1);
            }
        } catch (e) {
            /* Unknown code or no Intl.DisplayNames, see below */
        }
        return language.name;
    }

    document.addEventListener('readthedocs-addons-data-ready', function (event) {
        var picker = document.querySelector('.langselector');
        var data = event.detail.data();
        var translations = data.projects.translations;
        if (!picker || !translations.length) return;

        /* Every translation is built from the same sources: the page exists there too */
        var filename = data.readthedocs.resolver.filename.replace(/^\//, '');
        var list = picker.querySelector('ul');
        list.textContent = '';
        translations.slice().sort(function (a, b) {
            return a.language.code.localeCompare(b.language.code);
        }).forEach(function (translation) {
            var link = document.createElement('a');
            link.href = translation.urls.documentation + filename;
            link.lang = link.hreflang = translation.language.code;
            link.textContent = name(translation.language);
            var item = document.createElement('li');
            item.appendChild(link);
            list.appendChild(item);
        });
        picker.querySelector('.langpicker-current').textContent = name(data.projects.current.language);
        picker.hidden = false;
    });

    document.addEventListener('click', function (event) {
        var details = document.querySelector('.langpicker');
        if (details && details.open && !details.contains(event.target)) details.open = false;
    });
    document.addEventListener('keydown', function (event) {
        var details = document.querySelector('.langpicker');
        if (event.key === 'Escape' && details && details.open) {
            details.open = false;
            details.querySelector('summary').focus();
        }
    });
})();
