export default {
    async Button1onClick() {
        await storeValue('configID', '1098221816338655');
        showAlert('Configuration ID saved successfully!', 'success');
        await Api1.run();
        await Api2.run();
        showAlert('Registration Successful!', 'success');
    }
}