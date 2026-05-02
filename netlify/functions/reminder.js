const emailjs = require("@emailjs/nodejs");

exports.handler = async () => {
  try {
    const lastDate = process.env.LAST_STUDY_DATE;
    const today = new Date().toDateString();

    if (lastDate !== today) {
      await emailjs.send(
        "service_cibwz21",
        "template_3t5dpra",
        {
          streak: "Your streak is at risk",
          course: "Continue your Data Analytics course",
          lesson: "Resume your next lesson"
        },
        {
          publicKey: "ccjTnOZdADUoXXC65"
        }
      );
    }

    return {
      statusCode: 200,
      body: "Reminder checked"
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    };
  }
};