import React, {useState} from 'react';
import {convertToRaw, EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const DraftEditor = () => {
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const handleEditorChange = (newEditorState: EditorState) => {
        setEditorState(newEditorState);
        console.log(convertToRaw(newEditorState.getCurrentContent()));
    };

    return (
        <div className="draftEditor">
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
            />
        </div>
    );
};

export default DraftEditor;

