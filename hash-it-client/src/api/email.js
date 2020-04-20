import emailjs from 'emailjs-com';

export function sendEmail(params) {
  return emailjs.send('pmail', 'template_tU5GgnU4', params, 'user_BSKFCJPQWGB1wGxRLqAv9')
}