let App=()=>(<>
        <h1> React Project</h1>
        <p> Skills used to make this project</p>
        <ol>
            <li>HTML</li>
            <li>javaScript</li>
            <li>CSS</li>
        </ol>
        {/* We can also pass component onto another component and render it as single component */}
        {<New/>}   
        </>);
    function New(){
        return (<>
            <h1>Another component</h1>
        </>)
    }

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);  // <><App/><New/></> if we want to render two components we can wrap it with react fragments