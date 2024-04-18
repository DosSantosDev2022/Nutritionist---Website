import React, { forwardRef } from 'react'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className="rounded px-3 py-4 text-GreyShades_200  focus-within:right-1 ring-GreenShades_700 border focus:border-GreenShades_700 border-GreenShades_300 bg-GreenShades_500"
      />
    )
  },
)

TextArea.displayName = 'textArea'

export default TextArea
