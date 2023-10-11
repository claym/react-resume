import emailJS from "@emailjs/browser";
import {FC, memo, useCallback, useEffect, useMemo, useState} from 'react';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactForm: FC = memo(() => {
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    useEffect(() => emailJS.init(userId!), [userId]);
    const defaultData = useMemo(
        () => ({
            name: '',
            email: '',
            message: '',
        }),
        [],
    );

    const [data, setData] = useState<FormData>(defaultData);
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false)

    const onChange = useCallback(
        <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
            const {name, value} = event.target;

            const fieldData: Partial<FormData> = {[name]: value};

            setData({...data, ...fieldData});
        },
        [data],
    );

    const handleSendMessage = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            try {
                setLoading(true);
                setDisabled(true);
                console.log("Sending email")
                console.log(data);
                console.log(userId, serviceId, templateId);
                await emailJS.send(serviceId!, templateId!, {
                    name: data.name,
                    email: data.email,
                    message: data.message
                });
                console.log("Email sent!")
                alert("Email sent!")
            } catch (e) {
                alert("Sorry, there was an error sending your email.")
            } finally {
                setLoading(false);
                setDisabled(false);

            }

        },
        [data, serviceId, templateId, userId],
    );

    const inputClasses =
        'bg-slate-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-sky-600 rounded-md placeholder:text-slate-400 placeholder:text-sm text-slate-200 text-sm';

    return (
        <form className="grid min-h-[320px] grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
            <input className={inputClasses} name="name" onChange={onChange} placeholder="Name" required type="text"/>
            <input
                autoComplete="email"
                className={inputClasses}
                name="email"
                onChange={onChange}
                placeholder="Email"
                required
                type="email"
            />
            <textarea
                className={inputClasses}
                maxLength={250}
                name="message"
                onChange={onChange}
                placeholder="Message"
                required
                rows={6}
            />
            <button
                aria-label="Submit contact form"
                className="w-max rounded-full border-2 border-sky-600 bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-slate-800"
                disabled={disabled}
                type="submit">
                { loading ? "Sending..." : "Send Message" }
            </button>
        </form>
    );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
