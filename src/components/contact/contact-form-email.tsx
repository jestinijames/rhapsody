interface ContactFormEmailProps {
  name: string;
  email: string;
  phone?: string;
  inquiry: boolean;
  instrument?: string;
  duration?: string;
  message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
  name,
  email,
  phone,
  inquiry,
  instrument,
  duration,
  message,
}) => (
  <div>
    <h1>Contact form submission</h1>
    <p>
      From <strong>{name}</strong> at {email} from {phone ?? ''}
    </p>

    {inquiry === true && (
      <>
        <p> Inquiry about instrument: {instrument}</p>
        <p> Inquiry about duration: {duration}</p>
      </>
    )}

    {inquiry === false && (
      <>
        <p>General Inquiry</p>
      </>
    )}

    <h2>Message:</h2>
    <p>{message}</p>
  </div>
);

export default ContactFormEmail;
