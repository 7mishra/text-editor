// import {
//     convertFromRaw,
//     convertToRaw,
//     DraftHandleValue,
//     Editor,
//     EditorState,
//     getDefaultKeyBinding,
//     Modifier,
//     RichUtils
// } from 'draft-js';
// import 'draft-js/dist/Draft.css';
// import {Box} from "@mui/material";
// import {useState} from "react";
//
// interface CodeEditorProps {
//     defaultValue?: string;
//     onChange: (value: string) => void;
// }
//
// const CodeEditor = ({defaultValue = '', onChange}: CodeEditorProps) => {
//     const [editorState, setEditorState] = useState(() => EditorState.createWithContent(convertFromRaw(JSON.parse(defaultValue))));
//
//     const onChangeHandler = (editorState: EditorState) => {
//         const contentState = editorState.getCurrentContent();
//         const rawContent = convertToRaw(contentState);
//         onChange(JSON.stringify(rawContent));
//         setEditorState(editorState);
//     };
//
//     const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
//         const newState = RichUtils.handleKeyCommand(editorState, command);
//         if (newState) {
//             onChangeHandler(newState);
//             return 'handled';
//         }
//         return 'not-handled';
//     };
//
//     const mapKeyToEditorCommand = (e: KeyboardEvent): string | null => {
//         if (e.keyCode === 9) {
//             const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
//             if (newEditorState !== editorState) {
//                 onChangeHandler(newEditorState);
//             }
//             return null;
//         }
//         return getDefaultKeyBinding(e);
//     };
//
//     const handleBeforeInput = (input: string, editorState: EditorState): EditorState | null => {
//         const currentSelection = editorState.getSelection();
//         const currentContent = editorState.getCurrentContent();
//         const currentBlock = currentContent.getBlockForKey(currentSelection.getStartKey());
//         const currentBlockType = currentBlock.getType();
//         const selectionOffset = currentSelection.getStartOffset();
//         const blockText = currentBlock.getText();
//
//         // Handle closing brackets
//         if (['{', '[', '(', '<'].includes(input)) {
//             const closingBracket = {
//                 '{': '}',
//                 '[': ']',
//                 '(': ')',
//                 '<': '>',
//             }[input];
//             const newContentState = Modifier.insertText(currentContent, currentSelection, input + closingBracket);
//             const newEditorState = EditorState.push(editorState, newContentState, 'insert-characters');
//             onChangeHandler(newEditorState);
//             return null;
//         } else if (['}', ']', ')', '>'].includes(input)) {
//             const matchingBracket = {
//                 '}': '{',
//                 ']': '[',
//                 ')': '(',
//                 '>': '<',
//             }[input];
//             if (blockText.charAt(selectionOffset) === matchingBracket) {
//                 const newSelection = currentSelection.merge({
//                     anchorOffset: selectionOffset + 1,
//                     focusOffset: selectionOffset + 1,
//                 });
//                 const newContentState = Modifier.removeRange(currentContent, newSelection, 'forward');
//                 const newEditorState = EditorState.push(editorState, newContentState, 'delete-content');
//                 return onChangeHandler(newEditorState);
//             }
//         }
//
//         return null;
//     };
//
//     return (
//         <Box
//             className="editor-container"
//             sx={{
//                 mt: 3,
//                 background: '#333333',
//                 minHeight: '60px',
//                 color: '#ffffff',
//                 padding: '10px',
//                 borderRadius: '22px',
//                 fontFamily: 'Sono, sans-serif',
//             }}
//         >
//             <Editor
//                 editorState={editorState}
//                 handleKeyCommand={handleKeyCommand}
//                 keyBindingFn={mapKeyToEditorCommand}
//                 onChange={onChangeHandler}
//                 handleBeforeInput={handleBeforeInput}
//             />
//         </Box>);
// }
export {};