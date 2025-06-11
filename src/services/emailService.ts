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
  async APICall(emailData: any, route: string, method:string = "POST"): Promise<any> {
    try {
      const response = await fetch(Config.BACKEND_API_URL + route, {
        method: method,
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

}

// Create a singleton instance
const emailService = new EmailService();
export default emailService;
