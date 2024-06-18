const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path file.
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

    // Split the data into lines
    const lines = data.split('\n');

    // Remove empty lines
    const validLines = lines.filter((line) => line.trim() !== '');

    // Get the headers (first line)
    const headers = validLines[0].split(',');

    // Indexes for relevant fields
    const firstNameIndex = headers.indexOf('firstname');
    const fieldIndex = headers.indexOf('field');

    // Initialize the counts and lists
    const fieldCounts = {};
    const fieldLists = {};

    // Process each line (skip headers)
    for (let i = 1; i < validLines.length; i += 1) {
      const line = validLines[i];
      const values = line.split(',');

      // Check if the line is valid
      if (values.length === headers.length) {
        const firstName = values[firstNameIndex];
        const field = values[fieldIndex];

        // Initialize if not already done
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          fieldLists[field] = [];
        }

        // Increment counts and add to list
        fieldCounts[field] += 1;
        fieldLists[field].push(firstName);
      }
    }

    // Total number of students
    const totalStudents = validLines.length - 1; // Exclude header

    // Print the results
    console.log(`Number of students: ${totalStudents}`);
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(
          `Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldLists[field].join(', ')}`,
        );
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
