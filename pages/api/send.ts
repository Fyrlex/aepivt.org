import process from 'process';
import type { NextApiHandler } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const handler: NextApiHandler = async (req, res) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['jmkg04d@gmail.com'],
    subject: 'Hello world',
    react: EmailTemplate({ firstName: 'John' }),
  });

  if (error) {
    res.status(400).json(error);

    return;
  }

  res.status(200).json(data);
};

export default handler;
