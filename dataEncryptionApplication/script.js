
// Funkcja do zaszyfrowania tekstu

function encrypt() {

    const plaintext = document.getElementById('plaintext').value;
    const passphrase = prompt('Podaj hasło do szyfrowania:');
    if (passphrase) {
        const encryptedText = CryptoJS.AES.encrypt(plaintext, passphrase).toString();
        document.getElementById('ciphertext').value = encryptedText;
    }

}



// Funkcja do deszyfrowania tekstu
function decrypt() {
    const ciphertext = document.getElementById('ciphertext').value;
    const passphrase = prompt('Podaj hasło do deszyfrowania:');
    if (passphrase) {
        try {
            const decryptedBytes = CryptoJS.AES.decrypt(ciphertext, passphrase);

            const decryptedText = decryptedBytes.toString(CryptoJS.enc.Utf8);

            document.getElementById('decryptedText').value = decryptedText;
        } catch (error) {
            alert('Błąd podczas deszyfrowania. Upewnij się, że podałeś właściwe hasło.');
        }
    }
}
