import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";
import PropTypes from "prop-types";

const QuoteEditor = ({ quote }) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <Editor
          apiKey="xmiwggplhmhw3tl5fiiiwuabcwep124xmmu8r3u9vsr9mtiq"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue={`<p> " ${quote.quoteText} " </p> <p>${quote.quoteAuthor}</p>`}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
        <button onClick={log} />
      </div>
    </div>
  );
};

QuoteEditor.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default QuoteEditor;
