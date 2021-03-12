import style from "./MarkdownPreviewer.module.css"
import marked from "marked";
import {useRef, useState} from "react";
import NavButton from "../../NavButton/NavButton";

const MarkdownPreviewer = () => {
    let textareaRef = useRef();
    let [text, setText] = useState('# Welcome to my React Markdown Previewer!\n' +
        '\n' +
        '## This is a sub-heading...\n' +
        '### And here\'s some other cool stuff:\n' +
        '\n' +
        'Heres some code, `<div></div>`, between 2 backticks.\n' +
        '\n' +
        '```\n' +
        '// this is multi-line code:\n' +
        '\n' +
        'function anotherExample(firstLine, lastLine) {\n' +
        '  if (firstLine == \'```\' && lastLine == \'```\') {\n' +
        '    return multiLineCode;\n' +
        '  }\n' +
        '}\n' +
        '```\n' +
        '\n' +
        'You can also make text **bold**... whoa!\n' +
        'Or _italic_.\n' +
        'Or... wait for it... **_both!_**\n' +
        'And feel free to go crazy ~~crossing stuff out~~.\n' +
        '\n' +
        'There\'s also [links](https://www.freecodecamp.com), and\n' +
        '> Block Quotes!\n' +
        '\n' +
        'And if you want to get really crazy, even tables:\n' +
        '\n' +
        'Wild Header | Crazy Header | Another Header?\n' +
        '------------ | ------------- | -------------\n' +
        'Your content can | be here, and it | can be here....\n' +
        'And here. | Okay. | I think we get it.\n' +
        '\n' +
        '- And of course there are lists.\n' +
        '  - Some are bulleted.\n' +
        '     - With different indentation levels.\n' +
        '        - That look like this.\n' +
        '\n' +
        '\n' +
        '1. And there are numbererd lists too.\n' +
        '1. Use just 1s if you want!\n' +
        '1. And last but not least, let\'s not forget embedded images:\n' +
        '\n' +
        '![React Logo w/ Text](https://goo.gl/Umyytc)');
    const editor = (v) => {
        setText(v.current.value);
    }
    let htmlText = marked(text);

    return <section className={style.MarkdownPreviewer}>
        <div className={style.MarkdownPreviewer__goBack}>
            <NavButton text={"Back"} to={"/"}/>
        </div>
        <textarea className={style.MarkdownPreviewer__editor} onChange={() => editor(textareaRef)} id={"editor"} ref={textareaRef}>
            {text}
        </textarea>
        <div dangerouslySetInnerHTML={{ __html: htmlText }}
            className={style.MarkdownPreviewer__preview} id={"preview"}>
        </div>

    </section>
}
export default MarkdownPreviewer;