const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.static('public'));

// API endpoint to compile Bangla code
app.post('/compile', (req, res) => {
    const { code } = req.body;

    if (!code) {
        return res.status(400).json({ error: 'No code provided' });
    }

    // Path to the C++ executable
    const exePath = path.join(__dirname, 'bangla_compiler.exe');

    // Spawn the executable with the code as input
    const child = spawn(exePath, [], { stdio: ['pipe', 'pipe', 'pipe'] });

    let output = '';
    let errorOutput = '';

    // Write the code to stdin
    child.stdin.write(code + '\n');
    child.stdin.end();

    // Capture stdout
    child.stdout.on('data', (data) => {
        output += data.toString();
    });

    // Capture stderr
    child.stderr.on('data', (data) => {
        errorOutput += data.toString();
    });

    // Handle process close
    child.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).json({ error: errorOutput || 'Compilation failed' });
        }
        res.json({ result: output });
    });

    // Handle errors
    child.on('error', (err) => {
        res.status(500).json({ error: err.message });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
