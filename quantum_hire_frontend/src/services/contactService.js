 // PUBLIC_INTERFACE
 /**
  * submitContact handles posting contact form data to a backend.
  * This is a stub implementation that simulates a network call.
  *
  * @param {{name: string, email: string, company: string, message: string}} payload
  * @returns {Promise<{ok: boolean, message: string}>}
  */
 export async function submitContact(payload) {
   // Basic client-side safeguard
   if (!payload || !payload.name || !payload.email || !payload.company || !payload.message) {
     return Promise.reject(new Error('Missing required fields.'));
   }

   // Simulate latency
   await new Promise((res) => setTimeout(res, 650));

   // Simulate a simple deterministic outcome:
   // If email includes "fail", throw to test error UI; otherwise succeed.
   if (String(payload.email).toLowerCase().includes('fail')) {
     const error = new Error('Simulated submission error.');
     error.code = 'SIMULATED_ERROR';
     throw error;
   }

   return { ok: true, message: 'Contact request submitted.' };
 }

 // PUBLIC_INTERFACE
 /**
  * validateContactPayload validates payload fields.
  * Returns an object with field errors keyed by field name.
  *
  * @param {{name?: string, email?: string, company?: string, message?: string}} payload
  * @returns {{name?: string, email?: string, company?: string, message?: string}}
  */
 export function validateContactPayload(payload) {
   const errors = {};
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (!payload.name || payload.name.trim().length < 2) {
     errors.name = 'Please enter your full name.';
   }
   if (!payload.email || !emailRegex.test(String(payload.email).trim())) {
     errors.email = 'Please enter a valid email address.';
   }
   if (!payload.company || payload.company.trim().length < 2) {
     errors.company = 'Please enter your company name.';
   }
   if (!payload.message || payload.message.trim().length < 10) {
     errors.message = 'Message should be at least 10 characters.';
   }
   return errors;
 }
