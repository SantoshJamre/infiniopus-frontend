import axios from 'axios';
import { Config } from '../../config'
/**
 * Interface for email data
 */
export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Service for sending emails
 */
class EmailService {
  /**
   * Send email using EmailJS service
   * @param emailData - The email data to send
   * @returns Promise with the response
   */
  async sendEmailWithEmailJS(emailData: EmailData): Promise<any> {
    try {
      const response = await fetch(Config.BACKEND_API_URL + '/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData)
      });

      const result = await response.json();

      if (result.success) {
        return { success: true, data: { message: result.message || `Message sent successfully! We\'ll get back to you soon.` } };

      } else {
        return { success: false, data: { message: result.message || `'Failed to send message'` } };

      }

    } catch (error) {
      console.error('Error sending email with EmailJS:', error);
      return { success: false, data: { message: `'Failed to send message'` } };
    }
  }

  /**
   * Send email using a custom backend API
   * @param emailData - The email data to send
   * @returns Promise with the response
   */
  async sendEmailWithBackend(emailData: EmailData): Promise<any> {
    try {
      // Replace with your backend API endpoint for sending emails
      const apiUrl = 'https://your-backend-api.com/api/send-email';

      const response = await axios.post(apiUrl, emailData);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error sending email with backend API:', error);
      return { success: false, error };
    }
  }

  /**
   * Send email using Formspree
   * @param emailData - The email data to send
   * @returns Promise with the response
   */
  async sendEmailWithFormspree(emailData: EmailData): Promise<any> {
    try {
      // Replace with your Formspree form ID
      const formspreeId = 'YOUR_FORMSPREE_FORM_ID';
      const formspreeUrl = `https://formspree.io/f/${formspreeId}`;

      const response = await axios.post(formspreeUrl, emailData);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error sending email with Formspree:', error);
      return { success: false, error };
    }
  }
}

// Create a singleton instance
const emailService = new EmailService();
export default emailService;
