package com.example.entities;

import javax.persistence.*;
import java.time.LocalDate;

/**
 * User profile entity with additional user information
 */
@Entity
@Table(name = "user_profiles")
public class UserProfile {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id")
    private Long id;
    
    @Column(name = "phone_number", length = 20)
    private String phoneNumber;
    
    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;
    
    @Column(name = "bio", length = 1000)
    private String bio;
    
    @Column(name = "avatar_url", length = 255)
    private String avatarUrl;
    
    @Column(name = "country", length = 50)
    private String country;
    
    @Column(name = "city", length = 50)
    private String city;
    
    @Column(name = "postal_code", length = 10)
    private String postalCode;
    
    @Column(name = "newsletter_subscribed", nullable = false)
    private Boolean newsletterSubscribed = false;
    
    // One-to-one relationship with User
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;
    
    // Constructors
    public UserProfile() {}
    
    public UserProfile(User user) {
        this.user = user;
    }
    
    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    
    public String getPhoneNumber() { return phoneNumber; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    
    public LocalDate getDateOfBirth() { return dateOfBirth; }
    public void setDateOfBirth(LocalDate dateOfBirth) { this.dateOfBirth = dateOfBirth; }
    
    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }
    
    public String getAvatarUrl() { return avatarUrl; }
    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }
    
    public String getCountry() { return country; }
    public void setCountry(String country) { this.country = country; }
    
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    
    public String getPostalCode() { return postalCode; }
    public void setPostalCode(String postalCode) { this.postalCode = postalCode; }
    
    public Boolean getNewsletterSubscribed() { return newsletterSubscribed; }
    public void setNewsletterSubscribed(Boolean newsletterSubscribed) { this.newsletterSubscribed = newsletterSubscribed; }
    
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
}