# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation source for [Galette](https://galette.eu), a membership management web application. Documentation is written in reStructuredText (.rst) and built with [Sphinx](https://www.sphinx-doc.org). It is published to [doc.galette.eu](https://doc.galette.eu) via ReadTheDocs.

Current Galette version documented: **1.2.1** (defined in `source/conf.py` and `source/globals.rst`).

For reference, source code is available locally at `~/Workdir/php-eclipse_workspace/Galette` and plugins source are at `~/Workdir/php-eclipse_workspace/Galette/galette/plugins/`.

## Build Commands

Install dependencies first:
```bash
pip install -r requirements.txt
```

Common build targets:
```bash
make html        # Build HTML output → build/html/
make linkcheck   # Check all external links for integrity
make gettext     # Extract translatable strings → source/locale/*.pot
make clean       # Remove build directory
make pdf         # Build PDF (requires rst2pdf)
make latexpdf    # Build PDF via LaTeX
```

To build for a specific language (e.g. French):
```bash
sphinx-build -b html -D language=fr source build/html/fr
```

## Architecture

### Source Structure

- `source/index.rst` — master toctree; entry point
- `source/conf.py` — Sphinx configuration (version, theme, locale settings)
- `source/globals.rst` — Global RST substitutions (`|stable_version|`, `|folder|`, etc.) used across all pages; marked `:orphan:` so it doesn't appear in the TOC
- `source/installation/` — Installation manual
- `source/usermanual/` — User manual
- `source/faq/` — FAQ section
- `source/plugins/` — Plugin documentation
- `source/changelogs/` — Per-major-version changelogs (galette_06.rst … galette_10.rst)
- `source/_styles/` — Custom Sphinx theme (`galette`) and static assets
- `source/locale/` — Translations in gettext format (.po/.mo files), one subdirectory per language code

### Internationalization

The primary language is English. Translations are managed via Weblate. The workflow is:

1. `make gettext` regenerates `.pot` template files in `source/locale/`
2. Translators update `.po` files in `source/locale/<lang>/LC_MESSAGES/`
3. Sphinx compiles `.po` files automatically during the build

Language codes present: `ar`, `br`, `ca`, `de`, `es`, `fr_FR` (symlinked as `fr`), `it`, `nb_NO`, `oc`, `ota`, `pt`, `ru`, `si`, `ta`, `tr`, `uk`.

### Global Substitutions

`source/globals.rst` defines substitutions that can be used anywhere with `|stable_version|`, `|folder|`, `|file|`, `|phpfile|`. To use them in a page, include:
```rst
.. include:: /globals.rst
```

When updating the Galette version, change both `source/conf.py` (`version` and `release`) and the `|stable_version|` replacement in `source/globals.rst`.

### Custom Theme

The HTML theme is named `galette`, located at `source/_styles/templates/galette/`. Static assets (CSS, images) are in `source/_styles/static/`.

### Changelog Organization

`source/changelog.rst` aggregates changelogs. The current-cycle file (`changelogs/galette_10.rst`) is marked `:orphan:` but included inline via `.. include::`. Older versions are linked via toctree. When starting a new major version cycle, create a new `changelogs/galette_XX.rst`, mark it `:orphan:`, update the `include` directive in `changelog.rst`, and add the previous file to the toctree.
