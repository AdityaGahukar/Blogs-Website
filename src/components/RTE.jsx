// Real Time Editor Component
// This component uses the TinyMCE editor to provide a rich text editing experience.
// It allows users to format text, add images, and create links.
import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
// Controller is used to connect controlled components (e.g., React-Select, TinyMCE) to React Hook Form.
// It provides value and onChange, ensuring React Hook Form tracks state correctly.
// Use Controller when dealing with third-party UI libraries that require controlled inputs.

export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={name}>
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control} // RHF takes control of the component (parent component passes control prop)
        render={({ field: { onChange } }) => (
          <Editor
            apiKey="hnfk7nda9i5q78tlf954piwzy2nkji9hubvv0dcqr8317vus"
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
