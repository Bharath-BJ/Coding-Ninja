// React fragment can used as empty wrapper to make sure all tags are children of root(div is not a solution )
// 1. React.Fragment tag used as empty wrapper
// 2. <></> empty tag can also be used as an alternative
const heading= (<React.Fragment>
                <h1> Heading using React with JSX</h1>
                <p> Paragraph using React with JSX</p>
                <ul>
                    <li>Amazing</li>
                    <li>World</li>
                </ul>
                </React.Fragment>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);