package com.example.crmbbackend.controller;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/contacts")
public class ContactController {

    private List<Contact> contacts = new ArrayList<>();

    @GetMapping
    public List<Contact> getContacts() {
        return contacts;
    }

    @PostMapping
    public Contact addContact(@RequestBody Contact contact) {
        contacts.add(contact);
        return contact;
    }
}

class Contact {
    private String name;
    private String email;

    public Contact() {}

    public Contact(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Contact{" +
                "name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}
