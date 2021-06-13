
const serializeResponse = (ok, message, details) => {

    let jsonResp = {
        ok,
        message
    };

    if (!ok) {
        jsonResp.details = { err: details }
    } else {
        jsonResp.data = details
    }

    return jsonResp;
};

module.exports= {
  serializeResponse
}
