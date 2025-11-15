import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Trebuchet MS, sans-serif', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '60px' }}>Contact Us</h1>
            <form onSubmit={handleSubmit} style={{
                maxWidth: '500px',
                margin: '0 auto',
                textAlign: 'left',
                fontFamily: 'Verdana, sans-serif'
            }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />

                <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                    }}
                />

                <label style={{ display: 'block', marginBottom: '5px' }}>Message</label>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                        display: 'block',
                        width: '100%',
                        padding: '10px',
                        marginBottom: '40px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        minHeight: '100px',
                    }}
                />
                <button type="submit" style={{
                    display: 'block',
                    margin: '0 auto',
                    padding: '10px 20px',
                    backgroundColor: '#1a2a44',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontFamily: 'Verdana, sans-serif'
                }}>Send Message</button>
            </form>
        </div>
    );
}

export default Contact;