import { quatesHtml } from './utils';

export function CountText(text, num) {
    var new_text = ""
    if (text.length > num) {
        for (let i = 0; i < num; i++) {
            new_text = new_text + text[i]
        }

        new_text = new_text + "..."
    } else {
        var new_text = text
    }

    return <div dangerouslySetInnerHTML={quatesHtml(new_text)}></div>
}