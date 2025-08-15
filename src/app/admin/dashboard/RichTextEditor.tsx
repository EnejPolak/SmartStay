"use client";

import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface RichTextEditorProps {
  value: string;
  onChange: (content: string) => void;
  placeholder?: string;
  height?: number;
}

export default function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "Write your blog content here...",
  height = 400 
}: RichTextEditorProps) {
  const editorRef = useRef<any>(null);

  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/50 overflow-hidden">
      <Editor
        apiKey="uc9zxykiw4sjkaye18bo3li60bwliyriv43q8r2xdci8zqtn"
        onInit={(evt, editor) => editorRef.current = editor}
        value={value}
        onEditorChange={(content) => onChange(content)}
        init={{
          height,
          menubar: false,
          skin: 'oxide-dark',
          content_css: 'dark',
          placeholder,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount',
            'emoticons', 'textcolor', 'colorpicker', 'hr', 'pagebreak',
            'nonbreaking', 'toc', 'imagetools', 'quickbars'
          ],
          toolbar: [
            'undo redo | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify',
            'bullist numlist outdent indent | removeformat | forecolor backcolor | link image media table | hr pagebreak | code fullscreen'
          ].join(' | '),
          quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
          quickbars_insert_toolbar: 'quickimage quicktable',
          style_formats: [
            { title: 'Headings', items: [
              { title: 'Heading 1', format: 'h1' },
              { title: 'Heading 2', format: 'h2' },
              { title: 'Heading 3', format: 'h3' },
              { title: 'Heading 4', format: 'h4' },
              { title: 'Heading 5', format: 'h5' },
              { title: 'Heading 6', format: 'h6' }
            ]},
            { title: 'Inline', items: [
              { title: 'Bold', format: 'bold' },
              { title: 'Italic', format: 'italic' },
              { title: 'Underline', format: 'underline' },
              { title: 'Strikethrough', format: 'strikethrough' },
              { title: 'Superscript', format: 'superscript' },
              { title: 'Subscript', format: 'subscript' },
              { title: 'Code', format: 'code' }
            ]},
            { title: 'Blocks', items: [
              { title: 'Paragraph', format: 'p' },
              { title: 'Blockquote', format: 'blockquote' },
              { title: 'Div', format: 'div' },
              { title: 'Pre', format: 'pre' }
            ]}
          ],
          font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
          color_map: [
            'FFFFFF', 'White',
            'E5E7EB', 'Light Gray',
            '9CA3AF', 'Gray',
            '6B7280', 'Dark Gray',
            '374151', 'Darker Gray',
            '1F2937', 'Very Dark Gray',
            '8B7CDF', 'Purple',
            '60A5FA', 'Blue',
            'EF4444', 'Red',
            '10B981', 'Green',
            'F59E0B', 'Yellow',
            'F97316', 'Orange'
          ],
          content_style: `
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              font-size: 14px; 
              color: #ffffff;
              background-color: #18181b;
              line-height: 1.6;
              padding: 1rem;
            }
            h1, h2, h3, h4, h5, h6 { 
              color: #ffffff; 
              margin: 1rem 0 0.5rem 0;
            }
            p { 
              margin: 0 0 1rem 0; 
            }
            a { 
              color: #8B7CDF; 
            }
            blockquote {
              border-left: 4px solid #8B7CDF;
              margin: 1rem 0;
              padding: 0.5rem 1rem;
              background-color: #27272a;
              font-style: italic;
            }
            pre {
              background-color: #27272a;
              border: 1px solid #3f3f46;
              border-radius: 0.5rem;
              padding: 1rem;
              overflow-x: auto;
            }
            code {
              background-color: #27272a;
              border: 1px solid #3f3f46;
              border-radius: 0.25rem;
              padding: 0.125rem 0.25rem;
              font-family: 'Monaco', 'Consolas', monospace;
              font-size: 0.875em;
            }
            img {
              max-width: 100%;
              height: auto;
              border-radius: 0.5rem;
            }
          `,
          branding: false,
          promotion: false,
          resize: true,
          statusbar: false,
          paste_data_images: true,
          automatic_uploads: true,
          file_picker_types: 'image',
          images_upload_handler: (blobInfo: any) => {
            return new Promise((resolve, reject) => {
              const reader = new FileReader();
              reader.onload = () => resolve(reader.result as string);
              reader.onerror = () => reject('Failed to convert image');
              reader.readAsDataURL(blobInfo.blob());
            });
          },
          images_file_types: 'jpeg,jpg,png,gif,webp,svg',
          image_advtab: true,
          image_caption: true,
          image_description: true,
          setup: (editor: any) => {
            editor.on('init', () => {
              // Apply dark theme styles to the editor UI
              const editorContainer = editor.getContainer();
              if (editorContainer) {
                editorContainer.style.backgroundColor = '#18181b';
                editorContainer.style.border = '1px solid rgba(255, 255, 255, 0.1)';
                editorContainer.style.borderRadius = '0.75rem';
              }
            });
          }
        }}
      />
    </div>
  );
}
