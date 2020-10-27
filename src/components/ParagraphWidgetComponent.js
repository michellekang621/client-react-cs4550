import React from "react";

const ParagraphWidgetComponent = ({widget}) =>
    <div>
        <h3>Paragraph Widget</h3>
        <textarea></textarea>
        {JSON.stringify(widget)}
    </div>

export default ParagraphWidgetComponent