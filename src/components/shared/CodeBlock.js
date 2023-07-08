import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CopyBlock, dracula } from "react-code-blocks";
import { TopBar } from "../misc/";
import "../styles.scss";
const CodeBlock = (sample) => {
    const [language, changeLanguage] = useState("java");
    const [languageDemo, changeDemo] = useState(sample["java"]);
    const [lineNumbers, toggleLineNumbers] = useState(true);
    return (
        <div className="container mx-auto p-4">
            <TopBar
                language={{
                    value: language,
                    onChange: e => {
                        changeDemo(sample[e.target.value]);
                        return changeLanguage(e.target.value);
                    },
                    options: Object.keys(sample).map(lang => (
                        <option key={lang} value={lang}>
                            {lang}
                        </option>
                    ))
                }}
                toggle={{
                    checked: lineNumbers,
                    onChange: e => toggleLineNumbers(!lineNumbers)
                }}
            />
            <div className="demo">
                <CopyBlock
                    language={language}
                    text={languageDemo}
                    showLineNumbers={lineNumbers}
                    theme={dracula}
                    wrapLines={true}
                    codeBlock
                />
            </div>
        </div>
    );
}
export default CodeBlock;