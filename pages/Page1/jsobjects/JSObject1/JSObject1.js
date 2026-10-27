export default {
	Button1onClick () {
		storeValue('configID', '1098221816338655').then(() => {
			showAlert('Configuration ID saved successfully!', 'success');
			Api1.run().then(() => {
				Api2.run();
			});
		});
	}
}