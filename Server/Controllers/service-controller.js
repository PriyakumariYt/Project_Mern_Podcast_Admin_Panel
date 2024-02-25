const Service=  require("../Models/service-models")
const services = async (req, res) => {
    try {
      const response = await Service.find();
  
      if (!response || response.length === 0) {
        // Check if the response is empty or null
        res.status(404).json({ msg: "No Service Found" });
        return;
      }
  
      return res.status(200).json({ msg: "Service Found", data: response });
    } catch (error) {
      console.error("Error processing form data:", error);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  };
  
  module.exports = services;
  