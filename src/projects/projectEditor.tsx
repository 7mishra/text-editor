import {useEffect, useRef} from 'react';
import CodeMirror from 'codemirror';
import 'codemirror/mode/clike/clike';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/display/autorefresh';
import 'codemirror/theme/material-darker.css';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import {Box} from "@mui/material";

function CppEditor() {
    const editorRef = useRef<HTMLTextAreaElement>(null);
    let editor: CodeMirror.Editor;

    useEffect(() => {
        if (editorRef.current) {
            editor = CodeMirror.fromTextArea(editorRef.current, {
                mode: 'text/x-c++src',
                lineNumbers: true,
                theme: 'material-darker',
                autocorrect: true,
                autocapitalize: true,
                autoCloseBrackets: true,
                matchBrackets: true,

            });
            editor.refresh();
            editor.on('change', handleChange);
        }
    }, []);


    function handleChange() {
        if (editor) {
            const content = editor.getValue();
            console.log(content);
        }
    }

    return (
        <Box sx={{mt: 1}}>
            <textarea ref={editorRef}/>
        </Box>
    );
}

export default CppEditor;
