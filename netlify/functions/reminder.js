const emailjs = require("@emailjs/nodejs");
const { getStore } = require("@netlify/blobs");

exports.handler = async () => {
  try {
    const store = getStore("learning-data");

    const lastDate = await store.get("lastStudyDate");

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