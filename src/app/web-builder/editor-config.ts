"use client"

import gjsPresetWebpage from 'grapesjs-preset-webpage'
import gjsTyped from 'grapesjs-typed'
import grapesjs, { Editor } from 'grapesjs'
import gjsImageEditor from 'grapesjs-tui-image-editor'

export const editorConfig =  grapesjs.init({
    container: "#editor",
    richTextEditor: {},
    codeManager: {
      optsCodeViewer: {
        backgroundColor: 'red'
      }
    },
    assetManager: {

    },
    blockManager: {
      blocks: [
        {
          id: 'text',
          label: 'Text',
          category: 'Custom',
          media: '<IconText/>',
          activate: true,
          content: {
            type: 'text',
            content: 'Insert your text here',
            style: { padding: '10px' },
          }
        },
        {
          id: 'button',
          label: 'Button',
          category: 'Custom',
          media: '<IconText/>',
          activate: true,
          content: {
            type: 'button',
            content: 'Click Me',
            style: { padding: '10px', display:'inline-block' },
          }
        },
        {
          id: 'image',
          label: 'Image',
          category: 'Custom',
          select: true,
          content: { type: 'image' },
          activate: true
        },
        {
          id: 'video',
          label: 'Video',
          category: 'Custom',
          select: true,
          content: { type: 'video' },
          activate: true
        }
      ],
    },
    plugins: [gjsImageEditor, gjsTyped, gjsPresetWebpage],
    pluginsOpts: {
      gjsPresetWebpage: {
        gridLayout: "",
        modalImportTitle: 'Import Template',
        modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
        modalImportContent: function (editor: Editor) {
          return editor.getHtml() + '<style>' + editor.getCss() + '</style>'
        },
      },
      gjsImageEditor: {
        script: [
          // 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
          'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
          'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
          'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
        ],
        style: [
          'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
          'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css',
        ],
      },
      gjsTyped: {
        block: {
          category: 'Extra',
          content: {
            type: 'typed',
            'type-speed': 40,
            strings: [
              'Text row one',
              'Text row two',
              'Text row three',
            ],
          }
        }
      }
    }
  })