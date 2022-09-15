import * as React from "react"
import MDEditor from '@uiw/react-md-editor';

const post = () => {
  return(
    <>
       <div className="container">
        <MDEditor value={value} onChange={setValue} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
      </div>
    </>
  )
}