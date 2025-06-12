import axios from 'axios';
import { Config } from '../../config'
/**
 * Interface for email data
 */
export interface EmailData {
  name: string;
  email: string;
  subject: string;
  phone?: string;
  program?: string;
  tenthPercentage?: string;
  tenthSchool?: string;
  twelfthPercentage?: string;
  twelfthSchool?: string;
  collegePercentage?: string;
  collegeName?: string;
  courseType?: string;
  experience?: string;
  motivation?: string;
  goals?: string;
  availability?: string;
  resume?: File;
  [key: string]: any; // Allow additional fields
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
      // Create FormData for file uploads
      const formData = new FormData();
      
      // Add all fields to FormData
      Object.keys(emailData).forEach(key => {
        if (emailData[key] !== undefined && emailData[key] !== null) {
          if (key === 'resume' && emailData[key] instanceof File) {
            formData.append('resume', emailData[key]);
          } else {
            formData.append(key, emailData[key].toString());
          }
        }
      });

      const response = await fetch(Config.BACKEND_API_URL + route, {
        method: method,
        body: formData // Send as FormData instead of JSON
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
