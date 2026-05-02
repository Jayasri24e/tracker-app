const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  try {
    const { lastDate } = JSON.parse(event.body);

    const store = getStore("learning-data");

    await store.set("lastStudyDate", lastDate);

    return {
      statusCode: 200,
      body: "Saved successfully"
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: error.message
    };
  }
};