const express = require('express');
const app = express();

app.get('/api/checkPalindrome/:input', (req, res) => {
  const input = req.params.input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  const isPalindrome = input === input.split('').reverse().join('');

  if (isPalindrome) {
    res.json({ isPalindrome: true, message: 'The string is a palindrome.' });
  } else {
    res.json({ isPalindrome: false, message: 'The string is not a palindrome.' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
