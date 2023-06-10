let App=()=>(<>
        <h1> Heading using React with JSX</h1>
        <p> Paragraph using React with JSX</p>
        <ul>
            <li>Amazing</li>
            <li>World</li>
        </ul>
        </>);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);