
const Contact = require("../Models/contact-model");

const contactForm = async (req, res) => {
    try {
      const response = req.body;
      console.log("Received data from frontend:", response);
      await Contact.create(response);
      return res.status(200).json({ msg: "Message sent successfully" });
    } catch (error) {
      console.error("Error processing form data:", error);
      return res.status(400).json({ msg: "Message not sent" });
    }
  };
module.exports = contactForm;