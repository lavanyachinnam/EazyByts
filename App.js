import React, { useEffect, useState } from 'react';
import './styles.css';

function App() {
    const [contacts, setContacts] = useState([]);
    const [contactName, setContactName] = useState('');
    const [contactEmail, setContactEmail] = useState('');

    // Fetch contacts from the backend on initial render
    useEffect(() => {
        fetch('http://localhost:8080/contacts')
            .then(response => response.json())
            .then(data => setContacts(data))
            .catch(error => console.error('Error fetching contacts:', error));
    }, []);

    // Handle form submission to add a new contact
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = { name: contactName, email: contactEmail };
        fetch('http://localhost:8080/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
            .then(response => response.json())
            .then(data => {
                setContacts([...contacts, data]);
                setContactName('');
                setContactEmail('');
            })
            .catch(error => console.error('Error adding contact:', error));
    };

    return (
        <div>
            <header>
                <h1>CRM System</h1>
                <nav>
                    <ul>
                        <li><a href="#contacts">Contacts</a></li>
                        <li><a href="#sales">Sales</a></li>
                        <li><a href="#tasks">Tasks</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="contacts">
                    <h2>Contact Management</h2>
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="contactName"
                            placeholder="Name"
                            value={contactName}
                            onChange={e => setContactName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            id="contactEmail"
                            placeholder="Email"
                            value={contactEmail}
                            onChange={e => setContactEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Add Contact</button>
                    </form>
                    <ul id="contactList">
                        {contacts.map((contact, index) => (
                            <li key={index}>
                                {contact.name} ({contact.email})
                            </li>
                        ))}
                    </ul>
                </section>
                <section id="sales">
                    <h2>Sales Pipeline</h2>
                    {/* Sales pipeline content here */}
                </section>
                <section id="tasks">
                    <h2>Task Management</h2>
                    {/* Task management content here */}
                </section>
                <section id="support">
                    <h2>Customer Support</h2>
                    {/* Support ticket content here */}
                </section>
            </main>
        </div>
    );
}

export default App;
