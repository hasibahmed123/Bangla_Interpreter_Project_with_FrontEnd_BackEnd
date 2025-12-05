document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('codeInput');
    const compileBtn = document.getElementById('compileBtn');
    const loading = document.getElementById('loading');
    const output = document.getElementById('output');
    const error = document.getElementById('error');
    const outputText = document.getElementById('outputText');
    const errorText = document.getElementById('errorText');

    compileBtn.addEventListener('click', async () => {
        const code = codeInput.value.trim();

        if (!code) {
            showError('কোড লিখুন!');
            return;
        }

        // Show loading
        showLoading();

        try {
            const response = await fetch('/compile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });

            const data = await response.json();

            if (response.ok) {
                showOutput(data.result);
            } else {
                showError(data.error);
            }
        } catch (err) {
            showError('সার্ভারের সাথে যোগাযোগ করতে পারছি না।');
        }
    });

    function showLoading() {
        loading.classList.remove('hidden');
        output.classList.add('hidden');
        error.classList.add('hidden');
    }

    function showOutput(text) {
        loading.classList.add('hidden');
        output.classList.remove('hidden');
        error.classList.add('hidden');
        outputText.textContent = text;
    }

    function showError(text) {
        loading.classList.add('hidden');
        output.classList.add('hidden');
        error.classList.remove('hidden');
        errorText.textContent = text;
    }
});
