import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        console.log(body);
        const { name, email, phone, service, message } = body;
        
        // Check if environment variables are set
        const emailUser = process.env.EMAIL_USER;
        
        if (!emailUser) {
            console.error('Missing email credentials in environment variables');
            return NextResponse.json(
                { message: 'Server configuration error: Missing email credentials' }, 
                { status: 500 }
            );
        }
        
        resend.emails.send({
                from: emailUser,
                to: [emailUser],
                replyTo: email,
                subject: `New message from ${name}`,
                html: `
                <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; padding: 30px; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1); background-color: #f9f9f9;">
    
                    <img src="https://lirp.cdn-website.com/94ddd8b4/dms3rep/multi/opt/Firevolt_CenteredLogo%28CMYK-LBG%29-1920w-277w.png" alt="Firevolt Logo" style="width: 200px; margin-bottom: 20px;">
                    <h2 style="color: #333; border-bottom: 3px solid #007bff; padding-bottom: 12px; font-size: 24px; font-weight: bold;">New Contact Form Submission</h2>
                    <div style="margin: 20px 0;">
                        <p style="font-size: 16px; margin: 12px 0; color: #555;">
                            <strong style="color: #007bff;">From:</strong> ${name} <br>
                            <strong style="color: #007bff;">Email:</strong> 
                            <a href="mailto:${email}" style="color: #007bff;">${email}</a> <br>
                            <strong style="color: #007bff;">Phone:</strong> 
                            <a href="tel:${phone}" style="color: #007bff;">${phone}</a> <br>
                            <strong style="color: #007bff;">Service:</strong> ${service} <br>
                        </p>
                        <div style="background-color: #ffffff; border-left: 6px solid #007bff; padding: 20px; margin-top: 20px; border-radius: 5px;">
                            <h3 style="margin-top: 0; color: #333; font-size: 18px; font-weight: 600;">Message:</h3>
                            <p style="white-space: pre-line; color: #333; font-size: 16px; line-height: 1.5;">${message}</p>
                        </div>
                    </div>
                    <div style="margin-top: 30px; font-size: 14px; color: #888; border-top: 2px solid #f0f0f0; padding-top: 12px;">
                        <p>This message was sent from your website contact form.</p>
                    </div>
                </div>
    
                `,
                text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`, // Fallback plain text version
            });
        
        
        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
}   