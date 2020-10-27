import React from "react";

const HeadingWidgetComponent = ({widget}) =>
    <div>
        <h3>Heading Widget</h3>
        <input/>
        <select>
            <option>Heading 1</option>
            <option>Heading 2</option>
            <option>Heading 3</option>
        </select>
        {JSON.stringify(widget)}
    </div>

export default HeadingWidgetComponent