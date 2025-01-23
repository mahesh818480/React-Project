
const express = require('express');
const cors = require('cors');
const app = express();
require("./DBconnection")
const {Form} = require('./models')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


// POST endpoint to handle form submission
app.post('/submit-form', async (req, res) => {
  try {
    const { fname, email, password, cnfPass } = req.body;

    // Define schema (add the Form model in your backend)
    const newForm = new Form({ fname, email, password, cnfPass });
    await newForm.save();
    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});