(function () {
    'use strict';

    var EDITABLE_SELECTORS = [
        '.contact-text',
        '.competency-tag',
        '.edu-degree',
        '.edu-detail',
        '.skill-category',
        '.skill-list',
        '.name-title',
        '.job-title-main',
        '.section-title',
        '.profile-description',
        '.job-title',
        '.job-date',
        '.job-company',
        '.job-description > p',
        '.job-description li',
        '.training-group-title',
        '.course-name',
        '.course-meta',
        '.course-module'
    ];

    var THEME_FIELDS = [
        {
            key: 'font-family',
            label: 'Fuente',
            cssVar: '--font-family',
            type: 'select',
            group: 'Tipografía',
            options: [
                { value: 'Segoe UI, Arial, sans-serif', label: 'Segoe UI' },
                { value: 'Arial, Helvetica, sans-serif', label: 'Arial' },
                { value: 'Georgia, Times New Roman, serif', label: 'Georgia' },
                { value: 'Trebuchet MS, Arial, sans-serif', label: 'Trebuchet MS' },
                { value: 'Verdana, Geneva, sans-serif', label: 'Verdana' },
                { value: 'Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif', label: 'Calibri' },
                { value: 'Cambria, Georgia, serif', label: 'Cambria' },
                { value: 'Garamond, Baskerville, Georgia, serif', label: 'Garamond' },
                { value: 'Palatino Linotype, Book Antiqua, Palatino, serif', label: 'Palatino' },
                { value: 'Tahoma, Geneva, Verdana, sans-serif', label: 'Tahoma' },
                { value: 'Helvetica Neue, Helvetica, Arial, sans-serif', label: 'Helvetica Neue' },
                { value: 'Century Gothic, Futura, Arial, sans-serif', label: 'Century Gothic' }
            ],
            defaultValue: 'Segoe UI, Arial, sans-serif'
        },
        {
            key: 'body-font-size',
            label: 'Texto base',
            cssVar: '--body-font-size',
            type: 'range',
            group: 'Tipografía',
            min: 14,
            max: 20,
            step: 0.5,
            unit: 'px',
            defaultValue: '16'
        },
        {
            key: 'body-line-height',
            label: 'Interlineado',
            cssVar: '--body-line-height',
            type: 'range',
            group: 'Tipografía',
            min: 1.35,
            max: 2,
            step: 0.05,
            unit: '',
            defaultValue: '1.6'
        },
        {
            key: 'name-size',
            label: 'Nombre principal',
            cssVar: '--name-size',
            type: 'range',
            group: 'Tipografía',
            min: 32,
            max: 56,
            step: 1,
            unit: 'px',
            defaultValue: '40'
        },
        {
            key: 'subtitle-size',
            label: 'Subtítulo',
            cssVar: '--subtitle-size',
            type: 'range',
            group: 'Tipografía',
            min: 16,
            max: 28,
            step: 0.5,
            unit: 'px',
            defaultValue: '19.2'
        },
        {
            key: 'section-title-size',
            label: 'Títulos de sección',
            cssVar: '--section-title-size',
            type: 'range',
            group: 'Tipografía',
            min: 20,
            max: 36,
            step: 1,
            unit: 'px',
            defaultValue: '24'
        },
        {
            key: 'sidebar-heading-size',
            label: 'Títulos laterales',
            cssVar: '--sidebar-heading-size',
            type: 'range',
            group: 'Tipografía',
            min: 16,
            max: 24,
            step: 0.5,
            unit: 'px',
            defaultValue: '19.2'
        },
        {
            key: 'primary-color',
            label: 'Fondo lateral',
            cssVar: '--primary-color',
            type: 'color',
            group: 'Colores',
            defaultValue: '#1a3a35'
        },
        {
            key: 'secondary-color',
            label: 'Color secundario',
            cssVar: '--secondary-color',
            type: 'color',
            group: 'Colores',
            defaultValue: '#2a9d8f'
        },
        {
            key: 'accent-color',
            label: 'Color de títulos',
            cssVar: '--accent-color',
            type: 'color',
            group: 'Colores',
            defaultValue: '#1a3a35'
        },
        {
            key: 'text-color',
            label: 'Texto principal',
            cssVar: '--text-color',
            type: 'color',
            group: 'Colores',
            defaultValue: '#333333'
        },
        {
            key: 'sidebar-text-color',
            label: 'Texto lateral principal',
            cssVar: '--sidebar-text-color',
            type: 'color',
            group: 'Colores',
            defaultValue: '#ffffff'
        },
        {
            key: 'sidebar-muted-text',
            label: 'Texto lateral secundario',
            cssVar: '--sidebar-muted-text',
            type: 'color',
            group: 'Colores',
            defaultValue: '#e5e7eb'
        },
        {
            key: 'page-background',
            label: 'Fondo exterior',
            cssVar: '--page-background',
            type: 'color',
            group: 'Colores',
            defaultValue: '#f5f7fa'
        },
        {
            key: 'card-background',
            label: 'Fondo del CV',
            cssVar: '--card-background',
            type: 'color',
            group: 'Colores',
            defaultValue: '#ffffff'
        },
        {
            key: 'tag-bg',
            label: 'Fondo de competencias',
            cssVar: '--tag-bg',
            type: 'color',
            group: 'Colores',
            defaultValue: '#dbeafe'
        },
        {
            key: 'tag-text',
            label: 'Texto de competencias',
            cssVar: '--tag-text',
            type: 'color',
            group: 'Colores',
            defaultValue: '#ffffff'
        },
        {
            key: 'tag-border',
            label: 'Borde de competencias',
            cssVar: '--tag-border',
            type: 'color',
            group: 'Colores',
            defaultValue: '#93c5fd'
        },
        {
            key: 'module-bg',
            label: 'Fondo de módulos',
            cssVar: '--module-bg',
            type: 'color',
            group: 'Colores',
            defaultValue: '#f0faf9'
        },
        {
            key: 'module-text',
            label: 'Texto de módulos',
            cssVar: '--module-text',
            type: 'color',
            group: 'Colores',
            defaultValue: '#666666'
        },
        {
            key: 'module-border',
            label: 'Borde de módulos',
            cssVar: '--module-border',
            type: 'color',
            group: 'Colores',
            defaultValue: '#c8ebe8'
        },
        {
            key: 'profile-image-size',
            label: 'Tamaño de foto',
            cssVar: '--profile-image-size',
            type: 'range',
            group: 'Diseño',
            min: 120,
            max: 220,
            step: 2,
            unit: 'px',
            defaultValue: '180'
        },
        {
            key: 'sidebar-width',
            label: 'Ancho lateral',
            cssVar: '--sidebar-width',
            type: 'range',
            group: 'Diseño',
            min: 24,
            max: 40,
            step: 1,
            unit: '%',
            defaultValue: '30'
        },
        {
            key: 'sidebar-padding',
            label: 'Padding lateral',
            cssVar: '--sidebar-padding',
            type: 'range',
            group: 'Diseño',
            min: 20,
            max: 44,
            step: 1,
            unit: 'px',
            defaultValue: '32'
        },
        {
            key: 'content-padding',
            label: 'Padding principal',
            cssVar: '--content-padding',
            type: 'range',
            group: 'Diseño',
            min: 24,
            max: 56,
            step: 1,
            unit: 'px',
            defaultValue: '40'
        }
    ];

    document.addEventListener('DOMContentLoaded', initEditor);

    function initEditor() {
        var body = document.body;
        var cvContainer = document.querySelector('.cv-container');

        if (!body || !cvContainer) {
            return;
        }

        var state = {
            body: body,
            root: document.documentElement,
            cvKey: body.dataset.cvKey || deriveCvKey(),
            cvLabel: body.dataset.cvLabel || document.title || 'curriculum',
            version: body.dataset.cvVersion || '1',
            storageKey: '',
            editables: [],
            defaults: {
                theme: {},
                content: {}
            },
            ui: null,
            editMode: false,
            saveTimer: null,
            wasEditingBeforePrint: false
        };

        state.storageKey = 'cv-editor:' + state.cvKey + ':v' + state.version;
        state.editables = collectEditables();
        captureDefaults(state);
        state.ui = buildEditorUi(state);
        bindEditorUi(state);

        var restored = restoreState(state);
        setEditMode(state, false);
        updateStatus(state, restored ? 'Cambios restaurados automáticamente.' : 'Listo para editar. Los cambios se guardan en este navegador.', restored ? 'success' : 'info');
        syncDocumentTitle();

        window.addEventListener('beforeprint', function () {
            state.wasEditingBeforePrint = state.editMode;
            setEditMode(state, false);
        });

        window.addEventListener('afterprint', function () {
            if (state.wasEditingBeforePrint) {
                setEditMode(state, true);
            }
        });
    }

    function deriveCvKey() {
        var path = window.location.pathname || 'curriculum';
        var fileName = path.split('/').pop() || 'curriculum';
        return fileName.replace(/\.html?$/i, '').toLowerCase();
    }

    function collectEditables() {
        return Array.prototype.slice.call(document.querySelectorAll(EDITABLE_SELECTORS.join(', '))).filter(function (element) {
            return !element.closest('.cv-editor-shell') && !element.closest('.cv-print-fab');
        });
    }

    function captureDefaults(state) {
        state.editables.forEach(function (element, index) {
            var editableId = 'editable-' + (index + 1);
            element.dataset.editableId = editableId;
            element.dataset.editableKind = getEditableKind(element);
            element.setAttribute('spellcheck', 'true');
            state.defaults.content[editableId] = element.innerHTML;
        });

        THEME_FIELDS.forEach(function (field) {
            state.defaults.theme[field.cssVar] = readThemeValue(field);
        });
    }

    function buildEditorUi(state) {
        var shell = document.createElement('div');
        shell.className = 'cv-editor-shell';

        var controlsByGroup = groupFieldsBySection();

        shell.innerHTML = '' +
            '<button type="button" class="cv-editor-launcher" data-action="toggle-panel">Personalizar CV</button>' +
            '<aside class="cv-editor-panel" hidden>' +
                '<div class="cv-editor-header">' +
                    '<div>' +
                        '<h2>Editor del CV</h2>' +
                        '<p>Texto, colores, tamaños y persistencia local.</p>' +
                    '</div>' +
                    '<button type="button" class="cv-editor-close" data-action="close-panel" aria-label="Cerrar panel">×</button>' +
                '</div>' +
                '<div class="cv-editor-status" data-role="status" data-tone="info">Listo.</div>' +
                '<div class="cv-editor-actions">' +
                    '<button type="button" class="cv-editor-button primary" data-action="toggle-edit">Editar contenido</button>' +
                    '<button type="button" class="cv-editor-button" data-action="print">Imprimir / PDF</button>' +
                    '<button type="button" class="cv-editor-button" data-action="export">Exportar JSON</button>' +
                    '<button type="button" class="cv-editor-file-button" data-action="import">Importar JSON</button>' +
                    '<button type="button" class="cv-editor-button danger" data-action="reset">Restablecer</button>' +
                '</div>' +
                renderFieldGroups(controlsByGroup) +
                '<p class="cv-editor-help">Los cambios se guardan automáticamente en este navegador mediante almacenamiento local. Si quieres llevarte el CV a otro dispositivo, usa Exportar / Importar JSON.</p>' +
                '<input type="file" hidden accept="application/json,.json" data-role="import-input">' +
            '</aside>';

        document.body.appendChild(shell);

        var printButton = document.createElement('button');
        printButton.type = 'button';
        printButton.className = 'cv-print-fab';
        printButton.setAttribute('data-action', 'print');
        printButton.textContent = '🖨 PDF';
        document.body.appendChild(printButton);

        return {
            shell: shell,
            panel: shell.querySelector('.cv-editor-panel'),
            launcher: shell.querySelector('.cv-editor-launcher'),
            close: shell.querySelector('.cv-editor-close'),
            status: shell.querySelector('[data-role="status"]'),
            editButton: shell.querySelector('[data-action="toggle-edit"]'),
            printButton: shell.querySelector('[data-action="print"]'),
            exportButton: shell.querySelector('[data-action="export"]'),
            importButton: shell.querySelector('[data-action="import"]'),
            resetButton: shell.querySelector('[data-action="reset"]'),
            importInput: shell.querySelector('[data-role="import-input"]'),
            fab: printButton,
            controls: shell.querySelectorAll('[data-css-var]')
        };
    }

    function groupFieldsBySection() {
        return THEME_FIELDS.reduce(function (accumulator, field) {
            if (!accumulator[field.group]) {
                accumulator[field.group] = [];
            }
            accumulator[field.group].push(field);
            return accumulator;
        }, {});
    }

    function renderFieldGroups(groups) {
        return Object.keys(groups).map(function (groupName) {
            var groupFields = groups[groupName].map(renderField).join('');
            return '' +
                '<section class="cv-editor-section">' +
                    '<h3>' + escapeHtml(groupName) + '</h3>' +
                    '<div class="cv-editor-controls">' + groupFields + '</div>' +
                '</section>';
        }).join('');
    }

    function renderField(field) {
        var inputId = 'field-' + field.key;

        if (field.type === 'select') {
            return '' +
                '<label class="cv-editor-field" for="' + inputId + '">' +
                    '<span class="cv-editor-label-row"><span>' + escapeHtml(field.label) + '</span></span>' +
                    '<select id="' + inputId + '" data-css-var="' + field.cssVar + '" data-field-key="' + field.key + '" data-field-type="' + field.type + '">' +
                        field.options.map(function (option) {
                            return '<option value="' + escapeAttribute(option.value) + '">' + escapeHtml(option.label) + '</option>';
                        }).join('') +
                    '</select>' +
                '</label>';
        }

        return '' +
            '<label class="cv-editor-field" for="' + inputId + '">' +
                '<span class="cv-editor-label-row">' +
                    '<span>' + escapeHtml(field.label) + '</span>' +
                    '<output for="' + inputId + '" data-output-for="' + inputId + '"></output>' +
                '</span>' +
                '<input id="' + inputId + '" data-css-var="' + field.cssVar + '" data-field-key="' + field.key + '" data-field-type="' + field.type + '" ' +
                    (field.type === 'color'
                        ? 'type="color"'
                        : 'type="range" min="' + field.min + '" max="' + field.max + '" step="' + field.step + '" data-unit="' + field.unit + '"') + '>' +
            '</label>';
    }

    function bindEditorUi(state) {
        state.ui.launcher.addEventListener('click', function () {
            togglePanel(state);
        });

        state.ui.close.addEventListener('click', function () {
            setPanelOpen(state, false);
        });

        state.ui.editButton.addEventListener('click', function () {
            setEditMode(state, !state.editMode);
        });

        state.ui.printButton.addEventListener('click', function () {
            window.print();
        });

        state.ui.fab.addEventListener('click', function () {
            window.print();
        });

        state.ui.exportButton.addEventListener('click', function () {
            exportState(state);
        });

        state.ui.importButton.addEventListener('click', function () {
            state.ui.importInput.click();
        });

        state.ui.importInput.addEventListener('change', function (event) {
            importState(state, event.target.files && event.target.files[0]);
            event.target.value = '';
        });

        state.ui.resetButton.addEventListener('click', function () {
            resetState(state);
        });

        Array.prototype.forEach.call(state.ui.controls, function (control) {
            var eventName = control.dataset.fieldType === 'select' ? 'change' : 'input';
            control.addEventListener(eventName, function () {
                applyThemeFromControls(state);
                scheduleSave(state, 'Estilo guardado automáticamente.');
            });
        });

        state.editables.forEach(function (element) {
            element.addEventListener('input', function () {
                scheduleSave(state, 'Contenido guardado automáticamente.');
                syncDocumentTitle();
            });

            element.addEventListener('paste', function (event) {
                handlePasteAsPlainText(event);
            });

            element.addEventListener('keydown', function (event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                }
            });
        });
    }

    function togglePanel(state) {
        setPanelOpen(state, state.ui.panel.hidden);
    }

    function setPanelOpen(state, open) {
        state.ui.panel.hidden = !open;
        state.ui.launcher.textContent = open ? 'Ocultar panel' : 'Personalizar CV';
    }

    function setEditMode(state, enabled) {
        state.editMode = enabled;
        state.body.classList.toggle('cv-edit-mode', enabled);

        state.editables.forEach(function (element) {
            element.contentEditable = enabled ? 'true' : 'false';
            element.tabIndex = enabled ? 0 : -1;
            if (!enabled) {
                element.blur();
            }
        });

        state.ui.editButton.textContent = enabled ? 'Bloquear contenido' : 'Editar contenido';
        state.ui.editButton.classList.toggle('primary', enabled);
        updateStatus(state, enabled ? 'Modo edición activado. Haz clic sobre cualquier texto del CV.' : 'Modo edición desactivado.', enabled ? 'success' : 'info');
    }

    function restoreState(state) {
        var saved = readStorage(state.storageKey);
        applyThemeValues(state, saved && saved.theme ? saved.theme : state.defaults.theme);
        applyContentValues(state, saved && saved.content ? saved.content : state.defaults.content);
        return Boolean(saved);
    }

    function applyContentValues(state, contentMap) {
        state.editables.forEach(function (element) {
            var editableId = element.dataset.editableId;
            if (Object.prototype.hasOwnProperty.call(contentMap, editableId)) {
                element.innerHTML = contentMap[editableId];
            }
        });
    }

    function applyThemeValues(state, themeMap) {
        THEME_FIELDS.forEach(function (field) {
            var rawValue = themeMap[field.cssVar];
            var normalizedValue = rawValue == null || rawValue === '' ? state.defaults.theme[field.cssVar] : rawValue;
            state.root.style.setProperty(field.cssVar, formatValueForCss(field, normalizedValue));
        });

        syncControlsWithTheme(state, themeMap);
    }

    function syncControlsWithTheme(state, themeMap) {
        Array.prototype.forEach.call(state.ui.controls, function (control) {
            var field = getFieldByCssVar(control.dataset.cssVar);
            if (!field) {
                return;
            }

            var value = themeMap[field.cssVar] != null ? themeMap[field.cssVar] : state.defaults.theme[field.cssVar];

            if (field.type === 'select') {
                setSelectValue(control, normalizeFontValue(String(value)));
            } else if (field.type === 'color') {
                control.value = normalizeColor(value, field.defaultValue);
            } else {
                control.value = extractNumericValue(value, field.defaultValue);
                updateRangeOutput(control, field);
            }
        });
    }

    function applyThemeFromControls(state) {
        Array.prototype.forEach.call(state.ui.controls, function (control) {
            var field = getFieldByCssVar(control.dataset.cssVar);
            if (!field) {
                return;
            }

            var value = control.value;
            state.root.style.setProperty(field.cssVar, formatValueForCss(field, value));
            if (field.type === 'range') {
                updateRangeOutput(control, field);
            }
        });
    }

    function exportState(state) {
        var payload = buildPayload(state);
        var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = sanitizeFileName(state.cvKey + '-' + getIsoDate() + '.json');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        updateStatus(state, 'Configuración exportada correctamente.', 'success');
    }

    function importState(state, file) {
        if (!file) {
            return;
        }

        var reader = new FileReader();
        reader.onload = function () {
            try {
                var imported = JSON.parse(String(reader.result || '{}'));
                if (!imported || typeof imported !== 'object' || !imported.theme || !imported.content) {
                    throw new Error('Archivo JSON no válido.');
                }

                applyThemeValues(state, imported.theme);
                applyContentValues(state, imported.content);
                persistState(state, 'Cambios importados y guardados.');
                syncDocumentTitle();
            } catch (error) {
                updateStatus(state, error.message || 'No se pudo importar el archivo.', 'warning');
            }
        };
        reader.readAsText(file, 'utf-8');
    }

    function resetState(state) {
        var confirmed = window.confirm('Se borrarán los cambios guardados en este navegador y se restaurará la versión original del CV.');
        if (!confirmed) {
            return;
        }

        applyThemeValues(state, state.defaults.theme);
        applyContentValues(state, state.defaults.content);
        try {
            localStorage.removeItem(state.storageKey);
        } catch (error) {
            updateStatus(state, 'No se pudo limpiar el almacenamiento local.', 'warning');
            return;
        }

        syncDocumentTitle();
        updateStatus(state, 'Versión original restaurada.', 'success');
    }

    function scheduleSave(state, successMessage) {
        window.clearTimeout(state.saveTimer);
        state.saveTimer = window.setTimeout(function () {
            persistState(state, successMessage);
        }, 250);
    }

    function persistState(state, successMessage) {
        try {
            localStorage.setItem(state.storageKey, JSON.stringify(buildPayload(state)));
            updateStatus(state, successMessage || 'Cambios guardados automáticamente.', 'success');
        } catch (error) {
            updateStatus(state, 'No se pudieron guardar los cambios en este navegador.', 'warning');
        }
    }

    function buildPayload(state) {
        return {
            storageKey: state.storageKey,
            cvKey: state.cvKey,
            label: state.cvLabel,
            version: state.version,
            updatedAt: new Date().toISOString(),
            theme: collectCurrentTheme(state),
            content: collectCurrentContent(state)
        };
    }

    function collectCurrentContent(state) {
        return state.editables.reduce(function (accumulator, element) {
            accumulator[element.dataset.editableId] = element.innerHTML;
            return accumulator;
        }, {});
    }

    function collectCurrentTheme(state) {
        return THEME_FIELDS.reduce(function (accumulator, field) {
            var control = state.ui.panel.querySelector('[data-css-var="' + field.cssVar + '"]');
            if (!control) {
                return accumulator;
            }
            accumulator[field.cssVar] = formatValueForCss(field, control.value);
            return accumulator;
        }, {});
    }

    function readStorage(storageKey) {
        try {
            var raw = localStorage.getItem(storageKey);
            return raw ? JSON.parse(raw) : null;
        } catch (error) {
            return null;
        }
    }

    function readThemeValue(field) {
        var computedRoot = getComputedStyle(document.documentElement);
        var rawValue = computedRoot.getPropertyValue(field.cssVar).trim();

        if (!rawValue) {
            rawValue = field.defaultValue;
        }

        if (field.type === 'select') {
            return normalizeFontValue(rawValue || field.defaultValue);
        }

        if (field.type === 'color') {
            return normalizeColor(rawValue, field.defaultValue);
        }

        return formatValueForCss(field, extractNumericValue(rawValue, field.defaultValue));
    }

    function getFieldByCssVar(cssVar) {
        return THEME_FIELDS.find(function (field) {
            return field.cssVar === cssVar;
        });
    }

    function getEditableKind(element) {
        var inlineTags = ['SPAN', 'H1', 'H2', 'H3', 'H4', 'A'];
        return inlineTags.indexOf(element.tagName) >= 0 ? 'inline' : 'block';
    }

    function updateRangeOutput(control, field) {
        var output = statefulQuery('[data-output-for="' + control.id + '"]', control.closest('.cv-editor-field'));
        if (!output) {
            return;
        }

        output.value = String(control.value) + (field.unit || '');
        output.textContent = String(control.value) + (field.unit || '');
    }

    function normalizeColor(value, fallback) {
        if (!value) {
            return fallback;
        }

        var normalized = String(value).trim();

        if (/^#[0-9a-f]{6}$/i.test(normalized)) {
            return normalized;
        }

        if (/^#[0-9a-f]{3}$/i.test(normalized)) {
            return '#' + normalized.charAt(1) + normalized.charAt(1) + normalized.charAt(2) + normalized.charAt(2) + normalized.charAt(3) + normalized.charAt(3);
        }

        var rgbaMatch = normalized.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
        if (rgbaMatch) {
            return '#' + [rgbaMatch[1], rgbaMatch[2], rgbaMatch[3]].map(function (part) {
                return Number(part).toString(16).padStart(2, '0');
            }).join('');
        }

        return fallback;
    }

    function normalizeFontValue(value) {
        return String(value || '').replace(/\s+/g, ' ').replace(/"/g, '').trim();
    }

    function extractNumericValue(value, fallback) {
        var match = String(value || fallback).match(/-?\d+(?:\.\d+)?/);
        return match ? match[0] : String(fallback || '0');
    }

    function formatValueForCss(field, value) {
        if (field.type === 'select') {
            return normalizeFontValue(String(value || field.defaultValue));
        }

        if (field.type === 'color') {
            return normalizeColor(value, field.defaultValue);
        }

        var numericValue = extractNumericValue(value, field.defaultValue);
        return numericValue + (field.unit || '');
    }

    function setSelectValue(selectElement, wantedValue) {
        var foundOption = Array.prototype.find.call(selectElement.options, function (option) {
            return normalizeFontValue(option.value).toLowerCase() === normalizeFontValue(wantedValue).toLowerCase();
        });
        selectElement.value = foundOption ? foundOption.value : selectElement.options[0].value;
    }

    function handlePasteAsPlainText(event) {
        event.preventDefault();
        var text = (event.clipboardData || window.clipboardData).getData('text');
        if (document.queryCommandSupported && document.queryCommandSupported('insertText')) {
            document.execCommand('insertText', false, text);
            return;
        }

        var selection = window.getSelection();
        if (!selection || !selection.rangeCount) {
            return;
        }

        selection.deleteFromDocument();
        selection.getRangeAt(0).insertNode(document.createTextNode(text));
        selection.collapseToEnd();
    }

    function updateStatus(state, message, tone) {
        state.ui.status.textContent = message;
        state.ui.status.dataset.tone = tone || 'info';
    }

    function statefulQuery(selector, scope) {
        return (scope || document).querySelector(selector);
    }

    function syncDocumentTitle() {
        var name = statefulQuery('.name-title');
        var role = statefulQuery('.job-title-main');
        if (!name) {
            return;
        }

        var nameText = name.textContent.trim();
        var roleText = role ? role.textContent.trim() : '';
        document.title = roleText ? nameText + ' - ' + roleText : nameText;
    }

    function getIsoDate() {
        return new Date().toISOString().slice(0, 10);
    }

    function sanitizeFileName(fileName) {
        return fileName.replace(/[^a-z0-9._-]/gi, '_').toLowerCase();
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function escapeAttribute(value) {
        return escapeHtml(value);
    }
})();


