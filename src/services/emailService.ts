import axios from 'axios';

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
      // EmailJS service configuration
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const userId = 'YOUR_EMAILJS_USER_ID'; // Replace with your EmailJS user ID

      const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: userId,
        template_params: {
          from_name: emailData.name,
          reply_to: emailData.email,
          subject: emailData.subject,
          message: emailData.message
        }
      };

      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error sending email with EmailJS:', error);
      return { success: false, error };
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
