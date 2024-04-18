import React, { forwardRef } from 'react'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className="rounded px-3 py-4 text-GreyShades_500    focus:ring-2 focus:ring-GreenShades_700 border-GreenShades_500 bg-GreenShades_300 outline-none"
      />
    )
  },
)

TextArea.displayName = 'textArea'

export default TextArea
