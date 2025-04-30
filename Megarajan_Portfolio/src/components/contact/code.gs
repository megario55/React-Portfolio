// This function handles POST requests and adds data to your Google Sheet
function doPost(e) {
  try {
    // Replace this with your actual Google Sheet ID
    const sheet = SpreadsheetApp.openById("120J61ko1LARlUXu57G0EM8hYtw1vzjHnSFpO4LV34kQ").getSheetByName("Sheet1");

    // Parse the incoming JSON data
    const data = JSON.parse(e.postData.contents);

    // Add data to the sheet
    sheet.appendRow([
      data.name || '',
      data.phoneNo || '',
      data.email || '',
      data.subject || '',
      data.message || '',
      new Date()
    ]);

    // Return a success response with CORS headers
    return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      });
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'error', error: error.message }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders({
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type"
      });
  }
}

// This function handles the preflight OPTIONS request for CORS
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}


https://script.google.com/macros/s/AKfycbxUFGXbbs-1FOwI5cxnNpMSdWKcJYqvfZttpNMI89Cmv6wXwpGZOcSVAhTJkDnhHwOG/exec
